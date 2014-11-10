/**
 * Created by opdah023 on 10/9/14.
 */
'use strict';



angular.module('ursaMajorApp')
    .filter('isntEmpty', function(){
        return function(input, title, altTitle){
          if (input != 0) {
              return title + " " + input;
          } else {
              return altTitle;
          }
        }
    })

    .controller('SublistCtrl', function ($scope, $http, $modal, Modal, Auth, $location, $filter) {
        if(Auth.isLoggedIn() === false) {
            $location.path('/');
        }
        $scope.getCurrentEmail = Auth.email;

        //------------------------- Getting data from google ------------------------
        //https://docs.google.com/a/morris.umn.edu/spreadsheets/d/1es5vkh9xXGzStvgFAkpm4nehu5oA9cgKA8WTS9jU13Q/edit#gid=418082616
        $scope.jsonSource = "https://spreadsheets.google.com/feeds/list/1ImSQ0fy65Bc9NjmgHrpruaDrodC2uJ1n4RYl2OTX9Po/od6/public/values?alt=json";
        $scope.submissions = [];

        $scope.updateLocalData = function(){
            $http({method:'GET', url: $scope.jsonSource}).success(function(data) {
                angular.forEach(data.feed.entry, function(value){
                    $scope.submissions.push(value);
                });
            });
        };

        //---------------- Filter Stuff --------------------------------
        $scope.searchText = "";
        //$scope.missingReviewGroupCheck = false;
        $scope.reviewGroupFilterSelection = "All";
        $scope.reviewGroupFilterOptions = [
            "All",
            "None",
            "Review Group 1",
            "Review Group 2"
        ];

        $scope.isCoPresenter = function(sub){
            if(sub['gsx$co-presentersstudentsemail'].$t != 0){
                return sub['gsx$co-presentersstudentsemail'].$t == Auth.getCurrentUser().email;
            }
        };

        $scope.isReviewer = function(sub){
          return (sub.gsx$reviewgroup.$t != 0 && sub.gsx$reviewgroup.$t === Auth.getCurrentUser().role);
        };

        $scope.missingReviewGroup = function(sub){
            return /*!$scope.missingReviewGroupCheck ||*/ (sub.gsx$reviewgroup.$t == 0);
        };

        $scope.reviewGroupTwo = function(sub){
            console.log("Showing only certain review groups.");
            if($scope.reviewGroupFilterSelection === "All"){
                return true;
            } else if($scope.reviewGroupFilterSelection === "None"){
                return (sub.gsx$reviewgroup.$t == 0);
            } else {
                return (sub.gsx$reviewgroup.$t === $scope.reviewGroupFilterSelection)
            }
        };

        $scope.userFilterFunction = function(sub){
            if (!Auth.isLoggedIn) {
                return false;
            } else if(Auth.getCurrentUser().role == "admin") {
                console.log("Admin = yes");
                return true;
            } else {
                return (sub.gsx$primarystudentemail.$t == Auth.getCurrentUser().email || $scope.isCoPresenter(sub) || $scope.isReviewer(sub));
            }
        };

        $scope.nameSearchFilterFunction = function(sub){
            console.log("Searching by text");
            return (
                (sub.gsx$lastnameprimarystudentpresentercontactperson.$t.toLowerCase()).indexOf($scope.searchText.toLowerCase()) != -1 ||
                (sub.gsx$title.$t.toLowerCase()).indexOf($scope.searchText.toLowerCase()) != -1 ||
                (sub.gsx$firstnameprimarystudentpresentercontactperson.$t.toLowerCase()).indexOf($scope.searchText.toLowerCase()) != -1
                );
        };

        //-------------------- Color coding of submissions ----------------------
        $scope.statusColorTab = function(status){
            switch(status){
                case "Yes":
                    return {'border-left': '4px solid rgba(0, 255, 0, 1)'};
                    break;
                case "No":
                    return {'border-left': '4px solid rgba(255, 0, 0, 1)'};
                    console.log("Http request success!");
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

        //------------------ Controlling selection of submission for detail view ------------------
        $scope.selection = {selected: false, item: null, comments: null};

        $scope.selectItem = function(itemIndex){
            console.log("setting index " + itemIndex + " as active item");
            $scope.selection.selected = true;
            $scope.selection.item = $filter('filter')($filter('filter')($scope.submissions, $scope.userFilterFunction), $scope.nameSearchFilterFunction)[itemIndex];
        };

        $scope.resetSelection = function(){
            $scope.selection.selected = false;
            $scope.selection.comments = null;
        };

        $scope.getComments = function(){
//            $http({method:'GET', url: "https://www.googleapis.com/drive/v2/files/" + $scope.selection.item.gsx$link.$t + "/comments"}).success(function(data){
//                $scope.selection.comments = data;
//            })
              var request = gapi.client.drive.comments.list({'fileId': $scope.selection.item.gsx$link.$t});
              request.execute(function(data){
                  $scope.selection.comments = data
              });
        };

        $scope.getMiscData = function(sub){
            var query = new google.visualization.Query($scope.jsonSource);
            query.setQuery('select C');
            query.send(function(response){
                $scope.selection.comments = response.getTableData();
            });
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
        };

        $scope.isAnAdmin = function() {
            return (Auth.getCurrentUser().role == 'admin')
        };

        //------------------ getting data ----------------------

        if($scope.submissions.length == 0){
            console.log("updating local data!");
            $scope.updateLocalData();
        }
    });