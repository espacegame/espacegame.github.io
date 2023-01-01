$(document).ready(function(){
    $("#submit").click(function(){
      var searchTerm = $("#search").val();
      window.location.href = "1.html?q=" + searchTerm;
    });
  });