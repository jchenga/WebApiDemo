angular.module("reservationApp")
    .constant("reservationUrl", "http://localhost:49955/api/web/")
    .controller("reservationCtrl", function($scope, $resource, reservationUrl) {
        $scope.reservationsResource = $resource(reservationUrl + ":id", { id: "@ReservationId" });

    $scope.listReservations = function() {
        $scope.reservations = $scope.reservationsResource.query();
    };
    $scope.deleteReservation = function(reservation) {
        reservation.$delete().then(function() {
            $scope.reservations.splice($scope.reservations.indexOf(reservation));
        });
    };

    $scope.createReservation = function (reservation) {
        new $scope.reservationsResource(reservation).$save().then(function(newReservation) {
            $scope.reservations.push(newReservation);
            $scope.editedReservation = null;
        });
    };

    $scope.updateReservation = function(reservation) {
        reservation.$save();
        $scope.editedReservation = null;
    };

    $scope.startEdit = function(reservation) {
        $scope.editedReservation = reservation;
    };

    $scope.cancelEdit = function() {
        $scope.editedReservation = null;
    };

    $scope.listReservations();


});