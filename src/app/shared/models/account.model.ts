import {Moment} from 'moment';

export interface IAccount {
  id?: number;
    login?: string;
    title?: string;
    gender?: string;
    firstName?: string;
    middleName?: string;
    lastName?: string;
    email?: string;
    maritalStatus?: string;
    dateOfBirth?: Moment;
    age?: number;
    imageUrl?: string;
    activated?: boolean;
    langKey?: string;
    createdDate?: Date;
    createdBy?: string;
    lastModifiedBy?: string;
    lastModifiedDate?: Date;
    authorities?: string[];
    termsAndCondition?: boolean;
    phoneNumber?: number;
    password?: string;
    confirmPassword?: string;
}
export class Account implements IAccount {
  constructor(
      public id?: number,
      public login?: string,
      public title?: string,
      public gender?: string,
      public firstName?: string,
      public middleName?: string,
      public lastName?: string,
      public email?: string,
      public maritalStatus?: string,
      public dateOfBirth?: Moment,
      public age?: number,
      public imageUrl?: string,
      public activated?: boolean,
      public langKey?: string,
      public createdDate?: Date,
      public createdBy?: string,
      public lastModifiedBy?: string,
      public lastModifiedDate?: Date,
      public authorities?: string[]
  ) {}
}
