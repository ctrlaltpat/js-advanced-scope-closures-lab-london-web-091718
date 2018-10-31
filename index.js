function produceDrivingRange(distance) {
  return function (start, end){
    // console.log('start:', start, ' | end:', end)
    // console.log(distance)
    let diff = (parseInt(end) - parseInt(start));
    if ( diff > distance ) {
      // console.log('wat?');
      return `${diff - distance} blocks out of range`;
    } else {
      // console.log('huh?');
      return `within range by ${distance - diff}`
    }
  }
}

function produceTipCalculator(tip) {
  // return function(fare) {
  //   return fare*tip
  // }
  return fare => fare*tip
}

function createDriver() {
  let driverId = 0;
  return class {
    constructor (name) {
      this.name = name;
      this.id = ++driverId;
    }
  }
}