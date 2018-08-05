/**
 * Import the Component styles
 * <div class="app" ui-view></div>
 *
 *
 */
export class App implements angular.IComponentOptions {
    static selector = 'app';
    static template = `<app-header></app-header><div class="app" ui-view></div><app-footer><app-footer>`;
}
