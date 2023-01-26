"use strict"
var mugBody = document.getElementById('coffees');
var submitButton = document.getElementById('submit');
var roastSelection = document.getElementById('roast-selection');
var selectedCreatedRoast = document.getElementById('roast-selection-new');
var newMugSubmission = document.getElementById('submit-new');
var createdName = document.getElementById('roast-vibes-new');


function renderCoffee(coffee){
    var html = 
    `<div class="mug-card">
        <h4 class="mug-name mug-font">${coffee.name}</h4>
        <h5 class="mug-roast mug-font">${coffee.roast}</h5>
    </div>`;
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
    console.log(`Selected roast: ${selectedRoast}`);
    var filteredCoffees = [];
    coffeeList.forEach(function(coffee) {
        if (coffee.roast === selectedRoast) {
            filteredCoffees.push(coffee);
            mugBody.innerHTML = renderCoffeeList(filteredCoffees);
        }else if ('all' === selectedRoast){
            mugBody.innerHTML = renderCoffeeList(coffeeList);
        }
    });
}

function addNewCoffee(e){
    e.preventDefault();
    let newId = coffeeList.length + 1;
    let newName = createdName.value;
    let newRoast = selectedCreatedRoast.value;
    coffeeList.push({id: newId, name: newName, roast: newRoast});
    console.log(`Your coffee creation: \n Name: ${newName} \n Roast: ${newRoast}`);
    console.log(coffeeList);
    mugBody.innerHTML = renderCoffeeList(coffeeList);
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
    mugBody.innerHTML = renderCoffeeList(matchingCoffees)
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

//sort coffee list by id in ascending order:
coffeeList.sort(function(a, b){return a.id - b.id});

//need to define functions first, that's why these are not up with variables.
mugBody.innerHTML = renderCoffeeList(coffeeList);
submitButton.addEventListener('click', updateCoffeeList);
newMugSubmission.addEventListener('click', addNewCoffee);

