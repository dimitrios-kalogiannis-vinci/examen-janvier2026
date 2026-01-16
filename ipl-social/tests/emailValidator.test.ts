import { validateEmail } from '../src/emailValidator';

describe('Email Validator', () => {
    describe('must contains "@"', () => {
        it('should reject email without "@"', () => {

            const email = 'testemail.com';
            const result = validateEmail(email);
            expect(result).toBe(false);
        }) 

        it('should accept email with "@"', () => {
            const email = 'test@example.com';
            const result = validateEmail(email);
            expect(result).toBe(true);
        });

    });







});


    


    
    