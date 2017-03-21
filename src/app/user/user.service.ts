import { Injectable } from '@angular/core';
import { IUser } from "./user.model";

export interface IUserService {
    user: IUser;
    isLoggedIn(): boolean;
}

@Injectable()
export class UserService implements IUserService {
    _user: IUser;
    get user(): IUser {
        if (!this._user) this._user = { name: "Joe" };
        return this._user;
    }

    constructor() { }

    isLoggedIn(): boolean {
        return true;
    }
}