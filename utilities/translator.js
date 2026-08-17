document.addEventListener('DOMContentLoaded', () => {
    const btn = document.getElementById('trans-btn');
    const input = document.getElementById('trans-input');
    const langSelect = document.getElementById('trans-lang');
    
    if(btn && input && langSelect) {
        btn.addEventListener('click', async () => {
            const textToTranslate = input.value.trim();
            if(!textToTranslate) {
                alert('Please enter some text to translate!');
                return;
            }

            const targetLang = langSelect.value;
            const originalBtnText = btn.innerHTML;
            
            // Loading state
            btn.innerHTML = '<i class="fas fa-circle-notch fa-spin"></i> Translating...';
            btn.style.opacity = '0.7';

            try {
                // Free translation API (MyMemory)
                const response = await fetch(`https://api.mymemory.translated.net/get?q=${encodeURIComponent(textToTranslate)}&langpair=en|${targetLang}`);
                const data = await response.json();
                
                if(data && data.responseData && data.responseData.translatedText) {
                    alert('Translation: ' + data.responseData.translatedText);
                } else {
                    throw new Error("Translation failed");
                }
            } catch (error) {
                console.error("Translation Error: ", error);
                alert("Failed to translate the text. Please try again later.");
            } finally {
                // Reset button state
                btn.innerHTML = originalBtnText;
                btn.style.opacity = '1';
            }
        });
    }
});