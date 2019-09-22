$('#submit-button').on('click', function() {
    event.preventDefault();
    $('#brewery-area').css('display', 'block');
    var cityInput = $('#city-input').val().trim();

    var queryURL = 'https://api.openbrewerydb.org/breweries?by_city=' + cityInput;
    var card = {
        
    }
    // console.log(queryURL);
    
    $.get(queryURL).then(function(response) {

        var randomNum = Math.floor(Math.random()*20);
        var name = $(response)[randomNum].name;
        var city = $(response)[randomNum].city;
        var state = $(response)[randomNum].state;
        var phone = $(response)[randomNum].phone;
        if (response.website_URL !== "") {
            var url = $(response)[randomNum].website_url;
        }
        
        // Make a card that contains all of this info
        $('#brewery-area').append('<div class="col-sm-5"><div class="card"><div class="card-header">' + name + '</div><div class="card-body"><h5 class="card-title">' + city + '</h5><p class="card-text">' + state + '</p><p>' + phone + '</p><a href="' + url + '" class="btn btn-primary">Visit their website</a></div></div></div>');
        // console.log($(response));
    });
});