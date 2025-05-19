export interface RoleDto {
    id: number;
    name: string;
}


export type UserStatusE = 'NOT_CONFIRMED' | 'BANNED' | 'IRON' | 'BRONZE' | 'SILVER' | 'GOLD'
            | 'PLATINUM' | 'DIAMOND' | 'EMERALD' | 'MASTER' | 'GRANDMASTER';


export interface UserDto {
    id: number;
    nickname: string;
    login: string;
    roles: RoleDto[];
    UserStatusE: UserStatusE;
    message?: string;
}