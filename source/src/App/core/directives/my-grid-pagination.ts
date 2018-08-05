export function MyGridPaginationDirective() {
  var directive = {
    // bindToController: true,
    // link: link,
    // scope: {
    //     ngModel: '='
    // },
    restrict: 'E',
    template: `<div layout="row" layout-align="space-between center">
        <div>
          <md-input-container class="items-per-page">
            <md-select aria-label="pageSize" ng-model="paginationOptions.perPage" ng-change="changePerPage()">
              <md-option ng-value="10">10</md-option>
              <md-option ng-value="25">25</md-option>
              <md-option ng-value="50">50</md-option>
              <md-option ng-value="75">75</md-option>
            </md-select>
          </md-input-container>
        </div>
        <div>
          <grid-pagination max-size="5" boundary-links="true" class="pagination" ng-if="paginationOptions.total > paginationOptions.perPage"
            ng-model="paginationOptions.page" total-items="paginationOptions.total" ng-change="reloadGrid()" items-per-page="paginationOptions.perPage"></grid-pagination>
        </div>
      </div>`

  };
  return directive;

  // function link(scope: any, element: ng.IRootElementService, attrs: ng.IAttributes) {

  // }
}
