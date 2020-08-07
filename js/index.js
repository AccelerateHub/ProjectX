
// Tilt function 


    var input = document.querySelector("#telephone");
    window.intlTelInput(input, {
        allowDropdown:true,
		localizedCountries:null,
        preferredCountries: ["ng","us","ca","gb" ],
        utilsScript: "js/utils.js",
    });