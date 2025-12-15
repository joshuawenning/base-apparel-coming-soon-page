# Base Apparel Coming Soon Page
> Frontend Mentor solution to the [Base Apparel coming soon page challenge](https://www.frontendmentor.io/challenges/base-apparel-coming-soon-page-5d46b47f8db8a7063f9331a0)

[![XO code style](https://shields.io/badge/code_style-5ed9c7?logo=xo&labelColor=gray&logoSize=auto)](https://github.com/xojs/xo)

<img alt="Page screenshot" src="https://github.com/user-attachments/assets/9a7194f2-c1d0-4117-8d07-213bb3b73dd4"/>

## Overview
I chose to build out this project with a vanilla stack&mdash;using simple [npm](https://www.npmjs.com/) scripts for linting CSS and JavaScript. For code maintainability, I authored CSS using the [BEM](https://getbem.com/) naming convention, which I find straightforward and helpful for reducing complex specificity. The project takes advantage of a few modern features:

- [`srcset`](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/img#srcset) for responsive image swapping
- [CSS grid layout](https://developer.mozilla.org/en-US/docs/Web/CSS/Guides/Grid_layout) in balancing the copy and photo on desktop
- [CSS nesting](https://developer.mozilla.org/en-US/docs/Web/CSS/Guides/Nesting) to group components
- Modern CSS colors, using space-separated values instead of commas (e.g. `rgb(255 0 0 / 0.5)`)

## Build
Simply clone the repo `gh repo clone joshuawenning/base-apparel-coming-soon-page` and spin up a local server in the root directory.
```
php -S localhost:8000
```
