'use strict';

import rp from 'request-promise';

const getInfo = () => {
  const options = {
    url: 'https://raw.githubusercontent.com/beerjs/santiago/master/beerjs.json',
    json: true
  };
  return rp(options).then(data => {
    if (!data.evento || !data.fecha) throw new Error('Not found');
    return data;
  });
};

const getEvents = () => {
  const options = {
    url: 'https://api.github.com/repos/beerjs/santiago/issues',
    json: true,
    headers: {
      'User-Agent': 'beerjs-info'
    }
  };
  return rp(options).then(data => data.filter(x => /Edición/i.test(x.title)))
    .then(data => {
      return data.map(x => {
        const [date, place, theme, expositors] = x.body.split('\r\n');
        return {
          title: x.title,
          comments_url: x.comments_url,
          date: date.split(': ')[1],
          place: place.split(': ')[1],
          theme: theme.split(': ')[1],
          expositors: expositors.split(': ')[1]
        };
      });
    });
};

module.exports = {
  getInfo: getInfo,
  getEvents: getEvents
};
