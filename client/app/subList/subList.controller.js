'use strict';

angular.module('ursaMajorApp')
    .controller('SublistCtrl', function ($scope) {

        $scope.subs = {sub:[{
            name:"",
            email:"",
            awesome:""
        }]};

        $(document).ready(function() {
            $(function listStuff() {
                $.getJSON("https://spreadsheets.google.com/feeds/list/1VH6bDj7m04P9AI5WmgKYfdfXAZYRbVFiSRPJ3r_bou4/od6/public/values?alt=json-in-script&callback=?",
                    function (data) {
                        $.each(data.feed.entry, function (i, entry) {
                            var sub = '<span style="display:none">' + entry.id.$t + '</span>';
                            var email = entry.gsx$username.$t;
                            var name = entry.gsx$yourname.$t;
                            var awesome = entry.gsx$areyouawesome.$t;
                            $scope.subs.sub.push({
                                name: name,
                                email: email,
                                awesome: awesome
                            })


                        });
                    });
            });
        });

    });

