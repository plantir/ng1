import { IPromise, IHttpPromise } from 'angular';
import { IMyConstant, myConstant } from '../../core/core.constant';

export interface IUser {
  name?: string;
  email?: string;
  message?: string;
}
export interface ILogin {
  email?: string;
  password?: string;
}

export interface IRegister {
  name?: string;
  password?: string;
  confirm_password?: string;
  email?: string;
  contact?: string;
  refer_by?: string;
}
export interface IRegisterResponse {
  access_token: string;
  contact: string;
  created_on: Date;
  email: string;
  status: Number;
  updated_on: Date;
  user_id: number;
}
export interface IUserShort {
  name?: string;
  email?: string;
  message?: string;
}
export interface IUserFull extends IUserShort {
  access_token: string;
  account_number: number;
  address: string;
  bank_name: string;
  card_bank_name: string;
  city: number;
  is_verified: number | boolean;
  debit_card_number: number;
  gift_card: string;
  pincode: number;
  state: number;
  telephone_number: number;
  mobile: number;
  total_cashback: number;
  register_source: string;
  pending_cashback: number;
  id: number;
  image: string;
  username: string;
  birthDay: any;
  birthDayJ: any;
  sms_enabled: number | boolean;
  notifications: any[];
  review: string;
}
export interface ILoginResponse extends IUserFull {
  access_token: string;
  token: string;
  contact: string;
  created_on: Date;
  email: string;
  status: Number;
  updated_on: Date;
  account_balance: number;
  id: number;
}
export interface IUserService {
  getInfo(): IHttpPromise<IUserFull>;
  saveInfo(
    data: IUserFull
  ): IPromise<{ message: string; data: IUserFull; status: number }>;
  save(
    data: IUserFull
  ): IPromise<{ message: string; IUserFull: string; status: number }>;
  loginModal(): void;
  registerModal(): void;
  isLogedIn(): null | ILoginResponse;
  loginWithEmail(
    data: ILogin
  ): IPromise<{ message: string; data: ILoginResponse; status: number }>;
  loginWithMobile(
    data: ILogin
  ): IPromise<{ message: string; data: ILoginResponse; status: number }>;
  register(
    data: IRegister
  ): IPromise<{ message: string; data: IRegisterResponse; status: number }>;
  googleRegister(
    data: IRegister
  ): IPromise<{ message: string; data: IRegisterResponse; status: number }>;
  logout(): void;
  shoppingTrip(
    user_id: number | string,
    merchant_id: number | string,
    offerId?: number
  ): IPromise<{ message: string; data: string; status: number }>;
  getUserCashback(): IPromise<{ message: string; data: any; status: number }>;
  getUserCashbackInfo(): IHttpPromise<{
    total_cashback: number;
    pending_cashback: number;
  }>;
  getUserRefer(): IHttpPromise<any[]>;
  getAccountBalance(user_id: number): IHttpPromise<{ account_balance: number }>;
  getPurchaseCashback(): IPromise<Array<any>>;
  checkEmailExist($modelValue: string): IHttpPromise<any>;
  active(token: string): IHttpPromise<any>;
  resendEmail(): IHttpPromise<any>;
  resendSMS(): IHttpPromise<any>;
  sendReferral(email: string): IHttpPromise<any>;
  ballance(): IHttpPromise<{ canCashout: boolean; account_balance: number }>;
  forgotPassword({ email, mobile, type }: any): IHttpPromise<any>;
  resetPassword(data: {
    password: string;
    token: string;
    email?: string;
    mobile?: string;
  }): IHttpPromise<any>;
  isFavorite(merchant_id: number): IHttpPromise<string>;
  addToFavorite(merchant_id: number): IHttpPromise<string>;
  removeFromFavorite(merchant_id: number): IHttpPromise<string>;
  changePassword(data: {
    old_password: string;
    new_password: string;
  }): IHttpPromise<string>;
  verifyMoblie({ token, mobile }: any): IHttpPromise<string>;
  change_email(email: string): IHttpPromise<string>;
  add_review(review: any): IHttpPromise<string>;
  add_cashineh_review(review: any): IHttpPromise<string>;
  suggested_merchants(): IHttpPromise<string>;
  get_flashdeal(): IHttpPromise<any[]>;
}
export class UserService {
  static selector = '$user';
  token: string;
  constructor(
    private $http: ng.IHttpService,
    private $q: ng.IQService,
    private myConstant: IMyConstant,
    private $mdDialog: any,
    private localStorageService: ng.local.storage.ILocalStorageService,
    private $window: ng.IWindowService,
    private $state: ng.ui.IStateService
  ) {
    'ngInject';
  }

  async saveInfo(data: IUserFull) {
    return this.$http.put(`${this.myConstant.ApiUrl}/user/info`, data);
  }
  getInfo() {
    return this.$http.get(`${this.myConstant.ApiUrl}/user/info`);
  }
  checkEmailExist($modelValue: string) {
    return this.$q((resolve, reject) => {
      this.$http
        .get(`${myConstant.ApiUrl}/checkEmailExist?email=${$modelValue}`)
        .then(res => {
          if (res.data) {
            reject();
          } else {
            resolve();
          }
        });
    });
  }
  loginWithEmail(data: ILogin) {
    return this.$q((resolve, reject) => {
      this.$http
        .post<{ status: number; data: ILoginResponse }>(
          `${myConstant.ApiUrl}/user/login_with_email`,
          data
        )
        .then(res => {
          this.localStorageService.set('auth', res.data.data);
          this.$window.location.reload();
          resolve('success');
        })
        .catch(err => {
          reject(err);
          // if (err.status === 403) {
          // } else {
          //     reject('err');

          // }
        });
    });
  }
  loginWithMobile(data: ILogin) {
    return this.$q((resolve, reject) => {
      this.$http
        .post<{ status: number; data: ILoginResponse }>(
          `${myConstant.ApiUrl}/user/login_with_mobile`,
          data
        )
        .then(res => {
          this.localStorageService.set('auth', res.data.data);
          // this.$httpProvider.defaults.headers.common = {
          //     'Authorization': 'Bearer ' + res.data.data.token,
          //     'content-type': 'application/json'
          // };
          this.$window.location.reload();
          resolve('success');
        })
        .catch(err => {
          reject(err);
          // if (err.status === 403) {
          // } else {
          //     reject('err');

          // }
        });
    });
  }
  register(data: IRegister) {
    let isReferral: boolean;
    if (this.$state.current.name === 'refer-landing' && this.$state.params.id) {
      data.refer_by = this.$state.params.id;
      isReferral = true;
    }
    return this.$http.post<{ status: number; data: IRegisterResponse }>(
      `${myConstant.ApiUrl}/user/signup`,
      data
    );
  }
  resendEmail() {
    return this.$http.get(`${myConstant.ApiUrl}/user/resend_email`);
  }
  change_email(email: string) {
    return this.$http.post(`${myConstant.ApiUrl}/user/change_email`, { email });
  }
  add_review(review: any) {
    return this.$http.post(`${myConstant.ApiUrl}/user/add_review`, review);
  }
  add_cashineh_review(review: any) {
    return this.$http.post(
      `${myConstant.ApiUrl}/user/add_cashineh_review`,
      review
    );
  }

  resendSMS() {
    return this.$http.get(`${myConstant.ApiUrl}/user/resend_sms`);
  }
  getAccountBalance(user_id: string) {
    let token = this.getToken();
    return this.$http.get(`${myConstant.ApiUrl}/user/account_balance`);
  }

  ballance() {
    return this.$http.get(`${myConstant.ApiUrl}/user/ballance`);
  }

  sendReferral(refer: string) {
    return this.$http.post(`${myConstant.ApiUrl}/user/refer_friend`, refer);
  }

  forgotPassword(data: any) {
    return this.$http.post(`${myConstant.ApiUrl}/user/recover_password`, data);
  }

  resetPassword(data: any) {
    return this.$http.post(`${myConstant.ApiUrl}/user/reset_password`, data);
  }

  googleRegister(data: IRegister) {
    return this.$q((resolve, reject) => {
      let isReferral: boolean;
      if (
        this.$state.current.name === 'refer-landing' &&
        this.$state.params.id
      ) {
        data.refer_by = this.$state.params.id;
        isReferral = true;
      }
      let res = this.$http
        .post<{ status: number; data: IRegisterResponse }>(
          `${myConstant.ApiUrl}/google-register`,
          data
        )
        .then(res => {
          if (res.data.status === 105) {
            this.localStorageService.set('user', res.data.data);
            if (isReferral) {
              this.$window.location.href = '/';
            } else {
              this.$window.location.reload();
            }
            resolve('success');
          } else {
            reject(res.data);
          }
        });
    });
  }

  logout() {
    this.localStorageService.remove('auth');
    this.$window.location.reload();
  }

  active(token: string) {
    // return this.$http.post(`${myConstant.ApiUrl}/active-user`, { token: token });
    return this.$q((resolve, reject) => {
      this.$http
        .post(`${myConstant.ApiUrl}/user/verify_email`, { token })
        .then((res: any) => {
          if (res.data) {
            this.localStorageService.set('auth', res.data.data);
            this.$window.location.href = '/';
            resolve('success');
          } else {
            reject('err');
          }
        });
    });
  }

  isLogedIn() {
    let user: ILoginResponse = this.localStorageService.get('auth');
    return user;
  }

  favoriteMerchants() {
    return this.$http.get(`${myConstant.ApiUrl}/user/favorite_merchants`);
  }

  isFavorite(merchant_id: number) {
    return this.$http.get(
      `${this.myConstant.ApiUrl}/user/is_favorite?merchant_id=${merchant_id}`
    );
  }

  addToFavorite(merchant_id: number) {
    return this.$http.post(`${this.myConstant.ApiUrl}/user/add_favorite`, {
      merchant_id
    });
  }

  removeFromFavorite(merchant_id: number) {
    return this.$http.delete(
      `${
        this.myConstant.ApiUrl
      }/user/remove_favorite?merchant_id=${merchant_id}`
    );
  }

  shoppingTrip(userId: string, merchantId: string, offerId?: number) {
    return this.$q((resolve, reject) => {
      this.$http
        .post(`${myConstant.ApiUrl}/user/out_traffic`, {
          merchant_id: parseInt(merchantId, 0),
          offer_id: offerId
        })
        .then(res => {
          resolve(res.data);
        });
    });
  }

  getUserCashback() {
    let user = this.isLogedIn();
    return this.$q((resolve, reject) => {
      this.$http
        .post(`${myConstant.ApiUrl}/getUserCashback`, {
          user_id: user.id
        })
        .then(res => {
          resolve(res.data);
        });
    });
  }

  getToken() {
    this.token = null;
    let user: any = this.localStorageService.get('auth');
    if (user) {
      this.token = user.token;
    }
    return this.token;
  }

  getUserCashbackInfo() {
    let token = this.getToken();
    if (!token) {
      return;
    }
    return this.$http.get(`${myConstant.ApiUrl}/user/cashback_info`);
  }

  getShippingTrip() {
    return this.$http.get(`${myConstant.ApiUrl}/user/shopping_trips`);
  }

  getUserRefer() {
    return this.$http.get(`${myConstant.ApiUrl}/user/get_user_referals`);
  }

  getPurchaseCashback() {
    return this.$http.get(`${myConstant.ApiUrl}/user/transactions`);
  }

  refreshShoppingTrip(id: number) {
    return this.$http.post(
      `${this.myConstant.ApiUrl}/user/update_shopping_trip`,
      { id: id }
    );
  }

  loginModal() {
    this.$mdDialog.hide();
    this.$mdDialog.show(this.$mdDialog.login());
  }

  registerModal() {
    this.$mdDialog.hide();
    this.$mdDialog.show(this.$mdDialog.register());
  }

  changePassword(data: { old_password: string; new_password: string }) {
    let user = this.isLogedIn();
    if (user) {
      return this.$http.post(
        `${this.myConstant.ApiUrl}/user/change_password`,
        data
      );
    }
  }

  verifyMoblie(data: { token: string; mobile: string }) {
    return this.$http.post(`${myConstant.ApiUrl}/user/verify_mobile`, data);
  }

  suggested_merchants() {
    return this.$http.get(`${myConstant.ApiUrl}/user/suggested_merchants`);
  }
  get_flashdeal() {
    return this.$http.get(`${myConstant.ApiUrl}/user/get_flashdeal`);
  }
}
