import * as firebase from "firebase";
import { firebaseConfig } from "../config/keys";

firebase.initializeApp(firebaseConfig);
const databaseRef = firebase.database().ref();

export const profileRef = databaseRef.child("user");