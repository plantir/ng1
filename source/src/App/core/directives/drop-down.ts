import * as $ from 'jquery';
import './drop-down.scss';

export function DropDownDirective($timeout: ng.ITimeoutService) {
  'ngInject';

  var directive = {
    link: link,
    restrict: 'AEC'
  };
  return directive;

  function link(
    scope: ng.IScope,
    element: ng.IRootElementService,
    attrs: ng.IAttributes
  ) {
    let clickedElem: any;
    $(element).on('click', event => {
      clickedElem = event.target;
      $(element)
        .parent()
        .toggleClass('open');
    });
    $(document).on('click', elem => {
      if (elem.target !== clickedElem) {
        var preventClose = checkHasPreventClose(elem.target);
        if (!$(elem.target).hasClass('dropdown-menu') && !preventClose) {
          $(element)
            .parent()
            .removeClass('open');
        }
      }
    });
  }
}

function checkHasPreventClose(elem: any): boolean {
  if (elem) {
    if (elem.hasAttribute('prevent-close')) {
      return true;
    }
    return checkHasPreventClose(elem.parentElement);
  } else {
    return false;
  }
}
