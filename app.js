const addressLat = 6;
const addressLong = 7;
const positionLat = 3;
const positionLong = 10;
const distance = Math.sqrt((addressLat - positionLat) ** 2 + (addressLong - positionLong) ** 2);
console.log(distance);