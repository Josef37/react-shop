import { firestore } from "./firebase.utils";
import { COLLECTIONS, ITEMS } from "../redux/shop/shop.data";

const uploadCollection = (colRef, data) => {
  const batch = firestore.batch();

  data.forEach((element) => {
    const docRef = colRef.doc();
    batch.set(docRef, element);
  });

  batch.commit();
};

const uploadAsArray = (collectionPath, dataObj) => {
  const collectionRef = firestore.collection(collectionPath);
  const data = Object.values(dataObj);
  uploadCollection(collectionRef, data);
};

export const uploadShopData = () => {
  uploadAsArray("collections", COLLECTIONS);
  uploadAsArray("items", ITEMS);
};
