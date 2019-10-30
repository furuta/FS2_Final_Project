afterAuthEvent = user => {
  console.log(user);
  if (user) {
    // User is signed in.
    window.location.href = "/user";
  } else {
    // User need signin.
    signin();
  }
};

function signin() {
  // Initialize the FirebaseUI Widget using Firebase.
  var ui = new firebaseui.auth.AuthUI(firebase.auth());

  var uiConfig = {
    callbacks: {
      signInSuccess: function(currentUser, credential, redirectUrl) {
        // Callback when success
        return true; // Auto redirect?
      },
      uiShown: function() {
        // FirebaseUIウィジェット描画完了時のコールバック関数
        // 読込中で表示しているローダー要素を消す
        document.getElementById("loader").style.display = "none";
      }
    },
    signInFlow: "redirect",
    signInSuccessUrl: "/user",
    signInOptions: [
      // サポートするプロバイダ(メールアドレス)を指定
      firebase.auth.EmailAuthProvider.PROVIDER_ID
    ]
    // Terms of service url.
    // tosUrl: "<your-tos-url>"
  };

  ui.start("#firebaseui-auth-container", uiConfig);
}
