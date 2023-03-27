# Angular Coding Challenge

Welcome the Angular coding challenge!

This is a simple web application for showing user profiles built with Angular 14.

## Local Setup

1. Make sure to have version 16 of node.js installed
2. Install dependencies by running `npm install`
3. Start the development server by runnign `npm start`

## Other Commands

- Running tests: `npm test`
- Running code QC: `npm run lint`
- Building a production bundle: `npm run build`

## Goal of this Challenge

This coding challenge aims to simulate a simple programming problem you might encounter in the real world.
We are interested in *how* you work, therefore the challenge should not be very difficult and the focus should be *how*
you solve the objectives, rather than *if* you do.
Nevertheless, if you are stuck or in case of any ambiguities in the objectives, do not hesitate to reach out to us and
ask.

## Rules

- You are allowed to modify `package.json`, as well as everything inside the `src/` folder.
- Don't be afraid to change the existing code!

## Submission

There are three ways you can submit your solution to this challenge.
1. Using GitHub
   1. Fork this repository
   2. Clone the forked repository
   3. Push commits to your fork
   4. Once you are done, send us the link of your fork via e-mail.
2. Using a different git hosting service (e.g. GitLab)
   1. Clone this repository
   2. Create a repository
   3. Locally add the new repository as a second remote
   4. Push commits to the new repository
   5. Once you are done, send us the link of your repository via e-mail.
3. Using Zip files (not recommended)
   1. Clone this repository
   2. Don't push commits anywhere
   3. Once you are done, send us a zip file containing the project via e-mail (Make sure to exclude `node_modules`!).

## Objectives

### Markdown

A `renderMarkdown` function is already implemented (using [marked](https://marked.js.org/) behind the scenes).
You can find it at `/src/utils/strings.ts`.
Use Angular primitives (Components, Directives, Services, Pipes, …) to make this function more usable in Angular
templates.

### User Details

Implement a user detail component.
Given a user ID, the component should get the corresponding user by calling `UserService` and display their profile
picture, name and bio.
The bio should be displayed as parsed markdown.

### Routing

Add routing capabilities to the app. Implement the following routes:

- `/`: List of users
- `/:id`: Details of user with `id`
- Every other path redirects to `/`.
- Redirect to `/` if a user is not found.
  You can assume that any error when getting the user from the `UserService` means that user was not found.

## Bonus Objectives

You are *not* required to implement the following features, but if you are done in less than two hours, and you feel
like the challenge was too easy you could add some of them.
**You will not be criticised if you skip some or all of them!**

- Add transition animations using the `@angular/animations` package
- Add unit tests
- Add a GitHub Actions script that runs `npm test`, `npm run lint` and `npm run build`
