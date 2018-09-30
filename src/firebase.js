
import firebase from 'firebase/app';
import 'firebase/database';

const firebaseApp = firebase.initializeApp({
    apiKey: 'AIzaSyAss6_BZJ3m7I-dbLCG4aD583UpaqPRMig',
    authDomain: 'ubuy2go.firebaseapp.com',
    databaseURL: 'https://ubuy2go.firebaseio.com',
    projectId: 'ubuy2go',
    storageBucket: 'ubuy2go.appspot.com',
    messagingSenderId: '713386445493',
});

const database = firebaseApp.database();
export default firebaseApp;
export { database };
