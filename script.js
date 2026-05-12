// ===== Dark Mode =====
function toggleDarkMode() {
  const body = document.body;
  const btn = document.getElementById("modeToggleBtn");
  const isDark = body.classList.toggle("dark-mode");

  localStorage.setItem("theme", isDark ? "dark" : "light");

  if (btn) {
    btn.innerHTML = isDark ? "☀ Light Mode" : "🌙 Dark Mode";
  }
}

// ===== Init on load =====
document.addEventListener("DOMContentLoaded", () => {
  // Apply saved theme
  const body = document.body;
  const btn = document.getElementById("modeToggleBtn");
  const savedTheme = localStorage.getItem("theme");

  if (savedTheme === "dark") {
    body.classList.add("dark-mode");
    if (btn) btn.innerHTML = "☀ Light Mode";
  }

  // Highlight active nav link
  const currentPath = window.location.pathname;
  document.querySelectorAll(".nav-links a").forEach(link => {
    const href = link.getAttribute("href");
    if (href && currentPath.includes(href)) {
      link.classList.add("active");
    }
  });
});

// ===== Nav toggle (mobile) =====
function toggleNav() {
  document.getElementById("navLinks").classList.toggle("show");
}

// ===== Sidebar toggle (mobile) =====
function toggleAside() {
  document.getElementById("contactLinks").classList.toggle("show");
}

// ===== Image modal =====
function openModal(img) {
  const modal = document.getElementById("imgModal");
  const modalImg = document.getElementById("modalImg");
  const modalVideo = document.getElementById("modalVideo");

  modal.style.display = "block";

  // Show image, hide video
  modalImg.style.display = "block";
  modalImg.src = img.src;
  document.getElementById("caption").innerHTML = img.alt;

  modalVideo.style.display = "none";
  modalVideo.pause();
}

// ===== Video modal =====
function openVideoModal(src) {
  const modal = document.getElementById("imgModal");
  modal.style.display = "block";

  // Hide image
  document.getElementById("modalImg").style.display = "none";
  document.getElementById("caption").innerHTML = "";

  // Show video
  const video = document.getElementById("modalVideo");
  const videoSrc = document.getElementById("modalVideoSrc");
  videoSrc.src = src;
  video.load();
  video.style.display = "block";
}

// ===== Close modal =====
function closeModal() {
  document.getElementById("imgModal").style.display = "none";

  const video = document.getElementById("modalVideo");
  video.pause();
  video.currentTime = 0;
}

// Close modal on backdrop click (but not on content click)
document.addEventListener("DOMContentLoaded", () => {
  const modal = document.getElementById("imgModal");
  if (modal) {
    modal.addEventListener("click", (e) => {
      if (e.target === modal) closeModal();
    });
  }
});