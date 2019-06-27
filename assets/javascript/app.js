$(document).ready(function () {
    var audioElement = document.createElement("audio");
    audioElement.setAttribute("src", "assets/Ren and Stimpy.mp3");

    $("#start-button").click(function () {
        audioElement.play();
        $("#start-button").remove();
        for (var i = 0; i < questions.length; i++) {
            $("#container").append("<h2>" + questions[i].question + "</h2>");
            for (var j = 0; j < questions[i].answers.length; j++) {
                $("#container").append("<input type='radio' name='question-" + i +
                    "' value='" + questions[i].answers[j] + "''>" + questions[i].answers[j]);
            }
        }
    })

    var questions = [{
        question: "What is the name of the superhero in Ren and Stimpy?",
        answers: [" Mr. Horse ", " Powdered Toast Man ", " Sven Höek ", " Waffle Woman "],
        correctAnswer: " Powdered Toast Man "
    }, {
        question: "Mr. Horse proved what could stand up to a horse?",
        answers: [" Log ", " Meat Pill ", " John Stamos ", " Gritty Kitty Litter "],
        correctAnswer: " Gritty Kitty Litter "
    }, {
        question: "Who created Ren and Stimpy?",
        answers: [" Matt Groening ", " John Kricfalusi ", " Mark Summers ", " Larry David "],
        correctAnswer: " John Kricfalusi "
    }, {
        question: "Marvel Comics produced comics based on Ren and Stimpy",
        answers: [" True ", " False "],
        correctAnswer: " True "
    }, {
        question: "How many Ren and Stimpy video games are there?",
        answers: [" 4 ", " 11 ", " 6 ", " 7 "],
        correctAnswer: " 7 "
    }, {
        question: "Who originally produced Ren and Stimpy",
        answers: [" Spumco ", " Nickelodeon ", " Disney ", " Comedy Central "],
        correctAnswer: " Spumco "
    }, {
        question: "What does Ren often call Stimpy",
        answers: [" A moron ", " An idiot ", " A dummy ", " A dimwit "],
        correctAnswer: " An idiot "
    }, {
        question: 'In "Space Madness", what does Ren do when Stimpy steps closer, after warning Stimpy not to?',
        answers: [" He hits him with a wrench ", " He slaps him ", " He trips him ", " He brushes his teeth "],
        correctAnswer: " He brushes his teeth "
    }];

});