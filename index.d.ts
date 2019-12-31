declare module 'express' {
    interface Request {
      user: User;
    }
}

// TODO: Would these types come from csi-db later?
export interface User {
    name: string;
    username: string;
    email: string;
    mobile: string;
    regNo: string;
    gender: string;
    scope: scope[];
}

export type scope = "csi" | "user";