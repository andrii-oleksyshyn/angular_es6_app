export function innerPage() {
    var directive = {
        restrict: 'E',
        scope: {},
        templateUrl: 'views/inner.html',
        controller: InnerCtrl,
        controllerAs: 'inner',
        bindToController: true
    };
    return directive;
}

class InnerCtrl {
    constructor() {
        this.name = "InnerCtrl";
    }
}