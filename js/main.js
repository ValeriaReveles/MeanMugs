"use strict"
var divList = document.querySelector('#coffees');
var submitButton = document.querySelector('#submit');
var roastSelection = document.querySelector('#roast-selection');
var selectedCreatedRoast = document.getElementById('roast-selection-new');
var newMugSubmission = document.querySelector('#submit-new');
var createdName = document.getElementById('roast-vibes-new');


function renderCoffee(coffee) {
    var html = '<div class="coffee">';
    html += '<h3>' + coffee.name + '</h3>';
    html += '<p>' + coffee.roast + '</p>';
    html += '</div>';

    return html;
}

function renderCoffeeList(coffeeList) {
    var html = '';
    for(var i = coffeeList.length - 1; i >= 0; i--) {
        html += renderCoffee(coffeeList[i]);
    }
    return html;
}

function updateCoffeeList(e) {
    e.preventDefault(); // don't submit the form, we just want to update the data
    var selectedRoast = roastSelection.value;
    var selectedName = inputQuery.value;
    var filteredCoffees = [];
    coffeeList.forEach(function(coffee) {
        if (coffee.roast === selectedRoast && coffee.name.toLocaleLowerCase().includes(selectedName.toLocaleLowerCase())) {
            filteredCoffees.push(coffee);
        }
    });

    divList.innerHTML = renderCoffeeList(filteredCoffees);
}

function addNewCoffee(){
    let newId = coffeeList.length + 1;
    let newName = createdName.value;
    let newRoast = selectedCreatedRoast.value;
    coffeeList.push({id: newId, name: newName, roast: newRoast});
    console.log(coffeeList);
    divList.innerHTML = renderCoffeeList(coffeeList);
    coffeeList.sort(ascending);
}


//Search functionality
var inputQuery = document.querySelector("#search");

inputQuery.addEventListener('keyup', function(){

    let userInput = this.value.toLowerCase();
    let matchingCoffees = [];
    for (let i = 0; i < coffeeList.length; i ++){
        if(coffeeList[i].name.toLowerCase().indexOf(userInput) !== -1){
            matchingCoffees.push(coffeeList[i])
        }
    }
    divList.innerHTML = renderCoffeeList(matchingCoffees)
})


// from http://www.ncausa.org/About-Coffee/Coffee-Roasts-Guide
var coffeeList = [
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





divList.innerHTML = renderCoffeeList(coffeeList);

submitButton.addEventListener('click', updateCoffeeList);
// selectedCreatedRoast.addEventListener('change', newRoast);
newMugSubmission.addEventListener('click', addNewCoffee);

//Sort Coffee list in ascending order:
function ascending (a, b) {
    if (a.name > b.name){
        return -1;
    }
    if (a.name < b.name){
        return 1;
    }
    return 0;
}

coffeeList.sort(ascending);
//Make your own functionality:

