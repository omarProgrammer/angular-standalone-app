# Angular Standalone APP
This is an attempt to create an Angular app without a NgModule. The standalone component is a new feature in Angular V14.

Moreover:
  - I also tested how can create a lazy load routers by just importing the component
  - Use the `ENVIRONMENT_INITIALIZER` hook that replaced APP_INITIALIZER
  - Use `Inject` that returns an instance of a given service

** I will add more Angular V14 features in the same repository ** Keeping in touch


## Required
- Nodejs +16, you can use nvm to switch to recommended node version
- Angular V14 (next version at this moment)

## Install The project
Execute the following command to install the required dependencies with npm
```sh
npm install
```

## Start The project
 execute the followinf command  to start the projet on localhost
 ```sh
 npm start
 ```

 ## Other scripts
 |Task Npm| Script|
 |-|-|
 | Build | `npm run build`|
 | Lint typescript | `npm run lint:ts`|
 | lint typescript with autofix | `npm run lint:ts:fix`|
