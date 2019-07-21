import Demo from "../models/Demo";

class Data {
  constructor() {
    this.demos = this.initDemos();
  }

  initDemos() {
    const demosArr = [];
    demosArr.push(new Demo("Android", "null"));
    demosArr.push(new Demo("iOS", "null"));
    demosArr.push(new Demo("Unity", "null"));
    demosArr.push(new Demo("React Native", "null"));
    demosArr.push(new Demo("Flutter", "null"));
    return demosArr;
  }

  getDemos() {
    return this.demos;
  }
}

export default Data;
