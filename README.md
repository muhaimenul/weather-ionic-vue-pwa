# weather-pwa

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Run your tests
```
npm run test
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).


### Firebase Setup for Hosting

### Install Firbase CLI
```
npm i firebase-tools
```
### Login Using Firbase CLI and Create DB
```
firebase login
```
```
firebase list
```

### Initialize Firebase Hostinf
```
firebase init
```
- Select Hosting
- Select a default Firebase project for this directory
- Add directory to be hosted (dist for vue)
- Select SPA

### Depoloy to Firebase
```
firebase deploy
```

Project Console: https://console.firebase.google.com/project/learing-db/overview
Hosting URL: https://learing-db.firebaseapp.com

## For PWA
```
vue add @vue/pwa
```