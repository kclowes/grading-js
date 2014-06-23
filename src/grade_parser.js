window.GradeParser = {

  getMovements: function () {
    var grades = [1, 2, 4, 3, 3, 4];
    var results = [];
    for (var i = 0; i < (grades.length - 1); i++) {
      var diff = grades[i + 1] - grades[i];
      if (diff > 0)
        results[results.length] = 'up';
      else if (diff < 0)
        results[results.length] = 'down';
      else if (diff == 0)
        results[results.length] = 'even';
    }
    console.log(results);

    var last_three_array = [results[results.length - 3], results[results.length - 2], results[results.length - 1]];
    console.log(last_three_array);

    var index = last_three_array.indexOf('up')
    console.log(index)

    if (results.length < 3)
      console.log('not enough data');
    else if (index === -1)
      console.log('in decline');
    else
      console.log('not in decline');
  }
};


$(document).ready(function () {
  window.GradeParser.getMovements();
});

