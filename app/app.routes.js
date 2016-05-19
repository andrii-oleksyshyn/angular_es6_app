function appRoutes($locationProvider, $stateProvider) {
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
        });

    $locationProvider.html5Mode({
        enabled: true,
        requireBase: false
    });
}

appRoutes.$inject = ['$locationProvider', '$stateProvider'];

export { appRoutes };