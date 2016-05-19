export function mainPage() {
    var directive = {
        restrict: 'E',
        scope: {},
        templateUrl: 'directives/main.html',
        controller: MainCtrl,
        controllerAs: 'ctrl',
        bindToController: true
    };
    return directive;
}

class MainCtrl {
    constructor() {
        this.name = "MainCtrl";
        this.obj = [
            {
                value: 'Main',
                url: '/'
            },
            {
                value: 'Secondary',
                url: '/secondary'
            },
            {
                value: 'Inner',
                url: '/inner'
            },
            {
                drop:[
                ]
            }
        ];
    }
}