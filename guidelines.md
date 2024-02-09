# GUIDELINES FOR SETER PROJECT

index.html is the entry point of the application. It is the home page

## Required packages
    You need to install nodejs
    
    We are going to use electron for a stand alone application. So we will need to install some packages
    First download node.js and install on your computer and then restart the computer
    Then, you can come back and type node -v in the powershell to see if the installation is correct. The good result of that command in the powershell is "v20.11.0" or any other version you installed

    And then, you can start installing packages
    First , you run on the terminal "npm install" to start the configuration
    That command will install all the packages that are in the package.json file.

    Keep in mind that you may need to allow your computer for PowerShell script execution Policy.
    You can do that by opening your PowerShell as administrator and running 
    "Get-ExecutionPolicy" // if the result is not RemoteSigned, then run this:
    "Set-ExecutionPolicy RemoteSigned" //This will allow your computer for script execution internally with the terminal

    We will need these packages:
        gulp-cli // for automation in the build of scss files process
        @babel/core
        @babel/preste-env
        postcss
        autoprefixer
        browser-sync
        cssnano
        dart-sass
        sass
        gulp
        gulp-babel
        gulp-postcss
        gulp-sass
        gulp-terser
        gulp-typescript
        nodemon
        concurrently
        electron // main framework for managing the stand alone window on your computer. It works just as a client navigator. Be patient it may take a few seconds at the end of the process
    
    You can run the application by typing in the terminal: "npm run watch"
    That will start the application and then, you can do what you want to do

## Main features of the application
    1. Se déplacer
    2. Titres et tarifs
    3. Mes favoris
    4. Ma ligne
    3. Actualité du TER
    4. Centre d'aide

## Colors
    I came up with a set of colors you could use in the root variables of javascript to style the websites

### Primary Colors
