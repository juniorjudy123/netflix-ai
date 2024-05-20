// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
	apiKey: "AIzaSyBbvF5tcpvC5r5z9mvh5VU0Xwj1o2N5FRg",
	authDomain: "mflix-ai.firebaseapp.com",
	projectId: "mflix-ai",
	storageBucket: "mflix-ai.appspot.com",
	messagingSenderId: "133002445288",
	appId: "1:133002445288:web:c0c81f0e89c1e658b8a45d",
	measurementId: "G-MGEQSMM10Q"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth(app);