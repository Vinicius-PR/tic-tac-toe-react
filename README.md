# Frontend Mentor - Tic Tac Toe

![Design preview for the Tic Tac Toe coding challenge](./preview.jpg)

## The challenge

This challenge is to build out this Tic Tac Toe game and get it looking as close to the design as possible.

I could use any tools I like to complete the challenge.

The users should be able to:

- View the optimal layout for the game depending on their device's screen size
- See hover states for all interactive elements on the page
- Play the game either solo vs the computer or multiplayer against another person
- **Bonus 1**: Save the game state in the browser so that it’s preserved if the player refreshes their browser
- **Bonus 2**: Instead of having the computer randomly make their moves, try making it clever so it’s proactive in blocking your moves and trying to win

### Expected behaviour

- What appear first the the home component with options to pick. The user can pick the mark and against who he is going to play with.
- On the new game screen, whichever mark isn't selected for the first player is automatically assigned to the second player when the game is started.
- The first turn of the first round is always played by whoever is playing as X. For every following round, the first turn alternates between O and X.
- After a round, if the player chooses to quit the game, they should be taken back to the new game menu.
- If the restart icon in the top right is clicked, the "Restart game?" modal should show and allow the player to reset the game or cancel and continue to play.

## The code

### The problem of the first commit

On my first commit, I used the **useState** hook on this project. It was working but not as expected. Also, the code was kind of messy. All the logic was inside the *App.tsx*. It makes the future me and others programmers spend a lot of time and effort to understand my code. Was a lot of *useState* and *handle functions* around the code.

### A new and much better code

Now, I chose the other hook. The **useReducer**. Also, I used **contextAPI**. With these both, the logic is separated and I don't have to run a lot of *handle functions* to change more than one state. I can do it with one dispatch. Each dispatch will take care of it. And my state now is more robust and dont need to create a lot of states. 

It is a little more complex with useReducer. However, the code is more organized and now is much easier to follow. Also, with the current solution, it is much easier to change if I wish.

## What I learned

I learned more about the **useReducer** hook and how to make it powerful with typeScript.

## How to use it?

First, check if you have the node and npm (comes with node) installed in your machine. To check, you must go to your terminal or command prompt and type:
> node -v
> npm -v

If shows the version, you are good to go. If not, go to https://nodejs.org/en/ and install the LTS version (it will install both node and npm).

Second, if you don't have an IDE, install one of you preference. In my case, I used Visual Studio Code.

Third, you clone the project. Use the commande line on your folder:
> git clone https://github.com/Vinicius-PR/tic-tac-toe-react
 
Fourth, open the folder using your IDE. Then, go to the terminal of your IDE and type the following command to install the dependencies: (or can go to the folder application using normal terminal and type the same command)
> npm install

Finally, type the next command to see the result and click on the link that will appear on the terminal:
> npm run start

## Thank you

Any comment is welcome. Star if you liked it. Thank you. 😁🤗