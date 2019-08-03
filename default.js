var globPlayerCount, globPlacesPerPlayer;
var names = []; //names.push(string) to add
var places = []; //same as above duh
nameCounter = 1;
placeCounter = 1;
banAmount = 0;


function itsLoaded()
{
    //select playerAmount
    document.getElementById("playerAmount").focus();
    document.getElementById("playerAmount").select();
}

function enterSubmit(textBox, pressedBtn) { //this will allow you to press enter as submit
    var input = document.getElementById(textBox); //textBox is the box of text that will activate the enter
    input.addEventListener("keyup", function(event) {
      if (event.keyCode === 13) {
       event.preventDefault();
       document.getElementById(pressedBtn).click(); //pressedBtn is the button pressed
      }
    });
}

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
    nameForm.innerHTML += '<input type="button" value="SUBMIT" id="playerBtn" onclick="nameSubmit();"/>'

    enterSubmit('nameBox'+globPlayerCount+'', 'playerBtn');

    document.getElementById("nameBox1").focus();
    document.getElementById("nameBox1").select();
}

function nameSubmit()
{
    //this function will be called when name submit is hit
    var nameSpot = document.getElementById('nameSpot');
    var nameForm = document.getElementById('nameForm');
    var placeForm = document.getElementById('placeForm');
    var placeSpot = document.getElementById('placeSpot');
    var placePrompt = document.getElementById('placeEnterDiv');

    for (let i = 1; i<=globPlayerCount; i++)
    {
        //adds names to array
        names.push(document.getElementById('nameBox'+i).value);
        
        //list names in nameSpot
        nameSpot.innerHTML += i + '. ' + document.getElementById('nameBox'+i).value + '<br>';
    }

    //hide old nameform
    nameForm.style.display = "none";

    //unhide placeform and placespot
    placeForm.style.display = "block";
    placeSpot.style.display = "block";

    //set placePrompt
    placePrompt.innerHTML = names[0] + "'s turn: " + '<input type="text" id="placeInput"/> <br>';

    //show nameSpot
    document.getElementById('nameSpot').style.display = "block";

    //select placeInput
    document.getElementById("placeInput").focus();
    document.getElementById("placeInput").select();
}

function placeSubmit()
{

    var placeSpot = document.getElementById('placeSpot');
    var placeForm = document.getElementById('placeForm');
    var placePrompt = document.getElementById('placeEnterDiv');
    var placeInput = document.getElementById('placeInput');
    
    //create new p line with place
    var newPlace = document.createElement("P");
    newPlace.id = "place"+placeCounter; //give it the id place[count]
    newPlace.innerHTML = placeCounter + '. ' + placeInput.value;

    placeSpot.appendChild(newPlace); //add p line
    //set placePrompt
    placePrompt.innerHTML = names[placeCounter%globPlayerCount] + "'s turn: " + '<input type="text" id="placeInput"/> <br>';

    placeCounter++;

    //select place input
    document.getElementById("placeInput").focus();
    document.getElementById("placeInput").select();
    
    if (placeCounter > globPlacesPerPlayer*globPlayerCount)
    {
        //append & hide form because done with places
        placeForm.style.display = "none";

        //put buttons next to all the places
        placeCounter=1;
        for (placeCounter; placeCounter<=globPlacesPerPlayer*globPlayerCount; placeCounter++)
        {
            var newButton = '<form id= trashForm class=trashClass style="display: inline;"' + placeCounter + '> <input type="image" id = trash' + placeCounter + ' alt="trash" src="trash.png" height=19.6px width=13.4px onclick="trashButton(' +placeCounter+ ');"/> </form>'
            //changed it to input because no one uses just buttons hehe

            document.getElementById('place'+placeCounter).innerHTML+=newButton; // adds button to line
        }
    }
}

function trashButton(placeCount)
{
    document.getElementById("trashForm"+placeCount).style.display="none";
    
    document.getElementById("place"+placeCount).innerHTML = '<s>' + document.getElementById("place"+placeCount).innerHTML + '<s>';
}
