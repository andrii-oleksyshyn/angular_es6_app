export function innerPage() {
    var directive = {
        restrict: 'E',
        scope: {},
        templateUrl: 'directives/inner.html',
        controller: InnerCtrl,
        controllerAs: 'ctrl',
        bindToController: true
    };
    return directive;
}

class InnerCtrl {
    constructor() {
        this.name = "InnerCtrl";
    }
}