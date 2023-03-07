import { describe, expect, it } from "vitest";
import { truncate } from "./truncate";

describe("truncate()", () => {
  it("returns the original string if it's shorter than or equal to the length", () => {
    const input = "Hello, world!";
    const length = 13;
    expect(truncate(input, length)).toBe(input);
  });

  it("truncates the string and appends '...' at the end when it exceeds the length", () => {
    const input = "The quick brown fox jumps over the lazy dog.";
    const length = 20;
    expect(truncate(input, length)).toBe("The quick brown fox...");
  });

  it("returns an empty string if given an empty string", () => {
    const input = "";
    const length = 5;
    expect(truncate(input, length)).toBe("");
  });
});
