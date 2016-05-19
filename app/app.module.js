'use strict';

import {MainCtrl} from './controllers/MainCtrl';

angular
    .module('app', [])
    .controller('MainCtrl', MainCtrl)

angular.element(document).ready(function () {
    angular.bootstrap(document.documentElement, ['app'], {
        strictDi: false
    });
});