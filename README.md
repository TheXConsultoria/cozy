# cozy
This is... something.

## Running this project
You basically have to main options.

### Brace yourself.
- `npm install`

### Compile and start by hand
 - `tsc -p tsconfig.json`
 - `node src\index.js`

### Compile and start using VSCode
 - Hit F5 using the "Launch Program" profile.

## Runing the tests
Not that we have that many, but you also have two options

### Brace yourself.
- `npm install`

### Run tests by hand
 - If this is your very first time here, you'll need to run a quick: `tsc -p tsconfig.json`
 - `mocha ./src/tests/getDesignByUserIdTests.js`

### Use VSCode to run the tests
 - Open the test file and hit F5 using the "Mocha Current File" profile.

## What can I do with this?
You could either...
 - View the test data at:
    - http://localhost:8080/design/1234?budget=anything&room_type=anything&limit=10&q_api_key=12345
 - Visit the awesome room at: 
    - http://localhost:8080/awesomeRoom.html