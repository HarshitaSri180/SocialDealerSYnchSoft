export interface Root {
    user: User
    access_token: string
}

export interface User {
    id: number
    name: string
    email: string
    phone: any
    roles: string
    profile_pic: string
    time_zone: string
    remember_token: boolean
    verified: boolean
    send_notifications: boolean
    is_deleted: boolean
    created_at: string
    updated_at: string
    active_account: string
    login_type: string
    session: string
    session_id: string
    access_token: string
}

export type UserWithoutPassword = Omit<User, "password">;
