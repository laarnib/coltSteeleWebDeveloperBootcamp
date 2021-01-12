// A command-line based todo application

var userInput;
var userToDoList = [];

// Styles for console.log
const grinningFace = String.fromCodePoint(0x1F600);
const style1 = [
    "background-color: #1d3557",
    "color: #f1faee"
].join(';');

const style2 = [
    "background-color: #a8dadc",
    "color: black",
].join(';');

console.log("%cWelcome to the ToDo Application!", style1);
console.log("%cHere are the list of commands:\nnew - add a todo\nlist - list todos\ndelete - remove todo\nquit - quit the app", style1);
userInput = prompt("Welcome to the Todo Application.\nWhat would you like to do?");

while (userInput.toLowerCase() != "quit")
{
    if (userInput.toLowerCase() == "new")
    {
        userInput = prompt("Enter new todo.");
        userToDoList.push(userInput);
        console.log(`%c${userInput} added to the list`, style2);
        userInput = prompt("What would you like to do?")
    }
    else if (userInput.toLowerCase() == "list")
    {
        console.log("%c--------------------", style2);
        for (let index = 0; index < userToDoList.length; index++)
        {
            console.log(`%c${index}: ${userToDoList[index]}`, style2);
        }
        console.log("%c--------------------", style2);
        userInput = prompt("What would you like to do?")
    }
    else  if (userInput.toLowerCase() == "delete")
    {
        let userRemovedItem;

        userInput = prompt("Enter index of todo to delete.");
        while (userInput > userToDoList.length - 1)
        {
            userInput = prompt("That is not on your list. Enter a valid index.");
        }
        userRemovedItem = userToDoList.splice(userInput, 1);
        console.log(`%c${userRemovedItem} is removed from the list.`, style2);
        userInput = prompt("What would you like to do?")
    }
    else {
        userInput = prompt("I don't understand your command. What would you like to do?");
    }
}

console.log(`%cYou quit the app. Enjoy doing your todos and have a wonderful day!${grinningFace}`, style1);