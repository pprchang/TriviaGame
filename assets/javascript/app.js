$(document).ready(function() {
  let time = 40;
  let intervalId;
  let correctAnswer = 0;
  let incorrectAnswer = 0;
  var unAnswered = 0;

  //=======================Function===================//

  function correct() {
    correctAnswer++;
    $('#Correct').html('Correct: ' + correctAnswer);
  }

  function wrong() {
    incorrectAnswer++;
    $('#Incorrect').html('Incorrect: ' + incorrectAnswer);
  }

  function not() {
    unAnswered++;
    $('#Unanswered').html('Unanswered: ' + unAnswered);
  }

  //timer countdown
  function timerStart() {
    intervalId = setInterval(decrement, 1000);
    console.log(timerStart);
  }

  function decrement() {
    time--;
    //display timer
    $('.clock').html('Time Left: ' + time + ' seconds');

    if (time === 0) {
      stop();
      //score();
      results();
    }
  }
  //stop timer
  function stop() {
    clearInterval(intervalId);
  }

  //display function
  function results() {
    $('#resultTitle').show();
    $('#carouselExampleFade').hide();
    $('#Correct').html('Correct: ' + correctAnswer);
    $('#Incorrect').html('Incorrect: ' + incorrectAnswer);
    $('#Unanswered').html('Unanswered: ' + unAnswered);
  }

  //============================Game Start===========

  //hide the question slides and result page
  $('#carouselExampleFade').hide();
  $('#resultTitle').hide();

  //function to start game
  $('#butt22').click(function() {
    $('#startTitle').hide();

    $('#carouselExampleFade').show();
  });

  //display timer
  $('.clock').html('Time Left: ' + time + ' seconds');

  //start timer
  timerStart();

  //when done button is click it provide the result
  $('.butt3').click(function() {
    //score();
    results();
  });

  $('#butt1, #butt4, #butt8, #butt10, #butt12, #butt15').click(function() {
    correct();
  });

  $(
    '#butt2, #butt3, #butt5, #butt6, #butt7, #butt9, #butt11, #butt12, #butt13, #butt14'
  ).click(function() {
    wrong();
  });
});
