import { put, all, call, takeLatest } from "redux-saga/effects";
import { UserActionTypes } from "./user.types";
import {
  signInWithGoogle,
  createUserProfileDocument,
  auth,
  getCurrentUser,
} from "../../firebase/firebase.utils";
import {
  signInSuccess,
  signInFailure,
  signOutSuccess,
  signOutFailure,
} from "./user.actions";

function* signInUserFromSnapshot(user) {
  const userRef = yield call(createUserProfileDocument, user);
  const userSnapshot = yield userRef.get();
  yield put(signInSuccess({ id: userSnapshot.id, ...userSnapshot.data() }));
}

function* googleSignIn() {
  try {
    const { user } = yield call(signInWithGoogle);
    yield signInUserFromSnapshot(user);
  } catch (error) {
    yield put(signInFailure(error));
  }
}

function* emailSignIn({ payload: { email, password } }) {
  try {
    const { user } = yield auth.signInWithEmailAndPassword(email, password);
    yield signInUserFromSnapshot(user);
  } catch (error) {
    yield put(signInFailure(error));
  }
}

export function* isUserAuthenticated() {
  try {
    const userAuth = yield getCurrentUser();
    if (!userAuth) return;
    yield signInUserFromSnapshot(userAuth);
  } catch (error) {
    yield put(signInFailure(error));
  }
}

function* signOut() {
  try {
    yield auth.signOut();
    yield put(signOutSuccess());
  } catch (error) {
    yield put(signOutFailure(error));
  }
}

function* onGoogleSignInStart() {
  yield takeLatest(UserActionTypes.GOOGLE_SIGN_IN_START, googleSignIn);
}

function* onEmailSignInStart() {
  yield takeLatest(UserActionTypes.EMAIL_SIGN_IN_START, emailSignIn);
}

function* onCheckUserSession() {
  yield takeLatest(UserActionTypes.CHECK_USER_SESSION, isUserAuthenticated);
}

function* onSignOutStart() {
  yield takeLatest(UserActionTypes.SIGN_OUT_START, signOut);
}

export default function* userSaga() {
  yield all([
    call(onGoogleSignInStart),
    call(onEmailSignInStart),
    call(onCheckUserSession),
    call(onSignOutStart),
  ]);
}
