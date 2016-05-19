export function secondaryPage() {
    var directive = {
        restrict: 'E',
        scope: {},
        templateUrl: 'views/secondary.html',
        controller: SecondaryCtrl,
        controllerAs: 'secondary',
        bindToController: true
    };
    return directive;
}

class SecondaryCtrl {
    constructor() {
        this.name = "SecondaryCtrl";
    }
}