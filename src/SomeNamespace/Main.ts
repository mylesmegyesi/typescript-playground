import { Greeter } from "SomeNamespace/Greeter"; //  NOTICE! importing relative to "src" directory.

namespace SomeNamespace {
  export function main() : void {
    var greeting = new Greeter("Hello").greet();
    alert(greeting);
    console.log(greeting);
  }
}
