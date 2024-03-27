// Set  the CSS rules.
const styleSet = window.WebChat.createStyleSet({
    bubbleBackground: 'rgba(0, 0, 255, .1)',
    bubbleFromUserBackground: 'rgba(0, 255, 0, .1)',
    rootHeight: '500px',
    rootWidth: '400px',
    backgroundColor: '#FAF8F3',
});

// After generated, you can modify the CSS rules.
// Change font family and weight. 
styleSet.textContent = {
    ...styleSet.textContent,
    fontFamily: "'Comic Sans MS', 'Arial', sans-serif",
    fontWeight: 'bold'
};

// Set the avatar options. 
const avatarOptions = {
    botAvatarImage: 'https://bot-framework.azureedge.net/bot-icons-v1/chat-bot-dev-chuppy_FTwGTkGSq2FLD0B8bc5Zb6IBiW33R1Gq45t1G6EYRM14Lh.png',
    botAvatarInitials: '馨',
    userAvatarInitials: 'C'
};

window.WebChat.renderWebChat({
    directLine: window.WebChat.createDirectLine({
        token: '_65h1OlObdE.T5rXvnddR2tF4WgYJmxrnciXqnuSockxETKaHWr2h8o'
    }),
    styleSet,
    styleOptions: avatarOptions
}, document.getElementById('webchat'));



// function openBot() {
//     document.getElementById("webchat").style.display = "block";
//   }
  
//   function closeBot() {
//     document.getElementById("webchat").style.display = "none";
//   }

function openBot() {
    var button = document.querySelector('.open_button');
    var chatDiv = document.querySelector('.row_robot');

    if (chatDiv.style.display === 'none' || chatDiv.style.display === '') {
        chatDiv.style.display = 'block';
        button.innerHTML = '<i class="fa-solid fa-xmark"></i>';
    } else {
        chatDiv.style.display = 'none';
        button.innerHTML = '<i class="fa-solid fa-robot"></i>';
    }
}