'use strict';
const angular = require('angular');
import TestController from './test.controller';

export default angular.module('angularNodeApp.test', [])
  .controller('TestController', TestController)
  .name;
