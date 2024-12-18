// Ambil elemen dari form
const commentForm = document.getElementById("commentForm");
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const commentBox = document.getElementById("commentBox");
const commentsList = document.getElementById("commentsList");
const successMessage = document.getElementById("successMessage");

// Fungsi untuk menambah komen
function addComment(event) {
    event.preventDefault();

    // Ambil nilai input
    const name = nameInput.value.trim();
    const email = emailInput.value.trim();
    const comment = commentBox.value.trim();

    // Validasi input kosong
    if (name === "" || email === "" || comment === "") {
        alert("Sila isi semua maklumat sebelum menghantar komen.");
        return;
    }

    // Tambahkan komen ke dalam list
    const newComment = document.createElement("div");
    newComment.classList.add("comment");
    newComment.innerHTML = `
        <strong>${name}</strong> (${email})<br>
        ${comment}
    `;
    commentsList.appendChild(newComment);

    // Tampilkan pesan sukses
    successMessage.style.display = "block";

    // Hapus input form setelah kirim
    nameInput.value = "";
    emailInput.value = "";
    commentBox.value = "";

    // Sembunyikan pesan sukses setelah 3 detik
    setTimeout(() => {
        successMessage.style.display = "none";
    }, 3000);
}

// Event listener untuk form submit
commentForm.addEventListener("submit", addComment);
