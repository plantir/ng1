import './owl-carousel.component.scss';

class OwlCarouselController {
    name: string = 'owl-carousel';
    constructor(private $element: ng.IRootElementService) {
        'ngInject';
    }
    $onInit() {
        console.log(this.$element[0].querySelector('.owl-carousel'));
    }
}

export class OwlCarousel implements ng.IComponentOptions {
    static selector = 'owlCarousel';
    static template = require('./owl-carousel.component.html');
    static bindings = {
        option: '=option',
        items: '=items'
    };
    static controller = OwlCarouselController;
    static transclude = true;
}
