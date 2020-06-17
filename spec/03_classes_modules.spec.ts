
import taco from './utils'
import { Retiree, Contractor, Employee, Reportable } from './hr';
describe('classes and modules', () => {


    it('creating an instance of a class', () => {
        expect(taco(10)).toBe(20);
        const steve = new Retiree();
        const barb = new Contractor();
        const bob = new Employee('Bob', 'Smith');

        expect(bob.firstName).toBe('Bob');
        expect(bob.lastName).toBe('Smith');

        bob.firstName = 'Robert';
        expect(bob.firstName).toBe('Robert');

        expect(bob.salary).toBe(100_000);

        // bob.salary = 200_000 // Can't do it! It is read-only!

        bob.giveRaise(1000);
        expect(bob.salary).toBe(101_000);
        console.log('**** BOB HAS AN ID OF ', bob.id);
        getReport(bob);
    });
});

function getReport(thing: Reportable) {
    // do something.
}