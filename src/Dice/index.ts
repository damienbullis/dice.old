type T_sortOptions = "high" | "low";

function sortedBy(type: T_sortOptions, sorted: number[]) {
  return sorted.sort((a, b) => (type === "high" ? a - b : b - a));
}

class Dice {
  /** Internal State */
  private results: number[] = [];

  // Internal methods
  private pushRoll(sides: number, times: number) {
    for (let i = 0; i < times; i++) {
      this.results.push(Math.floor(Math.random() * sides) + 1);
    }
  }

  // Roll methods

  /**
   * Roll a D20.
   * @param x pass X to roll multiple times.
   */
  D20(x = 1) {
    this.pushRoll(20, x);
    return this;
  }
  /**
   * Roll a D12.
   * @param x pass X to roll multiple times.
   */
  D12(x = 1) {
    this.pushRoll(12, x);
    return this;
  }
  /**
   * Roll a D10.
   * @param x pass X to roll multiple times.
   */
  D10(x = 1) {
    this.pushRoll(10, x);
    return this;
  }
  /**
   * Roll a D8.
   * @param x pass X to roll multiple times.
   */
  D8(x = 1) {
    this.pushRoll(8, x);
    return this;
  }
  /**
   * Roll a D6.
   * @param x pass X to roll multiple times.
   */
  D6(x = 1) {
    this.pushRoll(6, x);
    return this;
  }
  /**
   * Roll a D4.
   * @param x pass X to roll multiple times.
   */
  D4(x = 1) {
    this.pushRoll(4, x);
    return this;
  }

  // Ultility methods

  /**
   * Drop the lowest or highest rolls.
   * @param type Which type of rolls to drop.
   * @param n The number of rolls to drop.
   */
  drop(type: T_sortOptions, n: number) {
    const notDropped = sortedBy(type, this.results).slice(
      0,
      this.results.length - n
    );
    this.results = [...notDropped];
    return this;
  }

  // Return methods

  /**
   * Main Return Method
   * Roll returns the results of the rolls made and resets the results array.
   */
  roll() {
    const copyResults = [...this.results];
    this.results = [];
    return copyResults;
  }
}

export default Dice;
