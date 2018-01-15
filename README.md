# The G Spot Bar
----

## What is it?
A responsive Single Page Application (SPA), written in [Angular v5.2](https://angular.io/), for a home bar. The G Spot website displays a reference of karaoke songs, beer, and drinks availible. It also has a contact form to email the bar owners.

All of this data for beer, booze, and karaoke songs are stored in JSON files in ./assets/JSON/.  Updating these files updates the website.

This project was generated with [Angular CLI](https://github.com/angular/angular-cli). The HTML/CSS templates utilize [Bootstrap](http://getbootstrap.com/) version 3.3.7 for styling.  The frontend uses [PrimeNG](https://www.primefaces.org/primeng/#/) as an added UI framework.

## Table of Contents

- [Background](#background)
- [Installation](#installation)
- [Development Environment](#dev)
	- [Code scaffolding](#cli)
- [Production](#prod)
- [Running unit tests](#unittest)
- [Running end-to-end tests](#endtest)
- [Further help](#help)
- [TODO](#todo)
- [Maintainers](#maintainers)
- [Contribute](#contribute)
- [License](#license)

## <a name="background"></a>Background

The G Spot is the name of my home bar, which was completed in 2017. It got it's name from my wife and I's last names.  The website was setup partially as a joke, but also as a reference.  The website can be used to find karaoke track #s from your phone.  It can also be used by friends to see what drinks are avialiable before coming over.


## <a name="installation"></a>Installation
1. Download and install [Node.js](https://nodejs.org/en/download/) using these [instructions](https://docs.npmjs.com/getting-started/installing-node).
2. Download and install [GitHub Desktop](https://help.github.com/articles/set-up-git/) using these [instructions](https://help.github.com/articles/set-up-git/)
3. Clone this repository using the [instructions from GitHub](https://help.github.com/articles/cloning-a-repository/)
    * Ensure you use command:
        `git clone https://github.com/ZGrauer/GSpotBar.git`

4. Install all dependencies by entering `npm install` from a terminal within the cloned folder.
5. Go to [Goole reCAPTCHA/](https://www.google.com/recaptcha) and setup your domain for `reCAPTCHA V2`.  Record the site key and secret key. 
6. Go to your project file `/src/app/contact/contact.component.html`, and update the `siteKey` value within the `<p-captcha>` tag on line 39.
7. Go to your project file `/src/app/contact/email.service.ts`, and update the `private emailUrl` value on line 17 with your personal email.  This is where the contact form will go to.
8. Edit Angular files as needed within the `./src/app/` folder.  Use the [Angular CLI](https://cli.angular.io/) to add components.

## <a name="dev"></a>Development Environment

Run `ng serve` in a terminal from the project directory for a dev server. The app can then be run by navigating to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

```Shell
    $ ng serve
```

### <a name="cli">Code scaffolding

From a terminal run `ng generate component component-name` to generate a new component using the Angular CLI. You can also use `ng generate directive/pipe/service/class/module`.

```Shell
    $ ng generate component component-name
```

## <a name="prod"></a>Production

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod --aot` flag for a production build.

```Shell
    $ ng build
```


## <a name="unittest">Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

```Shell
    $ ng test
```


## <a name="endtest">Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).
Before running the tests make sure you are serving the app via `ng serve`.

```Shell
    $ ng e2e
```


## <a name="help">Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

```Shell
    $ ng help
```


## <a name="maintainers"></a>Maintainers

[@ZGrauer](https://github.com/ZGrauer).

## Contribute

Feel free to dive in! [Open an issue](https://github.com/ZGrauer/GSpotBar/issues/new) or submit PRs.

Customer Tracker follows the [Contributor Covenant](http://contributor-covenant.org/version/1/3/0/) Code of Conduct.

## License

[GNU](LICENSE) © Zachary Grauerholz