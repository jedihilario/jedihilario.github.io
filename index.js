window.addEventListener('DOMContentLoaded', () => {
    VANTA.CELLS({
        el: "#vanta",
        mouseControls: true,
        touchControls: true,
        gyroControls: false,
        minHeight: 200.00,
        minWidth: 200.00,
        scale: 1.00,
        color2: 0x316287,
        size: 1.00
      });
    
    setTimeout(() => {
        document.querySelector('main').style.opacity = 1;
    }, 1000);
});