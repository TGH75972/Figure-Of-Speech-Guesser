const poeticLines = [
    { line: "The trees whispered in the breeze.", figure: "Personification" },
    { line: "Life is a journey, enjoy the ride.", figure: "Metaphor" },
    { line: "She sells seashells by the seashore.", figure: "Alliteration" },
    { line: "The moon was a ghostly galleon tossed upon cloudy seas.", figure: "Metaphor" },
    { line: "Time is a thief.", figure: "Metaphor" },
    { line: "The classroom was a zoo.", figure: "Metaphor" },
    { line: "He has a heart of stone.", figure: "Metaphor" },
    { line: "The wind howled in the night.", figure: "Personification" },
    { line: "It's raining cats and dogs.", figure: "Hyperbole" },
    { line: "The stars danced playfully in the moonlit sky.", figure: "Personification" },
    { line: "Her smile was as bright as the sun.", figure: "Simile" },
    { line: "I'm so hungry I could eat a horse.", figure: "Hyperbole" },
    { line: "The thunder roared in the sky.", figure: "Personification" },
    { line: "She is as busy as a bee.", figure: "Simile" },
    { line: "He is a shining star.", figure: "Metaphor" }
];

let currentLine = 0;
let score = 0;

document.addEventListener("DOMContentLoaded", function() {
    const poeticLineElem = document.getElementById("poetic-line");
    const form = document.getElementById("quiz-form");
    const feedbackElem = document.getElementById("feedback");
    const nextBtn = document.getElementById("next-btn");
    const resultDiv = document.getElementById("result");
    const scoreElem = document.getElementById("score");
    const feedbackResultElem = document.getElementById("feedback-result");

    function showNextLine() {
        if (currentLine < poeticLines.length) {
            poeticLineElem.textContent = poeticLines[currentLine].line;
            feedbackElem.textContent = "";
            form.reset();
            form.style.display = "block";
            nextBtn.style.display = "none";
        } else {
            showResult();
        }
    }

    function showResult() {
        resultDiv.style.display = "block";
        form.style.display = "none";
        nextBtn.style.display = "none";
        scoreElem.textContent = `${score} out of 15`;
        if (score < 5) {
            feedbackResultElem.textContent = "You are not a poet definitely.";
        } else if (score < 10) {
            feedbackResultElem.textContent = "You got a pretty decent understanding of figures of speech!";
        } else {
            feedbackResultElem.textContent = "Bow down to the figure of speech king!";
        }
    }

    form.addEventListener("submit", function(event) {
        event.preventDefault();
        const userAnswer = document.getElementById("answer").value.trim();
        const correctAnswer = poeticLines[currentLine].figure;
        if (userAnswer.toLowerCase() === correctAnswer.toLowerCase()) {
            feedbackElem.textContent = "Correct!";
            score++;
        } else {
            feedbackElem.textContent = `Wrong! The correct answer was: ${correctAnswer}`;
        }
        currentLine++;
        form.style.display = "none";
        nextBtn.style.display = "block";
    });

    nextBtn.addEventListener("click", showNextLine);

    showNextLine();
});
