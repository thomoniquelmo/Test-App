//THIS IS JAVASCRIPT CODE. THIS DECLARES YOUR APP AS "app" AND INJECTS IONIC LIBRARY INTO APP//

angular.module('firstApp',['ionic'])

.service('MyDataService', function ($q) {
        // data
        var itemsList = [];
        itemsList.push({
            "book": "Gone Girl",
            "author": "Gillian Flynn"
        });
        itemsList.push({
            "book": "The Temple of My Familiar",
            "author": "Alice Walker"
        });
        itemsList.push({
            "book": "The Coldest Winter Ever",
            "author": "Sister Soulja"
        });
        itemsList.push({
            "book": "Odd Thomas",
            "author": "Dean Koontz"
        });
        itemsList.push({
            "book": "Is Everyone Hanging Out Without Me? (And Other Concerns)",
            "author": "Mindy Kaling"
        });

       
        return {
            /**
             * returns all of the data
             */
            getAllItems: function () {
                var deferred = $q.defer();
                setTimeout(function () {
                    deferred.resolve(itemsList);
                }, 500);
                return deferred.promise;
            },
            /**
             * Gets item by specific id
             * @param   {Number}  _itemId index in the array
             * @returns {Promise}
             */
            getItemById: function (_itemId) {
                var deferred = $q.defer();
                setTimeout(function () {
                    deferred.resolve(itemsList[_itemId]);
                }, 1000);
                return deferred.promise;
            }
        }

    })
    .controller('First', function ($scope, MyDataService) {
       

        $scope.itemsList = [];

        // functions for the buttons
        $scope.getOneItemBtnClicked = function () {
            var objectId = prompt("Please enter object ID", "");
            if (objectId != null) {
                MyDataService.getItemById(objectId).then(function (_data) {
                    $scope.itemsList = [_data];
                });
            }
        }

        $scope.getAllItemsBtnClicked = function () {
            MyDataService.getAllItems().then(function (_data) {
                $scope.itemsList = _data;
            });
        }

        MyDataService.getAllItems().then(function (_data) {
            $scope.itemsList = _data;
        });

    });
