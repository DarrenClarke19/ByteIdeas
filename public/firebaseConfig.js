const firebaseConfig = {
    apiKey: "AIzaSyDs3xorPq2LN8bxzFqcJEPkqp5U_orkJfM",
    authDomain: "info1601app.firebaseapp.com",
    projectId: "info1601app",
    storageBucket: "info1601app.appspot.com",
    messagingSenderId: "423179461755",
    appId: "1:423179461755:web:370e8da22d8f62a5196ede",
    measurementId: "G-S71LLT2F9V"
  };
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
  export default firebaseConfig;