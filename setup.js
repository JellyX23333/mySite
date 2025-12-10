function typeText(element, text, speed = 40) {
    let i = 0;
    const interval = setInterval(() => {
        element.textContent += text.charAt(i);
        i++;
        if (i >= text.length) clearInterval(interval);
    }, speed);
}