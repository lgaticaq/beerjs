# beerjs

[![npm version](https://img.shields.io/npm/v/beerjs-info.svg?style=flat-square)](https://www.npmjs.com/package/beerjs-info)
[![npm downloads](https://img.shields.io/npm/dm/beerjs-info.svg?style=flat-square)](https://www.npmjs.com/package/beerjs-info)
[![Build Status](https://img.shields.io/travis/lgaticaq/beerjs.svg?style=flat-square)](https://travis-ci.org/lgaticaq/beerjs)
[![dependency Status](https://img.shields.io/david/lgaticaq/beerjs.svg?style=flat-square)](https://david-dm.org/lgaticaq/beerjs#info=dependencies)
[![devDependency Status](https://img.shields.io/david/dev/lgaticaq/beerjs.svg?style=flat-square)](https://david-dm.org/lgaticaq/beerjs#info=devDependencies)
[![Join the chat at https://gitter.im/lgaticaq/beerjs](https://img.shields.io/badge/gitter-join%20chat%20%E2%86%92-brightgreen.svg?style=flat-square)](https://gitter.im/lgaticaq/beerjs?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)

Get beerjs info (Chile)

## Installation

```bash
npm i -S beerjs-info
```

## Use

[Try on Tonic](https://tonicdev.com/npm/beerjs-info)
```js
const beerjs = require('beerjs-info');

// Promise
beerjs()
  .then(data => console.log(data))
  .catch(err => console.error(err));

// Callback
beerjs(data, (err, data) => {
  if (err) return console.error(err);
  console.log(data);
});
```

Result:

```js
{
  evento: "BeerJS Santiago #9 :beerjs:",
  fecha: "miércoles 6 de enero 2016",
  donde: "Yapo.cl",
  direccion: "Mariano Sanchez Fontencilla 310 of 1001",
  hora: "desde 19:30 hrs",
  tema: "Visualización de datos",
  requisito: "Traer hambre, sed y buena onda"
}
```
