$(document).ready(function() {
    getCountries();
    setButtonText();
    generateUniversitiesList(getSelectedValue());

    $("#Universities").change(function() {
        setButtonText();
        generateUniversitiesList(getSelectedValue());

    });

    function getSelectedValue() {
        return $('#Universities').find(":selected").val();
    }

    function setButtonText() {
        $("#collapseButton").html("Universities in " + $('#Universities').find(":selected").text());
    }


    function getCountries() {
        var urlSearchLink = "http://universities.hipolabs.com/search";
        $.get(urlSearchLink, function(data, status) {
            if (status == "success" && data != null && data != undefined) {
                $("#Universities").html('');
                var countryName = [];
                for (let index = 0; index < data.length; index++) {
                    if (countryName.indexOf(data[index].country) == -1) {
                        countryName.push(data[index].country);
                        if (countryName.Length == 0) {
                            $("#Universities").append(`<option value="${data[index].country}" select ></option>`);

                        } else {
                            $("#Universities").append(`<option value="${data[index].country}">${data[index].country}</option>`);
                        }
                    }

                }
            }
        });
    }

    function generateUniversitiesList(country) {
        var urlLink = "http://universities.hipolabs.com/search?country=" + country;
        $.get(urlLink, function(data, status) {
            if (status == "success" && data != null && data != undefined) {
                $("#universityList").html('');
                for (let index = 0; index < data.length; index++) {
                    $("#universityList").append(`<a Universities="_blank" href="${data[index].web_pages[0]}" class="list-group-item list-group-item-action">${data[index].name}</a>`);

                }
            } else {
                $("#universityList").append("Can't load the list from url.");
            }
        });
    }
});