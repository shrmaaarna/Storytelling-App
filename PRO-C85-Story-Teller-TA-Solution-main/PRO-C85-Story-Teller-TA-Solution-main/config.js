import { initializeApp } from 'firebase/app';
import { getDatabase } from 'firebase/database';

const firebaseConfig = {
	apiKey: "AIzaSyAuxpuGcdlvrbdKFX81QEUU1hX0XmbMRiA",
	authDomain: "storytelling-app-3c00d.firebaseapp.com",
	projectId: "storytelling-app-3c00d",
	storageBucket: "storytelling-app-3c00d.appspot.com",
	messagingSenderId: "746168826958",
	appId: "1:746168826958:web:33253eccedb632d6f6171f"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

export default db;
