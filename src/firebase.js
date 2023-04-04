
import firebase from 'firebase/compat/app';
import { getStorage } from "firebase/storage";

const firebaseConfig = {

    apiKey: 'AIzaSyDI_NtoQu686d42IiM9m31M1QQTXdF0o58',
    authDomain: 'antoinelameschportfolio.web.app',
    projectId: "antoinelameschportfolio",
    storageBucket: "antoinelameschportfolio.appspot.com",

  
};

const app = firebase.initializeApp(firebaseConfig);
// Initialize Cloud Storage and get a reference to the service
const storage = getStorage(app);

export const auth = firebase.auth();
