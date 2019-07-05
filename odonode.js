var http = require("http");

http
  .createServer(function(req, res) {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end("Hello World!");
  })
  .listen(8080);
///////fuel consumption calculating logic BY ALEX/OPEYEMI/////////

var odometer_readings_1 = [100, 126, 170, 195, 240];
var odometer_readings_2 = [100, 126, 170, 195, 240];
var odometer_readings_3 = [100, 136, 170, 195, 270];
var litre = 4.71;

calculatefirstmonth = odometer_readings_1 => {
  var dist = [];
  for (var i = 1; i < odometer_readings_1.length; i++) {
    dist.push(odometer_readings_1[i] - odometer_readings_1[i - 1]);
  }
  total_dist = dist.reduce((a, b) => a + b, 0);
  first_month_consumption = total_dist * litre;
  return first_month_consumption;
};
console.log("first month:", calculatefirstmonth(odometer_readings_1));

calculatesecondmonth = odometer_readings_2 => {
  var dist = [];
  for (var i = 1; i < odometer_readings_2.length; i++) {
    dist.push(odometer_readings_2[i] - odometer_readings_2[i - 1]);
  }
  total_dist = dist.reduce((a, b) => a + b, 0);
  second_month_consumption = total_dist * litre;
  return second_month_consumption;
};
console.log("second month:", calculatesecondmonth(odometer_readings_2));

calculatethirdmonth = odometer_readings_3 => {
  var dist = [];
  for (var i = 1; i < odometer_readings_3.length; i++) {
    dist.push(odometer_readings_3[i] - odometer_readings_3[i - 1]);
  }
  total_dist = dist.reduce((a, b) => a + b, 0);
  third_month_consumption = total_dist * litre;
  return third_month_consumption;
};
console.log("third month:", calculatethirdmonth(odometer_readings_3));

/////////////////Anomally catching logic by alex/opeyemi ///////////////////
var months = [
  calculatefirstmonth(odometer_readings_1),
  calculatesecondmonth(odometer_readings_2),
  calculatethirdmonth(odometer_readings_3)
];
calculate_anomally = months => {
  var month_diff = [];
  for (var i = 1; i < months.length; i++) {
    month_diff.push(months[i] - months[i - 1]);
  }
  if (month_diff[1] > 20) {
    return "Something is fishy";
  } else {
    return "Transaction successful";
  }
};
console.log(calculate_anomally(months));
