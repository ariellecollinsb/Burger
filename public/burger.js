$(function() {
    $(".devour-button").on("click", function(event) {
      var name = $(this).data("name");
  
      var newDevouredState = {
        devoured: 1
      };

      // Send the PUT request.
      $.ajax("/api/burgers/" + name, {
        type: "PUT",
        data: newDevouredState
      }).then(
        function() {
          location.reload();
        }
      );
    });
  
    $(".delete-button").on("click", function(event) {
      var name = $(this).data("name");
  
      // Send the DELETE request.
      $.ajax("/api/burgers/" + name, {
        type: "DELETE"
      }).then(
        function() {
          location.reload();
        }
      );
    });

    $(".create-form").on("submit", function(event) {
      // Make sure to preventDefault on a submit event.
      event.preventDefault();
  
      var newBurger = {
        burger_name: $("#bn").val().trim(),
        devoured: 0
      };

      // Send the POST request.
      $.ajax("/api/burgers", {
        type: "POST",
        data: newBurger
      }).then(
        function() {
          location.reload();
        }
      );
    });
  });
