
    document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault();

    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    if (username === "mari" && password === "123") {
        var url = "admin.html?usuario=" + username;
        window.location.href = url; }
    else {
        alert("Usuario incorrecto");
    }
})

function mostrarSeccion() {
  var tipo = document.getElementById("tipo").value;

  document.getElementById("seccion-dinero").style.display = (tipo === "dinero") ? "block" : "none";
  document.getElementById("seccion-trabajo").style.display = (tipo === "trabajo") ? "block" : "none";
  document.getElementById("seccion-difusion").style.display = (tipo === "difusion") ? "block" : "none";
}

