import firebase from 'firebase';

const firebaseConfig = {
  apiKey: 'AIzaSyA4xQmfnGvnQOe44j-4swQhh3jc4TXAp5U',
  authDomain: 'crud-blog-14.firebaseapp.com',
  projectId: 'crud-blog-14',
  storageBucket: 'crud-blog-14.appspot.com',
  messagingSenderId: '456160707467',
  appId: '1:456160707467:web:37c6461794c26f30eb658e',
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;
