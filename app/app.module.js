'use strict';

import {mainPage} from 'directives/main-page.directive';
import {secondaryPage} from 'directives/secondary-page.directive';
import {innerPage} from 'directives/inner-page.directive';
import {breadcrumbs} from 'directives/breadcrumbs.directive';
import {appRoutes} from 'app.routes';

angular
    .module('app', [
        'ui.router'
    ])
    .config(appRoutes)
    .directive('mainPage', mainPage)
    .directive('secondaryPage', secondaryPage)
    .directive('innerPage', innerPage)
    .directive('breadcrumbs', breadcrumbs);

angular.element(document).ready(function () {
    angular.bootstrap(document.documentElement, ['app'], {
        strictDi: false
    });
});