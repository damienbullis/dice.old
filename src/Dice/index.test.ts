import Dice from "./index";

const dice = new Dice();
describe("Dice", () => {
  describe("Additional Methods", () => {
    // check that the private method "sortedBy" is working
    it("should sort the results highest to lowest", () => {
      const d = new Dice();
      const result = d.D6(6).drop("low", 3).roll();
      expect(result.length).toBe(3);
      // first check that the 1st restult is higher than the 2nd
      expect(result[0]).toBeGreaterThanOrEqual(result[1]!);
      // then check that the 2nd result is higher than the 3rd
      expect(result[1]).toBeGreaterThanOrEqual(result[2]!);
    });
    it("should drop the highest rolls", () => {
      const result = dice.D6(3).drop("high", 1).roll();
      expect(result.length).toBe(2);
    });
  });
  describe("D20", () => {
    it("should roll a D20", () => {
      const result = dice.D20().roll();
      expect(result.length).toBe(1);
      expect(typeof result[0]).toBe("number");
      expect(result[0]).toBeGreaterThanOrEqual(1);
      expect(result[0]).toBeLessThanOrEqual(20);
    });
  });
  describe("D12", () => {
    it("should roll a D12", () => {
      const result = dice.D12().roll();
      expect(result.length).toBe(1);
      expect(typeof result[0]).toBe("number");
      expect(result[0]).toBeGreaterThanOrEqual(1);
      expect(result[0]).toBeLessThanOrEqual(12);
    });
  });
  describe("D10", () => {
    it("should roll a D10", () => {
      const result = dice.D10().roll();
      expect(result.length).toBe(1);
      expect(typeof result[0]).toBe("number");
      expect(result[0]).toBeGreaterThanOrEqual(1);
      expect(result[0]).toBeLessThanOrEqual(10);
    });
  });
  describe("D8", () => {
    it("should roll a D8", () => {
      const result = dice.D8().roll();
      expect(result.length).toBe(1);
      expect(typeof result[0]).toBe("number");
      expect(result[0]).toBeGreaterThanOrEqual(1);
      expect(result[0]).toBeLessThanOrEqual(8);
    });
  });
  describe("D6", () => {
    it("should roll a D6", () => {
      const result = dice.D6().roll();
      expect(result.length).toBe(1);
      expect(typeof result[0]).toBe("number");
      expect(result[0]).toBeGreaterThanOrEqual(1);
      expect(result[0]).toBeLessThanOrEqual(6);
    });
  });
  describe("D4", () => {
    it("should roll a D4", () => {
      const result = dice.D4().roll();
      expect(result.length).toBe(1);
      expect(typeof result[0]).toBe("number");
      expect(result[0]).toBeGreaterThanOrEqual(1);
      expect(result[0]).toBeLessThanOrEqual(4);
    });
  });
});
