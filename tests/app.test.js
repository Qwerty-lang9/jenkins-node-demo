import { calculateSum } from "../src/app.js";

test("calculateSum returns correct result", () => {
    expect(calculateSum(10, 5)).toBe(15);
});
