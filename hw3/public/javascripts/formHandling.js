// formHandling.js

// Helper function for form submission
function submitOrder(event) {
    event.preventDefault(); // Prevent the default form submission

    var notes = $('textarea[name="specialInstructions"]').val().toLowerCase();
    var quantity = $('#quantity').val();
    var topping = $('input[name="topping"]:checked').val();
    
    if (notes.includes('vegan')) {
        alert('Please note that our cheesecakes contain dairy.');
    } else {
        // Remove the form and display the order summary
        $('#cheesecakeOrderForm').html('Thank you! Your order has been placed.<br><br>' + 
                         'Topping: ' + topping + '<br>' +
                         'Quantity: ' + quantity + '<br>' +
                         'Notes: ' + notes);
    }
}

$(document).ready(function() {
    $('#cheesecakeOrderForm').submit(submitOrder);
});
