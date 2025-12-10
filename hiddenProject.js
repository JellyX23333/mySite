let expanded = false; // track show/hide state

document.getElementById("toggleBtn").addEventListener("click", function () {
    const list = document.getElementById("projectList");
    const buttonItem = document.getElementById("toggleBtn").parentElement;

    if (!expanded) {
        // --- SHOW items ---
        const item1 = document.createElement("li");
        const item2 = document.createElement("li");

        item1.id = "extraItem1";
        item2.id = "extraItem2";

        item1.textContent = "";
        item2.textContent = "";

        list.insertBefore(item1, buttonItem);
        list.insertBefore(item2, buttonItem);

        typeText(item1, "bilibili video");
        setTimeout(() => typeText(item2, "japanese practice"), 400);

        this.textContent = "hide";
        expanded = true;
    } else {
        // --- HIDE items ---
        const item1 = document.getElementById("extraItem1");
        const item2 = document.getElementById("extraItem2");

        if (item1) item1.remove();
        if (item2) item2.remove();

        this.textContent = "more ...";
        expanded = false;
    }
});