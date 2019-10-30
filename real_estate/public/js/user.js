afterAuthEvent = user => {
  console.log(user);
  if (user) {
    // User is signed in.
    $("#profile").append(`<p>Name: ${user.displayName}</p>`);
    $("#profile").append(`<p>Email: ${user.email}</p>`);
  } else {
    // No user is signed in.
    window.location.href = "/user/login";
  }
};
