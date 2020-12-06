const batteryBatches = [4, 5, 3, 4, 4, 6, 5];

// Code your solution here
// const couponLocations = [
//     { room: 'Living room', amount: 5 },
//     { room: 'Kitchen', amount: 2 },
//     { room: 'Bathroom', amount: 1 },
//     { room: 'Master bedroom', amount: 7 }
//   ];
   
//   function ourReduce(arr, reducer, init) {
//       let accum = init;
//       arr.forEach(element => {
//           accum = reducer(accum, element);
//       });
//       return accum;
//   }
   
//   function couponCounter(totalAmount, location) {
//     return totalAmount + location.amount;
//   }
   
//   console.log(ourReduce(couponLocations, couponCounter, 0));
const totalBatteries = batteryBatches.reduce(function(total, batches){
    return batches + total
    }
  )




