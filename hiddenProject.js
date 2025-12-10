document.getElementById("showHidden").addEventListener("click", function () {
    const list = document.getElementById("projectList");

    // Create new items
    const item1 = document.createElement("li");
    item1.textContent = "bilibili video";

    const item2 = document.createElement("li");
    item2.textContent = "japanese practice";

    // Insert them before the button
    const buttonItem = document.getElementById("showHidden").parentElement;
    list.insertBefore(item1, buttonItem);
    list.insertBefore(item2, buttonItem);

    // Optionally remove the button after expansion
    // buttonItem.remove();
});