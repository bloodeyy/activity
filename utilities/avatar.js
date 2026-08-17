document.addEventListener('DOMContentLoaded', () => {
    const btn = document.getElementById('avatar-btn');
    const input = document.getElementById('avatar-input');
    
    if(btn && input) {
        btn.addEventListener('click', () => {
            const userId = input.value.trim();
            
            // Basic ID validation (Discord IDs are numbers)
            if(!userId || isNaN(userId)) {
                alert('Please enter a valid Discord User ID (Numbers only).');
                return;
            }
            
            // Opening external lookup tool in a new tab
            const url = `https://discord.id/?check=${userId}`;
            window.open(url, '_blank');
        });
    }
});