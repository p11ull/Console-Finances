var finances = [
  ['Jan-2010', 867884],
  ['Feb-2010', 984655],
  ['Mar-2010', 322013],
  ['Apr-2010', -69417],
  ['May-2010', 310503],
  ['Jun-2010', 522857],
  ['Jul-2010', 1033096],
  ['Aug-2010', 604885],
  ['Sep-2010', -216386],
  ['Oct-2010', 477532],
  ['Nov-2010', 893810],
  ['Dec-2010', -80353],
  ['Jan-2011', 779806],
  ['Feb-2011', -335203],
  ['Mar-2011', 697845],
  ['Apr-2011', 793163],
  ['May-2011', 485070],
  ['Jun-2011', 584122],
  ['Jul-2011', 62729],
  ['Aug-2011', 668179],
  ['Sep-2011', 899906],
  ['Oct-2011', 834719],
  ['Nov-2011', 132003],
  ['Dec-2011', 309978],
  ['Jan-2012', -755566],
  ['Feb-2012', 1170593],
  ['Mar-2012', 252788],
  ['Apr-2012', 1151518],
  ['May-2012', 817256],
  ['Jun-2012', 570757],
  ['Jul-2012', 506702],
  ['Aug-2012', -1022534],
  ['Sep-2012', 475062],
  ['Oct-2012', 779976],
  ['Nov-2012', 144175],
  ['Dec-2012', 542494],
  ['Jan-2013', 359333],
  ['Feb-2013', 321469],
  ['Mar-2013', 67780],
  ['Apr-2013', 471435],
  ['May-2013', 565603],
  ['Jun-2013', 872480],
  ['Jul-2013', 789480],
  ['Aug-2013', 999942],
  ['Sep-2013', -1196225],
  ['Oct-2013', 268997],
  ['Nov-2013', -687986],
  ['Dec-2013', 1150461],
  ['Jan-2014', 682458],
  ['Feb-2014', 617856],
  ['Mar-2014', 824098],
  ['Apr-2014', 581943],
  ['May-2014', 132864],
  ['Jun-2014', 448062],
  ['Jul-2014', 689161],
  ['Aug-2014', 800701],
  ['Sep-2014', 1166643],
  ['Oct-2014', 947333],
  ['Nov-2014', 578668],
  ['Dec-2014', 988505],
  ['Jan-2015', 1139715],
  ['Feb-2015', 1029471],
  ['Mar-2015', 687533],
  ['Apr-2015', -524626],
  ['May-2015', 158620],
  ['Jun-2015', 87795],
  ['Jul-2015', 423389],
  ['Aug-2015', 840723],
  ['Sep-2015', 568529],
  ['Oct-2015', 332067],
  ['Nov-2015', 989499],
  ['Dec-2015', 778237],
  ['Jan-2016', 650000],
  ['Feb-2016', -1100387],
  ['Mar-2016', -174946],
  ['Apr-2016', 757143],
  ['May-2016', 445709],
  ['Jun-2016', 712961],
  ['Jul-2016', -1163797],
  ['Aug-2016', 569899],
  ['Sep-2016', 768450],
  ['Oct-2016', 102685],
  ['Nov-2016', 795914],
  ['Dec-2016', 60988],
  ['Jan-2017', 138230],
  ['Feb-2017', 671099],
];
// Function to calculate total number of months in the dataset
function calculateTotalMonths(data) {
  // Create an object to store unique months and years
  var uniqueMonths = {};

  // Loop through each date in the dataset
  data.forEach(function(entry) {
      var dateParts = entry[0].split('-'); // Split date into month and year
      var yearMonth = dateParts[1] + '-' + dateParts[0]; // Format: 'YYYY-MM'

      // Add the year and month as a key to the uniqueMonths object
      uniqueMonths[yearMonth] = true;
  });

  // Calculate the total number of unique months
  var totalMonths = Object.keys(uniqueMonths).length;

  return totalMonths;
}

// Calculate the total number of months in the dataset
var totalMonthsInDataset = calculateTotalMonths(finances);

// Output the total number of months
console.log("Total number of months in the dataset:", totalMonthsInDataset);

// Function to calculate net total Profit/Losses
function calculateNetProfitLoss(data) {
  var netTotal = 0;

  // Loop through each entry in the dataset
  data.forEach(function(entry) {
      netTotal += entry[1]; // Add the Profit/Loss to the netTotal
  });

  return netTotal;
}

// Calculate the net total Profit/Losses
var netTotalProfitLoss = calculateNetProfitLoss(finances);

// Output the net total Profit/Losses
console.log("Net total Profit/Losses over the entire period:", netTotalProfitLoss);

// Function to calculate the average of changes in Profit/Losses
function calculateAverageChange(data) {
  var totalChange = 0;
  var numMonths = data.length;
  
  // Calculate changes and sum them up
  for (var i = 1; i < numMonths; i++) {
      var currentMonthProfit = data[i][1];
      var previousMonthProfit = data[i - 1][1];
      var change = currentMonthProfit - previousMonthProfit;
      totalChange += change;
  }

  // Calculate the average change
  var averageChange = totalChange / (numMonths - 1);

  return averageChange;
}

// Calculate the average change in Profit/Losses
var averageChange = calculateAverageChange(finances);

// Output the average change in Profit/Losses
console.log("Average change:-", averageChange);

// Function to find the greatest increase in Profit/Losses and corresponding date
function findGreatestIncrease(data) {
  var greatestIncrease = 0;
  var increaseDate = '';
  
  // Loop through the dataset to calculate increases
  for (var i = 1; i < data.length; i++) {
      var currentMonthProfit = data[i][1];
      var previousMonthProfit = data[i - 1][1];
      var change = currentMonthProfit - previousMonthProfit;

      // Check if the change is greater than the current greatest increase
      if (change > greatestIncrease) {
          greatestIncrease = change;
          increaseDate = data[i][0];
      }
  }

  return {
      date: increaseDate,
      amount: greatestIncrease
  };
}

// Find the greatest increase in Profit/Losses
var greatestIncrease = findGreatestIncrease(finances);

// Output the greatest increase in Profit/Losses and the corresponding date
console.log("Greatest increase in Profit/Losses:", greatestIncrease.amount);
console.log("Date of greatest increase:", greatestIncrease.date);