import { add } from "../src/math.js";

test("adds two numbers correctly", () => {
    expect(add(20, 22)).toBe(42);
});
