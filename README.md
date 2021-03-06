# beerjs

[![npm version](https://img.shields.io/npm/v/beerjs-info.svg?style=flat-square)](https://www.npmjs.com/package/beerjs-info)
[![npm downloads](https://img.shields.io/npm/dm/beerjs-info.svg?style=flat-square)](https://www.npmjs.com/package/beerjs-info)
[![Build Status](https://img.shields.io/travis/lgaticaq/beerjs.svg?style=flat-square)](https://travis-ci.org/lgaticaq/beerjs)
[![Coverage Status](https://img.shields.io/coveralls/lgaticaq/beerjs/master.svg?style=flat-square)](https://coveralls.io/github/lgaticaq/beerjs?branch=master)
[![Code Climate](https://img.shields.io/codeclimate/github/lgaticaq/beerjs.svg?style=flat-square)](https://codeclimate.com/github/lgaticaq/beerjs)
[![dependency Status](https://img.shields.io/david/lgaticaq/beerjs.svg?style=flat-square)](https://david-dm.org/lgaticaq/beerjs#info=dependencies)
[![devDependency Status](https://img.shields.io/david/dev/lgaticaq/beerjs.svg?style=flat-square)](https://david-dm.org/lgaticaq/beerjs#info=devDependencies)

> Get beerjs info (Chile)

## Installation

```bash
npm i -S beerjs-info
```

```bash
bower i -S beerjs-info
```

## Use

[Try on Tonic](https://tonicdev.com/npm/beerjs-info)
```js
const beerjs = require('beerjs-info');

beerjs.getInfo().then(console.log);
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

## License

[MIT](https://tldrlegal.com/license/mit-license)
