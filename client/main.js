'use strict';

$(function() {
  var area = [];

  $('#answer').on('click', function() {

    var areaArray = $('#inputs').val();
    areaArray.split(' ').forEach(function(e) {
      var splitNum = e.substring(1, e.length - 1).split(',');
      area.push(parseInt(splitNum[0]) * parseInt(splitNum[1]));
      // console.log(splitNum[0] * splitNum[1]);
      // var total = $('#total')
      console.log(area);
    });
    printArea();
    $('#total').val(area);
  });
  function printArea() {
    area.forEach(function(e) {
      console.log(e);
      if (e % 2 === 0) {
        $('#evens').append('Area: ' + e + ' ').css('background-color', 'yellow').css('height', '200px').css('width', '200px');
      } else {
        $('#odds').append('Area: ' + e + ' ').css('background-color', 'red').css('height', '200px').css('width', '200px');
      }
    });
  }
});
