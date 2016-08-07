(function (root, beerjs) {
  if (typeof exports === 'object') {
    // CommonJS
    module.exports = beerjs(require('node-fetch'));
  } else if (typeof define === 'function' && define.amd) {
    // AMD
    define([], function () {
      return (root.beerjs = beerjs(root.fetch));
    });
  } else {
    // Global Variables
    root.beerjs = beerjs(root.fetch);
  }
}(this, function beerjs(fetch) {
  'use strict';

  const getInfo = () => {
    const url = 'https://raw.githubusercontent.com/beerjs/santiago/master/beerjs.json';
    return fetch(url).then(res => res.json()).then(data => {
      if (!data.evento || !data.fecha) throw new Error('Not found');
      return data;
    });
  };

  const getEvents = () => {
    const url = 'https://api.github.com/repos/beerjs/santiago/issues';
    const options = {headers: {'User-Agent': 'beerjs-info'}};
    return fetch(url, options).then(res => res.json()).then(data => data.filter(x => /Edici.n/i.test(x.title)))
      .then(data => {
        return data.map(x => {
          const body = x.body.split('\r\n');
          return {
            title: x.title,
            comments_url: x.comments_url,
            date: body[0].split(': ')[1],
            place: body[1].split(': ')[1],
            theme: body[2].split(': ')[1],
            expositors: body[3].split(': ')[1]
          };
        });
      });
  };
  return {
    getInfo: getInfo,
    getEvents: getEvents
  };
}));
