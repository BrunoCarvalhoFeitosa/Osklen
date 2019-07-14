$(document).ready(function() {
    $('#bag').hover(
        function() {
          $('.os-Cart').css("display", "block");
        }, function() {
            $('.os-Cart').css("display", "none");
        }
      );
});