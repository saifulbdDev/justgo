export enum Gender {
    male = "male",
    female = "female",
    all = "all"
}


export interface User {
    id: number;
    name: string;
    email: string;
    image: string;
    registrationDate: string;
    username: string;
    gender: Gender;
}

export interface Filter {
    key: string;
    gender: Gender;
    pageNumber: number;
}