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
  signUpFailure,
  signUpSuccess,
} from "./user.actions";

function* signInUserFromSnapshot(user) {
  const userRef = yield call(createUserProfileDocument, user);
  const userSnapshot = yield call([userRef, userRef.get]);
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
    const { user } = yield call(
      [auth, auth.signInWithEmailAndPassword],
      email,
      password
    );
    yield signInUserFromSnapshot(user);
  } catch (error) {
    yield put(signInFailure(error));
  }
}

export function* isUserAuthenticated() {
  try {
    const userAuth = yield call(getCurrentUser);
    if (!userAuth) return;
    yield signInUserFromSnapshot(userAuth);
  } catch (error) {
    yield put(signInFailure(error));
  }
}

function* signOut() {
  try {
    yield call([auth, auth.signOut]);
    yield put(signOutSuccess());
  } catch (error) {
    yield put(signOutFailure(error));
  }
}

function* signUp({ payload: { email, password, displayName } }) {
  try {
    const { user } = yield call(
      [auth, auth.createUserWithEmailAndPassword],
      email,
      password
    );
    yield call([user, user.updateProfile], { displayName });
    yield put(signUpSuccess(user));
  } catch (error) {
    yield put(signUpFailure(error));
  }
}

function* signInAfterSignUp({ payload: user }) {
  yield signInUserFromSnapshot(user);
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

function* onSignUpStart() {
  yield takeLatest(UserActionTypes.SIGN_UP_START, signUp);
}

function* onSignUpSuccess() {
  yield takeLatest(UserActionTypes.SIGN_UP_SUCCESS, signInAfterSignUp);
}

export default function* userSaga() {
  yield all([
    call(onGoogleSignInStart),
    call(onEmailSignInStart),
    call(onCheckUserSession),
    call(onSignOutStart),
    call(onSignUpStart),
    call(onSignUpSuccess),
  ]);
}
