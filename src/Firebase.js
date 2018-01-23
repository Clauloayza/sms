import firebase from 'firebase';

//Key
var config = {
    apiKey: "AIzaSyAcD5vdB4osSUmIlzfS6sJ62dNvp9ZzQzw",
    authDomain: "test-drive-management.firebaseapp.com",
    databaseURL: "https://test-drive-management.firebaseio.com",
    projectId: "test-drive-management",
    storageBucket: "test-drive-management.appspot.com",
    messagingSenderId: "405397605692"
  };
  firebase.initializeApp(config);


export default firebase;

export const database = firebase.database();
export const auth = firebase.auth();
export const storage = firebase.storage();
export const googleAuthProvider = new firebase.auth.GoogleAuthProvider();