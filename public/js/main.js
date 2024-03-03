document.addEventListener('DOMContentLoaded', function () {
});

document.getElementById('signInBtn').onclick = () => {
    var provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth()
        .signInWithPopup(provider)
        .then((result) => {
            var user = result.user;
            console.log(user)

            setLogged(true)

        }).catch((error) => {
            var errorCode = error.code;
        });
}



const setLogged = (bool) => {
    document.getElementById('whenSignedOut').hidden = bool;
    document.getElementById('whenSignedIn').hidden = !bool;
}