let eastWest = ['1st Avenue', '2nd Avenue', '3rd Avenue', 'Lexington Avenue', 'Park', 'Madison Avenue', '5th Avenue']

class Driver {
  constructor(name, startDate) {
    this.name = name;
    this.startDate = new Date(startDate);
  }
  
  yearsExperienceFromBeginningOf(year) {
    let date = new Date(year, 1, 1);
    return (date - this.startDate;
  }
}

class Route {
  constructor(beginningLocation, endingLocation) {
    this.beginningLocation = beginningLocation;
    this.endingLocation = endingLocation;
  }
  
  avenueToInteger(avenue) {
    return eastWest.indexOf(avenue);
  }
  
  blocksTravelled() {
    let horizontalDistance = this.avenueToInteger(this.endingLocation.horizontal) - this.avenueToInteger(this.beginningLocation.horizontal);
    let verticalDistance = this.avenueToInteger(this.endingLocation.vertical) - this.avenueToInteger(this.beginningLocation.vertical);
    return (Math.abs(horizontalDistance) + Math.abs(verticalDistance));
  }
}
