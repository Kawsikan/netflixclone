import Firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

//We need to seed the database

// we need a config
const config = {};
const firebase = Firebase.initializeApp(config);

export { firebase };

