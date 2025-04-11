📰 Fake News Detection

This simple web-based application allows users to detect whether a news statement is Fake or Real using a machine learning model deployed via a Flask API. The frontend is built with HTML and JavaScript, while the backend runs on Flask and is exposed via ngrok for public access.

🔍 Features

✅ User-friendly interface to input news text

🧠 Flask-powered backend prediction API

🌐 Deployed publicly using ngrok tunnel

🚨 Instant prediction of Fake or Real news

🔁 Real-time communication using fetch() and REST APIs

🛠️ Technologies Used

Frontend: HTML, JavaScript

Backend: Python, Flask

Deployment: ngrok (for public URL tunneling)

Model: (Simple fake news detection logic – replace with your ML model later)



🚀 How to Run This Project

Clone this repo

bash
Copy
Edit
git clone https://github.com/your-username/fake-news-detector.git
cd fake-news-detector
Install dependencies

bash
Copy
Edit
pip install -r requirements.txt
Run the Flask app

bash
Copy
Edit
python app.py
Expose with ngrok

bash
Copy
Edit
ngrok http 5000
Open the HTML file in a browser

Make sure your JavaScript fetch() URL matches the ngrok public URL shown in the terminal.


✨ Demo

🧪 Type some news into the box and click Check. You’ll instantly see if it’s 🚨 Fake or ✅ Real.


📬 Contact


For questions or suggestions, feel free to reach out to [niharikakapoor1704@gmail.com] or open an issue.

⚠️ Model Scope & Limitations

This Fake News Detection model was trained on a specific dataset, which means its accuracy and reliability are best when analyzing text with similar structure, vocabulary, and context as the training data.

Dataset-Specific Performance: The model may not generalize well to news from unfamiliar domains or writing styles it hasn't seen before.

Not a Universal Detector: It is not guaranteed to accurately classify all real-world news articles or social media posts.

Future Improvements: Enhancing the model with larger, more diverse datasets and fine-tuning with real-world examples can improve its performance and robustness.

📌 Always consider this tool as a supportive assistant, not a final judge for fake news classification.

🚀 Future Work

To enhance the Fake News Detection system, the following improvements are planned or suggested:

Train on Larger & More Diverse Datasets: Incorporating multilingual news articles, social media content, and region-specific news can improve accuracy and adaptability.

Model Optimization: Experimenting with advanced models like BERT, RoBERTa, or LSTM architectures to boost classification performance.

Confidence Score: Show a percentage-based confidence score for predictions to help users better understand the model's certainty.

User Feedback Loop: Allow users to flag incorrect predictions to retrain and improve the model continuously.

UI/UX Enhancement: Develop a polished frontend with animations, charts, and real-time feedback to make the experience more intuitive.

Deployment on Cloud: Host the model and frontend using services like Heroku, AWS, or Firebase for easier access and scalability.

Contributions and suggestions are welcome! Feel free to open an issue or submit a pull request. 😊


