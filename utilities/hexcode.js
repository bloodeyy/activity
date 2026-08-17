document.addEventListener('DOMContentLoaded', () => {
    const btn = document.getElementById('hex-btn');
    const input = document.getElementById('hex-input');
    
    if(btn && input) {
        btn.addEventListener('click', () => {
            const hexCode = input.value.toUpperCase(); // Ensure it's uppercase
            
            navigator.clipboard.writeText(hexCode).then(() => {
                alert('Embed Color Copied: ' + hexCode);
            }).catch(err => {
                alert('Failed to copy. Code is: ' + hexCode);
            });
        });
    }
});