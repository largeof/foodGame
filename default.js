var globPlayerCount, globPlacesPerPlayer;
var names = []; //names.push(string) to add
nameCounter = 1;

function initialSubmit() //this is the button that submits player amount and choices per
{
    //sets variables for elements i will be editing
    var infoMsg = document.getElementById('info');
    var playerAmount = document.getElementById('playerAmount');
    var choicesPer = document.getElementById('choicesPer')
    var next = document.getElementById('next');
    var nameDiv = document.getElementById('nameDiv');

    //set my global variables to the stuff user entered
    globPlayerCount = playerAmount.value;
    globPlacesPerPlayer = choicesPer.value;

    //hide initialMenu, show name entering screen, and change title
    initialMenu.style.display = "none";
    nameDiv.style.display = "block";
    foodTitle.innerHTML = "Food Game";

    //make input for every player name
    var nameForm = document.getElementById('nameForm');
    for (let i = 1; i<=globPlayerCount; i++)
    {
        //makes an input box for every name with the id = nameBox[i]
        nameForm.innerHTML += 'player ' + i + ' name: ' + '<input type="text" id="nameBox' + i + '"/> <br><br>';
    }

    //add button to submit name form at the end!
    nameForm.innerHTML += '<input type="button" value="SUBMIT" onclick="nameSubmit();"/>'
    
}

function nameSubmit()
{
    //this function will be called when name submit is hit
    var nameSpot = document.getElementById('nameSpot');
    var nameForm = document.getElementById('nameForm');

    for (let i = 1; i<=globPlayerCount; i++)
    {
        //adds names to array
        names.push(document.getElementById('nameBox'+i).value);
        
        //list names in nameSpot
        nameSpot.innerHTML += i + '. ' + document.getElementById('nameBox'+i).value + '<br/>';
    }

    //hide old nameform
    nameForm.style.display = "none";


}