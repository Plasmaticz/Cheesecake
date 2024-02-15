// dropdownHandling.js
//Eric Su

// Helper function for selecting a month from the dropdown
function selectMonth(event) {
    event.preventDefault(); // Prevent the default link behavior
    var selectedMonth = $(this).attr("data-month");
    $("#selectedMonth").text(selectedMonth);
    $("#monthDropdown").hide(); // Hide dropdown after selection

    // Issue a POST request to the server with the selected month
    $.post('/orders', { month: selectedMonth }, function(response) {
        var ordersSummary = '';
        response.forEach(function(order) {
            ordersSummary += `• ${order.quantity} ${order.topping}<br>`;
        });
        $('#ordersList').html(ordersSummary); 
    });
}

$(document).ready(function(){
    $("#monthDropdown a").click(selectMonth);

    $("#selectedMonth").hover(function(){
        $("#monthDropdown").show();
    });
});
