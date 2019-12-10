//Countvalue starts
var count = 0;
var countEl = document.getElementById("count");
function plus(){
    count++;
    countEl.value = count;
}
function minus(){
  if (count > 0) {
    count--;
    countEl.value = count;
  }  
}

var count2 = 0;
var countE2 = document.getElementById("count2");
function plus2(){
    count2++;
    countE2.value = count2;
}
function minus2(){
  if (count2 > 0) {
    count2--;
    countE2.value = count2;
  }  
}
//count value ends


//Country dropdown initialization starts

var input = document.querySelector("#tel");
window.intlTelInput(input);

var input3 = document.querySelector("#tel3");
window.intlTelInput(input3);


//Country dropdown initialization ends



//Modal Js starts

jQuery(document).ready(function(){

  //toggle password starts
  $(".toggle-password").click(function() {
    $(this).toggleClass("fa-eye fa-eye-slash");
    var input2 = $($(this).attr("toggle"));
    if (input2.attr("type") == "password") {
      input2.attr("type", "text");
    } else {
      input2.attr("type", "password");
    }
  });

  jQuery(".myBtn_click").click(function(e){
      e.preventDefault();
      jQuery('.modalbuy').css('display', 'none');
     //alert(jQuery(this).data('modal'))
     var getModal = jQuery(this).data('modal');
     jQuery('#'+getModal).css('display', 'block');
  }); 

  jQuery(".closecustom").click(function(){
     //alert(jQuery(this).data('modal'))
     var getModal = jQuery(this).data('modal');
     jQuery('#'+getModal).css('display', 'none');
  }); 

  jQuery(window).click(function(event){ 
    //event.preventDefault();       
     if(event.target.className == 'modalbuy'){
        var getModal = event.target.id;
        jQuery('#'+getModal).css('display', 'none');
     }
  }); 
}); 
 
 //Modal js end

 
 
       
 
 