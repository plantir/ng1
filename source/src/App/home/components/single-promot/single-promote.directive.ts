import * as $ from 'jquery';

interface ISinglePromotScope extends ng.IScope {
  items: any[];
}
export function SinglePromotDirective($filter: any, $compile: any) {
  'ngInject';
  var directive = {
    link: link,
    restrict: 'A',
    scope: {
      items: '='
    }
  };
  return directive;

  function link(
    scope: ISinglePromotScope,
    element: ng.IRootElementService,
    attrs: ng.IAttributes
  ) {
    let width = document.querySelector('.promot-body').clientWidth;
    let lenght = scope.items.length;
    let template = `<div class="swiper-wrapper" style="width:${width *
      lenght}px">`;
    $(window).on('resize', () => {
      width = document.querySelector('.promot-body').clientWidth;
      lenght = scope.items.length;
      $('.swiper-wrapper').css('width', `${width * lenght}px`);
      $('.swiper-slide').css('width', `${width}px`);
    });
    for (let item of scope.items) {
      template += `<a target="_blank" ui-sref="shopping-trip.landing({merchant_id:${
        item.merchant.id
      },deal_id:${item.id}})" alt="${item.image_title ||
        item.title}" title="${item.image_title ||
        item.title}" style="width:${width}px" class="swiper-slide">
            <span class="image">
              <img src="${item.image}" title="${item.image_title ||
        item.title}" alt="${item.image_title || item.title}">
            </span>
            <span class="promot-desc">
              <span class="title">${item.title}</span>
              <span class="old-price">${$filter('persianDigit')(
                $filter('currency')(item.old_price, '', 0)
              )} تومان</span>
              <span class="new-price">${$filter('persianDigit')(
                $filter('currency')(item.new_price, '', 0)
              )} تومان</span>
            </span>
            <div class="center-align cashback">
                <md-button target="_blank"  ui-sref="shopping-trip.landing({merchant_id:${
                  item.merchant.id
                },deal_id:${
        item.id
      }})" class="md-raised md-primary">دریافت ${$filter('persianDigit')(
        item.merchant.current_cashback_value
      )}٪ کشینه</md-button>
            </div>
          </a>`;
    }

    template += '</div>';
    element.html('').append($compile(template)(scope));
    $('.promot-header').addClass('is_active');
    let count = 0;
    let interval: any;
    function add_interval() {
      interval = setInterval(() => {
        if (count < scope.items.length - 1) {
          count++;
        } else {
          count = 0;
        }
        $('.swiper-wrapper').css(
          'transform',
          `translate3d(${width * count}px, 0px, 0px)`
        );
        $('.promot-header').removeClass('is_active');
        setTimeout(() => {
          $('.promot-header').addClass('is_active');
        }, 20);
      }, 7000);
    }
    add_interval();
    $('.promot-body').on('mouseenter', () => {
      $('.promot-header').addClass('is_pused');
      clearInterval(interval);
    });
    $('.promot-body').on('mouseleave', () => {
      $('.promot-header').removeClass('is_pused');
      add_interval();
    });
  }
}
