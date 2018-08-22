class Driver {
  constructor(name, joinDay) {
    this.name = name;
    this.joinDay = joinDay;
  }
  
  startDate() {
    this.startDate = new Date(this.joinDay);
  }
}
