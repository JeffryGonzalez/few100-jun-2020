describe('declaring variables', () => {
    it('implictly typed variables', () => {
        let x = 10; // since I initialized to a number, it inferred that I want this to be a number data type.
        x = 10;
        // x = 'tacos'; // can't do this because it is a number.
    });
    it('union types', () => {
        let y: number;
        y = 13;
        y = 13.33;
        y = 123_123_123;
        y = 0xff; // hex, base 16
        y = 0o22; // octal, base 8
        y = 0b10101; // binary, base 2

        let z: number | string;

        z = 12;

        z = 'Tacos';

    });
    it('has  const keyword', () => {
        // you cannot reassign to that variable.
        const PI = 3.14;

        // PI = 3;

        const friends = ['Sean', 'Amy', 'Chip'];
        friends[2] = 'Everett';
        expect(friends[2]).toBe('Everett');
        expect(friends).toEqual(['Sean', 'Amy', 'Everett']); // toEqual does deep equality.

        const movie = { title: 'Jaws', director: 'Spielberg' };
        movie.director = 'Steven Spielberg';


    });
    it('has a var keyword but it is evil and you should not use it or you are a bad person', () => {
        const age = 22;
        let name = 'Jeff';
        if (age > 21) {
            // tslint:disable-next-line: no-var-keyword
            var message = 'Old Enough';
        } else {
            // tslint:disable-next-line: no-var-keyword
            var message = 'Too Young';
        }

        expect(message).toBe('Old Enough')
        name = 'Putintane';
    });
})

describe('strings', () => {

    it('declaring them', () => {

        const s1 = 'Hello, World';
        // tslint:disable-next-line: quotemark
        const s2 = "Hello, World";
        expect(s1).toEqual(s2);

        const name = 'Bob';
        const salary = 123_000;

        const message1 = 'The name is ' + name + ' and the salary is ' + salary + ' Per Year';
        const message2 = `The name is ${name} and the salary is ${salary} Per Year`;

        expect(message1).toEqual(message2);

        const story = `My Life.
        It was a dark and stormy night.
        I got borned.

        The End`;


    });
    describe('array literals', () => {
        it('declaring them', () => {
            const favoriteNumbers: number[] = [];
            favoriteNumbers[0] = 12;
            // favoriteNumbers[1] = 'Dog';

            // let stuff : number | string[];
            // stuff = 32;
            // stuff = ['dog', 'cat', 'mouse', 99];

            // let stuff: (number | string) [] =[];
            const stuff: Array<number | string> = [];
            stuff[0] = 12;
            stuff[1] = 'Pizza';
        });

    });

});
describe('tuples', () => {

    it('the problem and solution using OOP', () => {

        interface FormattedNameResponse { formattedName: string, numberOfLetters: number };
        function formatName(first: string, last: string): FormattedNameResponse {
            const formattedName = `${last}, ${first}`;
            return {
                formattedName,
                numberOfLetters: formattedName.length
            }
        }

        const result = formatName('Han', 'Solo');
        expect(result.formattedName).toBe('Solo, Han');
        expect(result.numberOfLetters).toBe(9);
    });

    it('using a tuple', () => {

        function formatName(first: string, last: string): [string, number] {
            const formattedName = `${last}, ${first}`;
            return [formattedName, formattedName.length];
        }

        // const result = formatName('Han', 'Solo');

        // expect(result[0]).toBe('Solo, Han');
        // expect(result[1]).toBe(9);

        const [n1, n2] = formatName('Han', 'Solo');

        expect(n1).toBe('Solo, Han');
        expect(n2).toBe(9);

        const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

        const [first, , third] = numbers;
        expect(first).toBe(1);
        expect(third).toBe(3);

        const [head, ...tail] = numbers; // the three dots here are called the 'spread' operator.
        expect(head).toBe(1);
        expect(tail).toEqual([2, 3, 4, 5, 6, 7, 8, 9]);
    });

});
