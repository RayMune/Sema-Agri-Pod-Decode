🎙️ Sema Agri-Pod
Localized AI Market Intelligence for the Modern Kenyan Farmer.
Sema Agri-Pod is an AI-powered platform that converts farm-specific data into personalized, 5-minute audio briefings. By combining Google Gemini 1.5 with localized Edge-TTS voices (English & Swahili), it transforms simple inputs—like crop type and location—into conversational "radio-style" advice on market pricing and storage, bypassing literacy barriers to deliver data-driven consultancy directly to mobile phones.
✨ Key Features
AI-Scripted Briefings: Generates ~800-word conversational scripts using Google Gemini 1.5 Flash.
Localized Neural Voices: Uses Kenyan-accented voices (en-KE and sw-KE) for a familiar, trustworthy "radio" feel.
Contextual Intelligence: Provides specific advice on harvest timing, market trends in specific Kenyan towns, and storage solutions.
Minimalist UX: A "Safaricom Green" inspired, mobile-first interface designed for ease of use.
Multi-lingual Support: Seamlessly toggles between English and Swahili.
🛠️ Tech Stack
Backend: Python / Flask
LLM: Google Gemini 1.5 Flash API
TTS: Edge-TTS (Neural Voice Synthesis)
Frontend: HTML5, CSS3 (Inter Font), Vanilla JavaScript
Environment: Python-Dotenv for secure API management
🚀 Getting Started
1. Clone the Repository
code
Bash
git clone https://github.com/yourusername/sema-agri-pod.git
cd sema-agri-pod
2. Install Dependencies
code
Bash
pip install flask google-generativeai edge-tts python-dotenv
3. Setup Environment Variables
Create a .env file in the root directory:
code
Env
GEMINI_API_KEY=your_google_gemini_api_key_here
4. Run the Application
code
Bash
python app.py
Visit http://127.0.0.1:5000 in your browser.
📂 Project Structure
code
Text
├── app.py              # Flask backend & AI logic
├── .env                # API keys (hidden)
├── static/
│   ├── css/            # Minimalist styling
│   ├── audio/          # Generated podcast storage
│   └── img/            # Logos & Assets
└── templates/
    └── index.html      # Single-page application UI
📖 How it Works
Input: The farmer enters details (Name, Crop, Location, Harvest Date).
Brain: Gemini 1.5 Flash analyzes the data and writes a 5-minute "Radio Presenter" script.
Voice: Edge-TTS converts the text into a high-quality .mp3 using a Kenyan persona.
Output: The farmer plays the audio briefing directly from their phone.
🤝 Partnerships & Credits
Developed for the Sema Agri Hackathon, focusing on bridging the digital divide in agriculture.
Technology	Role
Google Gemini	Generative Intelligence & Scripting
Safaricom	Connectivity & UI Inspiration
Edge-TTS	Localized Speech Synthesis
📄 License
This project is licensed under the MIT License - see the LICENSE file for details.
Created with ❤️ for the Kenyan Farming Community.
