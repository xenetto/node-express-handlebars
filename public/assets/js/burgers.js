// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function() {
  $(".devour-burger").on("click", function(event) {
    var id = $(this).data("id");

    var devouredBurger = {
      devoured: 1 // 1: true
    };

    // Send the PUT request.
    $.ajax("/api/burgers/" + id, {
      type: "PUT",
      data: devouredBurger
    }).then(
      function() {
        console.log("Burger Devoured!");
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });

  $(".create-form").on("submit", function(event) {
    // Make sure to preventDefault on a submit event.
    event.preventDefault();

    var newBurger = {
      burger_name: $("#burgerN").val().trim(),
      devoured: 0 // 0: false
      //$("[name=sleepy]:checked").val().trim()
    };

    // Send the POST request.
    $.ajax("/api/burgers", {
      type: "POST",
      data: newBurger
    }).then(
      function() {
        console.log("New Burger created!");
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });


});
