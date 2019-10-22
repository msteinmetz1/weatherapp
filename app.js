"use strict";

$(document).ready(function(){

    $('#getLocation').click(function(data){
       
    
    
    $.ajax({
    url: 'https://api.weatherstack.com/current',
    data: {
      access_key: 'e56ef051b6ff6c34465e3d7706d97f4a'
    },
    dataType: 'json',
    success: function(data) {
      console.log(data);
    }
   }) 
  });
});