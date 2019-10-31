const batteryBatches = [4, 5, 3, 4, 4, 6, 5];

// Code your solution here
const totalReducer = (total, currentBatch) => total + currentBatch;
const totalBatteries = batteryBatches.reduce(totalReducer);
