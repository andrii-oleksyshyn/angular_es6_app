export function innerPage() {
    var directive = {
        restrict: 'E',
        scope: {},
        templateUrl: 'components/inner-page/inner.html',
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