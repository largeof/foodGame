    var globPlayerCount, globPlacesPerPlayer;
    var names = []; //names.push(string)
    nameCounter = 1;

    function initialSubmit(){
        var welcomeMsg = document.getElementById('welcome');
        var playerAmount = document.getElementById('playerAmount');
        var choicesPer = document.getElementById('choicesPer')
        var initalMenu = document.getElementById('initialMenu');
        var next = document.getElementById('next');
        var nameDiv = document.getElementById('nameDiv');

        globPlayerCount = playerAmount;
        globPlacesPerPlayer = choicesPer;

        initialMenu.style.display = "none";
        next.style.display = "block";
        nameDiv.style.display = "block";

 
        welcomeMsg.innerHTML += globPlayerCount.value+" players.<br/>";
        welcomeMsg.innerHTML += globPlacesPerPlayer.value+" choices per player.<br/>";
        welcomeMsg.innerHTML += "so there will be  "+choicesPer.value*playerAmount.value+" places total.<br/>";

        //make input for every player name
        var nameForm = document.getElementById('nameForm');

        let i;
        for (i = 1; i<=globPlayerCount.value; i++)
        {
            //nameForm.innerHTML += 'player ' + i + ' name: ' + '<input type="text" id="Namebox' + i + '"/> <br />';
            nameForm.innerHTML += 'player ' + i + ' name: ' + '<input type="text" id="Namebox' + i + '"/> <br />';
        }

        nameForm.innerHTML += '<input type="button" value="Submit" onclick="nameSubmit();"/>'

        
    }

    function nameSubmit(){

    }