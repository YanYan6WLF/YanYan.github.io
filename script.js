// 切换深色模式
function toggleDarkMode() {
  const body = document.body;
  const btn = document.getElementById("modeToggleBtn");
  const isDark = body.classList.toggle("dark-mode");
  btn.innerHTML = isDark ? '☀ Light Mode' : '🌙 Dark Mode';
}

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
