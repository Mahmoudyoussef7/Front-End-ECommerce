export class User {
    constructor(
        public userName: string,
        public Email: string,
        public Password: string,
        public confirmPassword: string,
        public site: string
    ) { }
}