import { IMyConstant } from '../core.constant';

export function EnumFilter(myConstant: IMyConstant) {
    'ngInject';
    return (value: string, name: string) => {
        if (!myConstant.enum) {
            console.error('myConstant.enum not find');
        } else {
            if (!myConstant.enum[name]) {
                console.error(`can't find enum ${name} in myConstant.enum`);
            } else {
                if (!myConstant.enum[name][value]) {
                    console.error(`can't find value ${value} in enum ${name} in myConstant.enum`);
                } else {
                    return myConstant.enum[name][value];
                }
            }
        }
    };
}
