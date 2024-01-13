
function sendMessage(message) {
    const request = new XMLHttpRequest();
    request.open("POST", "https://discord.com/api/webhooks/1181983106576695386/CD8hTqLzY2EOsaQ-9YOgyWFWnr2-BnppsoocVAdwVKWdiKW8arMUU1areLzutGyXKYLh");

    request.setRequestHeader('Content-type', 'application/json');

    const params = {
        username: "Lore Link",
        avatar_url: "https://media.discordapp.net/attachments/500361970952830979/1195773713187098625/image.png?ex=65b5360d&is=65a2c10d&hm=a3a9e0c9fbdb7eeff4b41de6a929916fbbf62a5e7e6fbd747fe92b6520fc2851&=&format=webp&quality=lossless",
        content: message
    }

    request.send(JSON.stringify(params));
}

function buttonSend() {
    const message = document.getElementById("input-text").value
    sendMessage(message);
}