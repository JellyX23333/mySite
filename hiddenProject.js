let expanded = false; // track show/hide state

document.getElementById("toggleBtn").addEventListener("click", function () {
    const list = document.getElementById("projectList");
    const buttonItem = document.getElementById("toggleBtn").parentElement;

    if (!expanded) {
        const item1 = document.createElement("li");
        const item2 = document.createElement("li");

        item1.id = "extraItem1";
        item2.id = "extraItem2";

        item1.textContent = "";
        item2.textContent = "";

        list.insertBefore(item1, buttonItem);
        list.insertBefore(item2, buttonItem);

        // Prepare links + icons
        const link1 = document.createElement("a");
        const link2 = document.createElement("a");

        link1.href = "https://github.com/JellyX23333/BilibiliVideoChanger";
        link2.href = "https://github.com/JellyX23333/HiraganaKanji-Practice";

        const img1 = document.createElement("img");
        img1.src = "https://cdn0.iconfinder.com/data/icons/pixon-1/24/Link_hyperlink-1024.png";
        img1.width = 20;
        img1.height = 20;

        const img2 = img1.cloneNode(true);

        // Track typing completions
        let done = 0;

        function maybeInsertIcons() {
            done++;
            if (done === 2) {
                // Insert icons for both items at the same time
                item1.append(" ");
                link1.appendChild(img1);
                item1.appendChild(link1);

                item2.append(" ");
                link2.appendChild(img2);
                item2.appendChild(link2);
            }
        }

        // Start first typing immediately
        typeText(item1, "bilibili-stored video format converter", 40, maybeInsertIcons);

        // Delay for second typing (change 600ms to any delay you want)
        setTimeout(() => {
            typeText(item2, "japanese practice", 40, maybeInsertIcons);
        }, 600);

        this.textContent = "hide";
        expanded = true;

    } else {
        const item1 = document.getElementById("extraItem1");
        const item2 = document.getElementById("extraItem2");

        if (item1) item1.remove();
        if (item2) item2.remove();

        this.textContent = "more ...";
        expanded = false;
    }
});

