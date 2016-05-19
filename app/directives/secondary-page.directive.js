export function secondaryPage() {
    var directive = {
        restrict: 'E',
        scope: {},
        templateUrl: 'directives/secondary.html',
        controller: SecondaryCtrl,
        controllerAs: 'ctrl',
        bindToController: true
    };
    return directive;
}

class SecondaryCtrl {
    constructor() {
        this.name = "SecondaryCtrl";
    }
}