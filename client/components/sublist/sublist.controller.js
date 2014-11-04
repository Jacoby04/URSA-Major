/**
 * Created by opdah023 on 10/9/14.
 */
'use strict';

angular.module('ursaMajorApp')
    .filter('isntEmpty', function(){
        return function(item, title){
          if (title !== 0) {
              return title + " " + item;
          }
        }
    })

    .controller('SublistCtrl', function ($scope, $http, $modal, Modal) {


        $scope.jsonSource = "https://spreadsheets.google.com/feeds/list/1ImSQ0fy65Bc9NjmgHrpruaDrodC2uJ1n4RYl2OTX9Po/od6/public/values?alt=json";
        $scope.submissions = [];

        $scope.updateLocalData = function(){
            $http({method:'GET', url: $scope.jsonSource}).success(function(data) {
                angular.forEach(data.feed.entry, function(value){
                    $scope.submissions.push(value);
                });
            });
        };

        $scope.updateLocalData();

        $scope.statusColorTab = function(status){
            switch(status){
                case "Yes":
                    return {'border-left': '4px solid rgba(0, 255, 0, 1)'};
                    break;
                case "No":
                    return {'border-left': '4px solid rgba(255, 0, 0, 1)'};
                    break;
            }
        };

        $scope.statusColorBody = function(status){
            switch(status){
                case "Yes":
                    return {'background-color': 'rgba(0, 255, 0, 1)'};
                    break;
                case "No":
                    return {'background-color': 'rgba(255, 0, 0, 1)'};
                    break;
            }
        };

        // Controlling selection of submission for detail view
        $scope.selection = {selected: false, item: null};

        $scope.selectItem = function(itemIndex){
            console.log("setting index " + itemIndex + " as active item");
            $scope.selection.selected = true;
            $scope.selection.item = $scope.submissions[itemIndex];
        };

        $scope.resetSelection = function(){
            $scope.selection.selected = false;
        };

        $scope.deleteSubmissionConfirm = function(item){
            Modal.confirm.delete($scope.deleteSubmission)(item.title, item);
        };

        $scope.deleteSubmission = function(item){
            alert("the delete button doesn't work right now because we haven't figured out how to do that yet. Sorry.");
        };

        // Controlling editing of status in details view
        $scope.statusEdit = {
            editing: false,
            options: ["Awaiting Adviser Approval", "Approved", "Awaiting Revisions", "Pending Review"]
        };

        $scope.editStatus = function(){
            $scope.statusEdit.editing = !$scope.statusEdit.editing;
        };

        $scope.submitStatusEdit = function(){
            alert("This doesn't work right now because we haven't figured out how to do it with google yet. Sorry.");
        }


    });