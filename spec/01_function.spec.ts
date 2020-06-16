describe('functions', () => {

    it('two kinds of functions', () => {
        // Named Functions
        expect(add(2, 2)).toBe(4); // only ones that can be forward-referenced
        function add(a: number, b: number): number {
            return a + b;
        }

        // Anonymous Functions
        const subtract: MathOp = function (a: number, b: number): number {
            return a - b;
        }
        expect(subtract(10, 2)).toBe(8);
        const multiply: MathOp = (a: number, b: number): number => a * b;
        expect(multiply(3, 3)).toBe(9);


        const divide = (a: number, b: number): number => {
            if (b === 0) {
                throw new Error('Are you trying to create a black hole??');
            }
            return a / b;
        }

        const formatName = (first: string, last: string): { fullName: string } => ({ fullName: `${last}, ${first}` });
        const name = formatName('Han', 'Solo');
        expect(name.fullName).toBe('Solo, Han');

        type MathOp = (a: number, b: number) => number;
        function doIt(x: number, b: number, f: MathOp): number {
            return f(x * 2, b * 2);
        }

        expect(doIt(2, 2, add)).toBe(8);
    });
    describe('arguments to functions', () => {

        it('optional, default, and rest params', () => {
            function add(a: number = 5, b: number = 10, ...allTheRest: number[]) {
                const firstTwo = a + b;
                return allTheRest.reduce((s, n) => s + n, firstTwo);
            }
            expect(add(2, 2)).toBe(4);
            expect(add(2)).toBe(12);
            expect(add()).toBe(15);
            expect(add(undefined, 5)).toBe(10);
            expect(add(1, 2, 3, 4, 5, 6, 7, 8, 9)).toBe(45);
        });
    });

});