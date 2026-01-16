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


//Must contain a point in the domain part (after the "@")

describe('must contain a point in the domain part', () => {
    it('should reject email without point in domain part', () => {
        const email = 'test@examplecom';
        const result = validateEmail(email);
        expect(result).toBe(false);
    });
    it('should accept email with point in domain part', () => {
        const email = 'test@example.com';
        const result = validateEmail(email);
        expect(result).toBe(true);
    });
    it('should reject email with the point at the end', () => {
        const email = 'test@examplecom.';
        const result = validateEmail(email);
        expect(result).toBe(false);
    });

});


//Must not contain spaces
describe('must not contain spaces', () => {
    it('should reject email with spaces', () => {
        const email = 'test@ example.com';
        const result = validateEmail(email);
        expect(result).toBe(false);
    });
    it('should reject email with spaces in the local part', () => {
        const email = 'test example@example.com';
        const result = validateEmail(email);
        expect(result).toBe(false);
    });
    it('should accept email without spaces', () => {
        const email = 'test@example.com';
        const result = validateEmail(email);
        expect(result).toBe(true);
    });
});

//Must have text before and after the "@"
describe('must have text before and after the "@"', () => {
    it('should reject email with no text before "@"', () => {
        const email = '@example.com';
        const result = validateEmail(email);
        expect(result).toBe(false);
    });
    it('should reject email with no text after "@"', () => {
        const email = 'test@';
        const result = validateEmail(email);
        expect(result).toBe(false);
    });
    it('should accept email with text before and after "@"', () => {
        const email = 'test@example.com';
        const result = validateEmail(email);
        expect(result).toBe(true);
    });
});