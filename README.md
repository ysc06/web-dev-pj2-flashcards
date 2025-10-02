# Web Development Project 2 - *Name of App Here*

Submitted by: **Your Name Here**

This web app: **insert description**

Time spent: **X** hours spent in total

## Required Features

The following **required** functionality is completed:


- [ ] **The app displays the title of the card set, a short description, and the total number of cards**
  - [ ] Title of card set is displayed 
  - [ ] A short description of the card set is displayed 
  - [ ] A list of card pairs is created
  - [ ] The total number of cards in the set is displayed 
  - [ ] Card set is represented as a list of card pairs (an array of dictionaries where each dictionary contains the question and answer is perfectly fine)
- [ ] **A single card at a time is displayed**
  - [ ] Only one half of the information pair is displayed at a time
- [ ] **Clicking on the card flips the card over, showing the corresponding component of the information pair**
  - [ ] Clicking on a card flips it over, showing the back with corresponding information 
  - [ ] Clicking on a flipped card again flips it back, showing the front
- [ ] **Clicking on the next button displays a random new card**

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

<img src='http://i.imgur.com/link/to/your/gif/file.gif' title='Video Walkthrough' width='' alt='Video Walkthrough' />

<!-- Replace this with whatever GIF tool you used! -->
GIF created with ...  
<!-- Recommended tools:
[Kap](https://getkap.co/) for macOS
[ScreenToGif](https://www.screentogif.com/) for Windows
[peek](https://github.com/phw/peek) for Linux. -->

## Diagram in words
App (controller)
 ├─ stores all cards
 ├─ stores currentCardIndex
 ├─ shows title/description/total count
 └─ renders <Flashcard card={cards[currentCardIndex]} />

Flashcard (view) 
 ├─ gets card prop
 ├─ stores isFront
 └─ onClick → flip between card.question and card.answer

App
Shows title, description, total count.
Holds the cards array.
Holds currentIndex state.
Has a Next button → increments index until the last card.
Passes cards[currentIndex] down as a prop.
Flashcard
Holds its own front state.
Click → toggles between question and answer.
Renders whichever side matches front.

## License

    Copyright [yyyy] [name of copyright owner]

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

        http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.