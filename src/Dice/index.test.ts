import { Dice } from "./index";

describe("Dice", () => {
  it("should log 'Hello World'", () => {
    const spy = jest.spyOn(console, "log");
    new Dice();
    expect(spy).toHaveBeenCalledWith("Hello World");
  });
});
