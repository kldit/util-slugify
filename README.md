# util-first-char-case

## Install
```bash
npm i --save @kldit/util-slugify
```

## Usage
Load at the begining of your application.
```javascript
require("@kldit/util-slugify");
```
Run at any where of your code.
```javascript
"Teste plutôt good nicht".slugify() // "teste-plutot-good-nicht"
"TESTE".firstCharToLowerCase() // "teste"
```
