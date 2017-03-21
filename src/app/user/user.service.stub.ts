import { IUserService } from "./user.service";
import { IUser } from "./user.model";

export class UserServiceStub implements IUserService
{
    user: IUser;
    
    _isLoggedIn: false;
    isLoggedIn(): boolean {
        return this._isLoggedIn;
    }
}