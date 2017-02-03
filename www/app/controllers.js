'use strict';

var myApp = angular.module('myApp.controllers', ['fhcloud']);

myApp.controller('MainCtrl', function($scope, fhcloud) {
  

  $scope.flightRecords = [
      {"flightOrigin":"EZE","flightDestination":"GRU","flightNo":"AR12", "flightDepTime":"12:20", "flightArrTime": "14:40"},
      {"flightOrigin":"EZE","flightDestination":"SCL","flightNo":"AR23", "flightDepTime":"13:20", "flightArrTime": "15:40"},
      {"flightOrigin":"EZE","flightDestination":"BOG","flightNo":"AR43", "flightDepTime":"16:00", "flightArrTime": "18:40"},
      {"flightOrigin":"EZE","flightDestination":"MEX","flightNo":"AR13", "flightDepTime":"20:00", "flightArrTime": "5:40"},
      {"flightOrigin":"GRU","flightDestination":"SCL","flightNo":"TA12", "flightDepTime":"11:20", "flightArrTime": "13:40"},
      {"flightOrigin":"GRU","flightDestination":"BOG","flightNo":"TA22", "flightDepTime":"9:00", "flightArrTime": "12:40"},
      {"flightOrigin":"GRU","flightDestination":"MEX","flightNo":"TA33", "flightDepTime":"2:00", "flightArrTime": "5:40"},
      {"flightOrigin":"GRU","flightDestination":"EZE","flightNo":"TA44", "flightDepTime":"14:00", "flightArrTime": "15:40"},
      {"flightOrigin":"SCL","flightDestination":"EZE","flightNo":"LA12", "flightDepTime":"11:20", "flightArrTime": "13:40"},
      {"flightOrigin":"SCL","flightDestination":"BOG","flightNo":"LA22", "flightDepTime":"9:00", "flightArrTime": "12:40"},
      {"flightOrigin":"SCL","flightDestination":"MEX","flightNo":"LA33", "flightDepTime":"2:00", "flightArrTime": "5:40"},
      {"flightOrigin":"SCL","flightDestination":"GRU","flightNo":"LA44", "flightDepTime":"14:00", "flightArrTime": "15:40"},
      {"flightOrigin":"BOG","flightDestination":"EZE","flightNo":"AV12", "flightDepTime":"11:20", "flightArrTime": "13:40"},
      {"flightOrigin":"BOG","flightDestination":"SCL","flightNo":"AV22", "flightDepTime":"9:00", "flightArrTime": "12:40"},
      {"flightOrigin":"BOG","flightDestination":"MEX","flightNo":"AV33", "flightDepTime":"2:00", "flightArrTime": "5:40"},
      {"flightOrigin":"BOG","flightDestination":"GRU","flightNo":"AV44", "flightDepTime":"14:00", "flightArrTime": "15:40"},
      {"flightOrigin":"MEX","flightDestination":"EZE","flightNo":"AM12", "flightDepTime":"11:20", "flightArrTime": "13:40"},
      {"flightOrigin":"MEX","flightDestination":"SCL","flightNo":"AM22", "flightDepTime":"9:00", "flightArrTime": "12:40"},
      {"flightOrigin":"MEX","flightDestination":"BOG","flightNo":"AM33", "flightDepTime":"2:00", "flightArrTime": "5:40"},
      {"flightOrigin":"MEX","flightDestination":"GRU","flightNo":"AM44", "flightDepTime":"14:00", "flightArrTime": "15:40"}
      ];
  $scope.hotelRecords=[
    {"hotelCity":"SCL","hotelChain":"Sheraton", "hotelName": "Santiago", "hotelStars":5},
    {"hotelCity":"SCL","hotelChain":"Hilton", "hotelName": "Santiago", "hotelStars":5},
    {"hotelCity":"EZE","hotelChain":"Sheraton", "hotelName": "Buenos ires", "hotelStars":5},
    {"hotelCity":"EZE","hotelChain":"Hilton", "hotelName": "PuertoMadero", "hotelStars":5},
    {"hotelCity":"EZE","hotelChain":"Holiday Inn", "hotelName": "Retiro", "hotelStars":4},
    {"hotelCity":"BOG","hotelChain":"W", "hotelName": "Bogotá", "hotelStars":5},
    {"hotelCity":"BOG","hotelChain":"Hilton", "hotelName": "Bogotá", "hotelStars":5},
    {"hotelCity":"MEX","hotelChain":"Hyatt", "hotelName": "DF", "hotelStars":5},
    {"hotelCity":"MEX","hotelChain":"Marriot", "hotelName": "DF", "hotelStars":5},
    {"hotelCity":"GRU","hotelChain":"BlueTree", "hotelName": "FariaLima", "hotelStars":5},
    {"hotelCity":"GRU","hotelChain":"Pullman", "hotelName": "VilaOlimpa", "hotelStars":5}
    ];
  $scope.carRecords=[
    {"carCity":"SCL","rentalCompany":"Hertz", "carType":"Econ"},
    {"carCity":"SCL","rentalCompany":"Hertz", "carType":"Prem"},
    {"carCity":"EZE","rentalCompany":"Dollar", "carType":"Econ"},
    {"carCity":"EZE","rentalCompany":"Hertz", "carType":"Econ"},
    {"carCity":"BOG","rentalCompany":"Avis", "carType":"Econ"},
    {"carCity":"BOG","rentalCompany":"Hertz", "carType":"Econ"},
    {"carCity":"MEX","rentalCompany":"Hertz", "carType":"Econ"},
    {"carCity":"MEX","rentalCompany":"Avis", "carType":"Econ"},
    {"carCity":"GRU","rentalCompany":"Localiza", "carType":"Econ"},
    {"carCity":"GRU","rentalCompany":"Hertz", "carType":"Econ"}
    ];

  $scope.queryPage=false;
  $scope.resultsPage=true;
  $scope.quotePage=true;
  
  $scope.travelBookFlight=false;
  $scope.travelBookHotel=false;
  $scope.travelBookCar=false;
 
$scope.backToQuery = function(){
  $scope.queryPage=false;
  $scope.resultsPage=true;
  $scope.quotePage=true;
}
$scope.backToResults = function(){
  $scope.queryPage=true;
  $scope.resultsPage=false;
  $scope.quotePage=true;
}
$scope.search = function(){
   
  $scope.flightSel=0;
  $scope.hotelSel=0;
  $scope.carSel=0;
  
  $scope.queryPage=true;
  $scope.resultsPage=false;
  
  $scope.flightRecordsMatch = $scope.flightRecords.filter(function(fl){return ((fl.flightDestination==$scope.travelDestination) && (fl.flightOrigin==$scope.travelOrigin))});
  $scope.hotelRecordsMatch = $scope.hotelRecords.filter(function(h){return h.hotelCity==$scope.travelDestination});
  $scope.carRecordsMatch = $scope.carRecords.filter(function(c){return c.carCity==$scope.travelDestination});
  
  
};

  $scope.bookTravel = function() {
    var travelOrigin = $scope.travelOrigin;
    var travelDestination = $scope.travelDestination;
    var travelDate = $scope.travelDate;
    var travelPassengers= $scope.travelPassengers;
    var travelDays = $scope.travelDays;

    var flight=$scope.travelBookFlight;
    var hotel=$scope.travelBookHotel;
    var car=$scope.travelBookCar;
    
    var bookReq = {};


    if(flight){
      var selFlight = parseInt($scope.flightSel);
      var flightNo = $scope.flightRecordsMatch[selFlight].flightNo;
      var flightReq = {"flightFrom":travelOrigin, "flightTo": travelDestination, "flightDate": travelDate, "flightPassengers":travelPassengers, "flightNo": flightNo};
      bookReq["flightReq"] = flightReq;
    }
    if(hotel){
      var selHotel = parseInt($scope.hotelSel);
      var hotelId = $scope.hotelRecordsMatch[selHotel].hotelChain + $scope.hotelRecordsMatch[selHotel].hotelName;
      var hotelReq = {"hotelArrivalDate":travelDate,"hotelNights":travelDays,"hotelCity": travelDestination,"hotelId":hotelId};
      bookReq["hotelReq"] = hotelReq;
    }
    if(car){
      var selCar = parseInt($scope.carSel);
      var rentalCo = $scope.carRecordsMatch[selCar].rentalCompany;
      var carType = $scope.carRecordsMatch[selCar].carType;
      var carReq = {"carCity":travelDestination,"carRentalCo":rentalCo,"carType":carType,"carStartDate":travelDate,"carDays":travelDays};
       bookReq["carReq"] = carReq;
    }
    var datos={};
    datos["bookReq"] = bookReq;
    
    fhcloud("/fis",datos)
      .then(function(response){
        
        $scope.queryPage=true;
        $scope.resultsPage=true;
        $scope.quotePage=false;
        if (response !== null && typeof(response) !== 'undefined') {
          $scope.flightResp = response["techoffice.FlightResp"];
          $scope.hotelResp = response["techoffice.HotelResp"];
          $scope.carResp = response["techoffice.CarResp"];
          
        } else {
          alert("Error: Expected a message from $fh.cloud.");
        }
      })
      .catch(function(msg, err){
        //If the function
        alert("$fh.cloud failed. Error: " + JSON.stringify(err));
      });
    
  };
});
