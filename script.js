// DOM Elements
const startButton = document.getElementById('start-btn');
const nextButton = document.getElementById('next-btn');
const retakeButton = document.getElementById('retake-btn');
const reviewPersistentButton = document.getElementById('review-persistent-btn');
const reviewSessionButton = document.getElementById('review-session-btn');
const clearReviewButton = document.getElementById('clear-review-btn');
const backToHomeButton = document.getElementById('back-to-home-btn');

const welcomeScreen = document.getElementById('welcome-screen');
const quizScreen = document.getElementById('quiz-screen');
const resultScreen = document.getElementById('result-screen');
const reviewScreen = document.getElementById('review-screen');

const questionElement = document.getElementById('question-text');
const answerButtonsElement = document.getElementById('answer-buttons');
const reviewContainer = document.getElementById('review-container');
const reviewTitle = document.getElementById('review-title');

const questionCounterElement = document.getElementById('question-counter');
const scoreDisplayElement = document.getElementById('score-display');
const finalScoreElement = document.getElementById('final-score');
const scoreMessageElement = document.getElementById('score-message');
const incorrectCountSpan = document.getElementById('incorrect-count');

// State Variables
let shuffledQuestions, currentQuestionIndex;
let sessionIncorrectQuestions = [];
let persistentIncorrectQuestions = [];
let score = 0;
const QUIZ_LENGTH = 10;

// --- Core Functions ---

function startQuiz() {
    score = 0;
    sessionIncorrectQuestions = []; // Reset for the new session
    showScreen(quizScreen);
    
    shuffledQuestions = questions.sort(() => Math.random() - 0.5).slice(0, QUIZ_LENGTH);
    currentQuestionIndex = 0;
    
    updateHeader();
    setNextQuestion();
}

function setNextQuestion() {
    resetState();
    if (currentQuestionIndex < shuffledQuestions.length) {
        showQuestion(shuffledQuestions[currentQuestionIndex]);
        updateHeader();
    } else {
        showResults();
    }
}

function showQuestion(question) {
    questionElement.innerHTML = question.question;

    // Shuffle the answers to randomize their order
    const shuffledAnswers = [...question.answers].sort(() => Math.random() - 0.5);

    shuffledAnswers.forEach(answer => {
        const button = document.createElement('button');
        button.innerText = answer.text;
        button.classList.add('btn');
        if (answer.correct) {
            button.dataset.correct = answer.correct;
        }
        button.addEventListener('click', selectAnswer);
        answerButtonsElement.appendChild(button);
    });
}

function selectAnswer(e) {
    const selectedButton = e.target;
    const correct = selectedButton.dataset.correct === "true";
    
    if (correct) {
        score++;
    } else {
        const incorrectQ = {
            question: shuffledQuestions[currentQuestionIndex],
            selectedAnswer: selectedButton.innerText
        };
        sessionIncorrectQuestions.push(incorrectQ);
        addIncorrectQuestionToPersistentStorage(shuffledQuestions[currentQuestionIndex]);
    }
    
    Array.from(answerButtonsElement.children).forEach(button => {
        setStatusClass(button, button.dataset.correct === "true");
        button.disabled = true;
    });
    
    updateHeader();
    
    if (shuffledQuestions.length > currentQuestionIndex + 1) {
        nextButton.classList.remove('hide');
    } else {
        setTimeout(showResults, 1500);
    }
}

function showResults() {
    showScreen(resultScreen);
    finalScoreElement.innerText = `${score} / ${QUIZ_LENGTH}`;
    
    const scorePercent = (score / QUIZ_LENGTH) * 100;
    if (scorePercent >= 80) {
        scoreMessageElement.innerText = "Excellent work!";
    } else if (scorePercent >= 60) {
        scoreMessageElement.innerText = "Good job! Keep practicing.";
    } else {
        scoreMessageElement.innerText = "You can do better. Review your answers!";
    }

    if (sessionIncorrectQuestions.length > 0) {
        reviewSessionButton.classList.remove('hide');
    } else {
        reviewSessionButton.classList.add('hide');
    }
}

// --- Review & Persistence Functions ---

function loadPersistentIncorrectQuestions() {
    const stored = localStorage.getItem('persistentIncorrectQuestions');
    persistentIncorrectQuestions = stored ? JSON.parse(stored) : [];
    updateIncorrectCount();
}

function addIncorrectQuestionToPersistentStorage(question) {
    // Avoid duplicates
    const isAlreadyStored = persistentIncorrectQuestions.some(q => q.question === question.question);
    if (!isAlreadyStored) {
        persistentIncorrectQuestions.push(question);
        localStorage.setItem('persistentIncorrectQuestions', JSON.stringify(persistentIncorrectQuestions));
        updateIncorrectCount();
    }
}

function displayReview(questionList, title) {
    reviewTitle.innerText = title;
    reviewContainer.innerHTML = ''; // Clear previous content
    
    if (questionList.length === 0) {
        reviewContainer.innerHTML = '<p>No incorrect answers to show. Great job!</p>';
    }

    questionList.forEach(item => {
        // The item can be a full question object or an object with question and selectedAnswer
        const question = item.question ? item.question : item;
        
        const questionBlock = document.createElement('div');
        questionBlock.classList.add('review-question-block');

        const questionTextElement = document.createElement('div');
        questionTextElement.classList.add('review-question-text');
        questionTextElement.innerHTML = `Q: ${question.question}`;
        questionBlock.appendChild(questionTextElement);
        
        question.answers.forEach(answer => {
            const answerElement = document.createElement('div');
            answerElement.classList.add('review-answer');
            answerElement.innerText = answer.text;
            
            if (answer.correct) {
                answerElement.classList.add('correct-answer');
                answerElement.innerText += ' (Correct Answer)';
            } else if (item.selectedAnswer && answer.text === item.selectedAnswer) {
                answerElement.classList.add('user-incorrect');
                answerElement.innerText += ' (Your Answer)';
            }
            questionBlock.appendChild(answerElement);
        });

        reviewContainer.appendChild(questionBlock);
    });

    showScreen(reviewScreen);
}

function clearAllReviewedAnswers() {
    if (confirm("Are you sure you want to clear your entire history of incorrect answers? This cannot be undone.")) {
        persistentIncorrectQuestions = [];
        localStorage.removeItem('persistentIncorrectQuestions');
        showHomeScreen();
    }
}

// --- UI & Utility Functions ---

function showScreen(screen) {
    document.querySelectorAll('.screen').forEach(s => s.classList.add('hide'));
    screen.classList.remove('hide');
}

function showHomeScreen() {
    showScreen(welcomeScreen);
    updateIncorrectCount();
}

function updateIncorrectCount() {
    const count = persistentIncorrectQuestions.length;
    incorrectCountSpan.innerText = count;
    if (count > 0) {
        reviewPersistentButton.classList.remove('hide');
    } else {
        reviewPersistentButton.classList.add('hide');
    }
}

function resetState() {
    nextButton.classList.add('hide');
    while (answerButtonsElement.firstChild) {
        answerButtonsElement.removeChild(answerButtonsElement.firstChild);
    }
}

function setStatusClass(element, correct) {
    if (correct) element.classList.add('correct');
    else element.classList.add('incorrect');
}

function updateHeader() {
    questionCounterElement.innerText = `Question ${currentQuestionIndex + 1} / ${QUIZ_LENGTH}`;
    scoreDisplayElement.innerText = `Score: ${score}`;
}

// --- Event Listeners ---
startButton.addEventListener('click', startQuiz);
retakeButton.addEventListener('click', startQuiz);
nextButton.addEventListener('click', () => {
    currentQuestionIndex++;
    setNextQuestion();
});

reviewSessionButton.addEventListener('click', () => displayReview(sessionIncorrectQuestions, "Reviewing Answers from Last Session"));
reviewPersistentButton.addEventListener('click', () => displayReview(persistentIncorrectQuestions, "Reviewing All Incorrect Answers"));
clearReviewButton.addEventListener('click', clearAllReviewedAnswers);
backToHomeButton.addEventListener('click', showHomeScreen);


// --- Initial Load ---
document.addEventListener('DOMContentLoaded', () => {
    loadPersistentIncorrectQuestions();
    showHomeScreen();
});