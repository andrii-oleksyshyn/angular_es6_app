'use strict';

import {mainPage} from 'components/main-page/main-page.directive';
import {secondaryPage} from 'components/secondary-page/secondary-page.directive';
import {innerPage} from 'components/inner-page/inner-page.directive';
import {breadcrumbs} from 'components/breadcrumbs/breadcrumbs.directive';
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