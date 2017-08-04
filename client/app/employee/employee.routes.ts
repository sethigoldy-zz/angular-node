'use strict';

export default function($routeProvider) {
  'ngInject';
  $routeProvider
    .when('/employee', {
      template: '<employee></employee>'
    });
}
