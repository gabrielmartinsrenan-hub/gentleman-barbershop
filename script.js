// --- Mobile Menu Toggle ---
const mobileMenuBtn = document.getElementById('mobileMenuBtn');
const mobileMenu = document.getElementById('mobileMenu');

if (mobileMenuBtn && mobileMenu) {
  mobileMenuBtn.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
  });
}

// --- Modal Control Functions ---
function openModal(id) {
  const modal = document.getElementById(id);
  if (modal) {
    modal.classList.remove('hidden');
  }
}

function closeModal(id) {
  const modal = document.getElementById(id);
  if (modal) {
    modal.classList.add('hidden');
  }
}

// --- Form Submissions ---
function handleBooking(event) {
  event.preventDefault();
  event.target.reset();
  showToast('Appointment successfully requested! We will confirm via SMS shortly.');
}

function handleVipSubmit(event) {
  event.preventDefault();
  closeModal('vipModal');
  event.target.reset();
  showToast('Welcome! Your VIP membership application has been received.');
}

// --- Toast Notification System ---
function showToast(message) {
  const toast = document.getElementById('toast');
  const toastMsg = document.getElementById('toastMsg');

  if (toast && toastMsg) {
    toastMsg.innerText = message;
    toast.classList.add('show');

    setTimeout(() => {
      toast.classList.remove('show');
    }, 4000);
  }
}

// --- Smooth Close Modal on Overlay Click ---
window.addEventListener('click', (event) => {
  const vipModal = document.getElementById('vipModal');
  if (event.target === vipModal) {
    closeModal('vipModal');
  }
});