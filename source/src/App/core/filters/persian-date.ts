import * as moment from 'moment-jalaali';
export function PersianDateFilter() {
    return function (input: string, format: string) {
        return moment(input, 'YYYY-M-D HH:mm:ss').format(format || 'jYYYY/jM/jD');
    };
}
