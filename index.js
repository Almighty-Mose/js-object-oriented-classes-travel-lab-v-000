class Driver {
  constructor(name, startDate) {
    this.name = name;
    this.startDate = new Date(startDate);
  }
  
  yearsExperienceFromBeginningOf(year) {
    let dateToday = new Date(year);
    return dateToday.getFullYear() - this.startDate.getFullYear();
  }
}
