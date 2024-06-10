// import { Session, User } from 'lucia';


import { db } from '@/db/index';

export type ContextVariables = {
    db: typeof db;
    // user: User | null;
    // session: Session | null;
};
