### Introduction

First off, I want to thank REM Waste for this opportunity and the reviewers for taking the time.

### Changes Overview

Changes are pushed to `github` in PR-workflow. commits and branches are viewable from github UI

the changes I made are:

#### Stepper redesign

Update the feel as well as the look for the stepper to imply _progress_ with each step user navigates to, coloring the steps user already has passed with a different color

#### Select Skip page redesign

Added more compact fee to the cards themselves, exposing the price even more to the user as it's the most important information they'd want to see

Borders and colors are rethought as well to go with the overall app

### New Functionality In Stepper

User can now navigate back and forth in the stepper, offering more forgiving user experience

#### Confirmation Is Now A Modal

Change the skip's selection confirmation to be a modal, this gives the user an application-feel more than a website-feel

The information displayed in the modal in a way that is easy for the user to see

#### **Bonus Change** Dark/Light Mode

Added dark/light mode using `react context` giving users more say as to how they want the app to look and feel.
