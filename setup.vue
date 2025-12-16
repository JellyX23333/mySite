<script setup>
import { ref, onMounted, watch } from "vue"

/* --------------------
   Typing animation
-------------------- */
const showMore = ref(false)

const projects = ref([
  {
    text: "bilibili video",
    link: "https://github.com/JellyX23333/BilibiliVideoChanger",
    typed: ""
  },
  {
    text: "japanese practice",
    link: "https://github.com/JellyX23333/HiraganaKanji-Practice",
    typed: ""
  }
])

function typeProject(index, speed = 40) {
  const p = projects.value[index]
  p.typed = ""

  let i = 0
  const timer = setInterval(() => {
    p.typed += p.text[i]
    i++

    if (i >= p.text.length) {
      clearInterval(timer)
    }
  }, speed)
}

function toggleProjects() {
  showMore.value = !showMore.value

  if (showMore.value) {
    projects.value.forEach(p => p.typed = "")

    typeProject(0)
    setTimeout(() => typeProject(1), 400) // delay second animation
  }
}

return {
  showMore,
  projects,
  toggleProjects
}

/* --------------------
   Language prompt
-------------------- */
const showLangModal = ref(false)
const langMessage = ref({
  title: "",
  text: "",
  target: ""
})

function detectLanguage() {
  if (localStorage.getItem("langPromptShown")) return

  const userLang = navigator.language || navigator.userLanguage
  const isChinese = userLang.startsWith("zh")
  const onChinesePage = window.location.pathname.includes("index.zh.html")

  if (isChinese && !onChinesePage) {
    langMessage.value = {
      title: "切换到中文？",
      text: "检测到您的浏览器语言为中文，要切换到简体中文版吗？",
      target: "index.zh.html"
    }
    showLangModal.value = true
  } else if (!isChinese && onChinesePage) {
    langMessage.value = {
      title: "Switch to English?",
      text: "Your browser language is English. Switch to the English version?",
      target: "index.html"
    }
    showLangModal.value = true
  } else {
    localStorage.setItem("langPromptShown", "true")
  }
}

function confirmLang() {
  localStorage.setItem("langPromptShown", "true")
  window.location.href = langMessage.value.target
}

function cancelLang() {
  localStorage.setItem("langPromptShown", "true")
  showLangModal.value = false
}

/* --------------------
   Dark mode
-------------------- */
const darkMode = ref(false)

onMounted(() => {
  // typing animation
  typeText(fullText)

  // language detection
  detectLanguage()

  // restore dark mode
  darkMode.value = localStorage.getItem("darkMode") === "enabled"
})

watch(darkMode, (enabled) => {
  document.documentElement.classList.toggle("dark-mode", enabled)
  localStorage.setItem("darkMode", enabled ? "enabled" : "disabled")
})
</script>

<template>
  <!-- Typed text -->
  <p>{{ typedText }}</p>

  <!-- Dark mode toggle -->
  <label class="switch">
    <input type="checkbox" v-model="darkMode" />
    <span class="slider round"></span>
  </label>

  <!-- Language modal -->
  <div v-if="showLangModal" class="lang-modal-overlay">
    <div class="lang-modal">
      <h3>{{ langMessage.title }}</h3>
      <p>{{ langMessage.text }}</p>
      <button class="lang-btn lang-yes" @click="confirmLang">Yes</button>
      <button class="lang-btn lang-no" @click="cancelLang">No</button>
    </div>
  </div>
</template>
