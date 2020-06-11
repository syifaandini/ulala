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
  // alert(namaOrang + "; " + ucapan);
});

// Submit ke Gsheet

var $form = $('form#test-form'),
    url = 'https://script.google.com/macros/s/AKfycbzmujn9ot-JjJ_O_LjkfmMvsDpLyxEYwzgXXmN2blDTl1e0Nkg/exec'

$('#kirimKalimat').on('click', function(e) {
  e.preventDefault();
  var jqxhr = $.ajax({
    url: url,
    method: "GET",
    dataType: "json",
    data: $form.serializeObject()
  }).success(
    alert("yey");
  );
})

// https://script.google.com/macros/s/AKfycbzmujn9ot-JjJ_O_LjkfmMvsDpLyxEYwzgXXmN2blDTl1e0Nkg/exec?nama=rama&pesan=woi
