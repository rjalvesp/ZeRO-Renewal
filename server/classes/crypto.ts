var crypto = require('crypto');
export class Crypto {
    static generateSalt(length: number) : string {
        return crypto.randomBytes(Math.ceil(length/2))
                .toString('hex') /** convert to hexadecimal format */
                .slice(0,length);   /** return required number of characters */
    }
    static generatePassword(password: string, salt: string){
        let hash = crypto.createHmac('sha512', salt); /** Hashing algorithm sha512 */
        hash.update(password);
        let value = hash.digest('hex');
        return value;
    };
    static generateToken(){
        let salt = Crypto.generateSalt(16);
        let password = Crypto.generateSalt(16);
        return Crypto.generatePassword(password, salt);
    }
}