# DELI User Creation Update

DELI, a social network, aims to enhance the user experience and increase registrations. This repository presents the solution to the challenge, involving the creation of a user-friendly web interface using the React framework. Additionally, a Python-based backend, implemented with FastAPI, handles user creation and confirmation emails.

## Features:
- **User Creation Interface:** A user-friendly web interface for creating new accounts.
- **Backend Logic:** Manages user creation and handles email confirmation.
- **Framework:** Built using React JS for the frontend and FastAPI for the backend.
- **Email Confirmation:** Integration for sending confirmation emails to users.

## Technologies:
- **Frontend:** Javascript (ES6+), React JS
- **Backend:** Python, FastAPI
- **Email Service:** Mailgun

## Getting Started:
1. Clone the repository.

### Setting up React App:
1. Navigate to the frontend directory:
  - cd .\deli-user-creation-app\
2. Install dependencies using npm:
  - npm install
3. Start the React development server:
  -npm start
Your React app should now be running at http://localhost:3000.

### Setting up FastAPI API:
1. Navigate to the backend directory:
  - cd .\deli-user-creation-api\
2. Set up a virtual environment:
  -python3 -m venv .venv
3. Activate the virtual environment:
    - .venv\Scripts\activate
4. Install dependencies using pip:
  - pip install -r requirements.txt
5. Add file .env to root directory of api project and update its values like in .env.example file.
6. Start the FastAPI server:
  - python main.py
Your FastAPI API should now be running at http://localhost:3001.
