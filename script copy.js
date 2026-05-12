// 切换深色模式，并保存设置
function toggleDarkMode() {
  const body = document.body;
  const btn = document.getElementById("modeToggleBtn");
  const isDark = body.classList.toggle("dark-mode");

  // 存储主题偏好
  localStorage.setItem("theme", isDark ? "dark" : "light");

  // 更新按钮文字
  if (btn) {
    btn.innerHTML = isDark ? "☀ Light Mode" : "🌙 Dark Mode";
  }
}

// 页面加载时初始化：设置主题 + 高亮当前链接
document.addEventListener("DOMContentLoaded", () => {
  const body = document.body;
  const btn = document.getElementById("modeToggleBtn");
  const savedTheme = localStorage.getItem("theme");

  // 读取并应用主题
  if (savedTheme === "dark") {
    body.classList.add("dark-mode");
    if (btn) btn.innerHTML = "☀ Light Mode";
  }

  // 当前页面链接高亮
  const currentPath = window.location.pathname;
  document.querySelectorAll(".nav-links a").forEach(link => {
    const href = link.getAttribute("href");
    if (currentPath.includes(href)) {
      link.classList.add("active");
    }
  });
});

// 折叠菜单按钮
function toggleNav() {
  document.getElementById("navLinks").classList.toggle("show");
}

// 折叠侧边栏按钮
function toggleAside() {
  document.getElementById("contactLinks").classList.toggle("show");
}

// 多页面导航高亮（基于 URL 匹配）
document.addEventListener("DOMContentLoaded", () => {
  const currentPath = window.location.pathname;
  document.querySelectorAll(".nav-links a").forEach(link => {
    const href = link.getAttribute("href");
    if (currentPath.includes(href)) {
      link.classList.add("active");
    }
  });
});



function openModal(img) {
  var modal = document.getElementById("imgModal");
  var modalImg = document.getElementById("modalImg");
  var caption = document.getElementById("caption");
  modal.style.display = "block";
  modalImg.src = img.src;
  caption.innerHTML = img.alt;
}

function closeModal() {
  document.getElementById("imgModal").style.display = "none";
}

















function openVideoModal(src) {
  var modal = document.getElementById("imgModal");
  var modalImg = document.getElementById("modalImg");

  modal.style.display = "block";
  modalImg.outerHTML = `<video id="modalImg" controls style="max-width:90%; max-height:85vh;">
                           <source src="${src}" type="video/mp4">
                        </video>`;
}


function openModal(img) {
  document.getElementById("imgModal").style.display = "block";
  
  // 显示图片
  document.getElementById("modalImg").style.display = "block";
  document.getElementById("modalImg").src = img.src;

  // 隐藏视频
  document.getElementById("modalVideo").style.display = "none";
  document.getElementById("modalVideo").pause();

  document.getElementById("caption").innerHTML = img.alt;
}

function openVideoModal(src) {
  const modal = document.getElementById("imgModal");
  modal.style.display = "block";

  // 隐藏图片
  document.getElementById("modalImg").style.display = "none";

  // 显示视频
  const video = document.getElementById("modalVideo");
  const videoSrc = document.getElementById("modalVideoSrc");
  videoSrc.src = src;
  video.load();  // 刷新视频
  video.style.display = "block";

  document.getElementById("caption").innerHTML = "";
}



function closeModal() {
  document.getElementById("imgModal").style.display = "none";

  // 停止视频
  const video = document.getElementById("modalVideo");
  video.pause();
  video.currentTime = 0;
}
