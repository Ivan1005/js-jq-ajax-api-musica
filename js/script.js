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
    var period = $(this).val();
    console.log(period);
    if ( period == "all") {
      $(".cd").show();
    }else {
      $(".cd").hide();
      $(".cd." + period).show();
    }
  });
});
