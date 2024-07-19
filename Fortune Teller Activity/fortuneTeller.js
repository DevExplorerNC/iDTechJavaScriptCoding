var fortune = 3;

function mainGame() {
    if (fortune >= 0 && fortune <= 3) { 
        console.log("You have a low fortune.");
    } 

    else if (fortune > 3 && fortune <= 7) {
        console.log("You have an average fortune.");
    }

    else if (fortune > 7 && fortune <= 10 ) {
        console.log("Congrats! You have a good fortune.");
    }
    
    else {
        console.log("The fortune can't be read correctly");
    }
}

console.log("Fortune Selected: " + fortune);
mainGame();