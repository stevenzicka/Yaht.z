DESCRIPTION:
The classic game of Yahtzee, recreated to be played on the web browser. Players will roll 5 dice and are allowed to keep any number of them for 2 subsequent rolls (3 total). 
Once the dice have been rolled 3 times, or the player has chosen to score their roll, the player chooses how to score their roll and then passes to the next player. If the
player does not want to score any of the sections (or are unable to), they must cross out one of their remaining scoring boxes. The game ends when either all the sections 
have been scored, or the player has run out of places to score their next roll. The player with the most total points wins!  

ISSUES:
- Updating second player functionality 
- Some lower section checks require all the dice to be selected. Add to the scoring function a way to push all the dice to selected array to allow scoring to work without dice
  selected

FUTURE PLANS: 
1. Recreate the program using React to learn the frameworks capability and understand the benefits. Also, uploading the final project to the web using
Node.js via Heroku. 
2. Add power-ups to the game that user can use a limited amount of times. Power-ups include roll an extra time, eliminate one dice, skip turn without 
crossing out score, etc.
3. Add a slider that allows user to turn on/off the probabilities that certain dice rolls will have using sci-kit learn. 
4. Make a leaderboard API with Node.js, Express, and MongoDB
5. Format the display to work on mobile device screens
6. Add capability to play with up to 4 players