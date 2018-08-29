const app = angular.module('app', [])
app.directive('redRect', function () {
    return {
        restrict: 'E',
        templateNamespace: 'svg',
        template: '<rect height="200" width="200" fill="red"/>',
        replace: true
    }
})