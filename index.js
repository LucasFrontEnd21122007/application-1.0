function login() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    var errorMessage = document.getElementById("error-message");

    // Simples validação de login
    if (username === "usuario" && password === "senha") {
        // Login bem-sucedido
        errorMessage.innerText = "";
        alert("Login bem-sucedido!");
    } else {
        // Login falhou
        errorMessage.innerText = "Credenciais inválidas. Tente novamente.";
    }
}