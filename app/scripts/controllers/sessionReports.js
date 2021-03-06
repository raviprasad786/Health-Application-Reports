'use strict';

/**
 * @ngdoc function
 * @name healthApplicationApp.controller:SessionCtrl
 * @description
 * # SessionssCtrl
 * Controller of the healthApplicationApp
 */
angular.module('healthApplicationApp')

  .controller('sessionCtrl', ['$rootScope', '$scope', '$http', function ($rootScope, $scope, $http) {

    var baseURL = 'http://13.126.239.21:3042';

    // Get states

    var getStates = function () {
      
      $http.get(baseURL + '/index/getState').then(function (response) {       
        $scope.statesData = response.data.data;
      }, function (err) {
        console.log(err);
      });
    }();


    $scope.getDistricts = function () {
      var data = $scope.stateID;
      console.log(data)
      $http.get(baseURL + '/index/getDistrict/', { params: { stateid: data } }).then(function (response) {
        $scope.districts = response.data.data;

      }, function (err) {
        console.log(err);
      });
    }

    $scope.getBlocks = function () {
      var data = $scope.districtID;
      $http.get(baseURL + '/index/getMandal/', { params: { districtID: data } }).then(function (response) {
        $scope.blocks = response.data.data;
      }, function (err) {
        console.log(err);
      });
    }

    $scope.getClusters = function () {
      var data = $scope.blockID;
      $http.get(baseURL + '/index/getCluster/', { params: { blockID: data } }).then(function (response) {
        $scope.clusters = response.data.data;

      }, function (err) {
        console.log(err);
      })
    }
    $scope.getVillages = function () {
      var data = $scope.clusterID;
      $http.get(baseURL + '/index/getVillage/', { params: { clusterID: data } }).then(function (response) {
        $scope.villages = response.data.data;

      }, function (err) {
        console.log(err);
      });
    }

    $scope.getswasthyaSaathi = function () {
      var data = $scope.villageID;
      $http.get(baseURL + '/index/getSsaathi', { params: { villageID: data } }).then(function (response) {
        console.log(response.data.data)

        $scope.swasthyaData = response.data.data;

      }, function (err) {
        console.log(err);
      });

    }

    $scope.getsessionReports = function (id) {

      $http.get(baseURL + '/index/sessionReports/', { params: { SSID: id } }).then(function (response) {

        $scope.sessionData = response.data.data;
      }, function (err) {
        console.log(err);
      });

    }

    $scope.getsessionReports()





  }])

