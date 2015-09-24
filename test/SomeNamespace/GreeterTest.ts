import { describe, it, expect } from "jasmine"; // NOTICE importing jasmine.d.ts relative to some library path - perhaps vendor/jasmine-{version}
import { Greeter } from "SomeNamespace/Greeter"; // NOTICE! importing relative to "src" directory.

describe("Greeter", function() {
  it("appends ', World'", function() {
    var greeter = new Greeter("Hello");
    expect(greeter.greet()).toEqual("Hello, World");
  });
});
