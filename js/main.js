"use strict"
let coffees = [
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
const divListSorted = document.getElementById('coffees'); /* Tried a sort here too*/
const nameSelection = document.getElementById("search-name");
const roastSelection = document.getElementById('roast-selection');
const coffeeSubmit = document.getElementById('submit');

roastSelection.addEventListener('change', renderCoffeeList);
nameSelection.addEventListener("input" ,renderCoffeeList);
coffeeSubmit.addEventListener('click', (e) =>{
    e.preventDefault();
    console.log("click");
});
function renderCoffeeList(coffees) {
    let list = coffees;
    let nameValue = nameSelection.value;
    let roastValue = roastSelection.value;
    console.log(nameValue + "\n" + roastValue);
    if (roastValue !== "all" ){
        list = list.filter(function (coffee) {
            coffee.roast === roastValue
        });}
    if (nameValue){
        list = list.filter(function (coffee) {
            coffee.name.toLowerCase().includes(nameValue.toLowerCase())
        });}
    list = list.map(function (coffee) {
        `<h3>${nameValue}</h3> <p>${roastValue}</p>`
    });
    divListSorted.innerHTML = list.join("/n");
}












// function renderCoffee(coffee) {
//     var html = '<div class="coffee">';
//     // html += '<lh>' + coffee.id + '</lh>';
//     html += '<h3>' + coffee.name + '</h3>';
//     html += '<p>' + coffee.roast + '</p>';
//     html += '</div>';
//     return html;
// }
// function renderCoffees(coffees) {
//     var html = '';
//     for(var i = coffees.length - 1; i >= 0; i--) {
//         html += renderCoffee(coffees[i]); /*trying a sort here but didn't work*/
//     }
//     return html;
// }
// function plshlpme(){
// coffees.forEach((coffee) =>{
// let CoffeesName = [];
// let selectedName = nameSelection.value;
// if(coffee.name.toLowerCase() === selectedName.toLowerCase()) {
//     CoffeesName.push(coffee);
//     console.log(selectedName);
// }
// return CoffeesName;
// });
// }
//
//
//
// function updateName(e) {
//     var filteredName = plshlpme();
//     divListSorted.innerHTML = renderCoffees(filteredName); /*Tried an array sort here too*/
// }
//
//
//
// function filterCoffees() {
//     var selectedRoast = roastSelection.value;
//     let filteredCoffees = [];
//     coffees.forEach(function(coffee) {
//         if (coffee.roast === selectedRoast) {
//             filteredCoffees.push(coffee);
//         }
//     });
//     return filteredCoffees
// }
//
//
//
// function updateCoffees(e) {
//     var filteredCoffees = filterCoffees()
//     divListSorted.innerHTML = renderCoffees(filteredCoffees); /*Tried an array sort here too*/
// }

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
divListSorted.innerHTML = renderCoffeeList(coffees);