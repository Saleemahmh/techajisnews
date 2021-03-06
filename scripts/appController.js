/**
* @Author: Mohammed Ismail <ikismail7>
* @Date:   2017-08-28T16:31:35+05:30
 * @Last modified by:   ikismail7
 * @Last modified time: 2017-08-28T22:28:21+05:30
*/
app.controller('newsController', ['$scope','appService',function(
  $scope,appService) {

    $scope.data = "Hello World";

    $scope.sourceData = [];
    $scope.image ;

    $scope.getNewsBySource = function(category){
      console.log('category ->',category);
      appService.getNewsBySource(category).then(function(data){
        $scope.sourceData = data;
        console.log($scope.sourceData)
      },function(error){
        // $.toaster({ priority : 'error', title : 'Error', message : 'error while fetching resources'});
      })
    };

  }])
