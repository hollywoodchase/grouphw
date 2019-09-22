$('#submit-button').on('click', function() {
    event.preventDefault();
    $('#bike-area').css('display', 'block');
    var cityInput = $('#city-input').val().trim();

    var queryURL = 'https://api.openbrewerydb.org/breweries?by_city=' + cityInput;
    // console.log(queryURL);
    
    $.get(queryURL).then(function(response) {
        var name = response.name;
        var city = response.city;
        var state = response.state;
        var phone = response.phone;
        if (response.website_URL !== "") {
            var url = response.website_URL;
        }
        // Make a card that contains all of this info
    });
});