"use strict";

// My web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyAeuydT97vA6hiuBDpUT-_TJnY494rQiO4",
  authDomain: "fs2-final-project.firebaseapp.com",
  databaseURL: "https://fs2-final-project.firebaseio.com",
  projectId: "fs2-final-project",
  storageBucket: "fs2-final-project.appspot.com",
  messagingSenderId: "799444792909",
  appId: "1:799444792909:web:447425972874394ccd0e04"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

let afterAuthEvent = user => {
  console.log(user);
};

function signOut() {
  firebase.auth().onAuthStateChanged(user => {
    firebase
      .auth()
      .signOut()
      .then(() => {
        console.log("Complete signout.");
        window.location.href = "/";
      })
      .catch(error => {
        console.log(`Signout error (${error})`);
      });
  });
}

$(() => {
  firebase.auth().onAuthStateChanged(user => {
    console.log(afterAuthEvent);
    if (user) {
      $("#right-links").html(
        '<li><a href="/user">User profile</a></li><li><a href="" onclick="signOut()">logout</a></li>'
      );
    }
    afterAuthEvent(user);
  });
});
