

// $('.test').css({
//   display: 'none',
// });

//Show yuhu
$('.btn-trigger').click(function(){
  // $('.test').css({
  //   display: 'show',
  // });
  // $('.paket').css({
  //   display: 'none',
  // });
  // $('.paket').hide();
  // $('.test').show();

});

//Character limit
$(function(){
  var maxLength = 50;
  $(".remaining").text(maxLength);
  $("#kalimat").keydown(function(event){
    LimitCharacters($(this));
  });
  $("#kalimat").keyup(function(event){
    LimitCharacters($(this));
  });

  function LimitCharacters(kalimat){
    if (kalimat.val().length>maxLength){
      kalimat.val(kalimat.val().substring(0, maxLength));
    } else{
      var nRemaining = maxLength - kalimat.val().length;
      $(".remaining").text(nRemaining);
    }
  }
});

//Enter-key pressed
$("#inputNama").on("keydown", function(e){
  if(e.which === 13){
    return false;
  }
});

$("#kalimat").on("keydown", function(e){
  if(e.which === 13){
    $("#kirimKalimat").click();
    return false;
  }
});

//Get Name
$("form").submit(function(event){
  var namaOrang = $("input").val();
  var ucapan = $("textarea").val();
  alert(namaOrang + "; " + ucapan);
});
