let httpResponse = document.getElementById("httpResponse");
let sendPostRequestBtn = document.getElementById("sendPostRequestBtn");
let requestStatus = document.getElementById("requestStatus");
let requestBody = document.getElementById("requestBody");



function sendThePostHttpResquest() {
    let data = requestBody.value;
    let requestUrl = "https://gorest.co.in/public-api/users";
    let options = {
        method: "POST",
        headers: {
            "Content-Type": 'application/json',
            Accept: 'application/json',
            Authorization: 'Bearer cac876a104b9b3fdf42b9e2f071e8f655a60e0ac18623de7a0f5f1c786393c7f'
        },
        body: data
    };

    fetch(requestUrl, options)
        .then(function(response) {
            return response.json();
        })
        .then(function(data) {
            requestStatus.textContent = data.code;
            httpResponse.textContent = JSON.stringify(data);
            console.log(data);
        });
}

sendPostRequestBtn.onclick = function() {
    sendThePostHttpResquest();
};