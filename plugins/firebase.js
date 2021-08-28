import { initializeApp } from "firebase/app";


const firebaseConfig = (
    {
      apiKey: "AIzaSyBbNJbGSv3wBuQG5Od4-OtFFqlba6jNmuc",
      authDomain: "fir-pj-9de06.firebaseapp.com",
      projectId: "fir-pj-9de06",
      storageBucket: "fir-pj-9de06.appspot.com",
      messagingSenderId: "111001018660",
      appId: "1:111001018660:web:84f839fb65aabce0f453b1",
      measurementId: "G-HS0L0QRMQH"
    }
  )

const firebase = initializeApp(firebaseConfig);
export default firebase
