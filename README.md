# Events and Debugging Assessment

Time to assess how well you have learned to use the debugging tools in Chrome Dev Tools, and writing click event listeners. This application is to show kids with illnesses and the memories the would like to make. Celebrities sign up to help kids make memories.

> 🧨 Make sure you answer the vocabulary and understanding questions at the end of this document before notifying your coaches that you are done with the project

## Event Listeners to Create

1. When the kid name is clicked, it should display their wiI wsh.
1. When the celebrity name is clicked, it should display their sport.
1. The pairings list should should contain the pairing in the following format.
    ```html
    {child name} will be making memories with {celebrity name}, a {celebrity sport} star, by {child wish}
    ```

Below is an animation showing how the application should look when complete and how the event listeners should work.

<img src="./images/debugging-events-assessment.gif" width="700px">

## Setup

Your instruction team will provide a link for you to create your assessment repository. Once your repo is created, clone it to your machine.

1. Make sure you are in your `workspace` directory.
1. `git clone {github repo SSH string}`.
1. `cd` into the directory it creates.
1. `code .` to open the project code.
1. Use the `serve` command to start the web server.
1. Open the URL provided in Chrome.

Make sure your Developer Tools are open at all times while working on this project. Use the messages provided in the Console to determine what code needs to be fixed or implemented, and use breakpoints in the Sources tab to step through your code as you debug.

## Vocabulary and Understanding

Before you click the "Complete Assessment" button on the Learning Platform, add your answers below each question and make a commit.

1. When a child is clicked on in the browser, which module contains the code that will execute on that event happening? Can you explain the algorithm of that logic?
    > The listener from kids.js catches the click
    > event.target tells you what element was clicked
    > dataset.type identifies the right element
    > dataset.wish and textContent give the info needed
    > Show the alert with the child's wish > 
2. In the **Pairings** module, why must the `findCelebrityMatch()` function be invoked inside the `for..of` loop that iterates the kids array?
    > Each kid has a unique celebrityId that links them to one celebrity
    > The loop itterates one kid at a time, so we need to find that kid's celebrity partner for each iteration
    > Without calling it in the loop, we couldn't create the personalized pairing message for each child
3. In the **CelebrityList** module, can you describe how the name of the sport that the celebrity plays can be displayed in the window alert text?
    > generate the celebrity list, they get a data-sport attribute
    > The event listener checks if the clicked element has the correct dataset.type
    > When a celebrity is clicked, event.target.dataset.sport gets the sport value from that specific element's attributes
    > alert displays the sport using the retrieved value
4. Can you describe, in detail, the algorithm that is in the `main` module?
    > Import functions from (Kids, Celebrities, Pairings)
    > Identify the container with doucument.querySelector
    > Build the complete HTML useing the imported functions
    > Display everything with innerHTML