import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyAy80JdXbkWXWe26FRj7BdsdVwB9ViuRko",
  authDomain: "rnetflix-a815f.firebaseapp.com",
  projectId: "rnetflix-a815f",
  storageBucket: "rnetflix-a815f.appspot.com",
  messagingSenderId: "902943383923",
  appId: "1:902943383923:web:4dd9635bd258a106846506",
  measurementId: "G-N1WJP60THH"
};

firebase.initializeApp(firebaseConfig);
const storage = firebase.storage();
export default storage;
