// lib/auth.js

import jwt from 'jsonwebtoken';

const jwtPass = 'urbandetailing.in';

export function authCheck(authToken) {
    try {
        jwt.verify(authToken, jwtPass);
        return true;
    } catch (error) {
        return false;
    }
}
