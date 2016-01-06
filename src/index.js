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

module.exports = getInfo;
