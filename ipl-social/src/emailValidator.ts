/**
 * Email Validator Module
 * 
 * Validation criteria:
 * 1. Must contain "@".
 * 2. Must contain a point in the domain part (after the "@").
 * 3. Must not contain spaces.
 * 4. Must have text before and after the "@".
 * 
 * 
 * @param email - Email adress to validate.
 * @returns true if the email contains an "@", false otherwise.
 */

export function validateEmail(email: string): boolean {
    //First criteria : Validate the email adress based on the IPL Social requirements
    if(!email.includes('@')) {
        return false;
    }
    
    const atIndex = email.indexOf('@');
    const domainPart = email.slice(atIndex + 1);

    //Fourth Criteria : must have text before and after the "@"
    if(atIndex === 0) {
        return false;
    }

    //Fourth Criteria b' : must have text after the "@"
    if(atIndex === email.length - 1) {
        return false;
    }
    //Second criteria : Must contain a point in the domain part (after the "@")
    if(!domainPart.includes('.')) {
        return false;
    }

    //Second criteria b' : The point must not be the last character
    if(email.endsWith('.')) {
        return false;
    }

    

    //Third criteria : Must not contain spaces
    if(email.includes(' ')) {
        return false;
    }

    
    return true;
}