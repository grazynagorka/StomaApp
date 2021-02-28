export class Doctors{
    users: {
    _id?: string;
    firstName?: string;
    lastName?: string;
    specialization?: string;
    job?: string;
    isAdmin?: boolean;
    email?: string;
    password?: string;
    }

}

export class Doctor{
    user: {
        _id?: string;
        firstName?: string;
        lastName?: string;
        specialization?: string;
        job?: string;
        isAdmin?: boolean;
        email?: string;
        password?: string;  
    }
}