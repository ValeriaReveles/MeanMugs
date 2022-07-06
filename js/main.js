"use strict"

function renderCoffee(coffee) {
    var html = '<div class="coffee">';
    // html += '<lh>' + coffee.id + '</lh>';
    html += '<h3>' + coffee.name + '</h3>';
    html += '<p>' + coffee.roast + '</p>';
    html += '</div>';

    return html;
}

function renderCoffees(coffees) {
    var html = '';
    for(var i = coffees.length - 1; i >= 0; i--) {
        html += renderCoffee(coffees[i]);
    }
    return html;
}

function updateCoffees(e) {
    e.preventDefault(); // don't submit the form, we just want to update the data
    var selectedRoast = roastSelection.value;
    var filteredCoffees = [];
    coffees.forEach(function(coffee) {
        if (coffee.roast === selectedRoast) {
            filteredCoffees.push(coffee);
        }
    });

    divList.innerHTML = renderCoffees(filteredCoffees);
}
var inputQuery = document.querySelector("#search");

inputQuery.addEventListener('keyup', function(e){
    let userInput = this.value.toLowerCase();
    let matchingCoffees = [];
    for (let i = 0; i < coffees.length; i ++){
        if(coffees[i].name.toLowerCase().indexOf(userInput) !== -1){
            matchingCoffees.push(coffees[i])
        }
    }
    divList.innerHTML = renderCoffees(matchingCoffees)
})
// from http://www.ncausa.org/About-Coffee/Coffee-Roasts-Guide
var coffees = [
    {id: 1, name: 'Light City', roast: 'light'},
    {id: 2, name: 'Half City', roast: 'light'},
    {id: 3, name: 'Cinnamon', roast: 'light'},
    {id: 4, name: 'City', roast: 'medium'},
    {id: 5, name: 'American', roast: 'medium'},
    {id: 6, name: 'Breakfast', roast: 'medium'},
    {id: 7, name: 'High', roast: 'dark'},
    {id: 8, name: 'Continental', roast: 'dark'},
    {id: 9, name: 'New Orleans', roast: 'dark'},
    {id: 10, name: 'European', roast: 'dark'},
    {id: 11, name: 'Espresso', roast: 'dark'},
    {id: 12, name: 'Viennese', roast: 'dark'},
    {id: 13, name: 'Italian', roast: 'dark'},
    {id: 14, name: 'French', roast: 'dark'},
];

var divList = document.querySelector('#coffees');
var submitButton = document.querySelector('#submit');
var roastSelection = document.querySelector('#roast-selection');


divList.innerHTML = renderCoffees(coffees);

submitButton.addEventListener('click', updateCoffees);

function ascending (a, b) {
    if (a.name > b.name){
        return -1;
    }
    if (a.name < b.name){
        return 1;
    }
    return 0;
}

coffees.sort(ascending);