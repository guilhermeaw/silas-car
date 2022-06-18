export interface UserFindByEmailAndPasswordData {
    email: string, 
    password: string
}

export interface UsersRepository {
    findByEmailAndPassword: (data: UserFindByEmailAndPasswordData) => Promise<any>;
}
