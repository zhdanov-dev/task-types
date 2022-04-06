export function getPersons(): TPerson[];

type TPerson = {
    name: string;
    age: number;
    gender: 'male' | 'female';
};

type TEmployee = {
    name: string;
    age: number;
    gender: 'male' | 'female';
    company: string;
};

type TPersonToString = TPerson | TEmployee;

export function personToString(person: TPersonToString): string;
