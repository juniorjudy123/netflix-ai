// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app"
import { getAnalytics } from "firebase/analytics"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
	apiKey: "AIzaSyDXwXhNr82BJqBpE-aIVw3RNxRh3Rv8-pE",
	authDomain: "netflix-ai-b32fd.firebaseapp.com",
	projectId: "netflix-ai-b32fd",
	storageBucket: "netflix-ai-b32fd.appspot.com",
	messagingSenderId: "286822268377",
	appId: "1:286822268377:web:d1740db880808aca952dc8",
	measurementId: "G-5TMVNY5BMK",
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
const analytics = getAnalytics(app)
