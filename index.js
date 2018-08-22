class Driver {
  constructor(name, startDate) {
    this.name = name;
    this.startDate = new Date(startDate);
  }
  
  yearsExperienceFromBeginningOf(year) {
    let dateToday = new Date(year, 0);
    return dateToday - this.startDate.getFullYear();
  }
}
