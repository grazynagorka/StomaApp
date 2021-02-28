export class Visits {
    pastVisits: {
      _id?: string;
      date?: string;
      begin?: string;
      end?: string;
      description?: string;

      patient:{
        _id?: string;
        firstName?: string;
        lastName?: string;
        specialization?: string;
        job?: string;
        isAdmin?: boolean;
        email?: string;
        password?: string;
        token?: string;
      };

      doctor: {
        _id?: string;
        firstName?: string;
        lastName?: string;
        specialization?: string;
        job?: string;
        isAdmin?: boolean;
        email?: string;
        password?: string;
      };

      assistant: {
        _id?: string;
        firstName?: string;
        lastName?: string;
        specialization?: string;
        job?: string;
        isAdmin?: boolean;
        email?: string;
        password?: string;
      };
    }
}

export class DoctorVisits {
  visits: {
    _id?: string;
    date?: string;
    begin?: string;
    end?: string;
    description?: string;

    patient:{
      _id?: string;
      firstName?: string;
      lastName?: string;
      specialization?: string;
      job?: string;
      isAdmin?: boolean;
      email?: string;
      password?: string;
      token?: string;
    };

    doctor: {
      _id?: string;
      firstName?: string;
      lastName?: string;
      specialization?: string;
      job?: string;
      isAdmin?: boolean;
      email?: string;
      password?: string;
    };

    assistant: {
      _id?: string;
      firstName?: string;
      lastName?: string;
      specialization?: string;
      job?: string;
      isAdmin?: boolean;
      email?: string;
      password?: string;
    };
  }
}

export class Visit {
  visit: {
    _id?: string;
    date?: string;
    begin?: string;
    end?: string;
    description?: string;

    patient:{
      _id?: string;
      firstName?: string;
      lastName?: string;
      specialization?: string;
      job?: string;
      isAdmin?: boolean;
      email?: string;
      password?: string;
      token?: string;
    };

    doctor: {
      _id?: string;
      firstName?: string;
      lastName?: string;
      specialization?: string;
      job?: string;
      isAdmin?: boolean;
      email?: string;
      password?: string;
    };

    assistant: {
      _id?: string;
      firstName?: string;
      lastName?: string;
      specialization?: string;
      job?: string;
      isAdmin?: boolean;
      email?: string;
      password?: string;
    };
  }
}