$(document).ready(function(){

const myQuiz = [
  {
    'q': 'It is believed that Halloween originates from a holiday celebrated by which European ethnic group?',
    'options': [
      'The Vikings',
      'The Germans',
      'The Celts',
      'The Mongols'
    ],
    'correctIndex': 2,
    'correctResponse': 'Spooktacular! Right!',
    'incorrectResponse': 'Boo! Wrong answer!'
  },
  {
    'q': 'What was the Celtic festival called?',
    'options': [
      'Samhain',
      'Samantha',
      'Samurai',
      'Saggitarius'
    ],
    'correctIndex': 0,
    'correctResponse': 'You are ~killin~ it! Right!' ,
    'incorrectResponse': 'Boo! Wrong answer!'
  },
  {
    'q': 'Which of the following was not an ancient festival that is associated with the forming of Halloween?',
    'options': [
      'All-Hallowsmass',
      'All Souls Day',
      'All Martyrs Day',
      'Christmas'
    ],
    'correctIndex': 3,
    'correctResponse': 'Yasss, witch! Another one right!',
    'incorrectResponse': 'Boo! Wrong answer!'
  },
  {
    'q': 'Which nineteenth century American immigrant group helped popularize Halloween?',
    'options': [
      'The Italians',
      'The Irish',
      'The Swedes',
      'The Japanese'
    ],
    'correctIndex': 1,
    'correctResponse': 'It is spooky how smart you are. Right!',
    'incorrectResponse': 'Boo! Wrong answer!'
  },
  {
    'q': 'What were jack-o-lanterns originally made out of?',
    'options': [
      'Pineapples',
      'Coconuts',
      'Turnips',
      'Onions'
    ],
    'correctIndex': 2,
    'correctResponse': 'That one was trick-or-treat-y. Right again!',
    'incorrectResponse': 'Boo! Wrong answer!'
  }
]



  var scene = document.getElementById('scene');
  var parallaxInstance = new Parallax(scene);




    $('#quiz').quiz({
    questions: myQuiz
  });



});
