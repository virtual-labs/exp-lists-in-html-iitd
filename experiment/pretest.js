
// Don't touch the below code

(function() {
  function buildQuiz() {
    // we'll need a place to store the HTML output
    const output = [];

    // for each question...
    myQuestions.forEach((currentQuestion, questionNumber) => {
      // we'll want to store the list of answer choices
      const answers = [];

      // and for each available answer...
      for (letter in currentQuestion.answers) {
        // ...add an HTML radio button
        answers.push(
          `<label>
            <input type="radio" name="question${questionNumber}" value="${letter}">
            ${letter} :
            ${currentQuestion.answers[letter]}
          </label>`
        );
      }

      // add this question and its answers to the output
      output.push(
        `<div class="question"> ${currentQuestion.question} </div>
        <div class="answers"> ${answers.join("")} </div>`
      );
    });

    // finally combine our output list into one string of HTML and put it on the page
    quizContainer.innerHTML = output.join("");
  }

  function showResults() {
    // gather answer containers from our quiz
    const answerContainers = quizContainer.querySelectorAll(".answers");

    // keep track of user's answers
    let numCorrect = 0;

    // for each question...
    myQuestions.forEach((currentQuestion, questionNumber) => {
      // find selected answer
      const answerContainer = answerContainers[questionNumber];
      const selector = `input[name=question${questionNumber}]:checked`;
      const userAnswer = (answerContainer.querySelector(selector) || {}).value;

      // if answer is correct
      if (userAnswer === currentQuestion.correctAnswer) {
        // add to the number of correct answers
        numCorrect++;

        // color the answers green
        //answerContainers[questionNumber].style.color = "lightgreen";
      } else {
        // if answer is wrong or blank
        // color the answers red
        answerContainers[questionNumber].style.color = "red";
      }
    });

    // show number of correct answers out of total
    resultsContainer.innerHTML = `${numCorrect} out of ${myQuestions.length}`;
  }

  const quizContainer = document.getElementById("quiz");
  const resultsContainer = document.getElementById("results");
  const submitButton = document.getElementById("submit");
  

// Don't touch the above code




// Write your MCQs here --- Start --- --------------------

  const myQuestions = [
    {
      question: "Q1. Which one of the following is a type of lists that HTML supports?",
      answers: {
        a: "Ordered lists",
        b: "Unordered lists",
        c: "Discription lists",
        d: "All of the above"
      },
      correctAnswer: "d"
    },

    {
      question: "Q2. An unordered list in HTML document starts with a.",
      answers: {
        a: "ul",
        b: "ol",
        c: "li",
        d: "None"
      },
      correctAnswer: "a"
    },

    {
      question: "Q3. What is the default start of item marker in ordered list?",
      answers: {
        a: "1",
        b: "i",
        c: "L",
        d: "None of the above"
      },
      correctAnswer: "a"
    },
	
	{
      question: "Q4. What is the default item marker in unordered lists of HTML?",
      answers: {
        a: "Circle",
        b: "Marker",
        c: "disc",
        d: "None of the above"
      },
      correctAnswer: "c"
    },
	
	{
      question: "Q5.HTML &lt;dl&gt; tag defines the _____.,
      answers: {
        a: "Ordered list",
        b: "Unordered list",
        c: "Descriptive list",
        d: "Description list"
      },
      correctAnswer: "d"
    },
  ];




// ---------------------------- End -------------------------------








  // display quiz right away
  buildQuiz();

  // on submit, show results
  submitButton.addEventListener("click", showResults);
})();
