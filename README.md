# RepoWars

> Github repositories guessing game

## Live Demo

[Play the game right now, here!](https://repowars.mbrunos.dev)

## Technologies Used

- React
- Typescript
- Vite
- React Icons

## Architecture Overview

The main parts of the project are:

- Components
- Context
- Hooks

### Components

The components of the application are built as follows:

- `src/App`: The main component of the application. It is responsible for rendering the game screens, based on the game state.
- `src/HomeScreen`: The initial screen of the game.
- `src/GameScreen`: The screen where the game is played. It renders the game score, two random repositories and controls.
- `src/GameOverScreen`: The screen that is rendered when the game is over. It renders the game score and a restart button.
- `src/RepoCard`: The component that renders a repository information.
- `src/WindowFocusHandler`: The component that is responsible for handling the window focus event. It is used to reset the game when the window loses focus.

### Context

- `GameContext`: The context that is responsible for managing the game state, game score, and whole repositories list.

### Hooks

- `useRepos`: The hook that is responsible for fetching the repositories from the Github API.
- `useRandomRepos`: The hook that is responsible for selecting 2 random repositories from the whole repositories list.

## Installation

You can get the project up and running on your local machine, following these steps:

```bash
# clone the repository
git clone https://github.com/mbrunos/repowars.git
# enter the cloned folder
cd repo-wars
# install dependencies
yarn
# run the development server
yarn dev
```

Usage
Provide examples showing how to use or interact with the project

## Testing

To run the tests, run the following command:

```bash
yarn test
```

## Author

- [Maurício Bruno](https://mbrunos.dev)
