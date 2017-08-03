'use strict';

export default function($routeProvider) {
  'ngInject';
  $routeProvider
    .when('/foo', {
      template: '<foo></foo>'
    });
}
