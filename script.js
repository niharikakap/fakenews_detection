async function checkNews() {
    const newsText = document.getElementById("newsText").value;
    const result = document.getElementById("result");

    if (!newsText.trim()) {
        result.innerHTML = "Please enter some text!";
        return;
    }

    // Replace 'http://xyz123.ngrok.io' with your actual ngrok URL
    const response = await fetch('http://xyz123.ngrok.io/predict', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ text: newsText })
    });

    // Check if the response is valid and handle errors
    if (response.ok) {
        const data = await response.json();

        // Display the result based on prediction
        if (data.prediction === 0) {
            result.innerHTML = "Fake News";
            result.style.color = "red";
        } else {
            result.innerHTML = "Real News";
            result.style.color = "green";
        }
    } else {
        result.innerHTML = "Error: Unable to get prediction!";
        result.style.color = "orange";
    }
}
