interface iUser {
    fullname: string,
    email: string
}

interface Document {
    matchPassword(pw: string): Promise<boolean>;
  }
  