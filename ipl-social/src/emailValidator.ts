/**
 * Email Validator Module
 * 
 * Accept an email adress  "@".
 * 
 * @param email - Email adress to validate.
 * @returns true if the email contains an "@", false otherwise.
 */

export function validateEmail(email: string): boolean {
    //First criteria : Validate the email adress based on the IPL Social requirements

    if(!email.includes('@')) {
        return false;
    }


    //Second criteria : Must contain a point in the domain part (after the "@")
    const atIndex = email.indexOf('@');
    const domainPart = email.substring(atIndex + 1);
    if(!domainPart.includes('.')) {
        return false;
    }
    if(domainPart.endsWith('.')) {
        return false;
    }

    //Third criteria : Must not contain spaces
    if(email.includes(' ')) {
        return false;
    }
    return true;
}