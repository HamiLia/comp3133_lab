const { expect } = require("chai");

const calculator = require("../calculator");

describe("Calculator Tests", () => {
  describe("add()", () => {
    it("PASS: add(5, 2) should be 7", () => {
      const result = calculator.add(5, 2);
      console.log("✅ PASS(add): add(5,2) expected 7, got", result);
      expect(result).to.equal(7);
    });

    it("FAIL: add(5, 2) should be 8", () => {
      const result = calculator.add(5, 2);
      console.log("❌ FAIL(add): add(5,2) expected 8, got", result);
      expect(result).to.equal(8); // intentionally wrong
    });
  });

  describe("sub()", () => {
    it("PASS: sub(5, 2) should be 3", () => {
      const result = calculator.sub(5, 2);
      console.log("✅ PASS(sub): sub(5,2) expected 3, got", result);
      expect(result).to.equal(3);
    });

    it("FAIL: sub(5, 2) should be 5", () => {
      const result = calculator.sub(5, 2);
      console.log("❌ FAIL(sub): sub(5,2) expected 5, got", result);
      expect(result).to.equal(5);
    });
  });

  describe("mul()", () => {
    it("PASS: mul(5, 2) should be 10", () => {
      const result = calculator.mul(5, 2);
      console.log("✅ PASS(mul): mul(5,2) expected 10, got", result);
      expect(result).to.equal(10);
    });

    it("FAIL: mul(5, 2) should be 12", () => {
      const result = calculator.mul(5, 2);
      console.log("❌ FAIL(mul): mul(5,2) expected 12, got", result);
      expect(result).to.equal(12);
    });
  });

  describe("div()", () => {
    it("PASS: div(10, 2) should be 5", () => {
      const result = calculator.div(10, 2);
      console.log("✅ PASS(div): div(10,2) expected 5, got", result);
      expect(result).to.equal(5);
    });

    it("FAIL: div(10, 2) should be 2", () => {
      const result = calculator.div(10, 2);
      console.log("❌ FAIL(div): div(10,2) expected 2, got", result);
      expect(result).to.equal(2);
    });
  });
});
