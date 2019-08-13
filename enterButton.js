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

function enterText(textBox1, textBox2) 
{ //this will allow you to press enter as a next line
    var input = document.getElementById(textBox1); //textBox1 is the box of text that will activate the enter
    input.addEventListener("keydown", function(event) 
    {
        if (event.keyCode === 13) 
        {
            event.preventDefault();
            document.getElementById(textBox2).focus(); //textbox2 is the focused textbox
            document.getElementById(textBox2).select(); //textbox2 is the selected textbox
        }
    } );
}