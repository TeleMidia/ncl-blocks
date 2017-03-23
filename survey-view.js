Survey.Survey.cssType = "bootstrap";

var survey = new Survey.Model({
  surveyId: '59bd2657-93ac-492c-8dd5-134a10ebd69a',
  surveyPostId: '51d57b85-3813-4a08-801b-4b7e077c1660'
});
var surveySendResult = function (s, options) {
  if (options.success) {
    s.getResult('bf1df79f-73e6-4d6c-9cc9-9186eb7c65ea',
      'langs');
  }
};
var surveyGetResult = function (s, options) {
  if (options.success) {
    showChart(options.dataList);
  }
};

function showChart(chartDataSource) {
  document.getElementById("chartContainer").style.height = "500px";
  $("#chartContainer").dxPieChart({
    dataSource: chartDataSource,
    series: {
      argumentField: 'name',
      valueField: 'value'
    }
  });
}

function showResult(survey) {
  var resultAsString = JSON.stringify(survey.data);
  alert(resultAsString);
}
$("#surveyContainer").Survey({
  model: survey,
  onSendResult: surveySendResult,
  onGetResult: surveyGetResult,
  onComplete: showResult
});