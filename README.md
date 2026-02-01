# Notes from Messenger

A minimalist website that displays text messages with a typing indicator, simulating a conversation with oneself.

## Features

- Messages appear one at a time with an 8-second interval
- Typing indicator ("...") shows while waiting for the next message
- Displays up to 10 messages from your CSV data
- Click "*Active" button to view the description popup
- Green terminal-style aesthetic

## How to Add Your CSV Data

### Option 1: Modify the JavaScript Array (Easiest)

Open `script.js` and replace the `csvData` array (lines 3-13) with your own messages:

```javascript
const csvData = [
    "Your first message here",
    "Your second message here",
    "Your third message here",
    // Add up to 10 messages
];
```

### Option 2: Load from an Actual CSV File

1. Create a CSV file named `messages.csv` with one message per line:
```
thinking about breakfast sandwiches
reminder: call mom tomorrow
why do we park in driveways and drive on parkways
```

2. Replace the `csvData` section in `script.js` with this code:

```javascript
let csvData = [];

// Fetch and parse CSV file
async function loadCSV() {
    try {
        const response = await fetch('messages.csv');
        const text = await response.text();
        csvData = text.split('\n').filter(line => line.trim() !== '');
        init();
    } catch (error) {
        console.error('Error loading CSV:', error);
    }
}

// Call loadCSV instead of init
loadCSV();
```

3. Comment out or remove the original `init();` call at the bottom of the file.

4. **Important**: You'll need to run this on a local server (not just opening the HTML file) for CSV loading to work. You can use:
   - Python: `python -m http.server 8000`
   - Node.js: `npx http-server`
   - VS Code Live Server extension

## Files Included

- `index.html` - Main HTML structure
- `styles.css` - Styling and animations
- `script.js` - Message timing logic and modal functionality

## Customization

### Change Timing
Modify the timeout in `script.js` (line 30):
```javascript
setTimeout(() => {
    // ... message display code
}, 8000); // Change 8000 to desired milliseconds (8000 = 8 seconds)
```

### Change Colors
Edit `styles.css`:
- Background: `.body { background-color: #0a1f1a; }`
- Text color: `.message { color: #00ff00; }`

### Change Message Limit
Modify line 22 in `script.js`:
```javascript
if (currentMessageIndex >= Math.min(csvData.length, 10)) {
    // Change 10 to your desired limit
}
```

## Browser Compatibility

Works in all modern browsers (Chrome, Firefox, Safari, Edge).
