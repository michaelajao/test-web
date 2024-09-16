anime({
    targets: [".grid__item", ".list__item"],
    scale: [
        { value: 1, duration: 1000, easing: "easeOutQuad" }, // Subtle initial scale
        { value: 1.05, duration: 400, easing: "easeInQuad" }, // Slight scale up
        { value: 1, duration: 1000, easing: "easeOutQuad" }, // Return to original scale
    ],
    opacity: [
        { value: 0.8, duration: 500, easing: "easeOutQuad" }, // Fade in
        { value: 1, duration: 800, easing: "easeInQuad" },   // Fully visible
    ],
    easing: "easeInOutQuad", // Smooth transition
    delay: function (el, i, l) {
        return i * 150; // Slightly faster delay between items
    },
    loop: false, // Disable looping for a clean one-time animation
});
