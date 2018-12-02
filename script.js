const DATA = [
    {question: 'Which is a better jacket for Winter?',
    answer: ['Down Puffy Jacket', 'Wool Pea Coat', 'Gore-Tex Rain Jacket', 'Cotton Hoodie'],
    correctAnswer: 'Gore-Tex Rain Jacket'},
   
    {question: 'Although practical, which item should you never use?',
    answer: ['Umbrella', 'Library Card', 'Trader Joes Everything but the Bagel Seasoning', 'Mini-Disc Music Player'],
    correctAnswer: 'Umbrella'},
   
    {question: 'When out on your first hike, what footwear is most fashionable on the trail?',
    answer: ['Stiletto Heels', 'Bunny Slippers', 'Birkenstocks', 'Hiking Boots'],
    correctAnswer: 'Hiking Boots'},
   
    {question: 'What matches with flannel?',
    answer: ['Everything', 'Blue Jeans', 'Long-Johns', 'Doc Martens'],
    correctAnswer: 'Everything'},

    {question: 'Which Pacific Northwest university has the best football program?',
    answer: ['Washington State University Cougars', 'Oregon State University Beavers', 'University of Washington Huskies', 'Evergreen State Geoducks'],
    correctAnswer: 'University of Washington Huskies'},

    {question: 'Coffee from which store will give you the most street cred?', 
    answer: ['Dunkin Donuts', 'Starbucks', 'Dutch Bros', 'Stumptown'],
    correctAnswer: 'Stumptown'},

    {question: 'If you wanted to take pictures from the Space Needle, which state should you visit first?',
    answer: ['Oregon', 'Idaho', 'British Columbia', 'Washington'],
    correctAnswer: 'Washington'},

    {question: 'If you wanted to experience outdoor fine dining served in a parking lot, which city would you visit?',
    answer: ['Portland', 'Seattle', 'Cle Elum', 'Burns'],
    correctAnswer: 'Portland'},

    {question: 'If you are going to float a river, which item is the most important?',
    answer: ['Beer', 'Inner-Tube', 'Waterproof Speaker', 'Sunscreen'],
    correctAnswer: 'Waterproof Speaker'},

    {question: 'If it is mid-March and the weather forecast predicts a week of sun, which phrase is taboo so as to maintain the forecast?',
    answer: ['Winter is going to last until June!', 'I sure wish I had a plane ticket to Hawaii', 'Spring is here!!!', 'My bracket is going to win the office March Madness money pool'],
    correctAnswer: 'Spring is here!!!'}
]

let questionCounter = 0;
let scoreCounter = 0;

function handleStartPage() {
  $('.startDiv').html(startPageText());
  $('.scoreTally').html(0);
  $('.questionTally').html(0);

}

function startPageText() {
  return `<h2 class="startPageStyle">This quiz will test how well you will survive in the great and wild Pacific Northwest.
  Do you have what it takes?</h2>
  <button class="js-quiz-start buttonStyle">Start Quiz</button>`
}

function questionTemplate() {

  return `<div class="questionStyle">
      <h3>${DATA[questionCounter].question}</h3>
  </div>
  <form class="questionContainer formStyle" method="" action="">

  <fieldset class="answer"> 
    <legend>Choose Your Answer Wisely!</legend>
  
      
      <label for="answerOne" class="answerStyle"><input type="radio"  id="answerOne" name="answer" value="${DATA[questionCounter].answer[0]}" required>${DATA[questionCounter].answer[0]}</label>
      
  
    
  
      <label for="answerTwo" class="answerStyle">
      <input type="radio"  id="answerTwo" name="answer" value="${DATA[questionCounter].answer[1]}" required>${DATA[questionCounter].answer[1]}
      </label>
      
  
    
  
      <label class="answerStyle" for="answerThree" class="answerStyle">
      <input type="radio" id="answerThree" name="answer" value="${DATA[questionCounter].answer[2]}" required>${DATA[questionCounter].answer[2]}
      </label>
      
  
    
  
      <label for="answerFour" class="answerStyle">
      <input type="radio"  id="answerFour" name="answer" value="${DATA[questionCounter].answer[3]}" required>${DATA[questionCounter].answer[3]}
      </label>
      
  
  </fieldset>
  <fieldset class="submitDivStyle">
  <div class="">
    
      <button type="submit" class="buttonStyle">Submit</button>
    
  </div>
  </fieldset>


</form>`;
};

function handleButtonStartQuiz() {
    $('.container').on("click", '.js-quiz-start', function(event) {
      event.preventDefault();
      $('.startDiv').html(questionTemplate());
      displayFirstQuestionTally();
      
    });
};

function displayFirstQuestionTally() {
  if(questionCounter === 0) {
    $('.questionTally').html(1);
  }
}

function handleGenerateQuestionButton() {
  $('.startDiv').on("click", '.js-next-question',function(event) {
        event.preventDefault();
        addQuestionCounter();

        $('.startDiv').html(questionTemplate());
        
  });
};




     


function userAnswerSubmit() {
  $('.container').on("submit", '.questionContainer',function(event) {
      event.preventDefault();
      const userAnswer = $("input[type='radio']:checked").val();
    
      if (questionCounter < 9) {
        if(DATA[questionCounter].correctAnswer === userAnswer) {
          correctAnswerFeedback();
          addScoreCounter();
        }
        else {
          wrongAnswerFeedback();
        };
      
      }
      else {
        if (DATA[questionCounter].correctAnswer === userAnswer) {
          lastQuestionCorrectAnsFeedback();
          addScoreCounter();
        }
        else {
          lastQuestionIncorrectAnsFeedback();
        }
      }

    });


};

function addQuestionCounter() {
  questionCounter++;
  $('.questionTally').html(questionCounter + 1);
}

function addScoreCounter() {
  scoreCounter++;
  $('.scoreTally').html(scoreCounter);
}

function correctAnswerFeedback() {
  $('.startDiv').html(goodJobFeedback());
  
};

function goodJobFeedback() {
   return `<div class="feedbackDiv">
    <h2>Good Job! You may yet survive!</h2>
    <button class="js-next-question buttonStyle" placeholder="Next Question">Next Question</button>
    </div>`;
}

function wrongAnswerFeedback() {
  $('.startDiv').html(badJobFeedback());
};

function badJobFeedback() {
  return `<div class="feedbackDiv">
    <h2>Not Quite...</h2>
    <h3>We don't judge you, but you should have answered "${DATA[questionCounter].correctAnswer}".</h3>
    <button class="js-next-question buttonStyle" placeholder="Next Question">Next Question</button>
    </div>`;
}

function lastQuestionCorrectAnsFeedback() {
  $('.startDiv').html(lastQuestionGoodJobFeedback());

};

function lastQuestionIncorrectAnsFeedback() {
  $('.startDiv').html(lastQuestionBadJobFeedback());  
}

function lastQuestionGoodJobFeedback() {
  return `<div class="feedbackDiv">
    <h2>Good Job! You may yet survive!</h2>
    <button class="js-see-results buttonStyle">See Results</button>
    </div>`;
};

function lastQuestionBadJobFeedback() {
  return `<div class="feedbackDiv">
    <h2>Not Quite...</h2>
    <h3>We don't judge you, but you should have answered "${DATA[questionCounter].correctAnswer}".</h3>
    <button class="js-see-results buttonStyle">See Results</button>
    </div>`;
}
 
function handleResultsPage() {
  quizReload();   
  
  function userGreatResults() {
      return `<div class="resultsDiv">
     <h2>You Totally Rock!!</h2>
     <h3>Feel free to move here</h3>
     <button class="reloadQuizButton buttonStyle">Start Over</button>
     </div>`;
    }
  
  function userOkayResults() {
      return `<div class="resultsDiv">
     <h2>You Barely Survived</h2>
     <h3>Feel free to Visit!</h3>
     <button class="reloadQuizButton buttonStyle">Start Over</button>
     </div>`;
    }

  
  function userBadResults() {
      return `<div class="resultsDiv">
     <h2>Wow! You didn't survive!</h2>
     <h3>Feel free to stay where you currently live!</h3>
     <button class="reloadQuizButton buttonStyle">Start Over</button>
     </div>`;
    }

  if (scoreCounter >= 8) {
    $('.startDiv').html(userGreatResults());
  }
  else if (scoreCounter <= 5) {
    $('.startDiv').html(userBadResults());
  }
  else {
    $('.startDiv').html(userOkayResults());
  };
};

function handleSeeResultsButton() {
   $('.startDiv').on('click', '.js-see-results', function(event) {
     event.preventDefault();
     handleResultsPage();

   });

  
}

function quizReload() {
  $('.container').on("click", '.reloadQuizButton',function(event) {
    event.preventDefault();
    scoreCounterReset();
    questionCounterReset();
    $('.startDiv').html(startPageText());
    $('.scoreTally').html(0);
    $('.questionTally').html(0);
 
  });

};

function scoreCounterReset() {
  return scoreCounter = 0; 
}

function questionCounterReset() {
  return questionCounter = 0;
}



function runQuiz() {
  handleStartPage();
  handleButtonStartQuiz();
  quizReload();  
  handleGenerateQuestionButton();
  handleSeeResultsButton(); 
  userAnswerSubmit();

};

$(runQuiz);