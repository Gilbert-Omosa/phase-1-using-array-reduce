const batteryBatches = [4, 5, 3, 4, 4, 6, 5];

// Code your solution here

// use the .recude function to aggregate the sum total of batteries
const totalBatteries = batteryBatches.reduce((sumAmount, currentAmount) => {
  return sumAmount + currentAmount;
},

// the initial value for total number is 0 and then it accumulates the amounts
0); 

console.log('Total batteries:', totalBatteries);
