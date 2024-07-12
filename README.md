# Gamer Logbook - FrontEnd

## Presentation

This is the frontend application for Gamer Logbook.

Gamer Logbook is a web application designed to help videogames players to take notes on their journey in any game(s) of their choice.
Users should be able to signup with just a valid email address, and easily create a new journal for any game to take notes on quests, discoveries, things they want to remember or do later in the game, skills to build-up in the game, etc.
The aim is to be able to read and update gaming notes anywhere at anytime, from any device.

## Nota bene

Quill, the library used for the rich text editor is still in development. Hence it may still have bugs or break the application at times but I think it is a growing project and worth it to explore.

<details>
<summary>License</summary>
The code is open-source and submitted to an [LGPL License](https://github.com/IQAndreas/markdown-licenses/blob/master/gnu-lgpl-v3.0.md)
</details>

## Setup and run project

<details>
<summary>Setup</summary>

You should copy this repository on your own device. Then open a terminal (bash for instance), locate yourself in the project's directory and run the following command line to install all the project's dependencies:

```sh
npm install
```

or

```sh
npm i
```

</details>

<details>
<summary>Compile and Hot-Reload for Development</summary>

```sh
npm run dev
```

</details>

<details>
<summary>Type-Check, Compile and Minify for Production</summary>

```sh
npm run build
```

</details>

<details>
<summary>Lint with [ESLint](https://eslint.org/)</summary>

```sh
npm run lint
```

</details>

## Libraries used in the project

### Icons

[Vue Material Design Icons](https://www.npmjs.com/package/vue-material-design-icons)
You can find a list of existing icons at [Pictogrammers](https://pictogrammers.com/library/mdi/)

### Rich Text Editor

[Vue Quill](https://github.com/vueup/vue-quill?tab=readme-ov-file)
