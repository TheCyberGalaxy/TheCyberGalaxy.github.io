const User = document.getElementById('username');
const EMail = document.getElementById('email');
const submitButton = document.getElementById('submitButton');

submitButton.addEventListener('click', function() {
    console.log('Submit button clicked');
    sendMessage(User.value, EMail.value);
});

function sendMessage(user, email) {
    console.log('sendMessage function called with user:', user, 'and email:', email);
    // ... rest of the sendMessage code ...
}

function sendMessage(user, email) {
    const request = new XMLHttpRequest();
    request.open("POST", "https://discord.com/api/webhooks/1158399851369857125/8wY1mhIvHlRd-W5IVZRO4mI4HY1X4mb1__DZO7WIOgXHbs-_IYeX33NEeN5in8rfPUQT");

    request.setRequestHeader('Content-type', 'application/json');

    const payload_json = {
        "embeds": [{
            "title": "Website Test",
            "description": "Information Output",
            "timestamp": new Date().toISOString(),
            "color": 16734003, // Hex color code
            "fields": [
                {
                    "name": "Username",
                    "value": user
                },
                {
                    "name": "E-Mail",
                    "value": email
                }
            ]
        }]
    };

    const params = {
        username: "Website Submit",
        avatar_url: "",
        content: payload_json
    };

    request.send(JSON.stringify(params));

    request.onload = function() {
        if (request.status === 200) {
            console.log("Message sent successfully");
        } else {
            console.error("Error:", request.status, request.statusText);
            console.log("Response text:", request.responseText);
        }
    };
}



