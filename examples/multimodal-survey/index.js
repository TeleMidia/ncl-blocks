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
  'pageTitle': 'h3 text-center bg-info page-header',
  // row
  'row': 'panel-body panel panel-default',
  'question': {
    root: '',
    title: 'h4 breadcrumb'
  },
  'error': {
    'root': '',
    'icon': 'glyphicon glyphicon-exclamation-sign',
    'item': 'label label-danger'
  },
  'navigationButton': 'h4 btn btn-primary'
}

$('#surveyContainer').Survey({
  model: _survey,
  css: _surveyCss,
  onServerValidateQuestions: onValidateQuestions,
  onAfterRenderQuestion: onRenderQuestion,
  onAfterRenderSurvey: onAfterRenderSurvey,
  onPartialSend: onPartialSend,
  onCurrentPageChanged: onCurrentPageChanged,
  onComplete: onComplete,
  onProcessHtml: onProcessHtml
})

// ----------------------------------------
// survey config - _userId
// ----------------------------------------

var _userId = Blockly.utils.genUid()
console.log(_userId)
_survey.getQuestionByName('userId').value = _userId

// ----------------------------------------
// survey config - markdown
// ----------------------------------------

var converter = new showdown.Converter()
_survey.onTextMarkdown.add(function (survey, options) {
  // convert the mardown text to html
  var str = converter.makeHtml(options.text)
  // remove root paragraphs <p></p>
  str = str.substring(3)
  str = str.substring(0, str.length - 4)
  // set html
  options.html = str
})

// ----------------------------------------
// survey config - page jump
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

// $('#surveyPageNo').val(1).change()
// $('#surveyPageNo').val(3).change()
// $('#surveyPageNo').val(5).change()
// $('#surveyPageNo').val(7).change()

// ----------------------------------------
// survey config - gsheets service
// ----------------------------------------

var _sendError = false
function sendResult () {
  var xhr = new XMLHttpRequest()
  xhr.open('POST', 'https://script.google.com/macros/s/AKfycby6MAbrVMRtBkt9mKqgMz77ciZA9-bikN4xFHKqzeRMZQ1W-dVN/exec')
  var dataStringify = JSON.stringify(_survey.data)
  xhr.responseType = 'text'
  xhr.onload = function () {
    if (xhr.readyState === xhr.DONE) {
      if (xhr.status === 200) {
        console.log('return ok')
        // console.log(xhr.responseText)
      }
    }
  }
  xhr.onerror = function () {
    _sendError = true
  }
  xhr.send(dataStringify)
}

// ----------------------------------------
// survey listeners variables
// ----------------------------------------

var _msgEmptyBlockTask = 'Por favor, edite os blocos.'
var _pathToBlockly = '../../src/'
var _blocksTask3Workspace
var _blocksTask3WorkspaceEdited = false
var _blocksTask4Workspace
var _blocksTask4WorkspaceEdited = false
var _pagesVisited = { intro: false, profile: false, concepts: false, conceptsFeedback: false, ncl: false, nclFeedback: false, html: false, htmlFeedback: false, comments: false }

// ----------------------------------------
// survey listeners
// ----------------------------------------

function onCurrentPageChanged (survey, options) {
  if (options.newCurrentPage.name === 'intro' && !_pagesVisited.intro) {
    _pagesVisited.intro = true
    console.log('intro')
    window.scroll(0, 0)
    console.log(survey.getQuestionByName('userId').value)
    survey.getQuestionByName('timeBeginIntro').value = Date().toLocaleString()
  } else if (options.newCurrentPage.name === 'profile' && !_pagesVisited.profile) {
    _pagesVisited.profile = true
    console.log('profile')
    window.scroll(0, 0)
    survey.getQuestionByName('timeBeginProfile').value = Date().toLocaleString()
  } else if (options.newCurrentPage.name === 'concepts' && !_pagesVisited.concepts) {
    _pagesVisited.concepts = true
    console.log('concepts')
    window.scroll(0, 0)
    survey.getQuestionByName('timeBeginConcepts').value = Date().toLocaleString()
  } else if (options.newCurrentPage.name === 'conceptsFeedback' && !_pagesVisited.conceptsFeedback) {
    _pagesVisited.conceptsFeedback = true
    console.log('conceptsFeedBack')
    window.scroll(0, 0)
    survey.getQuestionByName('timeBeginConceptsFeedback').value = Date().toLocaleString()
  } else if (options.newCurrentPage.name === 'ncl' && !_pagesVisited.ncl) {
    _pagesVisited.ncl = true
    console.log('ncl')
    window.scroll(0, 0)
    survey.getQuestionByName('timeBeginNCL').value = Date().toLocaleString()
    _survey.getQuestionByName('nclTask3Question').value = _data.nclTask2CCodeOnly
    _survey.getQuestionByName('nclTask4Question').value = _data.nclTask2CCodeOnly
  } else if (options.newCurrentPage.name === 'nclFeedback' && !_pagesVisited.nclFeedback) {
    _pagesVisited.nclFeedback = true
    console.log('nclFeedback')
    window.scroll(0, 0)
    survey.getQuestionByName('timeBeginNCLFeedback').value = Date().toLocaleString()
  } else if (options.newCurrentPage.name === 'html' && !_pagesVisited.html) {
    _pagesVisited.html = true
    console.log('html')
    window.scroll(0, 0)
    survey.getQuestionByName('timeBeginHTML').value = Date().toLocaleString()
    var code = _data.htmlTask2CodeCOnly.replace(/<&#47/, '</').replace('<&#47script>', '</script>')
    _survey.getQuestionByName('htmlTask3Question').value = code
    _survey.getQuestionByName('htmlTask4Question').value = code
  } else if (options.newCurrentPage.name === 'htmlFeedback' && !_pagesVisited.htmlFeedback) {
    _pagesVisited.htmlFeedback = true
    console.log('htmlFeedback')
    window.scroll(0, 0)
    survey.getQuestionByName('timeBeginHTMLFeedback').value = Date().toLocaleString()
  } else if (options.newCurrentPage.name === 'comments' && !_pagesVisited.comments) {
    _pagesVisited.comments = true
    console.log('comments')
    window.scroll(0, 0)
    survey.getQuestionByName('timeBeginComments').value = Date().toLocaleString()
  }
}

function onAfterRenderSurvey (survey) {
  survey.getQuestionByName('timeBeginSurvey').value = Date().toLocaleString()
  console.log(survey.getQuestionByName('timeBeginSurvey').value)
}

function addSurveyJsonUrl () {
  var json = JSON.stringify(_survey.data)
  // console.log('json=' + json)
  var blob = new Blob([json], { type: 'application/json' })
  var url = URL.createObjectURL(blob)
  var a = document.getElementById('a')
  if (a) {
    a.download = 'multimoda-survey' + '-' + _userId + '-' + _survey.getQuestionByName('profileName').value + '.json'
    a.href = url
  }
}

function onProcessHtml (s, o) {
  if (s.isCompleted && _sendError) {
    o.html += `<br> <div class='alert alert-danger' role='alert' style='text-align:center;'> Infelizmente, detectamos um problema ao enviar seus dados para nosso servidor. Por favor faça o download de seu resultado <a id='a' onclick='addSurveyJsonUrl()'>aqui</a> e envie para o e-mail alan@telemidia.puc-rio.br.</div>`
  }
}

function onComplete (survey) {
  console.log('onComplete')
  survey.getQuestionByName('timeEndSurvey').value = Date().toLocaleString()
  console.log(survey.getQuestionByName('timeEndSurvey').value)
  sendResult()
}

function onPartialSend (survey) {
  console.log('onPartialSend')
  sendResult()
}

function insertRequiredErrorInBlocks (blockDivId) {
  var blockDivSelector = '#blockly_' + blockDivId
  var errorDivId = blockDivId + '_error'
  var errorDivSelector = '#' + errorDivId

  if (!$(errorDivSelector).length) {
    $(blockDivSelector).prepend("<div id='" + errorDivId +
      "' class='label label-danger'>" + _msgEmptyBlockTask + '</div>')
  }
}

function onValidateQuestions (survey, options) {
  if (_survey.currentPage.name === 'concepts') {
    if (!_blocksTask3WorkspaceEdited) {
      insertRequiredErrorInBlocks(_survey.getQuestionByName('conceptsTask3')
        .idValue)
    }
    if (!_blocksTask4WorkspaceEdited) {
      insertRequiredErrorInBlocks(_survey.getQuestionByName('conceptsTask4')
        .idValue)
    }
    if (!_blocksTask3WorkspaceEdited || !_blocksTask4WorkspaceEdited) {
      return true
    }
  }
  options.complete()
}

function onRenderQuestion (targetSurvey, questionAndHtml) {
  var questionId = questionAndHtml.question.idValue
  var questionName = questionAndHtml.question.name
  var result

  switch (questionName) {
    case 'conceptsIntro1':
      NCLBlocks.injectInDiv(_pathToBlockly, 'conceptsIntro1A',
        NCLBlocks.calcHt(1, 110), _data.conceptsIntro1BlocksA, true)
      NCLBlocks.injectInDiv(_pathToBlockly, 'conceptsIntro1B',
        NCLBlocks.calcHt(3, 110), _data.conceptsIntro1BlocksB, true)
      break
    case 'conceptsIntro2':
      NCLBlocks.injectInDiv(_pathToBlockly, 'conceptsIntro2A',
        NCLBlocks.calcHt(1, 110), _data.conceptsIntro2BlocksA, true)
      NCLBlocks.injectInDiv(_pathToBlockly, 'conceptsIntro2B',
        NCLBlocks.calcHt(1, 110), _data.conceptsIntro2BlocksB, true)
      NCLBlocks.injectInDiv(_pathToBlockly, 'conceptsIntro2C',
        NCLBlocks.calcHt(3, 130), _data.conceptsIntro2BlocksC, true)
      break
    case 'conceptsIntro3':
      NCLBlocks.injectInDiv(_pathToBlockly, 'conceptsIntro3A',
        NCLBlocks.calcHt(2, 130), _data.conceptsIntro3BlocksA, true)
      NCLBlocks.injectInDiv(_pathToBlockly, 'conceptsIntro3B',
        NCLBlocks.calcHt(5, 110), _data.conceptsIntro3BlocksB, true)
      break
    case 'conceptsIntro4':
      NCLBlocks.injectInDiv(_pathToBlockly, 'conceptsIntro4A',
        NCLBlocks.calcHt(1, 130), _data.conceptsIntro4BlocksA, true)
      NCLBlocks.injectInDiv(_pathToBlockly, 'conceptsIntro4B',
        NCLBlocks.calcHt(4, 130), _data.conceptsIntro4BlocksB, true)
      break
    case 'conceptsTask1':
      NCLBlocks.injectInDiv(_pathToBlockly, questionId,
        NCLBlocks.calcHt(4, 135), _data.blocksTask1Xml, true)
      break
    case 'conceptsTask2':
      NCLBlocks.injectInDiv(_pathToBlockly, questionId,
        NCLBlocks.calcHt(5, 140), _data.blocksTask2Xml, true)
      break
    case 'conceptsTask3':
      if (_survey.getQuestionByName('conceptsTask3Changes').value) {
        // after first inject
        result = _survey.getQuestionByName('conceptsTask3Result').value
        // console.log(result)
        _blocksTask3Workspace = NCLBlocks.injectInDiv(_pathToBlockly,
          questionId, NCLBlocks.calcHt(7, 130), result, false, true, ['excludeResumePauseSet'])
        setTimeout(function () {
          _blocksTask3Workspace.addChangeListener(saveblocksTask3Changes)
        }, 500)
      } else {
        // first inject
        _blocksTask3Workspace = NCLBlocks.injectInDiv(_pathToBlockly,
          questionId, NCLBlocks.calcHt(7, 130), _data.blocksTask2Xml,
          false, true, ['excludeResumePauseSet'])
        _blocksTask3Workspace.addChangeListener(saveblocksTask3Changes)
      }
      break
    case 'conceptsTask4':
      if (_survey.getQuestionByName('conceptsTask4Changes').value) {
        // after first inject
        result = _survey.getQuestionByName('conceptsTask4Result').value
        // console.log(result)
        _blocksTask4Workspace = NCLBlocks.injectInDiv(_pathToBlockly,
          questionId, NCLBlocks.calcHt(7, 130), result, false, true, ['excludeResumePauseSet'])
        setTimeout(function () {
          _blocksTask4Workspace.addChangeListener(saveblocksTask4Changes)
        }, 500)
      } else {
        // first inject
        _blocksTask4Workspace = NCLBlocks.injectInDiv(_pathToBlockly,
          questionId, NCLBlocks.calcHt(7, 130), _data.blocksTask2Xml,
          false, true, ['excludeResumePauseSet'])
        _blocksTask4Workspace.addChangeListener(saveblocksTask4Changes)
      }
      break
    case 'nclIntro1':
      $('#nclIntro1CodeA').append(_data.nclIntro1CodeA)
      $('#nclIntro1CodeB').append(_data.nclIntro1CodeB)
      SyntaxHighlighter.highlight()
      break
    case 'nclIntro2':
      $('#nclIntro2CodeA').append(_data.nclIntro2CodeA)
      $('#nclIntro2CodeB').append(_data.nclIntro2CodeB)
      $('#nclIntro2CodeC').append(_data.nclIntro2CodeC)
      $('#nclIntro2CodeD').append(_data.nclIntro2CodeD)
      $('#nclIntro2CodeE').append(_data.nclIntro2CodeE)
      SyntaxHighlighter.highlight()
      break
    case 'nclIntro3':
      $('#nclIntro3CodeA').append(_data.nclIntro3CodeA)
      $('#nclIntro3CodeB').append(_data.nclIntro3CodeB)
      $('#nclIntro3CodeC').append(_data.nclIntro3CodeC)
      SyntaxHighlighter.highlight()
      break
    case 'nclIntro4':
      $('#nclIntro4CodeA').append(_data.nclIntro4CodeA)
      $('#nclIntro4CodeB').append(_data.nclIntro4CodeB)
      SyntaxHighlighter.highlight()
      break
    case 'nclTask1':
      $('#nclTask1Code').append(_data.nclTask1Code)
      SyntaxHighlighter.highlight()
      break
    case 'nclTask2':
      $('#nclTask2CodeA').append(_data.nclTask2CodeA)
      $('#nclTask2CodeB').append(_data.nclTask2CodeB)
      $('#nclTask2CodeC').append(_data.nclTask2CodeC)
      SyntaxHighlighter.highlight()
      break
    case 'htmlIntro1':
      $('#htmlIntro1CodeA').append(_data.htmlIntro1CodeA)
      $('#htmlIntro1CodeB').append(_data.htmlIntro1CodeB)
      SyntaxHighlighter.highlight()
      break
    case 'htmlIntro2':
      $('#htmlIntro2CodeA').append(_data.htmlIntro2CodeA)
      $('#htmlIntro2CodeB').append(_data.htmlIntro2CodeB)
      $('#htmlIntro2CodeC').append(_data.htmlIntro2CodeC)
      $('#htmlIntro2CodeD').append(_data.htmlIntro2CodeD)
      $('#htmlIntro2CodeE').append(_data.htmlIntro2CodeE)
      SyntaxHighlighter.highlight()
      break
    case 'htmlIntro3':
      $('#htmlIntro3CodeA').append(_data.htmlIntro3CodeA)
      $('#htmlIntro3CodeB').append(_data.htmlIntro3CodeB)
      $('#htmlIntro3CodeC').append(_data.htmlIntro3CodeC)
      SyntaxHighlighter.highlight()
      break
    case 'htmlIntro4':
      $('#htmlIntro4CodeA').append(_data.htmlIntro4CodeA)
      $('#htmlIntro4CodeB').append(_data.htmlIntro4CodeB)
      SyntaxHighlighter.highlight()
      break
    case 'htmlTask1':
      $('#htmlTask1CodeA').append(_data.htmlTask1CodeA)
      SyntaxHighlighter.highlight()
      break
    case 'htmlTask2':
      $('#htmlTask2CodeA').append(_data.nclTask2CodeA)
      $('#htmlTask2CodeB').append(_data.nclTask2CodeB)
      $('#htmlTask2CodeC').append(_data.htmlTask2CodeC)
      SyntaxHighlighter.highlight()
      break
  }
}

function saveblocksTask3Changes (event) {
  _blocksTask3WorkspaceEdited = true

  // save change
  var savedJsonStr = _survey.getQuestionByName('conceptsTask3Changes').value
  var jsonFromEvent = event.toJson()
  jsonFromEvent.time = Date().toLocaleString()
  var jsonToSave
  if (savedJsonStr == null) {
    jsonToSave = { 'changes': [] }
  } else {
    jsonToSave = JSON.parse(savedJsonStr)
  } jsonToSave.changes.push(jsonFromEvent)
  _survey.getQuestionByName('conceptsTask3Changes').value =
    JSON.stringify(jsonToSave)

  // save blocksTask3 result
  var xml = Blockly.Xml.workspaceToDom(_blocksTask3Workspace)
  var xmlText = Blockly.Xml.domToText(xml)
  _survey.getQuestionByName('conceptsTask3Result').value = xmlText
}

function saveblocksTask4Changes (event) {
  _blocksTask4WorkspaceEdited = true

  // save change
  var savedJsonStr = _survey.getQuestionByName('conceptsTask4Changes').value
  var jsonFromEvent = event.toJson()
  jsonFromEvent.time = Date().toLocaleString()
  var jsonToSave
  if (savedJsonStr == null) {
    jsonToSave = { 'changes': [] }
  } else {
    jsonToSave = JSON.parse(savedJsonStr)
  }
  jsonToSave.changes.push(jsonFromEvent)
  _survey.getQuestionByName('conceptsTask4Changes').value =
    JSON.stringify(jsonToSave)

  // save blocksTask4 result
  var xml = Blockly.Xml.workspaceToDom(_blocksTask4Workspace)
  var xmlText = Blockly.Xml.domToText(xml)
  _survey.getQuestionByName('conceptsTask4Result').value = xmlText
}
