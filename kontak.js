// JavaScript akan diisi setelah// Handle submit dummy
document
  .getElementById("contact-form")
  .addEventListener("submit", function (e) {
    e.preventDefault();
    alert("🚧 Fitur kirim pesan belum diaktifkan. Ini hanya simulasi.");
  });

function kirimWhatsApp() {
  alert("🚧 Fitur WhatsApp belum diaktifkan. Ini hanya simulasi.");
}

// Tidak ada interaksi khusus di halaman ini.
// Jika ingin menambahkan fitur buka WA atau form, bisa tambahkan di sini.
console.log("Halaman kontak siap digunakan.");
