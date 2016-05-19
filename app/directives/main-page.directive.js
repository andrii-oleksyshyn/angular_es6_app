export function mainPage() {
    var directive = {
        restrict: 'E',
        scope: {},
        templateUrl: 'views/main.html',
        controller: MainCtrl,
        controllerAs: 'main',
        bindToController: true
    };
    return directive;
}

class MainCtrl {
    constructor() {
        this.name = "MainCtrl";
    }
}