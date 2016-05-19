function appRoutes($stateProvider, $urlRouterProvider) {
    /*let resolveBreadcrumbs = {
        ResolveData : ($stateParams, breadcrumbs) => {
            const proj = $stateParams.projectId;
            if (proj) {
                return breadcrumbs.configureProjectNameAndOrigin(proj);
            }
        }
    };*/

    $stateProvider
        .state('main', {
            url: '/',
            template: '<main-page></main-page>'
        })
        .state('secondary', {
            url: '/secondary',
            template: '<secondary-page></secondary-page>'
        })
        .state('inner', {
            url: '/inner',
            template: '<inner-page></inner-page>'
            //resolve: resolveBreadcrumbs
        })
        .state('404', {
            url: '/404',
            template: '404 Not Found',
        });
    $urlRouterProvider.otherwise('/404');
}

appRoutes.$inject = ['$stateProvider', '$urlRouterProvider'];

export { appRoutes };