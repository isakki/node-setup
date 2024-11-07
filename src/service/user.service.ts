async function getProfile(uid: string): Promise<any> {
    try {        
        const result = { name : 'isakki' , id : 1}
        return result;
    } catch (e) {
        throw e;
    }        
}

export const UserService = { getProfile };
