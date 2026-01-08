const canvas = document.getElementById('math-canvas');
const ctx = canvas.getContext('2d');

let width, height;
let mouseX = -1000;
let mouseY = -1000;
let dots = [];

// Configuration
const SPACING = 22;
const DOT_RADIUS = 1.5;
const HOVER_RADIUS = 60; 
const MAX_SCALE = 2; // Additional radius when hovered
const EASING = 0.15; // Controls the speed of the transition (lower is smoother/slower)

function initDots() {
    dots = [];
    const offsetX = (width % SPACING) / 2;
    const offsetY = (height % SPACING) / 2;

    for (let x = offsetX; x < width; x += SPACING) {
        for (let y = offsetY; y < height; y += SPACING) {
            dots.push({
                x: x,
                y: y,
                currentScale: 0, // 0 to 1
                targetScale: 0
            });
        }
    }
}

function resize() {
    width = window.innerWidth;
    height = window.innerHeight;
    canvas.width = width;
    canvas.height = height;
    initDots();
}

function updateMouse(e) {
    mouseX = e.clientX;
    mouseY = e.clientY;
}

function draw() {
    const isDark = document.documentElement.classList.contains('dark');
    
    // Base colors (Gray-ish)
    const baseR = isDark ? 255 : 0;
    const baseG = isDark ? 255 : 0;
    const baseB = isDark ? 255 : 0;
    const baseA = 0.1; // Very subtle base

    // Highlight colors (Sky Blue)
    // Dark mode: 56, 189, 248
    // Light mode: 14, 165, 233
    const highR = isDark ? 56 : 14;
    const highG = isDark ? 189 : 165;
    const highB = isDark ? 248 : 233;
    const highA = 0.9; // More transparent highlight as requested

    ctx.clearRect(0, 0, width, height);

    dots.forEach(dot => {
        const dx = dot.x - mouseX;
        const dy = dot.y - mouseY;
        const dist = Math.sqrt(dx * dx + dy * dy);

        // Calculate target scale based on distance
        if (dist < HOVER_RADIUS) {
            dot.targetScale = (1 - dist / HOVER_RADIUS);
        } else {
            dot.targetScale = 0;
        }

        // Apply easing for smooth transition
        dot.currentScale += (dot.targetScale - dot.currentScale) * EASING;

        // Calculate current properties
        const r = DOT_RADIUS + (dot.currentScale * MAX_SCALE);
        
        // Interpolate color
        const mix = dot.currentScale;
        const finalR = baseR + (highR - baseR) * mix;
        const finalG = baseG + (highG - baseG) * mix;
        const finalB = baseB + (highB - baseB) * mix;
        const finalA = baseA + (highA - baseA) * mix;

        ctx.fillStyle = `rgba(${Math.round(finalR)}, ${Math.round(finalG)}, ${Math.round(finalB)}, ${finalA})`;
        
        // Add glow effect for highlighted dots
        if (dot.currentScale > 0.1) {
            const glowRadius = r * 3;
            const gradient = ctx.createRadialGradient(dot.x, dot.y, r * 0.5, dot.x, dot.y, glowRadius);
            gradient.addColorStop(0, `rgba(${Math.round(highR)}, ${Math.round(highG)}, ${Math.round(highB)}, ${dot.currentScale * 0.4})`);
            gradient.addColorStop(1, `rgba(${Math.round(highR)}, ${Math.round(highG)}, ${Math.round(highB)}, 0)`);
            
            ctx.fillStyle = gradient;
            ctx.beginPath();
            ctx.arc(dot.x, dot.y, glowRadius, 0, Math.PI * 2);
            ctx.fill();
            
            // Reset fill style for the main dot
            ctx.fillStyle = `rgba(${Math.round(finalR)}, ${Math.round(finalG)}, ${Math.round(finalB)}, ${finalA})`;
        }
        
        ctx.beginPath();
        ctx.arc(dot.x, dot.y, r, 0, Math.PI * 2);
        ctx.fill();
    });
    
    requestAnimationFrame(draw);
}

window.addEventListener('resize', resize);
window.addEventListener('mousemove', updateMouse);

// Initial setup
resize();
draw();