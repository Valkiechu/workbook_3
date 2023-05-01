
function displayMailingLabel(name, address, city, state, zip) {
    let addressLabel = `
    ${name}
    ${address}
    ${city}, ${state}, ${zip}
    `;
    console.log(addressLabel);

}
let name = "Ethan Qiu";
let address = " somewere in PA";
let city = "Pittsburgh";
let state = " PA ";
let zip = "some 5 number";

displayMailingLabel(name, address, city, state, zip);