# Test Task

## Installation

Clone the repository and navigate to the project directory:

```bash
git clone <repository-url>
cd <project-folder>
```

Install the dependencies:

```bash
npm install
```

## Development

To start the project in development mode, run:

```bash
npm start
```

After starting, `BrowserSync` will open the project in the browser and automatically reload the page whenever the source files are changed.

You can also use:

```bash
npm run serve:test
```

This command starts the project in test mode (`NODE_ENV=test`).

## Production

To create a production build, run:

```bash
npm run build
```

After the build is completed, the production files will be generated in the:

```text
dist/
```

To run the production build locally:

```bash
npm run serve:dist
```

## Available Commands

| Command | Description |
|---|---|
| `npm install` | Install all project dependencies |
| `npm start` | Start the development server |
| `npm run serve:test` | Start the project in test mode |
| `npm run build` | Create a production build |
| `npm run serve:dist` | Run the production build locally |
| `npm test` | Start the project in test mode |
| `npm run tasks` | Display available Gulp tasks |

## Quick Start

To simply run the project for review:

```bash
npm install
npm start
```

To check the production build:

```bash
npm install
npm run build
npm run serve:dist
```

## Gulp Tasks

The project uses **Gulp** for build automation.

To display all available Gulp tasks:

```bash
npm run tasks
```