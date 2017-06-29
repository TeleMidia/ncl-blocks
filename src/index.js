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
  'header': 'h3 text-center breadcrumb page-header',
  'body': 'panel-body',
  'footer': 'panel-footer text-center ',
  'pageTitle': 'h3 text-center breadcrumb page-header',
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
  for (var i in _survey.pages) {
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
      if (!_blocksEditTask1Workspace.getAllBlocks().length) {
        insertRequiredErrorInBlocks(_survey.getQuestionByName('blocksEditTask1').idValue)
      }
      if (!_blocksEditTask2Workspace.getAllBlocks().length) {
        insertRequiredErrorInBlocks(_survey.getQuestionByName('blocksEditTask2').idValue)
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
        NclBlocks.calculateHeight(1, 60), _data.blocksIntro1aXml, true)
      NclBlocks.injectInDiv(_pathToBlockly, 'blocksIntro1b',
        NclBlocks.calculateHeight(1, 110), _data.blocksIntro1bXml, true)
      break
    case 'blocksIntro2':
      NclBlocks.injectInDiv(_pathToBlockly, 'blocksIntro2a',
        NclBlocks.calculateHeight(2, 100), _data.blocksIntro2aXml, true)
      NclBlocks.injectInDiv(_pathToBlockly, 'blocksIntro2b',
        NclBlocks.calculateHeight(3, 110), _data.blocksIntro2bXml, true)
      break
    case 'blocksIntro3':
      NclBlocks.injectInDiv(_pathToBlockly, 'blocksIntro3a',
        NclBlocks.calculateHeight(1, 140), _data.blocksIntro3aXml, true)
      NclBlocks.injectInDiv(_pathToBlockly, 'blocksIntro3b',
        NclBlocks.calculateHeight(3, 110), _data.blocksIntro3bXml, true)
      break
    case 'blocksIntro4':
      NclBlocks.injectInDiv(_pathToBlockly, 'blocksIntro4a',
        NclBlocks.calculateHeight(1, 130), _data.blocksIntro4aXml, true)
      NclBlocks.injectInDiv(_pathToBlockly, 'blocksIntro4b',
        NclBlocks.calculateHeight(3, 140), _data.blocksIntro4bXml, true)
      break
    case 'blocksReadTask1':
      NclBlocks.injectInDiv(_pathToBlockly, questionId,
        NclBlocks.calculateHeight(5, 145), _data.blocksReadTask1Xml, true)
      break
    case 'blocksReadTask2':
      NclBlocks.injectInDiv(_pathToBlockly, questionId,
        NclBlocks.calculateHeight(6, 145), _data.blocksReadTask2Xml, true)
      break
    case 'blocksEditTask1':
      _blocksEditTask1Workspace = NclBlocks.injectInDiv(_pathToBlockly,
        questionId, NclBlocks.calculateHeight(6, 145), _data.blocksReadTask2Xml, false, ['excludeResumePauseSet'])
      _blocksEditTask1Workspace.addChangeListener(saveblocksEditTask1Changes)
      break
    case 'blocksEditTask2':
      _blocksEditTask2Workspace = NclBlocks.injectInDiv(_pathToBlockly,
        questionId, NclBlocks.calculateHeight(6, 145), _data.blocksReadTask2Xml, false, ['excludeResumePauseSet'])
      _blocksEditTask2Workspace.addChangeListener(saveblocksEditTask2Changes)
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
var _blocksEditTask1Workspace
var _blocksEditTask2Workspace

function saveblocksEditTask1Changes (primaryEvent) {
  // save blocksEditTask1 change
  var savedJsonStr = _survey.getQuestionByName('blocksEditTask1Changes').value
  var jsonFromEvent = primaryEvent.toJson()
  var jsonToSave

  if (savedJsonStr == null) {
    jsonToSave = { 'changes': [] }
  } else {
    jsonToSave = JSON.parse(savedJsonStr)
  }
  jsonToSave.changes.push(jsonFromEvent)
  _survey.getQuestionByName('blocksEditTask1Changes').value = JSON.stringify(jsonToSave)

  // save blocksEditTask1 result
  var xml = Blockly.Xml.workspaceToDom(_blocksEditTask1Workspace)
  var xmlText = Blockly.Xml.domToText(xml)
  _survey.getQuestionByName('blocksEditTask1Result').value = xmlText
}

function saveblocksEditTask2Changes (primaryEvent) {
  // save blocksEditTask1 change
  var savedJsonStr = _survey.getQuestionByName('blocksEditTask2Changes').value
  var jsonFromEvent = primaryEvent.toJson()
  var jsonToSave

  if (savedJsonStr == null) {
    jsonToSave = { 'changes': [] }
  } else {
    jsonToSave = JSON.parse(savedJsonStr)
  }
  jsonToSave.changes.push(jsonFromEvent)
  _survey.getQuestionByName('blocksEditTask2Changes').value = JSON.stringify(jsonToSave)

  // save blocksEditTask1 result
  var xml = Blockly.Xml.workspaceToDom(_blocksEditTask2Workspace)
  var xmlText = Blockly.Xml.domToText(xml)
  _survey.getQuestionByName('blocksEditTask2Result').value = xmlText
}
