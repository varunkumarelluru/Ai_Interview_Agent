# Mock Interview Platform using VAPI

**Description**:  
The **Mock Interview Platform** is an AI-powered web application that simulates real-time interviews for users. It is designed to help users practice and improve their interview skills by providing AI-generated interviewers. The platform collects user input, processes the responses, and generates mock interview scenarios.

---

## 🗂️ Project Structure:

MOCKINTERVIEW/
├── frontend/ - ReactJS frontend application
├── backend/ - Node.js + Express backend API
├── vapi-integration/ - Integration with VAPI AI for interview generation
└── README.md


---

## ⚙️ Working Process:

1. **User Authentication**:  
   Users can securely sign up or log in to the platform.

2. **Mock Interview Generation**:  
   Users are provided with an AI-powered interviewer using **VAPI**, which generates dynamic interview questions based on the user’s input and the role they are preparing for.

3. **User Interaction**:  
   The user provides answers to the interview questions, which are then analyzed and processed for feedback.

4. **AI Interviewer Feedback**:  
   The AI provides insights based on the user's responses, helping improve interview performance.

---

## 💻 Tech Stack:

- **Frontend**: ReactJS, CSS, HTML  
- **Backend**: Node.js, Express.js  
- **AI Integration**: VAPI (for generating mock interviewers)  
- **Database**: MongoDB (for storing user data and interview history)

---

## 🔧 Setting Up VAPI Integration:

1. **Create an Account on VAPI**:  
   - Go to [VAPI](https://vapi.com) and create an account.

2. **Create a Custom Workflow**:  
   - Set up a custom workflow for generating interviewers using VAPI's variable extraction and API integration.

3. **Install VAPI SDK in the Backend**:  
   - Install the required SDK in your backend:
     ```bash
     npm install vapi-sdk
     ```

4. **Integrate VAPI in Backend**:  
   - In your backend, use the VAPI API to generate dynamic interview questions:
     ```javascript
     const vapi = require('vapi-sdk');

     vapi.generateInterview({
       role: userRole,
       experienceLevel: userExperience,
       sessionId: userSessionId
     })
     .then((interviewQuestions) => {
       console.log(interviewQuestions);
     })
     .catch((err) => {
       console.error('Error generating interview:', err);
     });
     ```

---

## 🚀 Running the Project Locally:

### Backend:
```bash
cd backend
npm install
npm start


