/*global $*/
'use strict';

function calculateEntry() {
  $('#number-chooser').submit(function(event){
    event.preventDefault();

    $('.js-results').text('');

    let n = $('#number-choice').val();
    
    for (let i = 1; i <= n; i++){
      if((i % 5 === 0) && (i % 3 === 0)){
        $('.js-results').append('<span>fizzbuzz</span><br/>');
      }
      else if(i % 5 === 0){
        $('.js-results').append('<span>buzz</span><br/>');
      }
      else if(i % 3 === 0){
        $('.js-results').append('<span>fizz</span><br/>');
      }
      else{
        $('.js-results').append(i+'<br/>');
      }
    }
    $('#number-choice').val('');
  });
}

$(calculateEntry());