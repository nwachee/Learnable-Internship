export interface UserDoc extends Document{
    fullname: string,
    email: string,
    password: string,
    matchPassword(pw: string): Promise<boolean>,
    isModified(pw: string): Promise<boolean>,
}


  