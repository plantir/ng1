import { enumList } from './core.enum';
declare const API_URL: string; // from webpack define Plugin
export interface IMyConstant {
    ApiUrl: string;
    SiteUrl: string;
    enum: any;
}
export const myConstant: IMyConstant = {
    'ApiUrl': process.env.API_URL || 'https://api.cashineh.com',
    'SiteUrl': process.env.SITE_URL || 'https://cashineh.com',
    enum: enumList
};
