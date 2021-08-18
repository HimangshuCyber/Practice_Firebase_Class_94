var firebaseConfig = {
    apiKey: "AIzaSyBpx-cPs2UFtVGipv3Qaa5mqJc5cHmP_-w",
    authDomain: "practice-8518d.firebaseapp.com",
    databaseURL: "https://practice-8518d-default-rtdb.firebaseio.com",
    projectId: "practice-8518d",
    storageBucket: "practice-8518d.appspot.com",
    messagingSenderId: "694381248915",
    appId: "1:694381248915:web:b75b76237685b6b0e16866"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

function addUser (){
    user_name = document.getElementById("userName").value;
    firebase.database().ref("/").child(user_name).update({
        purpose: "adding user",
        no_purpose: "die",
        purpose_in_life: "become god"
    });
}