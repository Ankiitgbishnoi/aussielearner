let currentTest = "";

let testQuestions = [];

let currentQuestion = 0;

let score = 0;

let selectedAnswer = null;

let timer;

let timeLeft = 30 * 60;


/* =========================
   START TEST
========================= */

function startTest(type) {

    currentTest = type;

    testQuestions = [...questions[type]];

    shuffle(testQuestions);

    currentQuestion = 0;

    score = 0;

    selectedAnswer = null;

    timeLeft = 30 * 60;


    document
        .getElementById("home")
        .classList.remove("active");


    document
        .getElementById("result")
        .classList.remove("active");


    document
        .getElementById("quiz")
        .classList.add("active");


    document.getElementById("testName")
        .textContent =
        type === "motorcycle"
            ? "Motorcycle Practice"
            : "Learner Practice";


    startTimer();

    showQuestion();
}


/* =========================
   SHOW QUESTION
========================= */

function showQuestion() {

    selectedAnswer = null;


    const question =
        testQuestions[currentQuestion];


    document.getElementById("questionCounter")
        .textContent =
        `Question ${currentQuestion + 1} / ${testQuestions.length}`;


    document.getElementById("score")
        .textContent =
        `Score: ${score}`;


    document.getElementById("category")
        .textContent =
        question.category;


    document.getElementById("question")
        .textContent =
        question.question;


    const answers =
        document.getElementById("answers");


    answers.innerHTML = "";


    question.answers.forEach(
        (answer, index) => {

            const button =
                document.createElement("button");


            button.type = "button";


            button.className =
                "answer";


            button.textContent =
                `${String.fromCharCode(65 + index)}. ${answer}`;


            button.addEventListener(
                "click",
                function () {

                    selectAnswer(
                        index,
                        button
                    );

                }
            );


            answers.appendChild(button);

        }
    );


    document.getElementById("feedback")
        .innerHTML = "";


    document.getElementById("nextButton")
        .disabled = true;


    updateProgress();
}


/* =========================
   ANSWER
========================= */

function selectAnswer(index, button) {

    if (selectedAnswer !== null) {
        return;
    }


    selectedAnswer = index;


    const question =
        testQuestions[currentQuestion];


    const buttons =
        document.querySelectorAll(".answer");


    buttons.forEach(
        button => {
            button.disabled = true;
        }
    );


    if (index === question.correct) {

        score++;

        button.classList.add("correct");

        button.textContent =
            "✓ " + button.textContent;


        document.getElementById("feedback")
            .innerHTML = `

                <div class="feedback correct">

                    <div class="feedback-title">
                        ✓ Correct
                    </div>

                    <div>
                        ${question.explanation}
                    </div>

                </div>
            `;

    }

    else {

        button.classList.add("incorrect");

        button.textContent =
            "✕ " + button.textContent;


        const correctButton =
            buttons[question.correct];


        correctButton.classList.add("correct");


        correctButton.textContent =
            "✓ " + correctButton.textContent;


        document.getElementById("feedback")
            .innerHTML = `

                <div class="feedback incorrect">

                    <div class="feedback-title">
                        ✕ Incorrect
                    </div>

                    <div>
                        ${question.explanation}
                    </div>

                </div>
            `;
    }


    document.getElementById("score")
        .textContent =
        `Score: ${score}`;


    document.getElementById("nextButton")
        .disabled = false;
}


/* =========================
   NEXT QUESTION
========================= */

function nextQuestion() {

    currentQuestion++;


    if (
        currentQuestion >=
        testQuestions.length
    ) {

        finishTest();

        return;
    }


    showQuestion();
}


/* =========================
   FINISH
========================= */

function finishTest() {

    clearInterval(timer);


    document
        .getElementById("quiz")
        .classList.remove("active");


    document
        .getElementById("result")
        .classList.add("active");


    const total =
        testQuestions.length;


    const passMark =
        Math.ceil(total * 0.78);


    const passed =
        score >= passMark;


    document.getElementById("finalScore")
        .textContent = score;


    document.getElementById("correct")
        .textContent = score;


    document.getElementById("wrong")
        .textContent =
        total - score;


    document.getElementById("resultIcon")
        .textContent =
        passed ? "🏆" : "📚";


    document.getElementById("resultTitle")
        .textContent =
        passed ? "PASS" : "NOT PASSED";


    document.getElementById("resultMessage")
        .textContent =
        passed
            ? `You scored ${score}/${total}. You reached the practice pass mark.`
            : `You scored ${score}/${total}. Review the explanations and try again.`;
}


/* =========================
   TIMER
========================= */

function startTimer() {

    clearInterval(timer);


    updateTimer();


    timer = setInterval(
        function () {

            timeLeft--;


            updateTimer();


            if (timeLeft <= 0) {

                clearInterval(timer);

                finishTest();
            }

        },
        1000
    );
}


function updateTimer() {

    const minutes =
        Math.floor(
            timeLeft / 60
        );


    const seconds =
        timeLeft % 60;


    document.getElementById("timer")
        .textContent =
        `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;
}


/* =========================
   PROGRESS
========================= */

function updateProgress() {

    const percentage =
        (
            currentQuestion /
            testQuestions.length
        ) * 100;


    document.getElementById("progressBar")
        .style.width =
        `${percentage}%`;
}


/* =========================
   SHUFFLE
========================= */

function shuffle(array) {

    for (
        let i = array.length - 1;
        i > 0;
        i--
    ) {

        const j =
            Math.floor(
                Math.random() * (i + 1)
            );


        [
            array[i],
            array[j]
        ] =
        [
            array[j],
            array[i]
        ];
    }


    return array;
}


/* =========================
   RESTART
========================= */

function restartTest() {

    startTest(currentTest);
}


/* =========================
   HOME
========================= */

function goHome() {

    clearInterval(timer);


    document
        .getElementById("quiz")
        .classList.remove("active");


    document
        .getElementById("result")
        .classList.remove("active");


    document
        .getElementById("home")
        .classList.add("active");
}
