# preventDefault
A simple higher order function to pre-prevent default action of an event

## Usage
```
// function to be called by event
function myEventFunction([params]) {}

// wrap function and pass arguments 
preventDefault(myEventFunction, [params])
```
