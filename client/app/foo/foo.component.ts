'use strict';
const angular = require('angular');
const ngRoute = require('angular-route');


import routes from './foo.routes';

export class FooComponent {
  /*@ngInject*/
  constructor() {
    this.message = 'Hello';
  }
}

export default angular.module('angularNodeApp.foo', [ngRoute])
  .config(routes)
  .component('foo', {
    template: require('./foo.html'),
    controller: FooComponent,
    controllerAs: 'fooCtrl'
  })
  .name;
