/* function verificarRespuestas() {
    let total = 3;
    let puntos = 0;

    let myForm = document.forms["Quiz"];
    let respuestas = ["a", "b", "c"];

    for (let i = 1; i <= total; i++){
        if(myForm["p" + i].value === null || myForm["p" + i].value === ""){
            alert("Respode la pregunta" + i);
            return false;
        }else {
            if(myForm["p" + i].value === respuestas[i - 1]){
                ++puntos;
            }
        }
    }
    let resultado = document.getElementById("resultado");

    if(puntos === 3){
        resultado.innerHTML = '<h3>Obtuviste <span>' + puntos + '</span> de <span>'+ total +' puntos,</span> tú código de descuento es CAF50</h3>'
    }else{
        resultado.innerHTML = '<h3>Obtuviste <span>' + puntos + '</span> de <span>'+ total +' puntos,</span> sigue intentando</h3>'
    }

    return false;
} */

let boton2 = document.getElementById("boton2");
let boton = document.getElementById("boton");
let descuento = document.getElementById("descuento");

boton2.addEventListener("click", comprobarDescuento);
boton.addEventListener("click", comprarBoletas);

function comprobarDescuento() {

    if(descuento.value === "CAF50") {
        document.getElementById("si").style.display = "block";
        document.getElementById("no").style.display = "none";
        document.getElementById("si").value = "";
    } else {
        document.getElementById("no").style.display = "block";
        document.getElementById("si").style.display = "none";
        document.getElementById("no").value = "";
    }
}

let e1 = document.getElementById("1").value;
let e2 = document.getElementById("2").value;
let e3 = document.getElementById("3").value;
let e4 = document.getElementById("4").value;

function comprarBoletas() {
    if (descuento.value === "CAF50"){
        alert("Se ha enviado tus entradas con el 50% de descuento a tú correo electrónico " + e1 / 2)

    }else {
        alert("Se ha enviado tus entradas a tú correo electrónico")
    }
    
}

function shuffle(array) {
    let currentIndex = array.length,  randomIndex;
  
    // While there remain elements to shuffle.
    while (currentIndex != 0) {
  
      // Pick a remaining element.
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
  
      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }
  
    return array;
  }

// Create a function that will generate new question objects
function newQuestion(params) {
    
    var temp = {
        question:  params[0],
        choices: params[1],
        correctAnswer: params[2]
    };console.log(temp);
    return temp;
    
}
// Create the array allQuestions and generate all of the new questions
var /* all */Questions = [
    ["<p><b>Pregunta 1:</b><br/>¿Cuáles fueron los primeros singles de Boris Brejcha?<p/>", ["White snake y Fireworker remixes", "Purple noise y Monster in the box", "Violet y Monster", "4"], 1],
    ["<p><b>Pregunta 2:</b><br/>¿En qué año Jackson Wang estrenó su álbum Mirrors?<p/>", ["2018", "2019", "2017", "2022"], 1],
    ["<p><b>Pregunta 3:</b><br/>¿Cómo se llama la canción más escuchada de los Backstreet boy?<p/>", ["Everybody", "As long as you love me", "I want it that way", "12"], 2],
    ["<p><b>Pregunta 4:</b><br/>¿Cuántos ex miembros ha tenido The Killers?<p/>", ["3", "2", "1", "4"], 0],
    ["<p><b>Pregunta 5:</b><br/>¿Con qué canción se considera que Bad Bunny alcanzó el estrellato?<p/>", ["Soy peor", "I like it", "Dákiti", "La Santa"], 1],
    ["<p><b>Pregunta 6:</b><br/>¿Cual es la nacionalidad de Boris Brejcha?<p/>", ["Noruega", "Americana", "Alemana", "Colombiana"], 2],
    ["<p><b>Pregunta 7:</b><br/>¿En qué año se presentó Jackson Wang en el Coachella?<p/>", ["2022", "2021", "2019", "2021"], 0],
    ["<p><b>Pregunta 8:</b><br/>¿En qué año se separaron y volvieron los Backstreet boy, respectivamente?<p/>", ["2006 - 2012", "1999 - 2004", "2003 - 2009", "2002 - 2005"], 3],
    ["<p><b>Pregunta 9:</b><br/>¿Cuál es el nombre del festival donde se presentaron The Killers después de su receso?<p/>", ["Hard Rock Calling", "Top of the mountain", "Lollapalooza", "24"], 2],
    ["<p><b>Pregunta 10:</b><br/>¿Cual es el verdadero nombre de Bad Bunny?<p/>", ["Benito Tocamela", "Benito Benítez", "Barnie Benítez", "Benito Martínez"], 3]
   ] 
   let allQuestions = shuffle(Questions).map(newQuestion);

// Create and initialize the total (to 0), number (to 0), and totalQuestions (to the length of allQuestions) variables
var total = 0, number = 0, totalQuestions = allQuestions.length, answers = [];

$(document).ready(function() {

    function newQuestionAnswers() {
        $("#content").fadeOut(500, function() {
            $("#answers").empty();
            if (number < totalQuestions)
                $("#questCount").text("Pregunta: " + (number + 1) + " de 10");
            var query = allQuestions[number];
            $("#question").html(query.question);

            // make sure to put in the name parameter and make sure that it's the same as the div that groups
            // the radio buttons together, otherwise they can all be checked at the same time, you'll never have
            // just one answer. The use of the html <label> element was discovered here:
            // http://stackoverflow.com/questions/5795499/changing-text-of-radio-button
            // Where it was explained that the text of the radio button was now explicitly associated with the
            // use of <label>
            console.log(query);
            for(var i = 0; i < query.choices.length; i++)
                $("#answers").append("<input type='radio' name='answers' id='radio" + i + "' value='answer" + i
                    + "'><label for='test" + i + "'>" + query.choices[i] + "</label><br>");
            if(answers.length > number)
                $("#radio" + answers[number]).prop("checked", true);
            if (number > 0)
                $("#back").prop("disabled", false);
        });
        $("#content").fadeIn(500);
    }

    function checkAnswer() {
        // Make sure a radio button is checked before proceeding. If one is checked add it to answers, else if
        // the last radio button is reached and it is not checked alert the user that they must select an answer.
        for(var i = 0; i < $("input").length; i++) {
            if ($("#radio" + i).is(":checked")) {
                answers[number] = i;
                break;
            }
            else if ( i === $("input").length -1 && !$("#radio" +i).is(":checked")) {
                $("#next").after("<p id='warning'>Por favor selecciona una respuesta antes de seguir</p>");
                return false;
            }
        }

        // Check to see if the current radio button checked is the correct answer. If correct increment the
        // score 10 points. This answer helped figure out if a radio box was checked and allowed you to use it in
        // an if statement http://stackoverflow.com/a/12932116
        var query = allQuestions[number];
        if($("#radio" + query.correctAnswer).is(":checked"))
            updateScore(10);
        number += 1;
        return true;
    }

    function finalScore() {
        $("#score").text("Puntaje Final: " + total + "/" + totalQuestions * 10).show(1000);
        $("#question, #answers, #questCount, #next, #back").hide(10);
         $("#startagain").hide(100);
        if (total > 90)
         $("#result").show(1000);
        if (total <= 90)
         $("#resultbad").show(1000);
         
    }

    function updateScore(change) {
        total += change;
        $("#score").text("Puntaje: " + total);
    }

    $("#back").hide();
    $("#next").hide();
    $("#startagain").hide();
    $("#score").hide();
    $("#bar10").hide();
    $("#result").hide();
    $("#resultbad").hide();
    
    
    $("#start").on('click', function() {
        $("#start").hide();
        $('#h4Start').hide(1000);
         $("#next").show(1000);
        $("#bar").width('5%');
        newQuestionAnswers();
        updateScore(0);
    });

      $("#startagain").on('click', function() {
        
       location.reload();
        
    });
    
    $("#next").on('click', function() {
        $("#back").show(100);
        $("#warning").remove();
        if(checkAnswer()) {
            if (number < totalQuestions)
                newQuestionAnswers();
            else
                finalScore();
            
        }

        // Enable the back button if past first question
        if (number > 0)
            $("#back").prop("disabled", false);
            $("#bar").width('10%');
        
        if (number > 1)
        $("#bar").width('20%');
        if (number > 2)
        $("#bar").width('30%');
        if (number > 3)
        $("#bar").width('40%');
        if (number > 4)
        $("#bar").width('50%');
        if (number > 5)
        $("#bar").width('60%');
        if (number > 6)
        $("#bar").width('70%');
        if (number > 7)
        $("#bar").width('80%');
        if (number > 8)
        $("#bar").width('90%');
        if (number > 9)
        $("#bar").width('100%');

    });
        

    $("#back").on('click', function() {
        if ( number === totalQuestions) {
            $("#score").hide();
            $("#question, #answers, #questCount, #next, #score").show(2500);
        }
        
        if (number > 0)
        $("#bar").width('5%');
        if (number > 1)
        $("#bar").width('10%');
        if (number > 2)
        $("#bar").width('20%');
        if (number > 3)
        $("#bar").width('30%');
        if (number > 4)
        $("#bar").width('40%');
        if (number > 5)
        $("#bar").width('50%');
        if (number > 6)
        $("#bar").width('60%');
        if (number > 7)
        $("#bar").width('70%');
        if (number > 8)
        $("#bar").width('80%');
        if (number > 9)
        $("#bar").width('90%');
        
        number -= 1;
        $("#back").prop("disabled", true);
        if (allQuestions[number].correctAnswer === answers[number])
            updateScore(-10);
        newQuestionAnswers();
        
    });
});