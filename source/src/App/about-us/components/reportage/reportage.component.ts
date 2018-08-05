import './reportage.component.scss';

class ReportageController {
    reportage_list = [
        {
            logo: '/assets/img/reportage/alef_logo.jpg',
            title: 'کشینه راهی برای پول بدست آوردن',
            image: '/assets/img/reportage/default.jpg'
        },
        {
            logo: '/assets/img/reportage/jamejamonline_logo.jpg',
            title: 'کشینه راهی برای پول بدست آوردن!!',
            image: '/assets/img/reportage/default_2.jpg'
        },
        {
            logo: '/assets/img/reportage/mehrnews_logo.svg',
            title: 'با کشینه از خرید اینترنتی پول دربیاورید!',
            image: '/assets/img/reportage/mehr.jpg'
        },
        {
            logo: '/assets/img/reportage/isna_logo.jpg',
            title: 'با «کشینه» پول بسازید',
            image: '/assets/img/reportage/isna.jpg'
        },
        {
            logo: '/assets/img/reportage/digiato_logo.svg',
            title: 'لذت لمس پول در خرید آنلاین از طریق کشینه',
            image: '/assets/img/reportage/digiato.jpg'
        },
        {
            logo: '/assets/img/reportage/zoomit_logo.svg',
            title: 'کشینه خرید اینترنتی پول ساز',
            image: '/assets/img/reportage/zomit.gif'
        },
        {
            logo: '/assets/img/reportage/asreiran_logo.jpg',
            title: 'کشینه (Cashineh) وبسایتی که بدون آن نباید خرید آنلاین کرد.',
            image: '/assets/img/reportage/digiato.jpg'
        },
        {
            logo: '/assets/img/reportage/gadgetnews_logo.jpg',
            title: 'بی کشینه خرید اینترنتی ممنوع!',
            image: '/assets/img/reportage/gadget_news.jpg'
        },
        {
            logo: '/assets/img/reportage/eghtesadonline_logo.jpg',
            title: 'با کشینه از خرید اینترنتی پول دربیاورید!',
            image: '/assets/img/reportage/default.jpg'
        },
        {
            logo: '/assets/img/reportage/itna_logo.jpg',
            title: 'کشینه راه جدید خرید اینترنتی ارزانتر، از فروشگاه های اینترنتی معتبر',
            image: '/assets/img/reportage/default_2.jpg'
        },
        {
            logo: '/assets/img/reportage/entekhabnews_logo.jpg',
            title: '"کشینه" یعنی پول راحت و خرید آنلاین بهینه',
            image: '/assets/img/reportage/default_2.jpg'
        }
    ];
}

export class Reportage implements ng.IComponentOptions {
    static selector = 'reportage';
    static template = require('./reportage.component.html');
    static bindings = {
    };
    static controller = ReportageController;
}
