let currentPage = 0;
const pages = document.querySelectorAll('.page');

function showPage(index) {
    pages.forEach((page, i) => {
        if (i === index) {
            page.classList.add('show');
            setTimeout(() => {
                page.style.opacity = 1; // Menunjukkan halaman
            }, 50);
        } else {
            page.style.opacity = 0; // Menyembunyikan halaman
            setTimeout(() => {
                page.classList.remove('show');
            }, 500); // Menghapus class setelah efek opacity
        }
    });
}

function nextPage() {
    currentPage++;
    if (currentPage >= pages.length) {
        currentPage = pages.length - 1; // Tidak bisa lebih dari halaman terakhir
    }
    showPage(currentPage);
}

function prevPage() {
    currentPage--;
    if (currentPage < 0) {
        currentPage = 0; // Tidak bisa kurang dari halaman pertama
    }
    showPage(currentPage);
}

// Tampilkan halaman pertama saat memuat
showPage(currentPage);

document.querySelector('.nav-button').addEventListener('click', () => {
    const audio = document.getElementById('background-audio');
    audio.play().catch(error => {
        console.error('Audio playback was prevented:', error);
    });
});

