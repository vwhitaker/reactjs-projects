# React Mini Projects
 
A collection of two small game projects built with **React.js**, created while learning core React concepts like components, props, state, hooks, and conditional rendering.
 
| Project | Description | Folder |
| --- | --- | --- |
| 🎲 **Tenzies** | A dice game: roll until all dice show the same number | [`/Tenzies`](./Tenzies) |
| 👾 **Hangman Assembly** | A hangman-style word guessing game with a programming twist | [`/HangmanAssembly`](./HangmanAssembly) |
 
---
 
## Repository Structure
 
```
.
├── Tenzies/
│   ├── src/
│   ├── index.html
│   └── package.json
├── HangmanAssembly/
│   ├── src/
│   ├── index.html
│   └── package.json
└── README.md
```
 
Each project is fully independent, with its own dependencies and scripts.
 
---
 
## 🎲 Tenzies
 
Roll ten dice, freeze the ones you want to keep, and keep rolling until every die shows the same number.
 
### How to Play
1. Click **Roll** to roll all the dice.
2. Click a die to **hold** it at its current value.
3. Keep rolling the unheld dice until all ten match.
4. Win the game and start a new round.
### Concepts Practiced
- Passing props and handling events
- Derived state and conditional rendering
- Updating state immutably
---
 
## Hangman Assembly
 
A word guessing game where every wrong guess eliminates a programming language. Guess the word before all the languages are lost.
 
### How to Play
1. Guess the hidden word one letter at a time using the on-screen keyboard.
2. Correct guesses reveal letters in the word.
3. Each wrong guess removes a programming language from the list.
4. Reveal the whole word to win, or run out of languages and lose.
### Concepts Practiced
- Managing multiple pieces of state
- Derived values instead of redundant state
- Component composition
- Handling game win/loss logic
---
 
## Tech Stack
 
- [React](https://react.dev/)
- [Vite](https://vitejs.dev/)
- JavaScript (ES6+)
- CSS
---
 
## Getting Started
 
### Prerequisites
- [Node.js](https://nodejs.org/) (v18 or newer recommended)
- npm (comes with Node.js)
### Clone the Repository
 
```bash
git clone https://github.com/<your-username>/<your-repo-name>.git
cd <your-repo-name>
```
 
### Run a Project
 
Pick a project, install its dependencies, and start the dev server:
 
```bash
# Tenzies
cd tenzies
npm install
npm run dev
```
 
```bash
# Assembly: Endgame
cd assembly-endgame
npm install
npm run dev
```
 
Then open the local URL shown in the terminal (usually `http://localhost:5173`).
 
### Available Scripts
 
| Command | Description |
| --- | --- |
| `npm run dev` | Start the development server |
| `npm run build` | Create a production build |
| `npm run preview` | Preview the production build locally |
 
---
 
## Author
 
**Vince Whitaker**
Learning full-stack web development.
 
---
 
## License
 
This project is open source and available under the [MIT License](LICENSE).
