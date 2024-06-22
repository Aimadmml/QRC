//importScripts('https://www.gstatic.com/firebasejs/10.12.2/firebase-app-compat.js');
//importScripts('https://www.gstatic.com/firebasejs/10.12.2/firebase-messaging-compat.js');

importScripts('firebase-app-compat.js');
importScripts('firebase-messaging-compat.js');

firebase.initializeApp({
  apiKey: "AIzaSyBqbaga6lTyPQwyfm48fPQ_Wp7Fwdonz3Y",
  authDomain: "mmlalert.firebaseapp.com",
  projectId: "mmlalert",
  storageBucket: "mmlalert.appspot.com",
  messagingSenderId: "64365207093",
  appId: "1:64365207093:web:533bb9adb6bf15eaf41b7c",
  measurementId: "G-0S9SQ85JKM"
});

const messaging = firebase.messaging();

messaging.onBackgroundMessage(function(payload) {
  console.log('Received background message ', payload);

  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
    icon: '/firebase-logo.png'
  };

  self.registration.showNotification(notificationTitle, notificationOptions);
});
