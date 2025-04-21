// 切换深色模式
function toggleDarkMode() {
  const body = document.body;
  const btn = document.getElementById("modeToggleBtn");
  const isDark = body.classList.toggle("dark-mode");
  localStorage.setItem("theme", isDark ? "dark" : "light"); // 保存状态
  btn.innerHTML = isDark ? "☀ Light Mode" : "🌙 Dark Mode";
}

// 页面加载时，检查本地存储并设置主题
document.addEventListener("DOMContentLoaded", () => {
  const savedTheme = localStorage.getItem("theme");
  const body = document.body;
  const btn = document.getElementById("modeToggleBtn");
  if (savedTheme === "dark") {
    body.classList.add("dark-mode");
    if (btn) btn.innerHTML = "☀ Light Mode";
  }

  // 设置当前导航项高亮
  const currentPath = window.location.pathname;
  document.querySelectorAll(".nav-links a").forEach(link => {
    if (currentPath.includes(link.getAttribute("href"))) {
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
