export function EnumToSelectFilter() {
    'ngInject';
    return (value: Array<any>, name: string) => {
        let keys = [];
        for (var enumMember in value) {
            if (!isNaN(parseInt(enumMember, 10))) {
                keys.push({ key: enumMember, value: value[enumMember] });
            }
        }
        return keys;
    };
}
