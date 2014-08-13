/**
 * <p>Routing for the to-do app.</p>
 * @ngInject
 * @param {object} $StateProvider
 * @param {object} $urlRouterProvider
 */
export default function todoRoutes($stateProvider, $urlRouterProvider) {
  'use strict';
  $urlRouterProvider.otherwise('/');
  $stateProvider
    .state('home', {
      url:         '/:status',
      templateUrl: 'partials/todo.html',
      controller:  'TodoController'
    });
}