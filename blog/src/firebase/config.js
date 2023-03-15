// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAuBegRsb_-vAAEsPdbZpEuyU8E6HZnE-w",
  authDomain: "team-5-blog.firebaseapp.com",
  projectId: "team-5-blog",
  storageBucket: "team-5-blog.appspot.com",
  messagingSenderId: "926595757109",
  appId: "1:926595757109:web:6600b5111703456dd66d7c",
  measurementId: "G-5CYNEFND6R"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const storage = getStorage(app);
// const analytics = getAnalytics(app);

export default storage;