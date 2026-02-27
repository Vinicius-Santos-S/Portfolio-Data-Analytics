// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: import.meta.env.VITE_APP_FIREBASE_APIKEY,
  authDomain: import.meta.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  projectId: "portfolio-data-analytics-90031",
  storageBucket: import.meta.env.REACT_APP_FIREBASE_BUCKET,
  messagingSenderId: import.meta.env.REACT_APP_FIREBASE_MENSSAGING_SENDER_ID,
  appId: import.meta.env.REACT_APP_FIREBASE_APP_ID,
  measurementId: import.meta.env.REACT_APP_FIREBASE_MEASUREMENT_ID
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const projectCollection = collection(db, "projects")

const getData = async (type) => {
    if (type === "projects") {
        const querySnapshot = await getDocs(projectCollection)
        console.log("request")
        return querySnapshot.docs.map(doc => ({
            id: doc.id,
            ...doc.data().projectInfo
        }))
    } else {
        console.log("Nada")
    }
}



export default getData
