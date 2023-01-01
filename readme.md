# Devnagri numerals
### It converts Arabic numerals to Devnagri

## Installation
```sh
# for NPM
npm install devnagri-numerals
# for Yarn
yarn add devnagri-numerals
# for Bower
bower add devnagri-numerals
```

## Functions

### ```toDevnagriNumeral(arabicNumeral)```
- Parameters: `arabicNumeral` should be of type `number`
- Returns: `string`

### ```toArabicNumeral(devnagriString)```
- Parameters: `devnagriString` should be of type `string`
- Returns: `number`

## Usage

- Import it
```javascript
const devnagriConvertor = require('devnagri-numerals');
```
Or for Babel Node
```javascript
import * as devnagriConvertor from "devnagri-numerals";
```

- Convert **Arabic** to **Devnagri**
```javascript
var devnagri_nums = devnagriConvertor.toDevnagriNumeral(232);
```

- Convert **Devnagri** to **Arabic**
```javascript
var arabic_nums = devnagriConvertor.toArabicNumeral('१३७८४');
```

## Build or Test

```sh
npm install
npm run test
```