// Each line represents one message
const csvData = [
    "https://substack.com/@gorecore/note/c-206510003",
    "https://www.poetryfoundation.org/poetrymagazine/poems/1682838/jenny-holzer-dying-should-be-as-easy-as-falling-off-a-log-1978",
    "always in limbo",
    "never want to be here there anywhere until im elsewhere",
    "bird w/ clipped wings",
    "https://www.instagram.com/p/DUGVJaEjYuR",
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
    "https://www.instagram.com/cookingbybecca/reel/DS0pn1sEb23/",
    "https://www.yelp.com/biz/loop-espresso-club-los-angeles",
    "turning around at the airport tarmac",
    "arms forever outstretched to reach you",
    "\"friction (pain, hardship, bad weather) is necessary for life\"",
    "seeing as a way of understanding our minds cognition and understanding our selves",
    "https://humanlanterns.bigcartel.com/product/schrader-shirt",
    "recreational misery",
    "cognitive reappraisal",
    "the human condtiion talking about weather",
    "the ferment of young adult life",
    "the glossiness of a new leaf",
    "the shiny feeling of something new",
    "https://www.instagram.com/katiethejane/reel/DOtmtPmDh0c/",
    "https://eatchofood.substack.com/p/black-sesame-latte-cream-pie",
    "https://www.instagram.com/p/DRRRwHOkq_A/",
    "https://x.com/mrp_and_me/status/1993891371401531716",
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
    "https://www.justonecookbook.com/matcha-swiss-roll/",
    "\"what style of cuisine is your restaurant going to serve\"",
    "https://archive.org/details/limitedcolorgrap0000unse",
    "Things I need to do: Take media out. Move media in. Run pcr. Run gel. Analyze gel",
    "some pi to another postdoc: \"emeryville is so soulless\"",
    "https://floramanson.substack.com/p/recipe-miso-toffee-apple-cookies",
    "sour on the lips sweet on the stomach",
    "https://www.jetpens.com/Iconic-Index-Highlighter-Sticky-Notes/ct/6874",
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
    "https://www.youtube.com/watch?v=k6LyV7A6UmU",
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

//ABBY: old code, using a non-randomized display function for the messages

/*
let currentMessageIndex = 0;
let isTyping = false;
let typingElement = null;

const messagesContainer = document.getElementById('messagesContainer');
const activeBtn = document.getElementById('activeBtn');
const modal = document.getElementById('modal');

// Initialize the display
function init() {
    displayNextMessage();
}

// Display the next message with typing indicator
function displayNextMessage() {
    if (currentMessageIndex >= Math.min(csvData.length, 10)) {
        return; // Stop after 10 messages
    }

    // Show typing indicator
    showTypingIndicator();

    // After 8 seconds, hide typing indicator and show message
    setTimeout(() => {
        hideTypingIndicator();
        addMessage(csvData[currentMessageIndex]);
        currentMessageIndex++;

        // Schedule next message
        if (currentMessageIndex < Math.min(csvData.length, 10)) {
            displayNextMessage();
        }
    }, 3500);
}*/

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

//ABBY: code to make the active button active vs. inactive
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
    initializeMicrophone();
}

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



// ============================================
// P5.JS AUDIO VISUALIZATION
// ============================================

let mic;
let p5Canvas;

// p5.js setup function
function setup() {
  // Create fullscreen canvas
  p5Canvas = createCanvas(windowWidth, windowHeight);
  
  // Append to overlay div manually
  let overlayDiv = document.getElementById('overlay');
  if (overlayDiv) {
    overlayDiv.appendChild(p5Canvas.canvas);
  }
  
  // Create microphone input
  mic = new p5.AudioIn();
  mic.start();
}

// p5.js draw function
function draw() {
  // Clear previous frame
  clear();
  
  // Get microphone volume level (0.0 to 1.0)
  let vol = mic.getLevel();
  
  // Map volume to opacity (0-255)
  // Multiply by a factor to increase sensitivity
  let opacity = vol * 255 * 10;
  
  // Draw black rectangle over entire screen
  fill(0, 0, 0, opacity);
  noStroke();
  rect(0, 0, width, height);
}

// p5.js window resize function
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}