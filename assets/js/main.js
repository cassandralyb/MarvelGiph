$(document).ready(function() {

        displayResults: function(e) {
            $('#showGIFS').empty();
            e.preventDefault();

            var userQuery = $(this).data('search');
            var key = "&api_key=dc6zaTOxFJmzC&limit=10";
            var limit = "&limit=10"
            var reqUrl = "https://api.giphy.com/v1/gifs/search?q=" + userQuery + limit + key;
            // console.log(reqUrl);
            $.ajax({
                url: reqUrl,
                method: "GET"
            }).done(function(response) {

                for (var i = 0; i < response.data.length; i++) {
                    var gifContain = $('<div>');
                    gifContain.addClass('gifContainer');



                    var newImg = $('<img>');

                    newImg.addClass('gif');
                    gifContain.append(newImg);

                    $('#showGIFS').append(gifContain);
                }

                $('.gif').on("click", function() {
                    var state = $(this).attr("data-state");
                    if (state === "still") {
                        $(this).attr('src', $(this).data("animate"));
                        $(this).attr("data-state", "animate");
                    } else {
                        $(this).attr('src', $(this).data("still"));
                        $(this).attr("data-state", "still");
                    }
                });
            });
        },

    }