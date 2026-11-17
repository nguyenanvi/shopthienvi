document.querySelectorAll("li").forEach( function (el) {
    const text = el.textContent.trim();
    // Check if first character is ✔
    if (text.startsWith("✔")) {
        el.classList.add("good");
    } else if (text.startsWith("✖")) {
        el.classList.add("bad");
    } else if (text.startsWith("★")) {
        el.classList.add("good","best");
    }
});