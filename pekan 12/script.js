function login() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    if (username === "namaAnda" && password === "pelajar71") {
        window.location.href = "sukses.html"; // Mengarahkan ke halaman sukses.html jika login berhasil
    } else {
        alert("Login gagal. Silakan coba lagi."); // Menampilkan pesan jika login gagal
    }
}

