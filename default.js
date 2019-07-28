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

 
        welcomeMsg.innerHTML += playerAmount.value+" players.<br/>";
        welcomeMsg.innerHTML += choicesPer.value+" choices per player.<br/>";
        welcomeMsg.innerHTML += "so there will be  "+choicesPer.value*playerAmount.value+" places total.<br/>";
        
    }

    function nameSubmit(){
        var nameInput = document.getElementById('nameInput');

    }
