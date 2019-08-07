let currentGame = new gameManager(); //has all data for current game 

function enterSubmit(textBox, pressedBtn) 
{ //this will allow you to press enter as submit
    var input = document.getElementById(textBox); //textBox is the box of text that will activate the enter
    input.addEventListener("keydown", function(event) 
    {
        if (event.keyCode === 13) 
        {
            event.preventDefault();
            document.getElementById(pressedBtn).click(); //pressedBtn is the button pressed
        }
    } );
}

function itsLoaded() //this function gets called once page is loaded
{
    //select playerAmount on initial screen to allow for editing right away
    document.getElementById("playerAmount").focus();
    document.getElementById("playerAmount").select();

    //listen for enter on initial button
    enterSubmit('choicesPer', 'firstBtn');
}

function initialSubmit() //this is the button that submits player amount and choices per
{
    //sets variables for elements i will be editing
    var playerAmount = document.getElementById('playerAmount');
    var choicesPer = document.getElementById('choicesPer')
    var nameDiv = document.getElementById('nameDiv');

    //update currentGame with new info
    currentGame.playerCount = playerAmount.value;
    currentGame.placesPerPlayer = choicesPer.value;

    //hide initialMenu, show name entering screen, and change title
    initialMenu.style.display = "none";
    nameDiv.style.display = "block";
    foodTitle.innerHTML = "Food Game";

    //make input for every player name
    var nameForm = document.getElementById('nameForm');
    for (let i = 1; i<=currentGame.playerCount; i++)
    {
        //makes an input box for every name with the id = nameBox[i]
        nameForm.innerHTML += 'player ' + i + ' name: ' + '<input type="text" id="nameBox' + i + '"/> <br><br>';
    }
    
    //add button to submit name form at the end!
    nameForm.innerHTML += '<input type="button" id=playerBtn value="SUBMIT" onclick="nameSubmit();"/>'

    //listen for enter on next page and select new nameBox
    enterSubmit('nameBox'+currentGame.playerCount+'', 'playerBtn');
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

    for (let i = 1; i<=currentGame.playerCount; i++)
    {
        //adds currentGame.names to array
        currentGame.names.push(document.getElementById('nameBox'+i).value);

        //add currentGame.names to list on HTML
        var nameP = document.createElement("P");
        nameP.innerHTML = i + '. ' + document.getElementById('nameBox'+i).value + ' <br>';
        nameP.id = "nameP"+i;

        nameSpot.appendChild(nameP);
    }

    //hide old nameform
    nameForm.style.display = "none";

    //show placeform and placeSpot
    placeForm.style.display = "block";
    placeSpot.style.display = "block";

    //set placePrompt & placeBtn
    placeForm.innerHTML = currentGame.names[0] + "'s turn: " + '<input type="text" id="placeInput"/> <br>';
    placeForm.innerHTML += '<input type="button" value="SUBMIT" id="placeBtn" onclick="placeSubmit();"/>';

    //listen for enter on new button
    enterSubmit('placeInput', 'placeBtn');

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
    var placeInput = document.getElementById('placeInput');

    //add to currentGame.places array!
    currentGame.places.push(placeInput.value);
    
    //create new p line with place
    var newPlace = document.createElement("P");
    newPlace.id = "place"+currentGame.placeCounter; //give it the id place[count]
    newPlace.innerHTML = currentGame.placeCounter + '. ' + placeInput.value + ' ';

    placeSpot.appendChild(newPlace); //add p line
    //set placePrompt & placeBtn
    placeForm.innerHTML = currentGame.names[currentGame.placeCounter%currentGame.playerCount] + "'s turn: " + '<input type="text" id="placeInput"/> <br>';
    placeForm.innerHTML += '<input type="button" value="SUBMIT" id="placeBtn" onclick="placeSubmit();"/>';

    //press enter to submit
    enterSubmit('placeInput', 'placeBtn');

    currentGame.placeCounter++;

    //select place input
    document.getElementById("placeInput").focus();
    document.getElementById("placeInput").select();
    
    if (currentGame.placeCounter > currentGame.placesPerPlayer*currentGame.playerCount)
    {
        //append & hide form because done with places
        placeForm.style.display = "none";

        //put buttons next to all the places
        currentGame.placeCounter=1;
        for (currentGame.placeCounter; currentGame.placeCounter<=currentGame.placesPerPlayer*currentGame.playerCount; currentGame.placeCounter++)
        {
            var newButton = '<input type="image" id = trash' + currentGame.placeCounter + ' alt="trash" src="trash.png" height=19.6px width=13.4px onclick="trashButton(' +currentGame.placeCounter+ ');">'
            //changed it to input because no one uses just buttons hehe

            document.getElementById('place'+currentGame.placeCounter).innerHTML+=newButton; // adds button to line
        }
        
        //start ban pointer
        setBanWording(1);

    }
}

function setBanWording(newBanner)
{
    for (let i=1; i<=currentGame.playerCount; i++)
    {
        if (i==newBanner)
        {
            document.getElementById("nameP"+i).innerHTML = '<B>' + i + ". " + currentGame.names[i-1] + '</B>';
        }
        else
        {
            document.getElementById("nameP"+i).innerHTML = i + ". " + currentGame.names[i-1];
        }
    }
}

function trashButton(placeCount)
{
    currentGame.banAmount++;

    if (currentGame.banAmount < (currentGame.placesPerPlayer*currentGame.playerCount - 1))
    {
        document.getElementById("trash"+placeCount).style.display="none";
    
        document.getElementById("place"+placeCount).innerHTML = '<s>' + document.getElementById("place"+placeCount).innerHTML + '<s>';

        let bansLeft = Math.floor(currentGame.banAmount/currentGame.playerCount);


        console.log(currentGame.banAmount);
        console.log(currentGame.playerCount);
        setBanWording((currentGame.banAmount%currentGame.playerCount)+1);
    }

    else
    {
        document.getElementById("trash"+placeCount).style.display="none";
    
        document.getElementById("place"+placeCount).innerHTML = '<s>' + document.getElementById("place"+placeCount).innerHTML + '<s>';


        let finalWinner;
        //hide all trash bins (this will hide the last one)
        for (let i = 1; i<=currentGame.placesPerPlayer*currentGame.playerCount; i++)
        {
            if (document.getElementById("trash"+i).style.display!="none")
            {
                //we have found winner!
                document.getElementById("place"+i).innerHTML = '<img src="crown.png" alt="crown" height="19.6" width="19.6"></img> ' + '<b>' + document.getElementById('place'+i).innerHTML + '</b>'
                finalWinner=i;
                document.getElementById("trash"+i).style.display="none";

            }
        }
        //display the WINNER
        let winText = document.createElement("P");
        //0 index so finalWinner-1
        winText.innerHTML = '<br> The winning place is <b>' + currentGame.places[finalWinner-1] + '</b>!';

        document.getElementById('placeSpot').appendChild(winText);

        //remove currently banning point
        setBanWording(-1);
        
        //change winner name color
        setWinnerWording(finalWinner%currentGame.playerCount);
    }
}

function setWinnerWording(newWinner)
{
    if (newWinner==0){
        setWinnerWording(currentGame.playerCount);
    }
    else {
        document.getElementById("nameP"+newWinner).innerHTML = '<img src="crown.png" alt="crown" height="19.6" width="19.6"></img> ' + '<B>' + newWinner + ". " + currentGame.names[newWinner-1] + '</B>';
    }
}
