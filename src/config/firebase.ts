import firebase from "firebase/app";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAlnEQqtB1Fz_KkK3RFziKarBy2qyNUUGs",
  authDomain: "covidinho-892bd.firebaseapp.com",
  projectId: "covidinho-892bd",
  storageBucket: "covidinho-892bd.appspot.com",
  messagingSenderId: "422531087376",
  appId: "1:422531087376:web:515f31eecfad907c959e95",
  measurementId: "G-SVB6HMD83T",
};

const app = firebase.initializeApp(firebaseConfig);

export const Providers = {
  google: new firebase.auth.GoogleAuthProvider(),
  github: new firebase.auth.GithubAuthProvider(),
};

export const auth = app.auth();

export default app;
