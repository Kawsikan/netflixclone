import Firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
//import { seedDatabase } from '../seed';

//We need to seed the database

// we need a config
const config = {
    apiKey: "AIzaSyBN3yvLy_nP4h8rMT8ng3VrlQacAWG5Dw0",
    authDomain: "netflix-1394c.firebaseapp.com",
    databaseURL: "https://netflix-1394c.firebaseio.com",
    projectId: "netflix-1394c",
    storageBucket: "netflix-1394c.appspot.com",
    messagingSenderId: "115472145372",
    appId: "1:115472145372:web:d3c2167ec82c7abaa1cd19"
};

const firebase = Firebase.initializeApp(config);

//seedDatabase(firebase );

export { firebase };

