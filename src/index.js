'use strict';

import Q from 'q';
import rp from 'request-promise';

const getInfo = (cb) => {
  const deferred = Q.defer();
  const options = {
    url: 'https://raw.githubusercontent.com/beerjs/santiago/master/beerjs.json',
    json: true
  };
  rp(options).then(data => {
    if (data.evento && data.fecha) {
      deferred.resolve(data);
    } else {
      deferred.reject(new Error('Not found'));
    }
  }).catch(deferred.reject);
  deferred.promise.nodeify(cb);
  return deferred.promise;
};

const getEvents = (cb) => {
  const deferred = Q.defer();
  const options = {
    url: 'https://api.github.com/repos/beerjs/santiago/issues',
    json: true,
    headers: {
      'User-Agent': 'beerjs-info'
    }
  };
  rp(options).then(data => {
    const editions = data.filter(x => /Edición/i.test(x.title))
      .map(x => {
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
    deferred.resolve(editions);
  }).catch(deferred.reject);
  deferred.promise.nodeify(cb);
  return deferred.promise;
};

module.exports = {
  getInfo: getInfo,
  getEvents: getEvents
};
