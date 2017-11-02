'use strict'

// $('.thumbnail').click(function(event) {
//    let newSource = $(event.currentTarget).find('img').attr('src');
//    let newAlt = $(event.currentTarget).find('img').attr('alt');
//    $('.hero img').attr({
//        alt: newAlt, 
//        src: newSource
//     });

// })

//long version//
// $(document).ready(function(){})

$(function(){ 
    $('.thumbnail').click(function(event) {
        let newSource = $(event.currentTarget).find('img').attr('src');
        let newAlt = $(event.currentTarget).find('img').attr('alt');
        $('.hero img').attr({
            alt: newAlt, 
            src: newSource
        });
    })
});

