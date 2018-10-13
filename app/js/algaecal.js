//Get the company phone number (default_phone_number) and show the message ‘Speak to Our Bone Specialist’ if and only if the current time is within working hours.
$.ajax({ 
    url: "https://www.algaecal.com/wp-json/acf/v3/options/options",
    dataType: "json",
    success: function(data) {
        console.log(data);
        // var obj = JSON.parse(data);
        // var phone = obj.acf.default_phone_number
    }
});


