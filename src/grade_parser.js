window.GradeParser = {

  getMovements: function () {
    var grades = [1, 2, 3, 8];
    var results = [];
    for (var i = 0; i < (grades.length - 1); i++) {
      var diff = grades[i + 1] - grades[i];
      if (diff > 0)
        results[results.length] = 'up';
      else if (diff < 0)
        results[results.length] = 'down';
      else if (diff = 0)
        results[results.length] = 'even';
    }
    alert(results);
  }
};


$(document).ready(function () {
  window.GradeParser.getMovements();
});

