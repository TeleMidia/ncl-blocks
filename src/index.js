// ----------------------------------------
// nclblocks config
// ----------------------------------------

var _pathToBlockly = 'nclblocks/'

// ----------------------------------------
// survey config
// ----------------------------------------

Survey.surveyLocalization.locales['en'] = {
  requiredError: 'Por favor, responda a pergunta.',
  invalidEmail: 'Por favor, entre com um email valido.',
  progressText: 'Página {0} de {1}'
}
Survey.Survey.cssType = 'bootstrap'

var _survey = new Survey.Model(_data.surveyJSON)
var _surveyCss = {
  // root
  'root': 'h4 panel panel-default',
  'header': 'h3 text-center breadcrumb',
  'body': 'panel-body',
  'footer': 'panel-footer text-center ',
  'pageTitle': 'h3 text-center breadcrumb',
  // row
  'row': '',
  'question': { root: 'h4 panel-body panel panel-default', title: 'h4 breadcrumb' },
  'error': {
    'root': '',
    'icon': 'glyphicon glyphicon-exclamation-sign',
    'item': 'label label-danger'
  },
  'navigationButton': 'h4 btn btn-primary'
}

var _msgEmptyBlockTask = 'Por favor, preencha com blocos.'

// ----------------------------------------
// survey create
// ----------------------------------------

$('#surveyContainer').Survey({
  model: _survey,
  css: _surveyCss,
  onAfterRenderPage: onRenderPage,
  onAfterRenderQuestion: onRenderQuestion,
  onServerValidateQuestions: onValidateQuestions
})

// ----------------------------------------
// survey page jump
// ----------------------------------------

$('#complete-btn').click(function () {
  _survey.doComplete()
})
if ($('#surveyPageNo').length) {
  for (var i = 0; i < _survey.pages.length; i++) {
    $('<option />')
      .attr('value', i)
      .html(_survey.pages[i].name)
      .appendTo('#surveyPageNo')
  }
}
$('#surveyPageNo').change(function () {
  _survey.currentPageNo = this.value
})
$('#surveyPageNo').val(2).change()

// ----------------------------------------
// survey listeners
// ----------------------------------------

function insertRequiredErrorInBlocks (blockDivId) {
  var blockDivSelector = '#blockly_' + blockDivId
  var errorDivId = blockDivId + '_error'
  var errorDivSelector = '#' + errorDivId
  if (!$(errorDivSelector).length) {
    $(blockDivSelector).prepend("<div id='" + errorDivId + "' class='label label-danger'>" + _msgEmptyBlockTask + '</div>')
  }
}

function onValidateQuestions (survey, options) {
  switch (_survey.currentPage.name) {
    case 'concepts':
      if (!_conceptsTask2Workspace.getAllBlocks().length) {
        insertRequiredErrorInBlocks(_survey.getQuestionByName('conceptsTask2Blocks').idValue)
      }
      if (!_conceptsTask4Workspace.getAllBlocks().length) {
        insertRequiredErrorInBlocks(_survey.getQuestionByName('conceptsTask4Blocks').idValue)
      }
      return true
  }
  options.complete()
}

function onRenderPage (targetSurvey, pageAndHtml) {
  window.scrollTo(0, 0)
}

function onRenderQuestion (targetSurvey, questionAndHtml) {
  var questionId = questionAndHtml.question.idValue
  var questionName = questionAndHtml.question.name
  switch (questionName) {
    case 'conceptsBlocksIntro1':
      NclBlocks.injectInDiv(_pathToBlockly, questionId,
        NclBlocks.calculateHeight(3, 130), _data.conceptsBlocks1Xml, true)
      break
    case 'conceptsBlocksIntro2':
      NclBlocks.injectInDiv(_pathToBlockly, questionId,
        NclBlocks.calculateHeight(5, 140), _data.conceptsBlocks2Xml,
        true)
      break
    case 'conceptsBlocksIntro3':
      NclBlocks.injectInDiv(_pathToBlockly, questionId,
        NclBlocks.calculateHeight(6, 150), _data.conceptsBlocks3Xml, true)
      break
    case 'conceptsBlocksIntro4':
      NclBlocks.injectInDiv(_pathToBlockly, questionId,
        NclBlocks.calculateHeight(1, 80), _data.conceptsBlocks4Xml, true)
      break
    case 'conceptsTask1Blocks':
      NclBlocks.injectInDiv(_pathToBlockly, questionId,
        NclBlocks.calculateHeight(1, 80), _data.conceptsTask1Xml, true)
      break
    case 'conceptsTask2Blocks':
      _conceptsTask2Workspace = NclBlocks.injectInDiv(_pathToBlockly,
        questionId, '800px')
      _conceptsTask2Workspace.addChangeListener(saveConceptsTask2Changes)
      break
    case 'conceptsTask3Blocks':
      NclBlocks.injectInDiv(_pathToBlockly, questionId,
        NclBlocks.calculateHeight(1, 80), _data.conceptsTask3Xml, true)
      break
    case 'conceptsTask4Blocks':
      _conceptsTask4Workspace = NclBlocks.injectInDiv(_pathToBlockly,
        questionId, '800px')
      _conceptsTask4Workspace.addChangeListener(saveConceptsTask4Changes)
      break
    case 'nclCode1':
      $('#' + questionId).append(_data.nclCode1)
      SyntaxHighlighter.highlight()
      break
    case 'nclCode2':
      $('#' + questionId).append(_data.nclCode2)
      SyntaxHighlighter.highlight()
      break
  }
}
var _conceptsTask2Workspace
var _conceptsTask4Workspace

function saveConceptsTask2Changes (primaryEvent) {
  // save conceptsTask2 change
  var savedJsonStr = _survey.getQuestionByName('conceptsTask2Changes').value
  var jsonFromEvent = primaryEvent.toJson()
  var jsonToSave

  if (savedJsonStr == null) {
    jsonToSave = { 'changes': [] }
  } else {
    jsonToSave = JSON.parse(savedJsonStr)
  }
  jsonToSave.changes.push(jsonFromEvent)
  // console.log(jsonFromEvent);
  _survey.getQuestionByName('conceptsTask2Changes').value = JSON.stringify(jsonToSave)

  // save conceptsTask2 result
  var xml = Blockly.Xml.workspaceToDom(_conceptsTask2Workspace)
  // console.log(xml));
  var xmlText = Blockly.Xml.domToText(xml)
  _survey.getQuestionByName('conceptsTask2Result').value = xmlText
}

function saveConceptsTask4Changes (primaryEvent) {
  // save conceptsTask2 change
  var savedJsonStr = _survey.getQuestionByName('conceptsTask4Changes').value
  var jsonFromEvent = primaryEvent.toJson()
  var jsonToSave

  if (savedJsonStr == null) {
    jsonToSave = { 'changes': [] }
  } else {
    jsonToSave = JSON.parse(savedJsonStr)
  }
  jsonToSave.changes.push(jsonFromEvent)
  console.log(jsonFromEvent)
  _survey.getQuestionByName('conceptsTask4Changes').value = JSON.stringify(jsonToSave)

  // save conceptsTask2 result
  var xml = Blockly.Xml.workspaceToDom(_conceptsTask4Workspace)
  console.log(xml)
  var xmlText = Blockly.Xml.domToText(xml)
  _survey.getQuestionByName('conceptsTask4Result').value = xmlText
}
