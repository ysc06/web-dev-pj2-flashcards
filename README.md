# Web Development Project 3 - GenAI Trivia Deck

Submitted by: Yushan Cheng

This web app: **insert description**

Time spent: **3** hours spent in total

## Required Features

The following **required** functionality is completed:

- [X] **The user can enter their guess into an input box *before* seeing the flipside of the card**
  - Application features a clearly labeled input box with a submit button where users can type in a guess
  - Clicking on the submit button with an **incorrect** answer shows visual feedback that it is wrong 
  -  Clicking on the submit button with a **correct** answer shows visual feedback that it is correct
- [X] **The user can navigate through an ordered list of cardss**
  - A forward/next button displayed on the card navigates to the next card in a set sequence when clicked
  - A previous/back button displayed on the card returns to the previous card in the set sequence when clicked
  - Both the next and back buttons should have some visual indication that the user is at the beginning or end of the list (for example, graying out and no longer being available to click), not allowing for wrap-around navigation

## Video Walkthrough

Here's a walkthrough of implemented user stories:

<img src='http://i.imgur.com/link/to/your/gif/file.gif' title='Video Walkthrough' width='' alt='Video Walkthrough' />

<!-- Replace this with whatever GIF tool you used! -->
GIF created with ...  
<!-- Recommended tools:
[Kap](https://getkap.co/) for macOS
[ScreenToGif](https://www.screentogif.com/) for Windows
[peek](https://github.com/phw/peek) for Linux. -->

## Notes

- Added `guess` state (tracks live text in input)
- Added `result` state (tracks feedback after submitting) 
- Wrote `handleSubmit` (compares against user `guess.trim().toLowerCase` with `cards[id] to ignore spaces/case. 
- Rendered conditional feedback based on results
- Wrote form handling with `<input>`(controlled by `guess` state) and `<button>` (runs `handleSubmit`  
- Added a `Back` button (disabled when `id===0`)
-
## What I've Learned
- The `input` is in the return because JSX describes what appears in the UI.

