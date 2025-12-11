function typeText(element, text, speed = 40, callback = () => {}) {
    let i = 0;
    const interval = setInterval(() => {
        element.textContent += text.charAt(i);
        i++;
        if (i >= text.length) {
            clearInterval(interval);
            callback();    // <-- run after animation
        }
    }, speed);
}

// check language 
(function() {
    if (localStorage.getItem("langPromptShown")) return;

    const userLang = navigator.language || navigator.userLanguage;
    const isChinese = userLang.startsWith("zh");
    const onChinesePage = window.location.pathname.includes("index.zh.html");

    let message = null;

    if (isChinese && !onChinesePage) {
        message = {
            title: "切换到中文？",
            text: "检测到您的浏览器语言为中文，要切换到简体中文版吗？",
            target: "index.zh.html"
        };
    } else if (!isChinese && onChinesePage) {
        message = {
            title: "Switch to English?",
            text: "Your browser language is English. Switch to the English version?",
            target: "index.html"
        };
    }

    if (!message) {
        localStorage.setItem("langPromptShown", "true");
        return;
    }

    // --- Build modal dynamically ---
    const overlay = document.createElement("div");
    overlay.className = "lang-modal-overlay";

    const modal = document.createElement("div");
    modal.className = "lang-modal";

    modal.innerHTML = `
        <h3>${message.title}</h3>
        <p>${message.text}</p>
        <button class="lang-btn lang-yes">Yes</button>
        <button class="lang-btn lang-no">No</button>
    `;

    overlay.appendChild(modal);
    document.body.appendChild(overlay);

    modal.querySelector(".lang-yes").onclick = () => {
        localStorage.setItem("langPromptShown", "true");
        window.location.href = message.target;
    };

    modal.querySelector(".lang-no").onclick = () => {
        localStorage.setItem("langPromptShown", "true");
        overlay.remove();
    };
})();

const toggle = document.getElementById('darkModeToggle');

toggle.addEventListener('change', () => {
  if(toggle.checked){
    document.documentElement.classList.add('dark-mode');
  } else {
    document.documentElement.classList.remove('dark-mode');
  }
});

// Load saved preference
if(localStorage.getItem('darkMode') === 'enabled'){
  toggle.checked = true;
  document.documentElement.classList.add('dark-mode');
}

toggle.addEventListener('change', () => {
  if(toggle.checked){
    document.documentElement.classList.add('dark-mode');
    localStorage.setItem('darkMode','enabled');
  } else {
    document.documentElement.classList.remove('dark-mode');
    localStorage.setItem('darkMode','disabled');
  }
});