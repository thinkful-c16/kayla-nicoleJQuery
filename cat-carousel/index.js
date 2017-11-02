'use strict'

$('.thumbnail').click(function(event) {
    // $('.hero').append($(event.currentTarget))
   let newSource = $(event.currentTarget).find('img').attr('src');
   let newAlt = $(event.currentTarget).find('img').attr('alt');
   $('.hero img').attr({
       alt: newAlt, 
       src: newSource
    });

})


