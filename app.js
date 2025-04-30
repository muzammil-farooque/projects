var questions = [
    {
        question: "What does HTML stand for?",
        option1: "Hyperlinks and Text Markup Language",
        option2: "Hypertext Markup Language",
        option3: "Home Tool Markup Language",
        correctOption: "Hypertext Markup Language",
    },
    {
        question: "Who is making the Web standards?",
        option1: "Google",
        option2: "The World Wide Web Consortium",
        option3: "Microsoft",
        correctOption: "The World Wide Web Consortium",
    },
    {
        question: "Choose the correct HTML element for the largest heading:",
        option1: "<heading>",
        option2: "<h6>",
        option3: "<h1>",
        correctOption: "<h1>",
    },
    {
        question: "What is the correct HTML element for inserting a line break?",
        option1: "<linebreak>",
        option2: "<br>",
        option3: "<break>",
        correctOption: "<br>",
    },
    {
        question: "What is the correct HTML for adding a background color?",
        option1: '<body bg="yellow">',
        option2: "<background>yellow</background>",
        option3: '<body style="background-color:yellow;">',
        correctOption: '<body style="background-color:yellow;">',
    },
    {
        question: "Choose the correct HTML element to define important text:",
        option1: "<strong>",
        option2: "<b>",
        option3: "<i>",
        correctOption: "<strong>",
    },
    {
        question: "Choose the correct HTML element to define emphasized text:",
        option1: "<italic>",
        option2: "<i>",
        option3: "<em>",
        correctOption: "<em>",
    },
    {
        question: "What is the correct HTML for creating a hyperlink?",
        option1: "<a>http://www.w3schools.com</a>",
        option2: '<a href="http://www.w3schools.com">W3Schools</a>',
        option3: '<a url="http://www.w3schools.com">W3Schools.com</a>',
        correctOption: '<a href="http://www.w3schools.com">W3Schools</a>',
    },
];

var htmlques = document.getElementById('ques');
var htmlopt1 = document.getElementById('opt1');
var htmlopt2 = document.getElementById('opt2');
var htmlopt3 = document.getElementById('opt3');
var getBtn = document.getElementById('btn');
var index = 0;
var score = 0;

// Create timer display
var timerDisplay = document.createElement('div');
timerDisplay.style.fontSize = "20px";
timerDisplay.style.marginBottom = "20px";
timerDisplay.style.color = "#6a11cb";
timerDisplay.id = "timer";
document.querySelector('.quiz-container').insertBefore(timerDisplay, document.querySelector('h1'));

var totalTime = 300; // 5 minutes (300 seconds)

function startTimer() {
    var timer = setInterval(function () {
        var minutes = Math.floor(totalTime / 60);
        var seconds = totalTime % 60;
        timerDisplay.innerText = `Time Left: ${minutes}m ${seconds < 10 ? '0' + seconds : seconds}s`;

        totalTime--;

        if (totalTime < 0) {
            clearInterval(timer);
            endQuiz();
        }
    }, 1000);
}

function endQuiz() {
    Swal.fire({
        title: "Time's Up!",
        text: `Your Score: ${score} out of ${questions.length}`,
        icon: "warning"
    }).then(() => {
        location.reload(); 
    });
}

function nextQuestion() {
    
    if (index > 0) { 
        var selectedOption = document.querySelector('input[name="quiz"]:checked');
        if (selectedOption) {
            var selectedLabel = document.querySelector(`label[for="${selectedOption.id}"]`);
            if (selectedLabel.innerText === questions[index - 1].correctOption) {
                score++;
            }
        }
    }

   
    var getInputs = document.getElementsByTagName('input');
    for (var i = 0; i < getInputs.length; i++) {
        getInputs[i].checked = false;
    }

    if (index >= questions.length) {
        Swal.fire({
            title: "Quiz Completed!",
            text: `Your Score: ${score} out of ${questions.length}`,
            icon: "success"
        }).then(() => {
            location.reload(); // Restart the quiz after finishing
        });
    } else {
        htmlques.innerText = questions[index].question;
        htmlopt1.innerText = questions[index].option1;
        htmlopt2.innerText = questions[index].option2;
        htmlopt3.innerText = questions[index].option3;
        index++;
    }

    getBtn.disabled = true;
}

nextQuestion();
startTimer(); // Start the timer when quiz loads

function btnWork() {
    getBtn.disabled = false;
}

