$(document).ready(function() {
  $.ajax(
    {
      'url': "https://flynn.boolean.careers/exercises/api/array/music",
      'method': "GET",
      'success': function (risposta) {
        for(var i=0; i<risposta.response.length; i++){
            var html= template(risposta.response[i]);
            $(".cds-container").append(html);
        }
      },
      'error': function () {
        alert("E' avvenuto un errore. ");
      }
    }
  );
  var source = $('#entry-template').html();
  var template = Handlebars.compile(source);
  $("#select").change(function() {
    var period = $("#select").val();
    console.log(period);
    if (period == "pop") {
      $('.Rock').hide();
      $('.Metal').hide();
      $('.Jazz').hide();
      $('.Pop').show();
    } else if (period == "rock") {
      $('.Pop').hide();
      $('.Metal').hide();
      $('.Jazz').hide();
      $('.Rock').show();
    } else if (period == "metal") {
      $('.Pop').hide();
      $('.Rock').hide();
      $('.Jazz').hide();
      $('.Metal').show();
    } else if (period == "jazz") {
      $('.Pop').hide();
      $('.Metal').hide();
      $('.Jazz').show();
      $('.Rock').hide();
    }



  });

});
