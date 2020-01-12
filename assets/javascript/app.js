$(document).ready(function() {
  let time = 40;
  let intervalId;
  let correctAnswer = 0;
  let incorrectAnswer = 0;
  var unAnswered = 0;

  //Question array
  var questions = [
    {
      question: 'Farthest arrow shot using feet:',
      answerList: ['40ft, 4.64in', '50ft, 5.64in', '35ft, 2.36in'],
      answer: 0
    },
    {
      question: 'Most tattooed man:',
      answerList: [
        'Over 1,000 hours of body modification',
        '500 hours of body modification',
        '300 hours of body modification'
      ],
      answer: 0
    },
    {
      question: 'Most toothpicks in a bread:',
      answerList: ['2,525', '3,500', '1,457'],
      answer: 1
    },
    {
      question: 'Longest hair on a teenager:',
      answerList: ['5ft, 7in', '4ft, 6in', '3ft, 7in'],
      answer: 0
    },
    {
      question: 'Largest table tennis/ping pong bat:',
      answerList: [
        '8ft, 8in tall and 5ft, 6in wide',
        '5ft, 6in tall and 6ft, 4in wide',
        '11ft, 7.8in tall and 6ft, 7.8in wide'
      ],
      answer: 2
    }
  ];
  //=======================Function===================//
  function reset() {
    time = 10;
    correctAnswer = 0;
    incorrectAnswer = 0;
    unAnswered = 0;
    $('#carouselExampleFade').hide();
    $('#resultTitle').hide();
  }

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
      score();
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

    //display question and answer
    $('#ques1').text(questions[0].question);
    $('#butt1').text(questions[0].answerList[0]);
    $('#butt2').text(questions[0].answerList[1]);
    $('#butt3').text(questions[0].answerList[2]);

    $('#ques2').text(questions[1].question);
    $('#butt4').text(questions[1].answerList[0]);
    $('#butt5').text(questions[1].answerList[1]);
    $('#butt6').text(questions[1].answerList[2]);

    $('#ques3').text(questions[2].question);
    $('#butt7').text(questions[2].answerList[0]);
    $('#butt8').text(questions[2].answerList[1]);
    $('#butt9').text(questions[2].answerList[2]);

    $('#ques4').text(questions[3].question);
    $('#butt10').text(questions[3].answerList[0]);
    $('#butt11').text(questions[3].answerList[1]);
    $('#butt12').text(questions[3].answerList[2]);

    $('#ques5').text(questions[4].question);
    $('#butt13').text(questions[4].answerList[0]);
    $('#butt14').text(questions[4].answerList[1]);
    $('#butt15').text(questions[4].answerList[2]);
  });

  //display timer
  $('.clock').html('Time Left: ' + time + ' seconds');

  //start timer
  timerStart();

  //when done button is click it provide the result
  $('.butt3').click(function() {
    score();
    results();
  });

  var answer1 = $('#butt1, #butt4, #butt8, #butt10, #butt12, #butt15').click(
    function() {
      correct();
    }
  );

  var answer2 = $(
    '#butt2, #butt3, #butt5, #butt6, #butt7, #butt9, #butt11, #butt12, #butt13, #butt14'
  ).click(function() {
    wrong();
  });

  function score() {
    if (answer1 == true) {
      answer1;
    } else if (answer2 == true) {
      answer2;
    } else if (answer1 && answer2 == false) {
      not();
    } else {
    }
  }
});
