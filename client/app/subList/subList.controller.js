'use strict';

angular.module('ursaMajorApp')
    .controller('SublistCtrl', function ($scope) {
        $scope.message = 'Hello';
    });

   /* var Spreadsheet = require('edit-google-spreadsheet');

    Spreadsheet.load({
        debug: true,
        spreadsheetId: '11UhreZn8ZcrZ1LSWJz2s1PWEdHcjhuNkVn7w_yPfTFc',
        worksheetName: 'Form Responses 1',

        oauth: {
            email: '210473020739-lmmpcdsvqukuup09e75c7ohjfc3jlll4@developer.gserviceaccount.com',
            key: process.env.PEM_KEY="/downloads/URSA-Major-4a6da205d6e5.pem"
        }

    }, function sheetReady(err, spreadsheet) {

        if (err) {
            throw err;
        }

        spreadsheet.receive(function (err, rows, info) {
            if (err) {
                throw err;
            }

            var rows = ("Found rows:", rows);

            //console.dir(rows);
            //console.dir(info);
        });
        */