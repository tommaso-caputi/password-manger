document.addEventListener('DOMContentLoaded', function () {
    const db = firebase.firestore();
    var user;
});


//handle login 
document.getElementById('signInBtn').onclick = () => {
    var provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth()
        .signInWithPopup(provider)
        .then((result) => {
            var tempUser = result.user;

            user = tempUser.multiFactor.user
            console.log(user)

            setLogged(true)


        }).catch((error) => {
            var errorCode = error.code;
        });
}
document.getElementById('signOutBtn').onclick = () => {
    setLogged(false)
}
const setLogged = (bool) => {
    document.getElementById('whenSignedOut').hidden = bool;
    document.getElementById('whenSignedIn').hidden = !bool;
}
//----------------------------------------------------------------
