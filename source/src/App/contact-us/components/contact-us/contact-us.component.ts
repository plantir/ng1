import './contact-us.component.scss';
import { IContactUsService, IContactUs } from '../../services/contact-us.service';

class ContactUsController {
    contactForm: ng.IFormController;
    ajaxLoading: boolean;
    name: string = 'contact-us';
    googleMapsUrl = 'https://maps.googleapis.com/maps/api/js?key=AIzaSyDqLzkWTDlaVOOjFEnyv-xN_O3Zxw9QKPY';
    Latitude = 35.7782888;
    Longitude = 51.3609235;
    contactUs: IContactUs = {};

    constructor(private $contactUs: IContactUsService, private $mdDialog: ng.material.IDialogService) {
        'ngInject';
    }
    submit() {
        this.ajaxLoading = true;
        this.$contactUs.submit(this.contactUs).then(response => {
            this.ajaxLoading = false;
            this.contactUs = {};
            this.contactForm.$setPristine();
            this.contactForm.$setUntouched();
            this.$mdDialog.show(
                this.$mdDialog.alert()
                    .clickOutsideToClose(true)
                    .title('درخواست شما با موفقیت ثبت شد')
                    .textContent('اطلاعات شما با موفقیت ثبت شد و به زودی مورد بررسی قرار میگیرد')
                    .ariaLabel('Alert Dialog Demo')
                    .ok('باشه!')
            );
        }).catch(err => {
            this.ajaxLoading = false;
            this.$mdDialog.show(
                this.$mdDialog.alert()
                    .clickOutsideToClose(true)
                    .title('خطایی رخ داده است')
                    .textContent('درخواست شما ثبت نشده است لطفا مجددا تلاش کنید')
                    .ariaLabel('Alert Dialog Demo')
                    .ok('باشه!')
            );
        });
    }
    reset() {
        this.contactUs = {};
        this.contactForm.$setPristine();
        this.contactForm.$setUntouched();
    }
}


export class ContactUs implements ng.IComponentOptions {
    static selector = 'contactUs';
    static template = require('./contact-us.component.html');
    static bindings = {
    };
    static controller = ContactUsController;
}
