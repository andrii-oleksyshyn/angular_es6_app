'use strict';

angular
    .module('app', []);

angular.element(document).ready(function () {
    angular.bootstrap(document.documentElement, ['app'], {
        strictDi: false
    });
});