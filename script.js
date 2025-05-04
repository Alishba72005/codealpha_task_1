let currentImage = 0;
const images = document.querySelectorAll('.gallery img');
const modal = document.getElementById('modal');
const modalImg = document.getElementById('modal-img');

function openModal(index) {
  currentImage = index;
  modal.style.display = 'block';
  modalImg.src = images[currentImage].src;
}

function closeModal() {
  modal.style.display = 'none';
}

function nextImage() {
  currentImage = (currentImage + 1) % images.length;
  modalImg.src = images[currentImage].src;
}

function prevImage() {
  currentImage = (currentImage - 1 + images.length) % images.length;
  modalImg.src = images[currentImage].src;
}
