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
  'root': 'panel panel-default',
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
$('#surveyPageNo').val(3).change()

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
      if (!_blocksTask2Workspace.getAllBlocks().length) {
        insertRequiredErrorInBlocks(_survey.getQuestionByName('blocksTask2').idValue)
      }
      if (!_blocksTask4Workspace.getAllBlocks().length) {
        insertRequiredErrorInBlocks(_survey.getQuestionByName('blocksTask4').idValue)
      }
      return true
  }
  options.complete()
}

function onRenderPage (targetSurvey, pageAndHtml) {
  // window.scrollTo(0, 0)
}

function onRenderQuestion (targetSurvey, questionAndHtml) {
  var questionId = questionAndHtml.question.idValue
  var questionName = questionAndHtml.question.name
  switch (questionName) {
    case 'blocksIntro1':
      NclBlocks.injectInDiv(_pathToBlockly, 'blocksIntro1a',
        NclBlocks.calculateHeight(1, 80), _data.blocksIntro1aXml, true)
      NclBlocks.injectInDiv(_pathToBlockly, 'blocksIntro1b',
        NclBlocks.calculateHeight(1, 130), _data.blocksIntro1bXml, true)
      NclBlocks.injectInDiv(_pathToBlockly, 'blocksIntro1c',
        NclBlocks.calculateHeight(2, 130), _data.blocksIntro1cXml, true)
      NclBlocks.injectInDiv(_pathToBlockly, 'blocksIntro1d',
        NclBlocks.calculateHeight(1, 130), _data.blocksIntro1dXml, true)
      NclBlocks.injectInDiv(_pathToBlockly, 'blocksIntro1e',
        NclBlocks.calculateHeight(1, 130), _data.blocksIntro1eXml, true)
      break
    case 'blocksIntro2':
      NclBlocks.injectInDiv(_pathToBlockly, questionId,
        NclBlocks.calculateHeight(5, 140), _data.blocksIntro2Xml,
        true)
      break
    case 'blocksIntro3':
      NclBlocks.injectInDiv(_pathToBlockly, questionId,
        NclBlocks.calculateHeight(6, 150), _data.blocksIntro3Xml, true)
      break
    case 'blocksIntro4':
      NclBlocks.injectInDiv(_pathToBlockly, questionId,
        NclBlocks.calculateHeight(1, 80), _data.blocksIntro4Xml, true)
      break
    case 'blocksTask1':
      NclBlocks.injectInDiv(_pathToBlockly, questionId,
        NclBlocks.calculateHeight(1, 80), _data.blocksTask1Xml, true)
      break
    case 'blocksTask2':
      _blocksTask2Workspace = NclBlocks.injectInDiv(_pathToBlockly,
        questionId, '800px')
      _blocksTask2Workspace.addChangeListener(saveblocksTask2Changes)
      break
    case 'blocksTask3':
      NclBlocks.injectInDiv(_pathToBlockly, questionId,
        NclBlocks.calculateHeight(1, 80), _data.blocksTask3Xml, true)
      break
    case 'blocksTask4':
      _blocksTask4Workspace = NclBlocks.injectInDiv(_pathToBlockly,
        questionId, '800px')
      _blocksTask4Workspace.addChangeListener(saveblocksTask4Changes)
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
  window.scrollTo(0, 0)
}
var _blocksTask2Workspace
var _blocksTask4Workspace

function saveblocksTask2Changes (primaryEvent) {
  // save blocksTask2 change
  var savedJsonStr = _survey.getQuestionByName('blocksTask2Changes').value
  var jsonFromEvent = primaryEvent.toJson()
  var jsonToSave

  if (savedJsonStr == null) {
    jsonToSave = { 'changes': [] }
  } else {
    jsonToSave = JSON.parse(savedJsonStr)
  }
  jsonToSave.changes.push(jsonFromEvent)
  // console.log(jsonFromEvent);
  _survey.getQuestionByName('blocksTask2Changes').value = JSON.stringify(jsonToSave)

  // save blocksTask2 result
  var xml = Blockly.Xml.workspaceToDom(_blocksTask2Workspace)
  // console.log(xml));
  var xmlText = Blockly.Xml.domToText(xml)
  _survey.getQuestionByName('blocksTask2Result').value = xmlText
}

function saveblocksTask4Changes (primaryEvent) {
  // save blocksTask2 change
  var savedJsonStr = _survey.getQuestionByName('blocksTask4Changes').value
  var jsonFromEvent = primaryEvent.toJson()
  var jsonToSave

  if (savedJsonStr == null) {
    jsonToSave = { 'changes': [] }
  } else {
    jsonToSave = JSON.parse(savedJsonStr)
  }
  jsonToSave.changes.push(jsonFromEvent)
  console.log(jsonFromEvent)
  _survey.getQuestionByName('blocksTask4Changes').value = JSON.stringify(jsonToSave)

  // save blocksTask2 result
  var xml = Blockly.Xml.workspaceToDom(_blocksTask4Workspace)
  console.log(xml)
  var xmlText = Blockly.Xml.domToText(xml)
  _survey.getQuestionByName('blocksTask4Result').value = xmlText
}
