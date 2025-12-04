import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import Logger from "./src/utils/log";

const context = "Firebase Config";
const isProd = String(import.meta.env.VITE_PROD_MODE).toLowerCase() === "true";

const prodConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: import.meta.env.VITE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_APP_ID,
};

const devConfig = {
  apiKey: import.meta.env.VITE_DEV_API_KEY,
  authDomain: import.meta.env.VITE_DEV_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_DEV_PROJECT_ID,
  storageBucket: import.meta.env.VITE_DEV_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_DEV_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_DEV_APP_ID,
};

if(!isProd) {
  Logger.log(context, "Firebase is connected to dev environment");
}

const firebaseConfig = ((isProd)? prodConfig : devConfig);

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
