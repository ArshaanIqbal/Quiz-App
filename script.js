// Define quiz questions and answers
const quizData = [
    {
      question: "What is the capital of France?",
      options: ["Paris", "London", "Madrid", "Rome"],
      answer: "Paris"
    },
    {
      question: "What is the largest planet in our solar system?",
      options: ["Venus", "Jupiter", "Saturn", "Mars"],
      answer: "Jupiter"
    },
    {
      question: "Who painted the Mona Lisa?",
      options: ["Pablo Picasso", "Vincent van Gogh", "Leonardo da Vinci", "Rembrandt"],
      answer: "Leonardo da Vinci"
    },
    {
      question: "What is the capital of Japan?",
      options: ["Tokyo", "Seoul", "Beijing", "Shanghai"],
      answer: "Tokyo"
    },
    {
      question: "What is the tallest mountain in the world?",
      options: ["Mount Kilimanjaro", "Mount Everest", "Mount Fuji", "Mount Denali"],
      answer: "Mount Everest"
    }
  ];
  
  // Get quiz container and submit button
  const quizContainer = document.getElementById("quiz");
  const submitButton = document.getElementById("submit-btn");
  
  // Create quiz
  function createQuiz() {
    const output = [];
  
    // For each question
    quizData.forEach((questionData, questionIndex) => {
      // Add question text
      output.push(`<div class="question">${questionData.question}</div>`);
  
      // Add options
      questionData.options.forEach((option, optionIndex) => {
        output.push(`
          <div class="option">
            <input type="radio" id="q${questionIndex}_o${optionIndex}" name="q${questionIndex}" value="${option}">
            <label for="q${questionIndex}_o${optionIndex}">${option}</label>
          </div>
        `);
      });
    });
  
    // Add quiz to HTML
    quizContainer.innerHTML = output.join("");
  }
  
  // Calculate quiz score and display result
  function calculateScore() {
    let score = 0;
  
    // For each question
    quizData.forEach((questionData, questionIndex) => {
      // Get selected answer
      const selectedAnswer = document.querySelector(`input[name="q${questionIndex}"]:checked`).value;
  
      // Check answer
      if (selectedAnswer === questionData.answer) {
        score++;
      }
    });
  
    // Display result
    const resultContainer = document.getElementById("result");
    resultContainer.innerHTML = `You scored ${score} out of ${quizData.length}!`;
  }
  
  // Initialize quiz
  createQuiz();
  
  // Add event listener to submit button
  submitButton.addEventListener("click", calculateScore);
  