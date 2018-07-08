$(function(){

  // Display all dates in the browser's locale and timezone
  // Stashes the original display date in the "title" element so you can still see it on hover
  $("time").map(function(i, el){
    $(el).attr("title", $(el).text().trim());
    $(el).text((new Date($(el).attr("datetime"))).toLocaleString());
  });

  /* Global JS to enable the close button on modals */

  function closeActiveModal() {
    $(".modal.is-active").removeClass("is-active");
  }

  $(document).keyup(function(e){
    if(e.keyCode == 27) {
      closeActiveModal();
    }
  });

  $(".modal-background, .modal button.delete").click(function(e){
    closeActiveModal();
    e.preventDefault();
  });

  /* add http:// to URL fields on blur */
  $("input[type=url]").on("blur", function(){
    if(!$(this).val().match(/^https?:/)) {
      $(this).val("http://"+$(this).val());
    }
  });

});


