// dropdownHandling.js
//Eric Su

// Helper function for selecting a month from the dropdown
function selectMonth(event) {
    event.preventDefault(); // Prevent the default link behavior
    var selectedMonth = $(this).attr("data-month");
    $("#selectedMonth").text(selectedMonth);
    $("#monthDropdown").hide(); // Hide dropdown after selection
}

$(document).ready(function(){
    $("#monthDropdown a").click(selectMonth);

    $("#selectedMonth").hover(function(){
        $("#monthDropdown").show();
    });
});
