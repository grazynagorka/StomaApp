export class Assistants{
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

export class Assistant{
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