// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
	apiKey: "AIzaSyCHj_vlyJWWdzz82xuZ59wxsiz3XrmusZw",
	authDomain: "mflixgpt.firebaseapp.com",
	projectId: "mflixgpt",
	storageBucket: "mflixgpt.appspot.com",
	messagingSenderId: "390158829079",
	appId: "1:390158829079:web:d9b7948f5f44ffcc24be52",
	measurementId: "G-ZLDN8RC45K"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth(app)