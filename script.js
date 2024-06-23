// script.js

function getRandomColor() {
    // Define the range of colors from red to purple
    const colors = [
        "#ff0000", // Red
        "#ff0040",
        "#ff0080",
        "#ff00bf",
        "#ff00ff", // Magenta
        "#bf00ff",
        "#8000ff",
        "#4000ff",
        "#0000ff"  // Purple
    ];
    // Return a random color from the array
    return colors[Math.floor(Math.random() * colors.length)];
}

function getRandomLanguage() {
    // Define "I love you" in 99 languages
    const phrases = [
        "Te amo", // Spanish
        "Je t'aime", // French
        "Ich liebe dich", // German
        "Ti amo", // Italian
        "Eu te amo", // Portuguese
        "Я тебя люблю", // Russian
        "我爱你", // Chinese (Mandarin)
        "aku mencintaimu", // indonesion
        "أنا أحبك", // Arabic
        "I love you", // English
        "愛してる", // Japanese
        "사랑해", // Korean
        "Aku cinta kamu", // Indonesian
        "Mahal kita", // Filipino
        "Tôi yêu bạn", // Vietnamese
        "मैं तुमसे प्यार करता हूँ", // Hindi (for male speaker)
        "मैं तुमसे प्यार करती हूँ", // Hindi (for female speaker)
        "मैं तुझ्या वर प्रेम करतो", // Marathi (for male speaker)
        "मैं तुझ्या वर प्रेम करते", // Marathi (for female speaker)
        "Я люблю тебе", // Ukrainian        
        "אני אוהב אותך", // Hebrew
        "Ek het jou lief", // Afrikaans
        "Szeretlek", // Hungarian
        "Volim te", // Croatian
        "Te iubesc", // Romanian
        "Kocham cię", // Polish
        "Jeg elsker dig", // Danish
        "Jag älskar dig", // Swedish
        "Ég elska þig", // Icelandic
        "Aš tave myliu", // Lithuanian
        "Я кохаю тебе", // Belarusian
        "Mi amas vin", // Esperanto
        "Εγώ σ 'αγαπώ", // Greek
        "Mina rakastan sinua", // Finnish
        "Ti vogghiu beni", // Sicilian
        "Ti tengu cara", // Neapolitan
        "Te quiero", // Galician
        "Szeretlek", // Hungarian
        "Ljubim te", // Slovenian
        "Te dua", // Albanian
        "Jag älskar dig", // Swedish
        "Jeg elsker deg", // Norwegian
        "Ik hou van jou", // Dutch
        "Aloha wau ia ‘oe", // Hawaiian
        "Kimi o ai shiteru", // Japanese (Romaji)
        "Ndimakukonda", // Chichewa
        "Mo ni fe", // Yoruba
        "Me dorëzohet", // Albanian
        "Naan unnai kaadhalikkiren", // Tamil
        "Premikichhu", // Odia
        "Ngiyakuthanda", // Zulu
        "Ke a go rata", // Tswana
        "Ek het jou lief", // Afrikaans
        "Aš tave myliu", // Lithuanian
        "S'agapo", // Greek
        "Mən səni sevirəm", // Azerbaijani
        "Ami tomake bhalobashi", // Bengali
        "Mo ni fe re", // Yoruba
        "Kuv hlub koj", // Hmong
        "Mi amas vin", // Esperanto
        "Volim te", // Croatian
        "Nakupenda", // Swahili
        "Ke tshepile", // Sotho
        "Te iubesc", // Romanian
        "Seni seviyorum", // Turkish
        "Ich liebe dich", // German
        "Ek is lief vir jou", // Afrikaans
        "Ma armastan sind", // Estonian
        "Ik hou van jou", // Dutch
        "Laimu luve iane koe", // Tongan
        "Me te vlerësoj", // Albanian
        "Ich lieb dich", // Swiss German
        "Ngiyakuthanda", // Zulu
        "Ni nakupenda", // Swahili
        "Mina rakastan sinua", // Finnish
        "Je t'aime", // French
        "Taim i' ngra leat", // Irish
        "Ti amo", // Italian
        "Te iubesc", // Romanian
        "Jeg elsker dig", // Danish
        "Aloha wau ia ‘oe", // Hawaiian
        "Kimi o ai shiteru", // Japanese (Romaji)
        "Tôi yêu bạn", // Vietnamese
        "Ich liebe dich", // German
        "Volim te", // Croatian
        "Ti amo", // Italian
        "Jeg elsker deg", // Norwegian
        "Jeg elsker deg", // Danish
        "Je t'aime", // French
        "Aloha wau ia ‘oe", // Hawaiian
        "Taim i' ngra leat", // Irish
    ];
    // Return a random phrase from the array
    return phrases[Math.floor(Math.random() * phrases.length)];
}

function createWord() {
    const container = document.getElementById('container');
    const word = document.createElement('div');
    word.className = 'word';
    word.textContent = getRandomLanguage();

    // Apply a random color to the word
    word.style.color = getRandomColor();

    const x = Math.random() * window.innerWidth;
    const y = Math.random() * window.innerHeight;

    word.style.left = `${x}px`;
    word.style.top = `${y}px`;

    container.appendChild(word);

    setTimeout(() => {
        container.removeChild(word);
    }, 3000); // Match this duration with the CSS animation duration
}

function startEffect() {
    setInterval(createWord, 500); // Adjust this interval for more or less frequent words
}

window.onload = startEffect;
