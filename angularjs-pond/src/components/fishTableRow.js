angular.module('fish-pond')
.controller('FishTableCtrl', function() {
  this.showDescription = false;
  this.toggleDescription = () => {
    this.showDescription = !this.showDescription;
  };
})
.component('fishTableRow', {
  bindings: {
    fish: '<'
  },
  controller: 'FishTableCtrl',
  template: `
    <div ng-click="$ctrl.toggleDescription()">
      <span class="fish-name">{{fish.name}}</span>
      <span>
        <img ng-src={{fish.image}} />
      </span>
      <span class="fish-description" ng-if="$ctrl.showDescription">{{fish.description}}</span>
    </div>`
});
