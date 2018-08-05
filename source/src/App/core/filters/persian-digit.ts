export function PersianDigitFilter() {

    return FilterFn;

    function FilterFn(Params: any) {
        if (Params || Params === 0) {

            return Params.toString().replace(/\d+/g, function (digit: string) {
                var enDigitArr = [],
                    peDigitArr = [];
                for (var i = 0; i < digit.length; i++) {
                    enDigitArr.push(digit.charCodeAt(i));
                }
                for (var j = 0; j < enDigitArr.length; j++) {
                    peDigitArr.push(String.fromCharCode(enDigitArr[j] + ((!!Params && Params === true) ? 1584 : 1728)));
                }
                return peDigitArr.join('');
            });
        } else {
            return Params;
        }
    }
}
