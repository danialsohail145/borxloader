
# BorXLoader

NPM Package used as a loader/spinner for angular application.
## Features

- Four types of loader/spinner is integrated
- Image is added on the loader
- Can be used from any component
- Customize functionality
- Show/Hide any features based on configuration



## Installation

Install borxloader with npm

```bash
  npm install borxloader
```
    
## Usage/Examples

- import BorxloaderModule 

```javascript
// app.module.ts
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
 
import { BorxloaderModule } from 'borxloader';
 
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BorxloaderModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
```

And you are good to go...

Use it in your app.component.html

```javascript
<borx-loader></borx-loader>
```
By-default has congifuration in which every feature is enabled but you modify it according to your need.

```javascript
config = {
    image: 'Your Image Source Link',
    loaderType: 'ring',
    loaderColor: 'black',
    showImage: true,
    showSpinner: true,
    showBackdrop: true,
  }
```
- ```image``` source link of your image.
- ```loaderType``` define which type of loader you want to use. Four types has been integrated as  ``` ring | roller | spinner | ellipsis```
- ```loaderColor``` Color code for the loader/spinner.
- ```showImage``` Boolean if you want to show image along with loader or not.
- ```showSpinner``` Boolean if you want to show spinner or not.
- ```showBackdrop``` Boolean if you want to show backdrop or not.

you have to pass this configuration allong with borx-loader in app.component.html 

```javascript
<borx-loader [config]="config"></borx-loader>
```
## Authors

- [@danialsohail145](https://github.com/danialsohail145)


## 🔗 Links

[![linkedin](https://img.shields.io/badge/linkedin-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/danial-sohail-4470a2123/)
[![twitter](https://img.shields.io/badge/twitter-1DA1F2?style=for-the-badge&logo=twitter&logoColor=white)](https://twitter.com/danial__sohail)

