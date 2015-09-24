namespace SomeNamespace.InnerNamespace {
  export class StringUtil {
    str: string;

    constructor(str: string) {
      this.str = str;
    }

    combine(onTheEnd: string) : string {
      return this.str + onTheEnd;
    }
  }
}
