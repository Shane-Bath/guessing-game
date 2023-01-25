#Javascript card game, match two. 

Create a simple game that matched two characters, in order to remove them from the board. If your two choices do not match, the cards will turn over.
You will have to memories the location of each card and attempt the match them. You will have a set limit of time to match all the cards and the number of guesses it took to complete the 
the board will be recorded

##  Task
### Game Board
-   This will be a large block made up of squares in a  12, 18 or 24 configuration.
-   The player will have to click on the card to turn it over.
-   You are limited to two moves per go.
-   If the two cards match, the cards are removed from the game. They replace by a new square represent that the card have been removed
-   Once all the cards have been matched, the board will be blank

## Game functionality 
### Shuffle
-   Math(random) will shuffle the cards and display them in an array. The array will position the cards on the board.
-   eventlistener, mouse click on the card to turn it over. 
-   Function to check if the two cards match
-   Function to count the amount to guesses
-   A timer 
-   A constant to record the quickest time and lowest number of guess
-   A button to select difficulty, easy (12), hard (18) extreme (24)


