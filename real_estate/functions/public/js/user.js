firebase.auth().onAuthStateChanged(user => {
  if (user) {
    // User is signed in.
    console.log("auth user", user);
    $("#profile").append(`<p>Name: ${user.displayName}</p>`);
    $("#profile").append(`<p>Email: ${user.email}</p>`);
  } else {
    // No user is signed in.
    console.log("Not login");
    window.location.href = "/user/login";
  }
});
