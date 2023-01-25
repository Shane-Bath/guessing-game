document.addEventListener('DOMContentLoaded', () => {


//Collection of game cards to place on the board

let choiceArray = [
    { 
        name: 'pic-1',
        img:  'assets/images/pic-1'
    },
    { 
        name: 'pic-1',
        img:  'assets/images/pic-1'
    },
    { 
        name: 'pic-2',
        img:  'assets/images/pic-2'
    },
    { 
        name: 'pic-2',
        img:  'assets/images/pic-2'
    },
    { 
        name: 'pic-3',
        img:  'assets/images/pic-3'
    },
    { 
        name: 'pic-4',
        img:  'assets/images/pic-4'
    },
    { 
        name: 'pic-4',
        img:  'assets/images/pic-4'
    },
    { 
        name: 'pic-5',
        img:  'assets/images/pic-5'
    },
    { 
        name: 'pic-5',
        img:  'assets/images/pic-5'
    },
    { 
        name: 'pic-6',
        img:  'assets/images/pic-6'
    },
    { 
        name: 'pic-6',
        img:  'assets/images/pic-6'
    },
    { 
        name: 'pic-7',
        img:  'assets/images/pic-7'
    },
    { 
        name: 'pic-7',
        img:  'assets/images/pic-7'
    },
    { 
        name: 'pic-8',
        img:  'assets/images/pic-8'
    },
    { 
        name: 'pic-8',
        img:  'assets/images/pic-8'
    },
    { 
        name: 'pic-9',
        img:  'assets/images/pic-9'
    },
    { 
        name: 'pic-9',
        img:  'assets/images/pic-9'
    },
    { 
        name: 'pic-10',
        img:  'assets/images/pic-10'
    },
    { 
        name: 'pic-10',
        img:  'assets/images/pic-10'
    },
    { 
        name: 'pic-10',
        img:  'assets/images/pic-10'
    },
    { 
        name: 'pic-11',
        img:  'assets/images/pic-11'
    },
    { 
        name: 'pic-11',
        img:  'assets/images/pic-11'
    },
    { 
        name: 'pic-12',
        img:  'assets/images/pic-12'
    },
    { 
        name: 'pic-12',
        img:  'assets/images/pic-12'
    },


]
// Create the game area 

const board = document.querySelector('.board');

function gameArea () {
    for (let i = 0; i < choiceArray.length; i++) {
        var card = document.createElement('img');
        card.setAttribute('src','/assets/images/foreground.png');
        card.setAttribute('data-id', i);
        board.appendChild(card);

    }
}

gameArea()



//Shuffle game cards in an array 

//check for matches 

// Game difficulty 

// call to action - eventlistener

//timer

// count guesses and record guesses

//reset board

})