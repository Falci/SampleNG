angular
    .module('app')
    .controller('UsersCtrl', function($scope, User){
        
        $scope.items = [];
        $scope.remove = remove;
        
        list();
        
        function remove(user){
            console.log('removing: '+ JSON.stringify(user));
            user.$delete(list);
        }
        
        function list(){
            User.query(function(response){
               $scope.items = response; 
            });
        }
    })
    .controller('UserCtrl', function($scope, $routeParams, User, $location){
       
       $scope.user;
       $scope.save = save;
       
       load();
       
       function save() {
           $scope.user.$save(function () {
               $location.path('/users');
           });
       }
       
       function load(){
           var id = $routeParams.id;
           
           if(id){
               User.get({ id: id }, function(user){
                   $scope.user = user;
               });
               
           } else {
                $scope.user = new User();
           }
       }
        
    });
    
    