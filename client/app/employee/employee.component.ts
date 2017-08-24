'use strict';
const angular = require('angular');
const ngRoute = require('angular-route');


import routes from './employee.routes';

export class EmployeeComponent {
  test = 2 * 4;

  /*@ngInject*/
  constructor() {

  }
}

export default angular.module('angularNodeApp.employee', [ngRoute])
  .config(routes)
  .component('employee', {
    template: require('./employee.html'),
    controller: EmployeeComponent,
    controllerAs: 'ec'
  })
  .name;
