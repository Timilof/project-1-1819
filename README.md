# Project 1 @cmda-minor-web · 2018-2019

## Zoek in de de collectie van de OBA

Het project vindt plaats bij de Centrale OBA. Maandagochtend is om 10.00 uur de kickoff, vrijdag zijn de presentaties van de resultaten. In een week bouwt iedere student een eigen prototype dat bezoekers kan helpen om items uit de OBA collectie te vinden. Technieken geleerd bij [CSS to the Rescue](https://github.com/cmda-minor-web/css-to-the-rescue-1819) en [Web App from Scratch](https://github.com/cmda-minor-web/web-app-from-scratch-1819) worden toegepast bij het bouwen van de de prototypes.

We verzamelen maandagochtend om 09.45 op de 1e verdieping van de Centrale OBA, [Oosterdokskade 143](https://www.google.com/maps/place/OBA+library+of+Amsterdam/@52.3756983,4.9082087,15z/data=!4m2!3m1!1s0x0:0x6b97f693e6ecb494?ved=2ahUKEwioo6OrzubgAhWLNOwKHR6KDQgQ_BIwCnoECAYQCA).


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

