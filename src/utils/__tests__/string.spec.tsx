import "@testing-library/jest-dom";
import { afterEach, describe, expect, it, vi } from "vitest";

import * as utils from "../string";

describe("String utils", () => {
  const mockParameter = "FooBoo String";

  afterEach(() => {
    vi.clearAllMocks();
  });

  it("should toKebabCase have been called", () => {
    const expectedResult = "foo-boo-string";
    const mockMethod = vi.spyOn(utils, "toKebabCase");

    const result = utils.toKebabCase(mockParameter);

    expect(mockMethod).toHaveBeenCalledTimes(1);
    expect(mockMethod).toHaveBeenCalledWith(mockParameter);
    expect(result).toBe(expectedResult);
  });
});
