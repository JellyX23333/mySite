<script setup lang="ts">
function changeLanguage() {
  var lang = document.documentElement.lang;
  if (lang === "en") {
    document.documentElement.lang = "zh";
  } else {
    document.documentElement.lang = "en";
  }
}
</script>


<template>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Me</title>
    <link rel="stylesheet" href="style.css">
    <script src="hiddenProject.js"></script>
    <link rel="icon" href="favicon.ico">
  </head>
  <body>
    <div style="float:right;width:25%;text-align:right;margin-bottom:30px;">
      <h1>Zeping</h1>
      <h2 style="color:#44617d;">Xu</h2>
    </div>
    <button onclick="changeLanguage()"><img src="https://cdn3.iconfinder.com/data/icons/design-tools-15/24/_translation-1024.png" width="30" height="30" alt="translate"></button>
    <div class="block">
      <h2>Projects</h2>
      <div>
        <h3>Ongoing</h3>
        <ul style="list-style-type:none">
          <li><span>personal website</span></li>
          <li><button id="showHidden">show more</button></li>
        </ul>
      </div>
      <div id="content1" class="hidden">Content 1</div>

      <h3>completed</h3>
      <ul style="list-style-type:none">
        
      </ul>
    </div>

    <hr>
    <div class="block">
      <h2>Education</h2>
      <ul>
        <li>Bachelor of Sci, University of Melbourne, Currently Enrolled</li>
        <li>Higher School Certificate, Epping Boys High School, Graduated 2023</li>
      </ul>
    </div>
    
    <hr>
    <div class="block">
      <h2>Career history</h2>
      <ul>
        <li>Assistant Restaurant Manager at Young Barons Woy Woy, Dec.2022 - Dec.2023 <a href="https://www.youngbarons.com/"><img src="https://cdn0.iconfinder.com/data/icons/pixon-1/24/_translation-1024.png" width="20" height="20" alt="hyperlink icon"></a></li>
        <li>Kitchenhand at Burwood Night Market Takoyaki, Jan.2020 – Mar. 2020</li>
        <li>Cleaner at Queen bakery in Chatswood, Jun.2019 – Dec. 2019</li>
      </ul>
    </div>
    
    <hr>
    <div class="block">
      <h2>Interests</h2>
      <ul>
        <li>Hiking</li>
        <li>Climbing</li>
        <li>Diving</li>
      </ul>
    </div>
    
    <hr>
    <div class="block">
      <h2>Achievements & Community Engagement</h2>
      <ul>
        <li>Duke of Edinburg (Gold)</li>
        <li>Bush Regeneration Volunteer, Jan.2022-feb.2024</li>
      </ul>
    </div>
    <p>
      <a href="https://github.com/jellyx23333"><img src="https://github.githubassets.com/assets/GitHub-Mark-ea2971cee799.png" width="30" height="30" alt="github icon"></a>
      <a href="mailto:izeping@outlook.com"><img src="https://cdn2.iconfinder.com/data/icons/email-line-2/48/email_link_mail-512.png" width="30" height="30" alt="email icon"></a>
</template>

<style scoped>
@import url('../../style.css');
</style>
