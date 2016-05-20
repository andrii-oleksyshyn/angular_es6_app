export function secondaryPage() {
    var directive = {
        restrict: 'E',
        scope: {},
        templateUrl: 'components/secondary-page/secondary.html',
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