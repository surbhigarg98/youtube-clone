import firebase from 'firebase'

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseapp = firebase.initializeApp( {
    apiKey: "AIzaSyAkWGUYZG6y7tGimHVHftE94g1im9F8Jd0",
    authDomain: "fir-bae7e.firebaseapp.com",
    databaseURL: "https://fir-bae7e.firebaseio.com",
    projectId: "fir-bae7e",
    storageBucket: "fir-bae7e.appspot.com",
    messagingSenderId: "445804219498",
    appId: "1:445804219498:web:f62e12627d40d6b9634e13",
    measurementId: "G-YEYRL8CVD7"
  });

  const db = firebaseapp.firestore()

  export {db};