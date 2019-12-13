# Transloco Widget Initialization Demo

## Issue Description

I have an issue when using transloco with widgets that require initialization. I need to set initial sorting options on a grid widget, but the same issue exists when simply initializing an input text field. To get a reference to the grid compopnent, I use `@ViewChild` and then I use this grid reference in the Angular life cycle hooks `ngOnInit` or `ngAfterViewInit`.

Following the transloco docs, I use the structural directive to get the translations. The transloco structural directive doesn't render the template immediately. It waits for the translation to have been loaded before rendering it.
I do therefore not get access to the grid and cannot initialize it in the Angular life cycle hooks `ngOnInit` or `ngAfterViewInit` because it has not been rendered yet.
To make it work, I subscribed to the transloco `translationLoadSuccess` event and set the initial sorting options just after the translations have been loaded. This is for some reason still not enough and I need to add the `delay(0)` operator to apply the initial sorting options to the grid. Now that definitely feels like I am doing something wrong.

Is there not a better way to initialize widgets inside the transloco structural directive? How are you guys doing that? It seems to me that each non trivial component needing widget initialization has this issue. Do you see a way to use the Angular life cycle hooks as if I would not be using trasnloco?

I have created demo code for the issue described above in this repository: https://github.com/arviem-dev/transloco-sample
The grid sorting is initialized with ascending sorting for the first name column.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).
