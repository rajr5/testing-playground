# Testing boilerplate

Boilerplate code used for trying out things, working on CodeWars asignments, etc.

## Usage

Just duplicate the `task_template` dir and fill out your `task.js` and `task.test.js`.
To run the test once use `npm run test`
To run the tests continously after each change run `npm run test:watch`

## VS Code integration

If you're using VS Code you have 2 Debug commands, borrowed from [VS Code recipes](https://github.com/Microsoft/vscode-recipes/tree/master/debugging-jest-tests).

**Run all the tests** by running the `Jest All` command.
This will run all the tests and you can add breakpoints in VS Code for easier debugging.

**Run a single test** by running the `Jest Current File`. This will run only the test file which is active when you run the command, if a test file isn't selected it won't work properly.


