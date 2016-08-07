'use strict';

const expect = require('chai').expect;
const nock = require('nock');

const lib = require('../src');

describe('beerjs', () => {

  describe('valid', () => {
    beforeEach(() => {
      nock.disableNetConnect();
      nock('https://raw.githubusercontent.com')
        .get('/beerjs/santiago/master/beerjs.json')
        .reply(200, {
          evento: 'BeerJS Santiago #9 :beerjs:',
          fecha: 'miércoles 6 de enero 2016',
          donde: 'Yapo.cl',
          direccion: 'Mariano Sanchez Fontencilla 310 of 1001',
          hora: 'desde 19:30 hrs',
          tema: 'Visualización de datos',
          requisito: 'Traer hambre, sed y buena onda'
        });
    });

    it('should return a valid result', done => {
      lib.getInfo().then((data) => {
        expect(data).to.be.a('object');
        expect(data.evento).to.be.a('string');
        expect(data.fecha).to.be.a('string');
        expect(data.donde).to.be.a('string');
        expect(data.direccion).to.be.a('string');
        expect(data.hora).to.be.a('string');
        expect(data.tema).to.be.a('string');
        expect(data.requisito).to.be.a('string');
        done();
      }).catch(err => {
        if (err) throw err;
        done();
      });
    });
  });

  describe('invalid', () => {

    beforeEach(() => {
      nock.disableNetConnect();
      nock('https://raw.githubusercontent.com')
        .get('/beerjs/santiago/master/beerjs.json')
        .reply(200, {});
    });

    it('should return a empty result', done => {
      lib.getInfo().catch(err => {
        expect(err).to.eql(new Error('Not found'));
        done();
      });
    });
  });
});
