document.addEventListener('DOMContentLoaded', () => {
    const btn = document.getElementById('time-btn');
    const input = document.getElementById('time-input');
    
    if(btn && input) {
        btn.addEventListener('click', () => {
            if(!input.value) {
                alert('Please select a date and time first!');
                return;
            }
            // Date input ko Unix timestamp me convert karna (Seconds me)
            const dateObj = new Date(input.value);
            const unixTime = Math.floor(dateObj.getTime() / 1000);
            
            // Discord Markdown code generate karna (R = Relative time)
            const discordCode = `<t:${unixTime}:R>`;
            
            // Clipboard me copy karna
            navigator.clipboard.writeText(discordCode).then(() => {
                alert('Copied to clipboard: ' + discordCode);
            }).catch(err => {
                alert('Failed to copy. Your code is: ' + discordCode);
            });
        });
    }
});