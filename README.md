# Tic Tac Toe

This game will be for two users, playing on one device, taking turns. You will have to use component state to keep track of whose turn it is and which squares have been marked by each player.

This project will challenge your knowledge of React but should also be an exercise in creating good user experiences. Your view should be styled to look good as well as function flawlessly.

### User Stories:
- As a user, I should start off seeing a 3x3 grid on the main page.(done)
    - Map array to square component so that one square appears per index
    - Set square div className equal to gameboard
    - Adjust gameboard css so that the squares wrap into a 3x3 grid
- As a user, I should be able to click on a square to mark it. (done)
    - Create a function that allows us to change the state of square component to display an x
    - Create onClick for Square component
- As a user, my partner should be able to click on a square after me and see their mark.(done)
    - Create a function that changes a preassigned object from true to false
    - We have to connect that change to action of our gameplay function and clarify what happens when true vs false
- As a user, I shouldn't be able to click on a square that has already been selected.(done)
- As a user, when someone has won the game (3 squares in a row: horizontally, vertically, or diagonally) I should see a notice telling me who won.
- As a user, I should not be able to continue playing the game after the game has been won.
- As a user, if there are no more squares available, I should see a notice telling me that the game has ended.
- As a user, I should see a restart button that when clicked will clear the gameboard.

### Stretch Goals:
- As a user, I can see a notification that informs me whether it is currently player one's or player two's turn.
- As a user, I can choose my marker (X, O, a color, an emoji, etc...).
