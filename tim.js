// JavaScript akan diisi setelah
const teamMembers = [
  {
    name: "Pandu Wijaya",
    position: "Founder & CEO",
    image: "https://images.unsplash.com/photo-1644424235476-295f24d503d9",
    description:
      "Pendiri Toko Pandu dengan visi menyediakan produk segar berkualitas untuk keluarga Indonesia.",
    email: "pandu@tokopandu.com",
    phone: "+62 812-3456-7890",
    achievements: ["15+ tahun pengalaman retail", "Entrepreneur Terbaik 2023"],
  },
  {
    name: "Sari Indrawati",
    position: "Manajer Operasional",
    image: "https://images.unsplash.com/photo-1644424235476-295f24d503d9",
    description:
      "Bertanggung jawab atas operasional harian dan memastikan kualitas produk tetap terjaga.",
    email: "sari@tokopandu.com",
    phone: "+62 813-4567-8901",
    achievements: [
      "10+ tahun di bidang retail",
      "Sertifikat Manajemen Kualitas",
    ],
  },
  {
    name: "Budi Santoso",
    position: "Kepala Bagian Pembelian",
    image: "https://images.unsplash.com/photo-1644424235476-295f24d503d9",
    description:
      "Mengelola hubungan dengan supplier dan memastikan pasokan produk segar setiap hari.",
    email: "budi@tokopandu.com",
    phone: "+62 814-5678-9012",
    achievements: ["Jaringan supplier terluas", "Ahli dalam seleksi produk"],
  },
  {
    name: "Dewi Lestari",
    position: "Manajer Pelayanan Pelanggan",
    image: "https://images.unsplash.com/photo-1644424235476-295f24d503d9",
    description:
      "Memastikan setiap pelanggan mendapatkan pelayanan terbaik dan pengalaman berbelanja menyenangkan.",
    email: "dewi@tokopandu.com",
    phone: "+62 815-6789-0123",
    achievements: ["Customer Satisfaction 98%", "Pelatihan Service Excellence"],
  },
  {
    name: "Agus Prasetyo",
    position: "Kepala Bagian Logistik",
    image: "https://images.unsplash.com/photo-1644424235476-295f24d503d9",
    description:
      "Mengelola distribusi dan pengiriman produk untuk menjaga kesegaran.",
    email: "agus@tokopandu.com",
    phone: "+62 816-7890-1234",
    achievements: ["Sistem logistik efisien", "Zero waste management"],
  },
  {
    name: "Maya Sari",
    position: "Ahli Nutrisi",
    image: "https://images.unsplash.com/photo-1644424235476-295f24d503d9",
    description:
      "Membantu pelanggan memilih produk sesuai kebutuhan kesehatan.",
    email: "maya@tokopandu.com",
    phone: "+62 817-8901-2345",
    achievements: ["S1 Gizi & Nutrisi", "Konsultan bersertifikat"],
  },
];

function renderTeam() {
  const container = document.querySelector(".team-grid");
  teamMembers.forEach((member) => {
    const div = document.createElement("div");
    div.className = "team-card";
    div.innerHTML = `
      <img src="${member.image}" alt="${member.name}">
      <div class="card-content">
        <h3>${member.name}</h3>
        <p><em>${member.position}</em></p>
        <p>${member.description}</p>
        <div class="contact-info">
          📧 ${member.email}<br>
          📞 ${member.phone}
        </div>
        <ul>
          ${member.achievements.map((a) => `<li>• ${a}</li>`).join("")}
        </ul>
      </div>
    `;
    container.appendChild(div);
  });
}

renderTeam();
