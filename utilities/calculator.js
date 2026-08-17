document.addEventListener('DOMContentLoaded', () => {
    const btn = document.getElementById('calc-btn');
    const input = document.getElementById('calc-input');
    
    if(btn && input) {
        btn.addEventListener('click', () => {
            const mathExpression = input.value.trim();
            if(!mathExpression) {
                alert('Please enter a math expression (e.g. 50 * 2).');
                return;
            }

            try {
                // Sanitizing the input to prevent code injection (allow only numbers and basic math operators)
                const sanitized = mathExpression.replace(/[^-()\d/*+.]/g, '');
                
                // Using new Function to safely evaluate string math expression
                const result = new Function('return ' + sanitized)();
                
                if (result === undefined || isNaN(result)) throw new Error("Invalid");
                
                alert(`Result: ${result}`);
            } catch(e) {
                alert('Invalid math expression! Please check your input.');
            }
        });
    }
});