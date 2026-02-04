/*notes from self
Author: Abby Wang
Date: February 6, 2026
Description: JS code, most of the functionalities for the website. Includes commented out code for microphone integration.
*/

//SECTION 1: INPUT TEXT
    const csvData = [ //ABBY: omitted CSV function because it's easier to just copy and paste text
        "https://www.poetryfoundation.org/poetrymagazine/poems/1682838/jenny-holzer-dying-should-be-as-easy-as-falling-off-a-log-1978",
        "always in limbo",
        "never want to be here there anywhere until im elsewhere",
        "bird w/ clipped wings",
        "Nutmeg chocolate chip espresso banana bread almond powder? With espresso cream fraiche whip",
        "working in the biomedical field you must live under the assumption that people are generally good and deserve saving",
        "come and see whats playing in the theater of life these days",
        "visual architecture of disability",
        "the art of mourning the living",
        "to know how to be happy one must suffer first, in essence everything is Hegelian",
        "cyanotype turmeric table cover",
        "What kind of scientist do you want to become?",
        "What would success look like for you?",
        "What motivates you when progress is slow?",
        "How do you respond when things go wrong under pressure?",
        "How do you handle stress?",
        "Autumnal Arroz Caldo - by Chuck Cruz - Chuck.pdf",
        "turning around at the airport tarmac",
        "arms forever outstretched to reach you",
        "\"friction (pain, hardship, bad weather) is necessary for life\"",
        "seeing as a way of understanding our minds cognition and understanding our selves",
        "recreational misery",
        "cognitive reappraisal",
        "the human condition is perpetually talking about the weather",
        "the ferment of young adult life",
        "the glossiness of a new leaf",
        "the shiny feeling of something new",
        "https://www.instagram.com/p/DRRRwHOkq_A/",
        "The skyscrapers winking at you in orange bursts from the sun",
        "dont wait for things to come to you go find them and pursue it strongly",
        "Only development and aging are absolute. Everything else that happens in between is subject to choice",
        "whatever best defines you happens at the beginning and end",
        "in the house that jennifer doudna built",
        "you too can own a piece of the one battle after another set with a la fermiere yogurt jar as a plant pot",
        "Greedily devoured. Hunger as a metaphor for grief. A metaphor for a metaphor.",
        "and as the year comes hurtling past",
        "What you love will follow you wherever you go",
        "we carve an idol out of fear and call it god",
        "To be young is to be malleable to change",
        "the interiority and connectedness of college life",
        "Immunization record",
        "Proof of flu vaccine",
        "ID",
        "osmanthus in the air",
        "\"what style of cuisine is your restaurant going to serve\"",
        "Things I need to do: Take media out. Move media in. Run pcr. Run gel. Analyze gel",
        "sour on the lips sweet on the stomach",
        "I live my life in semesters not years",
        "Temporal emotional blindness, I never remember how to dress for the weather",
        "cake grocery list: [cake - chocolate cake w/ hojicha chocolate butter cream and raspberry compote/rasberry sucree, topped with rasberries/sprinkles/buttercream decoration]",
        "Acorns ground into fine meal underfoot",
        "https://en.wikipedia.org/wiki/Neologism",
        "https://youtube.com/shorts/n0lGa5oCCEY",
        "certificate.pdf",
        "1. Do you believe it is better to love or be loved?",
        "12. What do you want the most out of life?",
        "3 g matcha 30-40 ml water",
        "https://www.nature.com/articles/nature11234",
        "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC7312636/",
        "CHEM 3BL Lab J.pdf",
        "def inspect_place(place, place_index)",
        "Adobe Acrobat - Adobe Scan Aug 24, 2023.pdf",
        "in dreams where you're still smiling at me",
        "twitter @saltwatermp3: Do it scared and do it alone You walked out of the ocean for this",
        "the art of mourning someone who's still alive",
        "What does serving others mean to you?",
        "What philosophy guides your scientific inquiry?", 
        "Where do you see yourself in 10 years?",
        "Where do you see yourself in 20 years?",
        "How do you prevent getting lost in details?",
        "this city is just built to raise the young and care for the old",
        "turning around to say goodbye at the check in counter",
        "the grating noise",
        "7. Have you ever had a conversation that changed your life?"
    ];

//SECTION 2: SHUFFLING MESSAGES
    let shuffledMessages = [];
    let currentMessageIndex = 0;
    let isTyping = false;
    let typingElement = null;

    const messagesContainer = document.getElementById('messagesContainer');
    const activeBtn = document.getElementById('activeBtn');
    const modal = document.getElementById('modal');

    // Fisher-Yates shuffle algorithm
    function shuffleArray(array) {
        const shuffled = [...array]; // Create a copy
        for (let i = shuffled.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
        }
        return shuffled;
    }

//SECTION 3: INFO BUTTON
    //ABBY: Claude code to make the active button active vs. inactive
    // Initialize the display
    function init() {
        // Shuffle the messages at the start
        shuffledMessages = shuffleArray(csvData);
        
        // Change button to Active after 3 seconds
        setTimeout(() => {
            activateButton();
        }, 3000);
        
        displayNextMessage();
    }

    // Activate the button
    function activateButton() {
        const btn = document.getElementById('activeBtn');
        const symbol = btn.querySelector('.symbol');
        const status = btn.querySelector('.status');
        
        btn.classList.remove('inactive');
        symbol.textContent = '*';
        status.textContent = 'Active';

        // Initialize microphone when button becomes active
        //initializeMicrophone();
    }

//SECTION 4: MICROPHONE INTEGRATION
    /*
    // Initialize microphone connection
    async function initializeMicrophone() {
        try {
            // Request microphone access
            micStream = await navigator.mediaDevices.getUserMedia({ 
                audio: {
                    echoCancellation: true,
                    noiseSuppression: true,
                    autoGainControl: true
                } 
            });
            
            // Create audio context and analyser
            audioContext = new (window.AudioContext || window.webkitAudioContext)();
            analyser = audioContext.createAnalyser();
            const source = audioContext.createMediaStreamSource(micStream);
            
            source.connect(analyser);
            analyser.fftSize = 256;
            
            micActive = true;
            console.log('Microphone connected successfully');
            
            // Optional: Start monitoring audio levels
            monitorAudioLevel();
            
        } catch (error) {
            console.error('Microphone access denied or unavailable:', error);
            micActive = false;
        }
    }

    // Monitor audio levels (optional - can be used for visualizations or voice detection)
    function monitorAudioLevel() {
        if (!micActive || !analyser) return;
        
        const dataArray = new Uint8Array(analyser.frequencyBinCount);
        
        function checkLevel() {
            if (!micActive) return;
            
            analyser.getByteFrequencyData(dataArray);
            
            // Calculate average volume
            const average = dataArray.reduce((a, b) => a + b) / dataArray.length;
            
            // You can use this value for various purposes:
            // - Voice activity detection
            // - Visual feedback
            // - Triggering events based on sound
            
            // Log when sound is detected (remove this in production)
            if (average > 30) {
                console.log('Audio detected, level:', Math.round(average));
            }
            
            requestAnimationFrame(checkLevel);
        }
        
        checkLevel();
    }

    // Stop microphone
    function stopMicrophone() {
        if (micStream) {
            micStream.getTracks().forEach(track => track.stop());
            micStream = null;
        }
        if (audioContext) {
            audioContext.close();
            audioContext = null;
        }
        micActive = false;
        console.log('Microphone disconnected');
    }

    // Clean up on page unload
    window.addEventListener('beforeunload', () => {
        stopMicrophone();
    });
    */

//SECTION 5: TEXT DISPLAY 
    //Note: heavy reliance on Claude here
    // Display the next message with typing indicator
    function displayNextMessage() {
        if (currentMessageIndex >= Math.min(shuffledMessages.length, 10)) {
            return; // Stop after 10 messages
        }

        // Show typing indicator
        showTypingIndicator();

        // After 8 seconds, hide typing indicator and show message
        setTimeout(() => {
            hideTypingIndicator();
            addMessage(shuffledMessages[currentMessageIndex]);
            currentMessageIndex++;

            // Schedule next message
            if (currentMessageIndex < Math.min(shuffledMessages.length, 10)) {
                displayNextMessage();
            }
        }, 4500);
    }

    //ABBY: originally prompted code below

    // Show typing indicator
    function showTypingIndicator() {
        typingElement = document.createElement('div');
        typingElement.className = 'typing-indicator';
        typingElement.id = 'typingIndicator';
        messagesContainer.appendChild(typingElement);
        isTyping = true;
    }

    // Hide typing indicator
    function hideTypingIndicator() {
        if (typingElement) {
            typingElement.remove();
            typingElement = null;
        }
        isTyping = false;
    }

    // Add a message to the container
    function addMessage(text) {
        const messageDiv = document.createElement('div');
        messageDiv.className = 'message';
        
        // Convert URLs to clickable links
        const linkedText = linkifyText(text);
        messageDiv.innerHTML = linkedText;
        
        messagesContainer.appendChild(messageDiv);
        
        // Scroll to bottom
        window.scrollTo({
            top: document.body.scrollHeight,
            behavior: 'smooth'
        });
    }

//SECTION 6: ADDING URLs
    // Convert URLs in text to clickable links
    function linkifyText(text) {
        // Regular expression to match URLs
        const urlRegex = /(https?:\/\/[^\s]+)|(www\.[^\s]+)/gi;
        
        // Replace URLs with anchor tags
        return text.replace(urlRegex, function(url) {
            let href = url;
            
            // Add https:// if the URL starts with www.
            if (url.startsWith('www.')) {
                href = 'https://' + url;
            }
            
            return `<a href="${href}" target="_blank" rel="noopener noreferrer">${url}</a>`;
        });
    }

//SECTION 7: EXIT FUNCTION FOR INFO BUTTON
    // Modal functionality
    activeBtn.addEventListener('click', () => {
        // Only open modal if button is active
        if (!activeBtn.classList.contains('inactive')) {
            modal.classList.add('show');
        }
    });

    // Close modal when clicking outside the content
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.classList.remove('show');
        }
    });

    // Close modal with Escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            modal.classList.remove('show');
        }
    });

// Start the application
init();