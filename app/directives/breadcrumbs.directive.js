export function breadcrumbs() {
    var directive = {
        restrict: 'E',
        scope: {
            breadcrumbsObject: "="
        },
        templateUrl: 'directives/breadcrumbs.html',
        controller: BreadcrumbsCtrl,
        controllerAs: 'ctrl',
        bindToController: true
    };
    return directive;
}

class BreadcrumbsCtrl {
    constructor($state) {
        this.name = "BreadcrumbsCtrl";
        this.$state = $state;
    }
}

BreadcrumbsCtrl.$inject = ['$state'];