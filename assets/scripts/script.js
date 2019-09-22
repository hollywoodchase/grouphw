$('#submit-button').on('click', function() {
    event.preventDefault();
    $('#brewery-area').css('display', 'flex');
    var cityInput = $('#city-input').val().trim();

    var queryURL = 'https://api.openbrewerydb.org/breweries?by_city=' + cityInput;
    
    // console.log(queryURL);
    
    $.get(queryURL).then(function(response) {
        function randomInfo(r) {
            var randomNum = Math.floor(Math.random()*20);
            var name = $(response)[randomNum].name;
            var city = $(response)[randomNum].city;
            var state = $(response)[randomNum].state;
            var phone = $(response)[randomNum].phone;
            if (response.website_URL !== "") {
                var url = $(response)[randomNum].website_url;
            }
            $('#brewery-area').append('<div class="col-sm-5"><div class="card"><div class="card-header">' + name + '</div><div class="card-body"><h5 class="card-title">' + city + '</h5><h7 class="card-text">' + state + '</h7><p>' + phone + '</p><a href="' + url + '" class="btn btn-primary">Visit their website</a></div></div></div>');
        }
        randomInfo(response);
        randomInfo(response);
        randomInfo(response);
        randomInfo(response);
    });
});