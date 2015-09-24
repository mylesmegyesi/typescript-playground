import { StringUtil } from "SomeNamespace/InnerNamespace/StringUtil";

namespace SomeNamespace {
  export class Greeter {
    prefix: string;
    stringUtil: StringUtil;

    constructor(prefix: string) {
      this.prefix = prefix;
      this.stringUtil = new StringUtil();
    }

    greet() : string {
      return this.stringUtil.combine(this.prefix, ", World!");
    }
  }
}
