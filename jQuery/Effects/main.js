$(document).ready(() =>{
  
  const $hintBox = $('.hint-box');
  
  $hintBox.on('click', () => {
    $('.hint').slideToggle(1000);
  });
  
  const $wrongAnswerOne = $('.wrong-answer');
  
  $wrongAnswerOne.on('click', (event) => {
    $(event.currentTarget).fadeOut('slow');
    $('.wrong').show();
    
  });
  
  const $correctAnswer = $('.correct-answer');
  
  $correctAnswer.on('click', () => {
    $('.wrong').hide();
    $('.correct').show();
    $wrongAnswerOne.fadeOut();
    $wrongAnswerTwo.fadeOut();
    $wrongAnswerThree.fadeOut();
  });
  
});