/**
 * Email Validator Module
 * 
 * Accept an email adress  "@".
 * 
 * @param email - Email adress to validate.
 * @returns true if the email contains an "@", false otherwise.
 */

export function validateEmail(email: string): boolean {
    //Validate the email adress based on the IPL Social requirements

    if(!email.includes('@')) {
        return false;
    }
    return true;

}