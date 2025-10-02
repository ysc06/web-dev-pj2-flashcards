# Web Development Project 2 - *GenAI Trivia Deck*

Submitted by: **Yushan Cheng**

This web app: **GenAI Trivia Deck**

Time spent: **4** hours spent in total

## Required Features

The following **required** functionality is completed:


- [X] **The app displays the title of the card set, a short description, and the total number of cards**
  - [X] Title of card set is displayed 
  - [X] A short description of the card set is displayed 
  - [X] A list of card pairs is created
  - [X] The total number of cards in the set is displayed 
  - [X] Card set is represented as a list of card pairs (an array of dictionaries where each dictionary contains the question and answer is perfectly fine)
  - [X] **A single card at a time is displayed**
  - [X] Only one half of the information pair is displayed at a time
  - [X] **Clicking on the card flips the card over, showing the corresponding component of the information pair**
  - [X] Clicking on a card flips it over, showing the back with corresponding information 
  - [X] Clicking on a flipped card again flips it back, showing the front
  - [X] **Clicking on the next button displays a random new card**

The following **optional** features are implemented:

- [ ] Cards contain images in addition to or in place of text
  - [ ] Some or all cards have images in place of or in addition to text
- [ ] Cards have different visual styles such as color based on their category
  - Example categories you can use:
    - Difficulty: Easy/medium/hard
    - Subject: Biology/Chemistry/Physics/Earth science

The following **additional** features are implemented:

* [ ] List anything else that you added to improve the site's functionality!

## Video Walkthrough

Here's a walkthrough of implemented required features:

https://imgur.com/a/KvdlOXh


## Diagram in words
App (controller)
- ├─ stores all cards
- ├─ stores currentCardIndex
- ├─ shows title/description/total count
- └─ renders <Flashcard card={cards[currentCardIndex]} />

Flashcard (view) 
- ├─ gets card prop
- ├─ stores isFront
- └─ onClick → flip between card.question and card.answer

