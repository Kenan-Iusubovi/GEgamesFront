export type LanguageE = 'EN' | 'KA';


export interface UserRegistrationDto {
    login: string;
    password: string;
    language: LanguageE;
}