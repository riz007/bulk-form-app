var app = angular.module('bankApp', ['ngFileUpload']);

app.controller('bankCtrl', ['$scope', 'Upload', '$timeout', function($scope, Upload, $timeout) {

  $scope.step = 2;

  // Initialize every scopes here
  $scope.fName = "";
  $scope.midName = "";
  $scope.lastName = "";
  $scope.homePhone;
  $scope.mobilePhone;
  $scope.email;
  $scope.streetNumber;
  $scope.routeAddress;
  $scope.locality;
  $scope.state;
  $scope.zipCode;
  $scope.country;
  $scope.socialSecNum;
  $scope.empName;
  $scope.empAddress;
  $scope.streetNumber2;
  $scope.routeAddress2;
  $scope.locality2;
  $scope.state2;
  $scope.zipCode2;
  $scope.country2;
  $scope.mobilePhone2;
  $scope.savings;
  $scope.deposit;




  $scope.clickProceed = function() {
    if($("#proceedBox").prop('checked') == true) {
      $scope.step = 2;
    }else {
      $('#proceedAlert').removeClass('hide');
    }
  };

  $scope.clickPrevious = function() {
    if($scope.step > 0) $scope.step -=1;
  };

  $scope.clickChecked = function() {
    if($scope.step = 4) {
      if(!$("input[name='radio2']:checked").val()) {
        alert("Nothing is checked");
        return false;
      }else {
        alert('One of the button is checked');
      }

    }
  }

  $scope.clickNext = function() {
    if($scope.step == 1) {
      $scope.step = 2;
    }else if($scope.step ==2) {
      $scope.step = 3;
    }else if($scope.step == 3) {
      $scope.step = 4;
    }else if($scope.step == 4) {
      $scope.step = 5;
    }
  };

  $scope.clickHome = function() {
    $scope.step = 1;
  }

  $scope.purposeBank = [
    {id:'0', value:'Select'}, {id: '1', value: 'Business transaction'}, {id: '2', value: 'Educational expense'}, {id: '3', value: 'Family expense'}, {id: '4', value: 'Others'}
  ];

  $scope.selectedPurpose = $scope.purposeBank[0];

  $scope.changeClick = function(purpose) {
    $scope.selectedPurpose = purpose;
    
  };

  $scope.getMoney = [
    {id:'0', value:'Select'},{id:'1', value:'Salary'}, {id:'2', value:'Business'}, {id:'3', value:'Parents'}, {id:'4', value:'Allowances'}, {id:'5', value:'Others'}
  ];

  $scope.selectedMoney = $scope.getMoney[0];

  $scope.changeClickMoney = function(money) {
    $scope.selectedMoney = money;
  };

  $scope.hearAboutUs = [
    {id:'0', value:'Select'}, {id:'1', value:'Social Media'}, {id:'2', value:'Brochure'}, {id:'3', value:'Radio'}, {id:'4', value:'TV'}
  ];

  $scope.selectedAbout = $scope.hearAboutUs[0];

  $scope.changeClickAbout = function(about) {
    $scope.selectedAbout = about;
  };

  $scope.jobList = [
    {id:'0', value:'Select'}, {id:'1', value:'Accountant'}, {id:'2', value:'Engineer'}, {id:'3', value:'IT'}, {id:'4', value:'Marketing'}, {id:'5', value:'Others'}
  ];

  $scope.selectedJob = $scope.jobList[0];

  $scope.changeClickJob = function(job) {
    $scope.selectedJob = job;
  };

  $scope.getRandomAccNo = function() {
    var bank_id="786", min = 123456789, max = 99999999;
    var charset = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";

    var r_msg = new Array();

    r_msg[0] = "Your application is accepted and your bank account number is:";
    r_msg[1] = "Your application has been rejected. Please contact our local branch with this application number:" ;
    $scope.randomAccNo = "786" + "-" + (Math.floor(Math.random() * (max - min + 1)) + min);
    $scope.messages = Math.floor(r_msg.length * Math.random());
    $scope.randomAppNo = charset.charAt(Math.floor(Math.random() * charset.length));
  };

  $scope.save = function() {

  }

  $scope.clickUpload = function(event) {
    $scope.step = 5;
    $scope.getRandomAccNo();

    var modelData = [{
        fName: $scope.fName,
        midName: $scope.midName,
        lastName: $scope.lastName,
        homePhone: $scope.homePhone,
        mobilePhone: $scope.mobilePhone,
        email: $scope.email,
        streetNumber: $scope.streetNumber,
        routeAddress: $scope.routeAddress,
        locality: $scope.locality,
        state: $scope.state,
        zipCode: $scope.zipCode,
        country: $scope.country,
        socialSecNum: $scope.socialSecNum,
        empName: $scope.empName,
        empAddress: $scope.empAddress,
        streetNumber2: $scope.streetNumber2,
        routeAddress2: $scope.routeAddress2,
        locality2: $scope.locality2,
        state2: $scope.state2,
        zipCode2: $scope.zipCode2,
        country2: $scope.country2,
        mobilePhone2: $scope.mobilePhone2,
        savings: $scope.savings,
        deposit: $scope.deposit
    }];
    console.log(modelData);
  };

  // Upload
  $scope.$watch('files', function () {
      $scope.upload($scope.files);
  });
  $scope.$watch('file', function () {
      if ($scope.file != null) {
          $scope.files = [$scope.file]; 
      }
  });

  $scope.log = '';

  $scope.upload = function (files) {
      if (files && files.length) {
          for (var i = 0; i < files.length; i++) {
            var file = files[i];
            if (!file.$error) {
              Upload.upload({
                  url: 'https://angular-file-upload-cors-srv.appspot.com/upload',
                  data: {
                    username: $scope.username,
                    file: file  
                  }
              }).then(function (resp) {
                  $timeout(function() {
                    $scope.result = resp.data;
                  });
              }, function (resp) {
                if(resp.status > 0) {
                  $scope.errorMsg = resp.status + ': ' + resp.data;
                }
              }, function (evt) {
                   $scope.progressPercentage = parseInt(100.0 *
                      evt.loaded / evt.total);
              });
            }
          }
      }
  };
  // upload
}]);