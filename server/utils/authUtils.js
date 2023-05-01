import bcrypt from 'bcrypt';

// create a hash of the user's password
export const hashPassword = async (password) => {

    // generate a salt with 12 rounds of hashing, and hash the password with the salt.
    const salt = await bcrypt.genSalt(12);
    const hash = await bcrypt.hash(password, salt);
    return hash;
};