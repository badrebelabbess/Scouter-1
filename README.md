# ScouterFront

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.0.0.

## prerequisites
* NodeJs 4 and more
* angularcli
```bash
npm install -g @angular/cli
```
[more information](https://github.com/angular/angular-cli)

## Installation
Install js dependencies
```bash
npm install
```
after launch application by
```bash
ng serve --open
```

## Create a production version
To create a production version, launch
```bash
ng build --prod --aot --extract-css
```

When the compilation is over a folder named "dist" will appear on the project. copy the whole elements of folder on the folder webapp if it's a Java EE project.

After open the index.html file and replace :
```bash
<base href="/">
```

by 

```bash
<base href="BaseUriOfTheProduction/">
```

-----------------------------------------------------------------------------
-----------------------------------------------------------------------------
For more
## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive/pipe/service/class/module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).
Before running the tests make sure you are serving the app via `ng serve`.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).