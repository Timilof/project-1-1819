# Project 1 @cmda-minor-web · 2018-2019

view app at
https://hopeful-ptolemy-6426e3.netlify.com/


# Book reccomending for OBA-junior
My repository for Project 1 of the minor web-dev

In the week this course lasted I was tasked to make a web app that used data from the OBA API and applied it in a meaningful/useful way. I chose to cater for the youth of the OBA and design a concept that would recommend them books based on a previous selection.


## My App
My App displays nine book of different categories and prompts the user to pick three of the nine. when three have been selected my app displays nine books for each book the user selected (meaning there will be 27 books displayed after you've made your selection). What the app does is compare the genre and theme of the selected books and displays books that are similar.

  It looks like this.

  ![screen cap img](/src/img/screen_1.png)  



## Features
  * Overview page with 9 childrens books each with a different them or belonging to a different genre
  * A link to the detailpages of each recommended book with more info
  * Loading states


## API

  I'm using the OBA API.
  I have come across many restrictions in my use case, the bigest problem was the way in which the data was structured. The format wasn't the same for each item and many items simply didn't have certain data (even though they should!). This made it frustrating to work with and in my opinion also quite limiting.

## Best practices I've applied
   * I don't use global variables (most of my variables are in a giant iffe and this code is just super dirty in general)
   * Neatly indented code
   * Variables are declared at the top of each scope


## Feature wishlist
  * I'd like to keep the user within this single page, i currently send the user to an external page where they can view more about a book but I'd like to make it possible to do that in this page.
  * If i could use a local storage that'd be nice and i wouldnt have to burden the api so much
  * An 'add book to list' option

