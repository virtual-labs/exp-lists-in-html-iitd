
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
      question: "Q1. ‹li› tag is used for inserting List item in both ordered and unordered list.",
      answers: {
        a: "True",
        b: "False"        
      },
      correctAnswer: "a"
    },

    {
      question: "Q2. Which tag is used for define list items in HTML",
      answers: {
        a: "<li> tag",
        b: "<list> tag",
	c: "<dl> tag",
	d: "None of the above"
      },
      correctAnswer: "a"
    },

    {
      question: "Q3. Select the correct tag used for creating an ordered list with letters.",
      answers: {
        a: "&lt;ol type = 'A'&gt;&lt;/ol&gt;",
        b: " &lt;ul type = 'A'&gt;&lt;/ul&gt;",
        c: "Both(a)&(b)",
        d: "None of the above"      
      },
      correctAnswer: "a"
    },
	
	{
      question: "Q4. Select the correct tag for inserting a list having circle as a bullet.",
      answers: {
        a: "&lt;ol&gt;",
        b: "&lt;ul&gt;",
        c: "Both(a)&(b)",
        d: "None of the above"      
      },
      correctAnswer: "b"
    },
	
	{
      question: "Q5. How can you make a list that lists the items with numbers?",
      answers: {
        a: "&lt;ol type = '1'&gt;&lt;/ol&gt;",
        b: "&lt;ol type = 'number'&gt;&lt;/ol&gt;",
        c: "Both(a)&(b)",
        d: "None of the above" 
      },
      correctAnswer: "a"
    },
  ];




// ---------------------------- End -------------------------------








  // display quiz right away
  buildQuiz();

  // on submit, show results
  submitButton.addEventListener("click", showResults);
})();
