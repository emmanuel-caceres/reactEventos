import firebase from 'firebase/app';
import '@firebase/firestore';

const app = firebase.initializeApp({
        apiKey: "AIzaSyCw9ojJt-7FX089HbYImfy2mpmtjf6Y6G8",
        authDomain: "eventos-e21c3.firebaseapp.com",
        projectId: "eventos-e21c3",
        storageBucket: "eventos-e21c3.appspot.com",
        messagingSenderId: "700078556925",
        appId: "1:700078556925:web:556e26ca5259c3c8d42094"
})

export function getFirebase () {
    return app
}

export function getFirestore() {
    return firebase.firestore(app)
}