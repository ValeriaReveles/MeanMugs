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
        html += renderCoffee(coffees[i]); /*trying a sort here but didn't work*/
    }
    return html;
}
function filterCoffees() {
    var selectedRoast = roastSelection.value;
    var filteredCoffees = []; /* tried a sort here but didnt work*/
    // do you match the roast selection, and the pattern youre typing in?

    coffees.forEach(function(coffee) {
        if (coffee.roast === selectedRoast) {
            filteredCoffees.push(coffee);
        }
    });
    return filteredCoffees
}
function updateCoffees(e) {
    e.preventDefault(); // don't submit the form, we just want to update the data
    var filteredCoffees = filterCoffees()
    divListSorted.innerHTML = renderCoffees(filteredCoffees); /*Tried an array sort here too*/
}


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

]; /*Tried a sort here but didnt work*/


var divListSorted = document.getElementById('coffees'); /* Tried a sort here too*/
var submitButton = document.getElementById('submit');
var roastSelection = document.getElementById('roast-selection');
var roastAdd = document.getElementById('roast-selection-pick');
var roastInput = document.getElementById('pick-new')

divListSorted.innerHTML = renderCoffees(coffees);/*tried a sort here, annnnnd it didnt work*/

submitButton.addEventListener('click', updateCoffees);

roastSelection.addEventListener('change', updateCoffees);

roastInput.addEventListener('input', filterCoffees);

roastAdd.addEventListener('keyup', filterCoffees);

// How to sort objects in ascending order:
function ascending (a, b) {
    if (a.name > b.name) {
        return -1;
    }
    if (a.name < b.name) {
        return 1;
    }
    return 0;
}

coffees.sort(ascending);
