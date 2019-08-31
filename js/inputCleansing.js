function homeCleansing(a,b){ //where a = people and b = places
    if (a > 1 && a < 11 && b > 0 && b < 4) {
        return true;
    }
    else if (a == 1){
        alert ("Are you really so indecisive that you are playing food game by yourself?");
    }

    else if (a > 10){
        alert ("TOO MANY PEOPLE! Just order pizza or something.");
    }

    else if (b == 0){
        alert ("Okay the game will literally not work if you do that.");
    }

    else if (b > 3){
        alert ("TOO MANY PLACES! This game will never end if you do this.");
    }

    else {
        alert ("Input not accepted. Please try again!")
    }
    return false;
}