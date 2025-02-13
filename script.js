// Contoh interaktivitas sederhana: Alert saat halaman dimuat
window.onload = function() {
    alert("Selamat datang di Blog Biografi Sekolah!");
};

// Contoh interaktivitas lainnya: Menambahkan efek hover pada gambar
const images = document.querySelectorAll('.gallery img');
images.forEach(image => {
    image.addEventListener('mouseover', () => {
        image.style.transform = 'scale(1.1)';
        image.style.transition = 'transform 0.3s';
    });
    image.addEventListener('mouseout', () => {
        image.style.transform = 'scale(1)';
    });
});

document.addEventListener('DOMContentLoaded', (event) => {
    var buttons = document.querySelectorAll('.nav-btn');
    var popups = document.querySelectorAll('.popup');
    var spans = document.getElementsByClassName("close");

    buttons.forEach(button => {
        button.onclick = function() {
            var targetId = this.getAttribute('data-target');
            var popupId = this.getAttribute('data-popup');
            if (targetId) {
                document.querySelector(targetId).scrollIntoView({ behavior: 'smooth' });
            } else if (popupId) {
                document.getElementById(popupId).style.display = "block";
            }
        }
    });

    Array.from(spans).forEach(span => {
        span.onclick = function() {
            this.parentElement.parentElement.style.display = "none";
        }
    });

    window.onclick = function(event) {
        if (event.target.classList.contains('popup')) {
            event.target.style.display = "none";
        }
    }
});

document.addEventListener('DOMContentLoaded', (event) => {
    var popup = document.getElementById("popup");
    var btn = document.getElementById("popupBtn");
    var span = document.getElementsByClassName("close")[0];

    btn.onclick = function() {
        popup.style.display = "block";
    }

    span.onclick = function() {
        popup.style.display = "none";
    }

    window.onclick = function(event) {
        if (event.target == popup) {
            popup.style.display = "none";
        }
    }
});