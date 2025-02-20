// whatsapp.js
function toggleChat() {
    var chatBox = document.getElementById("whatsapp-chat");

    // Check the current state and toggle accordingly
    if (chatBox.style.display === "none" || chatBox.style.display === "") {
        chatBox.style.display = "flex";  // Show chat box
    } else {
        chatBox.style.display = "none";  // Hide chat box
    }
}


function startChat() {
    // Replace with your own number
    window.open("https://wa.me/00923355242339", "_blank");
}
function openWhatsApp() {
    const isMobile = /Mobi|Android/i.test(window.navigator.userAgent); // Check if the user is on a mobile device

    // If on mobile, open WhatsApp
    if (isMobile) {
        const phoneNumber = '00923355242339'; // Replace with the business phone number (include country code, no '+' or spaces)
        const message = 'Hello, I would like to know more about your services.'; // Optional: Customize the message
        const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

        // Open WhatsApp app or WhatsApp web (if available)
        window.open(url, '_blank');
    } else {
        // For desktop or non-mobile, show chat window (or you can open another page, show an alert, etc.)
        const chat = document.getElementById('whatsapp-chat');
        chat.style.display = 'flex'; // Show the chat window (as before)
    }
}
window.onload = function() {
    const chat = document.getElementById('whatsapp-chat');
    chat.style.display = 'flex'; // Show the chat window when the page loads
};