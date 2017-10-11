window.location.href=index.html;

function Login() {
    var email = document.getElementById('email');
    var pass = document.getElementById('password');
    var data = 'email=' + encodeURIComponent(email) + '&password=' + encodeURIComponent(password);
    xhr = new XMLHttpRequest();
    xhr.onreadystatechange = gestionarRespuestaLogin;
    xhr.open('POST', 'http://localhost:3000/login', true);
    xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    xhr.send(data);
}

function gestionarRespuestaLogin() {
    var div = document.getElementById('tbody');
    if (xhr.readyState == 4) {
        if (xhr.status == 200) {
            var respuesta = xhr.responseText;
        }
    } else {
        div.innerHTML = "Error: " + xhr.status + " " + xhr.statusText;
    }
}