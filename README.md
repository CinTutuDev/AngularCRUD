
# AngularCRUD
Proyecto con Angular15/ MateriaUI/componentes/Json-Server"App de registros de ususarios para GYM"
## Creo el nuevo proyecto scss:

```
 ng new GYMAngularCRUD --routing --style=scss
```
* Angular/material
```
ng add @angular/material
- Would you like to proceed? (Y/n)yes
```
* Levantar app en servidor
```
 ng s -o
 ```
* Bootstrap
```
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-KK94CHFLLe+nY2dmCWGMq91rCGa5gtU4mk92HdvYe+M/SXH301p5ILy+dN9+nJOZ" crossorigin="anonymous">
```
* Icons
```
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
```

## URL
* Angular
```
https://angular.io/start
```
* Angular Material
```
https://material.angular.io/
```
* schematics
```
https://material.angular.io/guide/schematics
```
* CDN Bootstrap
```
https://getbootstrap.com/
```
* ICONS
```
https://www.w3schools.com/icons/fontawesome_icons_intro.asp
```

## Crear componentes
```
ng g c registro --skip-tests
```
## Popup
```
npm i ng-angular-popup --force
```
 * app.module.ts
 ``` 
import { NgToastModule } from 'ng-angular-popup';

imports: [
     NgToastModule
  ],
```

##  Confirm-box 
```
 npm i ng-confirm-box --force
 ```
 * app.module.ts
 ``` 
import { NgConfirmModule } from 'ng-confirm-box';

  imports: [
    NgConfirmModule
  ],
```
## 👀Errores❗ al levantar server
* Fijarse bien en package.json:
```
"dependencies": {
    "ng-angular-popup": "^0.2.0",
    "ng-confirm-box": "^0.0.6",
    ....}
 "devDependencies": {
    "sass": "^1.60.0",
    "sass-loader": "^13.2.2",
    "typescript": "~4.9.4",
    "vuetify": "^2.5.1"
  ...}
  ```
* Fijarse bien en angular.json si no está incluirlo:
```
  "build": {
          "builder": "@angular-devkit/build-angular:browser",
          "options": { ...estas dos lines:
           ✔ "stylePreprocessorOptions": {
              "includePaths": ["node_modules"]❗
          },

            ó❗
 "styles": [
      "node_modules/@angular/material/prebuilt-themes/indigo-pink.css",
              "src/styles.scss"
            ],       
```
## Crear JSON Server
* Installar de manera global
```
 npm i -g json-server
 ```
 * Crear db.json
 ```
  json-server --watch db.json
 ```
* Ir a:
```
http://localhost:3000/posts
```
* Servicio
```
 ng g s services/api --skip-tests
 ```
 
 ## Levantar app con servidor y base de datos
 ```
  json-server --watch db.json
  ```
  ```
  ng s -o
  ```
  

 
