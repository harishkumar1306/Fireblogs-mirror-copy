import firebase from 'firebase/app';
import 'firebase/firestore';

var firebaseConfig = {
  apiKey: 'AIzaSyBAoUXPl-0DO8ESuBQW6X4An3_O0ZURAB0',
  authDomain: 'fireblogs-2d3cd.firebaseapp.com',
  projectId: 'fireblogs-2d3cd',
  storageBucket: 'fireblogs-2d3cd.appspot.com',
  messagingSenderId: '566989893581',
  appId: '1:566989893581:web:0e97b940c1c69da1bc1e84',
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { timestamp };

export default firebaseApp.firestore();
