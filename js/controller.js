var app = angular.module('bulkApp', ['ngFileUpload']);

app.controller('bulkCtrl', ['$scope', 'Upload', '$timeout', function($scope, Upload, $timeout) {

  $scope.step = 1;

  $scope.modelData = [{
    invNo: $scope.invNo,
    invDate: $scope.invDate,
    invAmt: $scope.invAmt,
    custNum: $scope.custNum,
    country: $scope.selectedCountry,
    product: $scope.radio2,
    itemCost: $scope.itemCost,
    item:  $scope.selectedItem,
    fileList: $scope.fileList
  }];

  // Initialize every scope vars here
  $scope.invNo;
  $scope.invDate;
  $scope.invAmt;
  $scope.custNum;
  // $scope.countryList;
  $scope.yes;
  $scope.no;
  $scope.itemCost;
  $scope.fileList = [];
  $scope.files=[];
  $scope.files2=[];

  $scope.invAmt = 1234.56;
  $scope.itemCost = 1234.56;


  $(document).ready(function() {
    // Retrieve the users name.
    var name = localStorage.getItem('invNo');

    if (name != "undefined" || name != "null") {
      document.getElementById('invNo').innerHTML =  name ;
    } else {
      document.getElementById('invNo').innerHTML = "";
    }
  });

  $scope.clickPrevious = function() {
    if($scope.step > 0) $scope.step -=1;
  };


  $scope.clickNext = function() {
    if($scope.step == 1) {
      $scope.step = 2;
    }else if($scope.step ==2) {
      $scope.step = 3;
    }else if($scope.step == 3) {
      $scope.step = 4;
    }
  };

  $scope.clickHome = function() {
    $scope.step = 1;
  }

  $scope.getItem = [
    {id:'0', value:'Select'},{id:'1', value:'Hotels'}, {id:'2', value:'Restaurant'}, {id:'3', value:'Cars/Rental'}, {id:'4', value:'Clothing/Fashin'}, {id:'5', value:'Tourism/Travel'}
  ];

  $scope.selectedItem = $scope.getItem[0];

  $scope.changeClickItem = function(item) {
    $scope.selectedItem = item;
  };

  $scope.countryList = [
    {name: 'Select', code: ''},
    {name: 'Afghanistan', code: 'AF'}, 
    {name: 'Åland Islands', code: 'AX'}, 
    {name: 'Albania', code: 'AL'}, 
    {name: 'Algeria', code: 'DZ'}, 
    {name: 'American Samoa', code: 'AS'}, 
    {name: 'AndorrA', code: 'AD'}, 
    {name: 'Angola', code: 'AO'}, 
    {name: 'Anguilla', code: 'AI'}, 
    {name: 'Antarctica', code: 'AQ'}, 
    {name: 'Antigua and Barbuda', code: 'AG'}, 
    {name: 'Argentina', code: 'AR'}, 
    {name: 'Armenia', code: 'AM'}, 
    {name: 'Aruba', code: 'AW'}, 
    {name: 'Australia', code: 'AU'}, 
    {name: 'Austria', code: 'AT'}, 
    {name: 'Azerbaijan', code: 'AZ'}, 
    {name: 'Bahamas', code: 'BS'}, 
    {name: 'Bahrain', code: 'BH'}, 
    {name: 'Bangladesh', code: 'BD'}, 
    {name: 'Barbados', code: 'BB'}, 
    {name: 'Belarus', code: 'BY'}, 
    {name: 'Belgium', code: 'BE'}, 
    {name: 'Belize', code: 'BZ'}, 
    {name: 'Benin', code: 'BJ'}, 
    {name: 'Bermuda', code: 'BM'}, 
    {name: 'Bhutan', code: 'BT'}, 
    {name: 'Bolivia', code: 'BO'}, 
    {name: 'Bosnia and Herzegovina', code: 'BA'}, 
    {name: 'Botswana', code: 'BW'}, 
    {name: 'Bouvet Island', code: 'BV'}, 
    {name: 'Brazil', code: 'BR'}, 
    {name: 'British Indian Ocean Territory', code: 'IO'}, 
    {name: 'Brunei Darussalam', code: 'BN'}, 
    {name: 'Bulgaria', code: 'BG'}, 
    {name: 'Burkina Faso', code: 'BF'}, 
    {name: 'Burundi', code: 'BI'}, 
    {name: 'Cambodia', code: 'KH'}, 
    {name: 'Cameroon', code: 'CM'}, 
    {name: 'Canada', code: 'CA'}, 
    {name: 'Cape Verde', code: 'CV'}, 
    {name: 'Cayman Islands', code: 'KY'}, 
    {name: 'Central African Republic', code: 'CF'}, 
    {name: 'Chad', code: 'TD'}, 
    {name: 'Chile', code: 'CL'}, 
    {name: 'China', code: 'CN'}, 
    {name: 'Christmas Island', code: 'CX'}, 
    {name: 'Cocos (Keeling) Islands', code: 'CC'}, 
    {name: 'Colombia', code: 'CO'}, 
    {name: 'Comoros', code: 'KM'}, 
    {name: 'Congo', code: 'CG'}, 
    {name: 'Congo, The Democratic Republic of the', code: 'CD'}, 
    {name: 'Cook Islands', code: 'CK'}, 
    {name: 'Costa Rica', code: 'CR'}, 
    {name: 'Cote D\'Ivoire', code: 'CI'}, 
    {name: 'Croatia', code: 'HR'}, 
    {name: 'Cuba', code: 'CU'}, 
    {name: 'Cyprus', code: 'CY'}, 
    {name: 'Czech Republic', code: 'CZ'}, 
    {name: 'Denmark', code: 'DK'}, 
    {name: 'Djibouti', code: 'DJ'}, 
    {name: 'Dominica', code: 'DM'}, 
    {name: 'Dominican Republic', code: 'DO'}, 
    {name: 'Ecuador', code: 'EC'}, 
    {name: 'Egypt', code: 'EG'}, 
    {name: 'El Salvador', code: 'SV'}, 
    {name: 'Equatorial Guinea', code: 'GQ'}, 
    {name: 'Eritrea', code: 'ER'}, 
    {name: 'Estonia', code: 'EE'}, 
    {name: 'Ethiopia', code: 'ET'}, 
    {name: 'Falkland Islands (Malvinas)', code: 'FK'}, 
    {name: 'Faroe Islands', code: 'FO'}, 
    {name: 'Fiji', code: 'FJ'}, 
    {name: 'Finland', code: 'FI'}, 
    {name: 'France', code: 'FR'}, 
    {name: 'French Guiana', code: 'GF'}, 
    {name: 'French Polynesia', code: 'PF'}, 
    {name: 'French Southern Territories', code: 'TF'}, 
    {name: 'Gabon', code: 'GA'}, 
    {name: 'Gambia', code: 'GM'}, 
    {name: 'Georgia', code: 'GE'}, 
    {name: 'Germany', code: 'DE'}, 
    {name: 'Ghana', code: 'GH'}, 
    {name: 'Gibraltar', code: 'GI'}, 
    {name: 'Greece', code: 'GR'}, 
    {name: 'Greenland', code: 'GL'}, 
    {name: 'Grenada', code: 'GD'}, 
    {name: 'Guadeloupe', code: 'GP'}, 
    {name: 'Guam', code: 'GU'}, 
    {name: 'Guatemala', code: 'GT'}, 
    {name: 'Guernsey', code: 'GG'}, 
    {name: 'Guinea', code: 'GN'}, 
    {name: 'Guinea-Bissau', code: 'GW'}, 
    {name: 'Guyana', code: 'GY'}, 
    {name: 'Haiti', code: 'HT'}, 
    {name: 'Heard Island and Mcdonald Islands', code: 'HM'}, 
    {name: 'Holy See (Vatican City State)', code: 'VA'}, 
    {name: 'Honduras', code: 'HN'}, 
    {name: 'Hong Kong', code: 'HK'}, 
    {name: 'Hungary', code: 'HU'}, 
    {name: 'Iceland', code: 'IS'}, 
    {name: 'India', code: 'IN'}, 
    {name: 'Indonesia', code: 'ID'}, 
    {name: 'Iran, Islamic Republic Of', code: 'IR'}, 
    {name: 'Iraq', code: 'IQ'}, 
    {name: 'Ireland', code: 'IE'}, 
    {name: 'Isle of Man', code: 'IM'}, 
    {name: 'Israel', code: 'IL'}, 
    {name: 'Italy', code: 'IT'}, 
    {name: 'Jamaica', code: 'JM'}, 
    {name: 'Japan', code: 'JP'}, 
    {name: 'Jersey', code: 'JE'}, 
    {name: 'Jordan', code: 'JO'}, 
    {name: 'Kazakhstan', code: 'KZ'}, 
    {name: 'Kenya', code: 'KE'}, 
    {name: 'Kiribati', code: 'KI'}, 
    {name: 'Korea, Democratic People\'S Republic of', code: 'KP'}, 
    {name: 'Korea, Republic of', code: 'KR'}, 
    {name: 'Kuwait', code: 'KW'}, 
    {name: 'Kyrgyzstan', code: 'KG'}, 
    {name: 'Lao People\'S Democratic Republic', code: 'LA'}, 
    {name: 'Latvia', code: 'LV'}, 
    {name: 'Lebanon', code: 'LB'}, 
    {name: 'Lesotho', code: 'LS'}, 
    {name: 'Liberia', code: 'LR'}, 
    {name: 'Libyan Arab Jamahiriya', code: 'LY'}, 
    {name: 'Liechtenstein', code: 'LI'}, 
    {name: 'Lithuania', code: 'LT'}, 
    {name: 'Luxembourg', code: 'LU'}, 
    {name: 'Macao', code: 'MO'}, 
    {name: 'Macedonia, The Former Yugoslav Republic of', code: 'MK'}, 
    {name: 'Madagascar', code: 'MG'}, 
    {name: 'Malawi', code: 'MW'}, 
    {name: 'Malaysia', code: 'MY'}, 
    {name: 'Maldives', code: 'MV'}, 
    {name: 'Mali', code: 'ML'}, 
    {name: 'Malta', code: 'MT'}, 
    {name: 'Marshall Islands', code: 'MH'}, 
    {name: 'Martinique', code: 'MQ'}, 
    {name: 'Mauritania', code: 'MR'}, 
    {name: 'Mauritius', code: 'MU'}, 
    {name: 'Mayotte', code: 'YT'}, 
    {name: 'Mexico', code: 'MX'}, 
    {name: 'Micronesia, Federated States of', code: 'FM'}, 
    {name: 'Moldova, Republic of', code: 'MD'}, 
    {name: 'Monaco', code: 'MC'}, 
    {name: 'Mongolia', code: 'MN'}, 
    {name: 'Montserrat', code: 'MS'}, 
    {name: 'Morocco', code: 'MA'}, 
    {name: 'Mozambique', code: 'MZ'}, 
    {name: 'Myanmar', code: 'MM'}, 
    {name: 'Namibia', code: 'NA'}, 
    {name: 'Nauru', code: 'NR'}, 
    {name: 'Nepal', code: 'NP'}, 
    {name: 'Netherlands', code: 'NL'}, 
    {name: 'Netherlands Antilles', code: 'AN'}, 
    {name: 'New Caledonia', code: 'NC'}, 
    {name: 'New Zealand', code: 'NZ'}, 
    {name: 'Nicaragua', code: 'NI'}, 
    {name: 'Niger', code: 'NE'}, 
    {name: 'Nigeria', code: 'NG'}, 
    {name: 'Niue', code: 'NU'}, 
    {name: 'Norfolk Island', code: 'NF'}, 
    {name: 'Northern Mariana Islands', code: 'MP'}, 
    {name: 'Norway', code: 'NO'}, 
    {name: 'Oman', code: 'OM'}, 
    {name: 'Pakistan', code: 'PK'}, 
    {name: 'Palau', code: 'PW'}, 
    {name: 'Palestinian Territory, Occupied', code: 'PS'}, 
    {name: 'Panama', code: 'PA'}, 
    {name: 'Papua New Guinea', code: 'PG'}, 
    {name: 'Paraguay', code: 'PY'}, 
    {name: 'Peru', code: 'PE'}, 
    {name: 'Philippines', code: 'PH'}, 
    {name: 'Pitcairn', code: 'PN'}, 
    {name: 'Poland', code: 'PL'}, 
    {name: 'Portugal', code: 'PT'}, 
    {name: 'Puerto Rico', code: 'PR'}, 
    {name: 'Qatar', code: 'QA'}, 
    {name: 'Reunion', code: 'RE'}, 
    {name: 'Romania', code: 'RO'}, 
    {name: 'Russian Federation', code: 'RU'}, 
    {name: 'RWANDA', code: 'RW'}, 
    {name: 'Saint Helena', code: 'SH'}, 
    {name: 'Saint Kitts and Nevis', code: 'KN'}, 
    {name: 'Saint Lucia', code: 'LC'}, 
    {name: 'Saint Pierre and Miquelon', code: 'PM'}, 
    {name: 'Saint Vincent and the Grenadines', code: 'VC'}, 
    {name: 'Samoa', code: 'WS'}, 
    {name: 'San Marino', code: 'SM'}, 
    {name: 'Sao Tome and Principe', code: 'ST'}, 
    {name: 'Saudi Arabia', code: 'SA'}, 
    {name: 'Senegal', code: 'SN'}, 
    {name: 'Serbia and Montenegro', code: 'CS'}, 
    {name: 'Seychelles', code: 'SC'}, 
    {name: 'Sierra Leone', code: 'SL'}, 
    {name: 'Singapore', code: 'SG'}, 
    {name: 'Slovakia', code: 'SK'}, 
    {name: 'Slovenia', code: 'SI'}, 
    {name: 'Solomon Islands', code: 'SB'}, 
    {name: 'Somalia', code: 'SO'}, 
    {name: 'South Africa', code: 'ZA'}, 
    {name: 'South Georgia and the South Sandwich Islands', code: 'GS'}, 
    {name: 'Spain', code: 'ES'}, 
    {name: 'Sri Lanka', code: 'LK'}, 
    {name: 'Sudan', code: 'SD'}, 
    {name: 'Suriname', code: 'SR'}, 
    {name: 'Svalbard and Jan Mayen', code: 'SJ'}, 
    {name: 'Swaziland', code: 'SZ'}, 
    {name: 'Sweden', code: 'SE'}, 
    {name: 'Switzerland', code: 'CH'}, 
    {name: 'Syrian Arab Republic', code: 'SY'}, 
    {name: 'Taiwan, Province of China', code: 'TW'}, 
    {name: 'Tajikistan', code: 'TJ'}, 
    {name: 'Tanzania, United Republic of', code: 'TZ'}, 
    {name: 'Thailand', code: 'TH'}, 
    {name: 'Timor-Leste', code: 'TL'}, 
    {name: 'Togo', code: 'TG'}, 
    {name: 'Tokelau', code: 'TK'}, 
    {name: 'Tonga', code: 'TO'}, 
    {name: 'Trinidad and Tobago', code: 'TT'}, 
    {name: 'Tunisia', code: 'TN'}, 
    {name: 'Turkey', code: 'TR'}, 
    {name: 'Turkmenistan', code: 'TM'}, 
    {name: 'Turks and Caicos Islands', code: 'TC'}, 
    {name: 'Tuvalu', code: 'TV'}, 
    {name: 'Uganda', code: 'UG'}, 
    {name: 'Ukraine', code: 'UA'}, 
    {name: 'United Arab Emirates', code: 'AE'}, 
    {name: 'United Kingdom', code: 'GB'}, 
    {name: 'United States', code: 'US'}, 
    {name: 'United States Minor Outlying Islands', code: 'UM'}, 
    {name: 'Uruguay', code: 'UY'}, 
    {name: 'Uzbekistan', code: 'UZ'}, 
    {name: 'Vanuatu', code: 'VU'}, 
    {name: 'Venezuela', code: 'VE'}, 
    {name: 'Viet Nam', code: 'VN'}, 
    {name: 'Virgin Islands, British', code: 'VG'}, 
    {name: 'Virgin Islands, U.S.', code: 'VI'}, 
    {name: 'Wallis and Futuna', code: 'WF'}, 
    {name: 'Western Sahara', code: 'EH'}, 
    {name: 'Yemen', code: 'YE'}, 
    {name: 'Zambia', code: 'ZM'}, 
    {name: 'Zimbabwe', code: 'ZW'} 
  ];

  $scope.selectedCountry = $scope.countryList[0];

  $scope.changeClickCountry = function(country) {
    $scope.selectedCountry = country;
  };

  $scope.clickUpload = function(event) {

    $scope.addInvoice();

    var modelData = [{
        invNo: $scope.invNo,
        invDate: $scope.invDate,
        invAmt: $scope.invAmt,
        custNum: $scope.custNum,
        country: $scope.selectedCountry.name,
        product: $scope.radio2,
        itemCost: $scope.itemCost,
        item:  $scope.selectedItem.value,
        fileList: $scope.fileList

    }];

    modelData.push(JSON.parse(localStorage.getItem('session')));
    localStorage.setItem('session', JSON.stringify(modelData));
    console.log(modelData);
  };

  function checkFile() {
    var returnIs = false;
    if($scope.files.length < 1) {
      returnIs = true;
      $('.thumbnail').addClass('required-input');
    }else {
      $('.thumbnail').removeClass('required-input');
    }

    if($scope.invNo === '' || $scope.invNo === undefined) {
      returnIs = true;
      $('input[name=invNo]').addClass('required-input');
    }else {
      $('input[name=invNo]').removeClass('required-input');
    }

    if($scope.invDate === '' || $scope.invDate === undefined) {
      returnIs = true;
      $('input[name=invDate]').addClass('required-input');
    }else {
      $('input[name=invDate]').removeClass('required-input');
    }

    if($scope.invAmt === '' || $scope.invAmt === undefined) {
      returnIs = true;
      $('input[name=invAmt]').addClass('required-input');
    }else {
      $('input[name=invAmt]').removeClass('required-input');
    }

    if($scope.custNum === '' || $scope.custNum === undefined) {
      returnIs = true;
      $('input[name=custNum]').addClass('required-input');
    }else {
      $('input[name=custNum]').removeClass('required-input');
    }

    if(!$("input[name='radio2']:checked").val()) {
      returnIs = true;
      $('#chooseProduct').removeClass('hide');
    } else {
      $('#chooseProduct').addClass('hidden');
    }

    if($scope.itemCost === '' || $scope.itemCost === undefined) {
      returnIs = true;
      $('input[name=itemCost]').addClass('required-input');
    }else {
      $('input[name=itemCost]').removeClass('required-input');
    }

    return returnIs;
  }

  $scope.clickToUpload = function() {
    if(!checkFile()) {
      $('#invoiceForm')[0].reset();
      $scope.addInvoice();
    }
  };
 
  $scope.addInvoice = function() {
    $scope.modelData.push({'invNo':$scope.invNo, 'invDate':$scope.invDate, 'invAmt':$scope.invAmt, 'custNum':$scope.custNum, 'country':$scope.selectedCountry.name, 'product':$scope.radio2, 'itemCost':$scope.itemCost, 'item':$scope.selectedItem.value, 'fileList': $scope.fileList[0].name});
    
    invNo='';
    invDate='';
    invAmt='';
    custNum='';
    selectedCountry='';
    radio2='';
    itemCost='';
    selectedItem='';
    fileList='';

    $scope.modelData.push(JSON.parse(localStorage.getItem('session')));
    localStorage.setItem('session', JSON.stringify($scope.modelData));
    console.log($scope.modelData);
  };

  $scope.removeInvoice = function(invNo) {
    var index = -1;
    var comArr = eval($scope.modelData);
    for(var i =0; i<comArr.length; i++) {
      if(comArr[i].invNo === invNo) {
        index = i;
        break;
      }

      if(index === -1) {
        alert("File deleted");
      }
      $scope.modelData.splice(index,1);
  }
 };

 // $scope.getInvoice = function(data) {
 //  if(data.invNo === $scope.modelData.selected.invNo) return 'edit';
 //  else return 'display';
 // }

 // $scope.editInvoice = function (data) {
 //    $scope.
 // };


// Upload starts here
  $scope.$watch('files', function () {
      $scope.upload($scope.files);
  });
  $scope.$watch('file', function () {
      if ($scope.file != null) {
          $scope.files = [$scope.file]; 
      }
  });

  $scope.upload = function (files,containNo) {
      if (files && files.length) {
          for (var i = 0; i < files.length; i++) {
            var file = files[i];
            if (!file.$error) {
              Upload.upload({
                  url: 'https://angular-file-upload-cors-srv.appspot.com/upload', //sample WS to upload files. It may take some time to upload files
                  data: {
                    //username: $scope.username,
                    file: file  
                  }
                  
              }).then(function (resp) {
                  $timeout(function() {
                    $scope.result = resp.data.result[0];
                    
                    if(containNo == 0){
                      $scope.files.push($scope.result);
                    }else{
                      $scope.files2.push($scope.result);
                    }
                    console.log($scope.files);
                    // push all files
                    $scope.fileList.push($scope.result); 
                  });
              }, function (resp) {
                if(resp.status > 0) {
                  $scope.errorMsg = resp.status + ': ' + resp.data;
                }
              }, function (evt) {

                   if(containNo == 0 ){
                    $scope.progressPercentage = parseInt(100.0 *
                      evt.loaded / evt.total);
                   }else if(containNo == 1){
                      $scope.progressPercentage2 = parseInt(100.0 *
                      evt.loaded / evt.total);
                   }
              });
            }
          }
      }
  };
  // upload ends here

  //Delete uploaded file
  $scope.clickDelete = function(idx) {
    $scope.files.splice(idx, 1);
  };

}]);