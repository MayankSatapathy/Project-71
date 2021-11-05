import firebase from 'firebase'
require("@firebase/firestore")

const firebaseConfig = {
  apiKey: "AIzaSyBR0df0WttdV9j-zDZdu_wsqnXA2DJFkAU",
  authDomain: "complaint-forum-a13e8.firebaseapp.com",
  projectId: "complaint-forum-a13e8",
  storageBucket: "complaint-forum-a13e8.appspot.com",
  messagingSenderId: "382915958000",
  appId: "1:382915958000:web:0c89d53c2c5bbf8aad5e35"
};

  firebase.initializeApp(firebaseConfig);

  export default firebase.firestore()