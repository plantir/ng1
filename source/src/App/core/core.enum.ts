enum shopping_status {
    'ناموفق' = 0,
    'موفق' = 1,
    'لغو شده' = 2,
}
enum commission_status {
    'پرداخت نشده' = 0,
    'پرداخت شده' = 1,
}
enum cashback_status {
    'پرداخت نشده' = 0,
    'پرداخت شده' = 1,
}
enum refer_status {
    'پرداخت نشده' = 0,
    'پرداخت شده' = 1,
}
enum user_status {
    'غیر فعال' = 0,
    'فعال' = 1,
}
enum user_verified_status {
    'تایید نشده' = 0,
    'تایید شده' = 1,
}
enum merchant_grade {
    'کلاس A' = 1,
    'کلاس B' = 2,
    'کلاس C' = 3,
}
enum source_type {
    'عضویت' = 1,
    'ریفرال' = 2,
    'کش بک' = 3,
    'کش اوت' = 4,
    'اصلاحیه' = 5,
    'کیف پول' = 6,
}
enum offer_type {
    'کل سایت' = 0,
    'دسته بندی' = 1,
    'برند' = 2,
    'محصول' = 3
}
enum webservice_status {
    'ناموفق' = 0,
    'موفق' = 1,
}
enum transaction_status {
    'در حال بررسی' = 0,
    'اعمال شده' = 1,
    'لغو شده' = 2,
}
enum order_status {
    'در حال بررسی' = 0,
    'موفق' = 1,
    'لغو شده' = 2,

}
enum fieldOfActivity {
    'اپ استورها و مارکت ها' = 1,
    'تبلیغات آنلاین' = 2,
    'تبلیغات پاپ آپ' = 3,
    'خرید گروهی' = 4,
    'خشکشوئی آنلاین' = 5,
    'درخواست آنلاین خودرو' = 6,
    'خودرو' = 7,
    'سفارش آنلاین چاپ' = 8,
    'سفارش آنلاین غذا' = 9,
    'سفارش آنلاین نان' = 10,
    'سلامت الکترونیک' = 11,
    'فروشگاه اینترنتی عمومی' = 12,
    'فروشگاه های تخصصی' = 13,
    'فروشگاه اینترنتی پوشاک' = 14,
    'فروشگاه اینترنتی کتاب' = 15,
    'فروشگاه اینترنتی عطر' = 16,
    'فروشگاه اینترنتی لوازم خانگی' = 17,
    'فروشگاه اینترنتی لوازم تحریر' = 18,
    'فروشگاه اینترنتی ورزشی' = 19,
    'فروشگاه اینترنتی کامپیوتر و موبایل' = 20,
    'فروشگاه اینترنتی صنایع دستی' = 21,
    'فروشگاه اینترنتی میوه' = 22,
    'فروشگاه و اپلیکیشن ساز' = 23,
    'رزرواسیون آنلاین بلیط و هتل' = 24,
    'رزرواسیون آنلاین رستوران' = 25,
    'نیازمندی های عمومی' = 26,
    'نیازمندی های خصوصی' = 27,
    'فروش اینترنت' = 28,
    'سوپر مارکت آنلاین' = 29,
    'غیره' = 30,
}
enum howFindUs {
    'اپ استورها و مارکت ها' = 1,
    'سرچ گوگل ' = 2,
    'دوست و آشنا' = 3,
    'تبلیغ و بنر کشینه' = 4,
    'غیره' = 5
}
export const enumList = {
    shopping_status: shopping_status,
    commission_status: commission_status,
    cashback_status: cashback_status,
    refer_status: refer_status,
    user_status: user_status,
    user_verified_status: user_verified_status,
    merchant_grade: merchant_grade,
    source_type: source_type,
    offer_type: offer_type,
    webservice_status: webservice_status,
    transaction_status: transaction_status,
    order_status: order_status,
    fieldOfActivity: fieldOfActivity,
    howFindUs: howFindUs,
};

