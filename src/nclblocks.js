goog.require('Blockly.Blocks')

NCLBlocks = {}

// ----------------------------------------
// Types
// ----------------------------------------

NCLBlocks.Types = {
  NODE: 'node',
  MEDIA: 'media',
  MEDIA_SRC: 'media_src',
  INPUT: 'input',
  INPUT_SRC: 'input_src',
  USER: 'user',
  USER_DEVICE: 'user_device',
  LINK: 'link',
  CONDITION: 'condition',
  ACTION: 'action'
}

// ----------------------------------------
// Messsages
// ----------------------------------------

NCLBlocks.Msg = {}
NCLBlocks.Msg.AND = 'e'
NCLBlocks.Msg.BODY = 'app'
NCLBlocks.Msg.PORT = 'início da app'
NCLBlocks.Msg.PORT_LABEL = 'ao começar a aplicação inicie'
NCLBlocks.Msg.MEDIA = 'Mídia'
NCLBlocks.Msg.SRC = 'conteúdo'
NCLBlocks.Msg.MEDIAS = 'mídias'
NCLBlocks.Msg.INPUT = 'Reconhecedor'
NCLBlocks.Msg.INPUTS = 'reconhecedores'
NCLBlocks.Msg.VIDEO = 'arquivo de vídeo'
NCLBlocks.Msg.PORTION = 'trecho'
NCLBlocks.Msg.ANCHOR_BEGIN = 'tem inicio'
NCLBlocks.Msg.ANCHOR_END = 'e fim'
NCLBlocks.Msg.AUDIO = 'arquivo de áudio'
NCLBlocks.Msg.IMAGE = 'arquivo de imagem'
NCLBlocks.Msg.SSML = 'descrição de sintetização de voz'
NCLBlocks.Msg.SSML_ANCHOR = 'sintetiza frase'
NCLBlocks.Msg.SRGS = 'descrição de reconhecimento de voz'
NCLBlocks.Msg.SRGS_ANCHOR = 'reconhece frase'
NCLBlocks.Msg.HAND_GESTURE = 'descrição de reconheciemto de gestos'
NCLBlocks.Msg.HAND_GESTURE_ANCHOR = 'reconhece gesto de mão'
NCLBlocks.Msg.HAND_UP = 'cima'
NCLBlocks.Msg.HAND_DOWN = 'baixo'
NCLBlocks.Msg.HAND_LEFT = 'esquerda'
NCLBlocks.Msg.HAND_RIGHT = 'direita'
NCLBlocks.Msg.LINK = 'Relacionamento'
NCLBlocks.Msg.LINKS = 'sincronismos'
NCLBlocks.Msg.WHEN = 'quando'
NCLBlocks.Msg.DO = 'faça'
NCLBlocks.Msg.USER = 'Grupo de Usuários'
NCLBlocks.Msg.USERS = 'usuários'
NCLBlocks.Msg.USERCLASS = 'Grupo de Usuários'
NCLBlocks.Msg.MAX_USERS = 'máximo de ususários'
NCLBlocks.Msg.DEVICE = 'dispositivo'
NCLBlocks.Msg.WITH_DEVICE = 'utilizam dispositivo'
NCLBlocks.Msg.DEVICES = 'dispositivos'
NCLBlocks.Msg.LEAP = 'sensor de gestos de mão'
NCLBlocks.Msg.MICROFONE = 'microfone'
NCLBlocks.Msg.CONDITION = 'condição'
NCLBlocks.Msg.CONDITION_SIMPLE = 'condição simples'
NCLBlocks.Msg.CONDITIONS = 'Relacionamento - condições'
NCLBlocks.Msg.ONBEGIN = 'for iniciado'
NCLBlocks.Msg.ONEND = 'for terminado'
NCLBlocks.Msg.ONPAUSE = 'for pausado'
NCLBlocks.Msg.ONRESUME = 'for resumido'
NCLBlocks.Msg.ONSELECTION = 'for selecionado'
NCLBlocks.Msg.ONRECOGNIZE = 'for reconhecido'
NCLBlocks.Msg.ONRECOGNIZE_FROM_USER = 'for reconhecido dado usuário'
// NCLBlocks.Msg.COMPOUND_CONDITION_SEQ = 'em sequencia'
// NCLBlocks.Msg.COMPOUND_CONDITION_AND = 'todos entre'
// NCLBlocks.Msg.COMPOUND_CONDITION_OR = 'um entre'
NCLBlocks.Msg.COMPOUND_CONDITION_OR = 'OR'
NCLBlocks.Msg.COMPOUND_CONDITION_AND = 'AND'
NCLBlocks.Msg.COMPOUND_CONDITION_SEQ = 'SEQ'
NCLBlocks.Msg.ACTION = 'ação'
NCLBlocks.Msg.ACTIONS = 'Relacionamento - ações'
NCLBlocks.Msg.START = 'inicie'
NCLBlocks.Msg.STOP = 'termine'
NCLBlocks.Msg.PAUSE = 'pause'
NCLBlocks.Msg.RESUME = 'resuma'
NCLBlocks.Msg.SET = 'atribua'
NCLBlocks.Msg.SET_TO = 'com valor'

// ----------------------------------------
// Icons
// ----------------------------------------

NCLBlocks.Icons = {}
NCLBlocks.Icons.CONTEXT = 'media/ncl/icon-context.png'
NCLBlocks.Icons.MEDIA = 'media/ncl/icon-media.png'
NCLBlocks.Icons.VIDEO = 'media/ncl/icon-media-video.png'
NCLBlocks.Icons.IMAGE = 'media/ncl/icon-media-image.png'
NCLBlocks.Icons.AUDIO = 'media/ncl/icon-media-audio.png'
NCLBlocks.Icons.INPUT = 'media/ncl/icon-recognition.png'
NCLBlocks.Icons.SSML = 'media/ncl/ssml.png'
NCLBlocks.Icons.SRGS = 'media/ncl/srgs.png'
NCLBlocks.Icons.HAND_GESTURE = 'media/ncl/hand-gesture.png'
NCLBlocks.Icons.HAND_GESTURE_SCROLL_DOWN = 'media/ncl/gesture_scroll_down.png'
NCLBlocks.Icons.HAND_GESTURE_SCROLL_UP = 'media/ncl/gesture_scroll_up.png'
NCLBlocks.Icons.HAND_GESTURE_SWIPE_LEFT = 'media/ncl/gesture_swipe_left.png'
NCLBlocks.Icons.HAND_GESTURE_SWIPE_RIGHT = 'media/ncl/gesture_swipe_right.png'
NCLBlocks.Icons.PORT = 'media/ncl/icon-link.png'
NCLBlocks.Icons.LINK = 'media/ncl/icon-link.png'
NCLBlocks.Icons.USER = 'media/ncl/icon-user-class.png'
NCLBlocks.Icons.HAND_GESTURE_SENSOR = 'media/ncl/hand-gesture-sensor.png'
NCLBlocks.Icons.MICROFONE = 'media/ncl/headset.png'
NCLBlocks.Icons.ONRECOGNIZE = 'media/ncl/icon-recognition.png'
NCLBlocks.Icons.ONBEGIN = 'media/ncl/icon-bind-onbegin.png'
NCLBlocks.Icons.ONEND = 'media/ncl/icon-bind-onend.png'
NCLBlocks.Icons.ONPAUSE = 'media/ncl/icon-bind-onpause.png'
NCLBlocks.Icons.ONRESUME = 'media/ncl/icon-bind-onresume.png'
NCLBlocks.Icons.ONSELECTION = 'media/ncl/icon-bind-onselection.png'
NCLBlocks.Icons.START = 'media/ncl/icon-bind-start.png'
NCLBlocks.Icons.STOP = 'media/ncl/icon-bind-stop.png'
NCLBlocks.Icons.PAUSE = 'media/ncl/icon-bind-pause.png'
NCLBlocks.Icons.RESUME = 'media/ncl/icon-bind-resume.png'
NCLBlocks.Icons.SET = 'media/ncl/icon-bind-set.png'

// ----------------------------------------
// Colours
// ----------------------------------------

NCLBlocks.Colours = {}
NCLBlocks.Colours.BODY = 20
NCLBlocks.Colours.MEDIA = 100
NCLBlocks.Colours.INPUT = 150
NCLBlocks.Colours.USER = 40
NCLBlocks.Colours.LINK = 260
NCLBlocks.Colours.PORT = 260
NCLBlocks.Colours.CONDITION = 280
NCLBlocks.Colours.ACTION = 225

// ----------------------------------------
// default toolbox
// ----------------------------------------

NCLBlocks.getDefaultToolboxXML = function (toolboxOptions) {
  var excludeRecognition = !!toolboxOptions.includes('excludeRecognition')
  var excludeResumePauseSet = !!toolboxOptions.includes('excludeResumePauseSet')
  var ret = `<xml id="toolbox" style="display: none">`
  ret += `<category name="` + NCLBlocks.Msg.MEDIA + `">`
  ret += `  <block type="media"></block>`
  ret += `  <block type="image"></block>`
  ret += `  <block type="audio"></block>`
  ret += `  <block type="video"></block>`
  ret += `  <block type="ssml"></block>`
  ret += `</category>`
  if (!excludeRecognition) {
    ret += `<category name="` + NCLBlocks.Msg.INPUT + `">`
    ret += `  <block type="input"></block>`
    ret += `  <block type="srgs"></block>`
    ret += `  <block type="hand_gesture"></block>`
    ret += `</category>`
    ret += `<category name="` + NCLBlocks.Msg.USER + `">`
    ret += `  <block type="user"></block>`
    ret += `  <block type="headset"></block>`
    ret += `  <block type="hand_gesture_sensor"></block>`
    ret += `</category>`
  }
  ret += `<category name="` + NCLBlocks.Msg.LINK + `">`
  ret += `  <block type="port"></block>`
  ret += `  <block type="link"></block>`
  ret += `</category>`
  ret += `<category name="` + NCLBlocks.Msg.CONDITIONS + `">`
  ret += `  <block type="onbegin"></block>`
  ret += `  <block type="onselection"></block>`
  ret += `  <block type="onend"></block>`
  if (!excludeResumePauseSet) {
    ret += `  <block type="onpause"></block>`
    ret += `  <block type="onresume"></block>`
  }
  if (!excludeRecognition) {
    ret += `  <block type="onrecognize"></block>`
    ret += `  <block type="onrecognizeuser"></block>`
  }
  ret += `  <block type="compoundcondition"></block>`
  ret += `</category>`
  ret += `<category name="` + NCLBlocks.Msg.ACTIONS + `">`
  ret += `  <block type="start"></block>`
  ret += `  <block type="stop"></block>`
  if (!excludeResumePauseSet) {
    ret += `  <block type="pause"></block>`
    ret += `  <block type="resume"></block>`
    ret += `  <block type="set"></block>`
  }
  ret += `</category>`
  ret += `</xml>`
  return ret
}
NCLBlocks.START_WORKSPACE_WITH_BODY =
  `<xml id="startBlocks" style="display: none">
    <block type="body" inline="false" x="20" y="20"></block>
    </xml>`

// ----------------------------------------
// flags functions
// ----------------------------------------

Blockly.BlockSvg.START_HAT = true
NCLBlocks.USE_BODY = false
NCLBlocks.USE_CHECK = false

NCLBlocks.enableBody = function () {
  Blockly.BlockSvg.START_HAT = false
  NCLBlocks.USE_BODY = true
}
NCLBlocks.disableBody = function () {
  Blockly.BlockSvg.START_HAT = true
  NCLBlocks.USE_BODY = false
}
NCLBlocks.enableTypeCheck = function () {
  NCLBlocks.USE_CHECK = true
}
NCLBlocks.disableTypeCheck = function () {
  NCLBlocks.USE_CHECK = false
}

// ----------------------------------------
// xml blocks functions
// ----------------------------------------

NCLBlocks.calcHt = function (numBlocks, oneBlockHeight) {
  return 20 * (1 + numBlocks) + oneBlockHeight * numBlocks + 'px'
}

NCLBlocks.alignTwoColumnsInXML = function (xml) {
  var replaceXY = function (match, p1, p2) {
    var x = p1
    var y = p2
    if (p1 < 300) { // first column
      x = 20
    } else { // second column
      x = 550
    }
    return 'x="' + x + '" y="' + y + '"'
  }
  var xmlAligned = xml.replace(/x="(-?[0-9]*)"\sy="(-?[0-9]*)"/g, replaceXY)
  return xmlAligned
}

NCLBlocks.moveLeftBlocksInXML = function (xml) {
  var replaceXY = function (match, p1, p2) {
    var x = p1
    var y = p2
    return 'x="' + (parseInt(x) - 20) + '" y="' + y + '"'
  }
  var xmlAligned = xml.replace(/x="(-?[0-9]*)"\sy="(-?[0-9]*)"/g, replaceXY)
  return xmlAligned
}

NCLBlocks.moveRightBlocksInXML = function (xml) {
  var replaceXY = function (match, p1, p2) {
    var x = p1
    var y = p2
    return 'x="' + (parseInt(x) + 20) + '" y="' + y + '"'
  }
  var xmlAligned = xml.replace(/x="(-?[0-9]*)"\sy="(-?[0-9]*)"/g, replaceXY)
  return xmlAligned
}

NCLBlocks.moveUpBlocksInXML = function (xml) {
  var replaceXY = function (match, p1, p2) {
    var x = p1
    var y = p2
    return 'x="' + x + '" y="' + (parseInt(y) - 20) + '"'
  }
  var xmlAligned = xml.replace(/x="(-?[0-9]*)"\sy="(-?[0-9]*)"/g, replaceXY)
  return xmlAligned
}

NCLBlocks.moveDownBlocksInXML = function (xml) {
  var replaceXY = function (match, p1, p2) {
    var x = p1
    var y = p2
    return 'x="' + x + '" y="' + (parseInt(y) + 20) + '"'
  }
  var xmlAligned = xml.replace(/x="(-?[0-9]*)"\sy="(-?[0-9]*)"/g, replaceXY)
  return xmlAligned
}

// ----------------------------------------
// block inject function
// ----------------------------------------

var _updateMediaIcons = true

/**
 * @brief Inject a NCLBlocks workspace at the end of a div.
 * @param {string} pathToBlockly path to NCLBlocks folder.
 * @param {string} parendDivId div to inject into
 * @param {string} height hight of injected the workspace
 * @param {string=} workspaceXml initial blocks in the workspace
 * @param {string=} isReadOnly worpsace withouth toolbox and read only
 * @param {string=} isResizible enable zoom and scrooll bars
 * @param {string=} toolboxOptions configure toolbox
 */

NCLBlocks.injectInDiv = function (pathToBlockly, parendDivId, height,
  workspaceXml = '', isReadOnly = false, isResizible = true, toolboxOptions =
  []) {
  var injectDivName = 'blockly_' + parendDivId
  var workspace

  Blockly.pathToBlockly = pathToBlockly || './'
  if (_updateMediaIcons) {
    for (var i in NCLBlocks.Icons) {
      NCLBlocks.Icons[i] = Blockly.pathToBlockly + NCLBlocks.Icons[i]
    }
    _updateMediaIcons = false
  }

  // create div and configure auto resize
  var blocklyArea = document.getElementById(parendDivId)
  var htmlToInsert = '<div id=' + injectDivName +
    " class='center-block' style='height: " + height + ";'></div>"
  blocklyArea.innerHTML += htmlToInsert
  var padding = window.getComputedStyle(blocklyArea, null)
    .getPropertyValue('padding-right')
  var blocklyDiv = document.getElementById(injectDivName)
  var onresize = function (e) {
    var element = blocklyArea
    var x = 0
    var y = 0
    do {
      x += element.offsetLeft
      y += element.offsetTop
      element = element.offsetParent
    } while (element)
    blocklyDiv.style.left = x + 'px'
    blocklyDiv.style.top = y + 'px'
    blocklyDiv.style.width = blocklyArea.offsetWidth - 2 * padding + 'px'
  }
  window.addEventListener('resize', onresize, false)

  // inject
  console.log(toolboxOptions.length)
  workspace = Blockly.inject(injectDivName, {
    media: Blockly.pathToBlockly + 'media/',
    toolbox: toolboxOptions.length ? NCLBlocks.getDefaultToolboxXML(toolboxOptions) : false,
    zoom: { controls: isResizible },
    scrollbars: isResizible,
    readOnly: isReadOnly,
    sounds: true
  })

  if (NCLBlocks.USE_BODY) {
    workspaceXml = NCLBlocks.START_WORKSPACE_WITH_BODY
  }
  Blockly.Xml.domToWorkspace(Blockly.Xml.textToDom(workspaceXml), workspace)

  onresize()
  Blockly.svgResize(workspace)

  return workspace
}

// ----------------------------------------
// FieldTextButton
// ----------------------------------------

var FieldTextButton = function (inputname, buttontext, changeHandler) {
  FieldTextButton.superClass_.constructor.call(this, inputname)
  this.buttontext_ = buttontext
  this.changeHandler_ = changeHandler
  this.setText(buttontext)
}

goog.inherits(FieldTextButton, Blockly.Field)

FieldTextButton.prototype.clone = function () {
  return new FieldTextButton(this.buttontext_, this.changeHandler_)
}

FieldTextButton.prototype.CURSOR = 'default'

FieldTextButton.prototype.showEditor_ = function () {
  if (this.changeHandler_) {
    this.changeHandler_()
  }
}

// ----------------------------------------
// InputStackMixin
// ----------------------------------------

var InputStackMixin = {
  isInputValue: false,

  pushInput: function () {
    var oldMutationDom = this.mutationToDom()
    var oldMutation = Blockly.Xml.domToText(oldMutationDom)
    var newInput

    // append element
    var newIndex = this.stackSize
    if (this.isInputValue) {
      newInput = this.appendValueInput('element_' + newIndex)
    } else {
      newInput = this.appendDummyInput('element_' + newIndex)
    }
    this.configureNewInput(newInput, newIndex)
    this.moveInputBefore(newInput.name, 'edit')
    this.stackSize++
    // fire mutation event
    var newMutationDom = this.mutationToDom()
    var newMutation = Blockly.Xml.domToText(newMutationDom)
    Blockly.Events.fire(new Blockly.Events.Change(
      this, 'mutation', null, oldMutation, newMutation))

    return newInput
  },

  popInput: function () {
    var oldMutationDom = this.mutationToDom()
    var oldMutation = Blockly.Xml.domToText(oldMutationDom)

    if (this.stackSize <= 0) return
    var rmIndex = this.stackSize - 1
    var inputNameToDelete = 'element_' + rmIndex
    var subStructure = this.getInputTargetBlock(inputNameToDelete)
    if (subStructure) subStructure.outputConnection.disconnect()
    this.removeInput(inputNameToDelete)
    this.stackSize--

    // fire mutation event
    var newMutationDom = this.mutationToDom()
    var newMutation = Blockly.Xml.domToText(newMutationDom)
    Blockly.Events.fire(new Blockly.Events.Change(
      this, 'mutation', null, oldMutation, newMutation))
  },

  mutationToDom: function () {
    var container = document.createElement('mutation')
    container.setAttribute('length', this.stackSize)
    return container
  },

  domToMutation: function (xmlElement) {
    var newLength = xmlElement.getAttribute('length')
    var i
    var diff = parseInt(newLength - this.stackSize)
    if (diff > 0) {
      for (i = 0; i < diff; i++) {
        this.pushInput()
      }
    } else {
      diff = Math.abs(diff)
      for (i = 0; i < diff; i++) this.popInput()
    }
  },

  addMinusPlusDummyInput: function () {
    this.appendDummyInput('edit')
      .appendField(new FieldTextButton('minus', '–', function () {
        this.sourceBlock_.popInput()
      }))
      .appendField(new FieldTextButton('plus', '+', function () {
        this.sourceBlock_.pushInput()
      }))
  }
}

// ----------------------------------------
// NclBlockMixin
// ----------------------------------------

var NclBlockMixin = {
  initShared: function () {
    this.contextMenu = false
    this.setInputsInline(false)
  },
  initAsMedia: function (isSRC = false) {
    this.initShared()
    this.setColour(NCLBlocks.Colours.MEDIA)
    if (isSRC) {
      this.setOutput(true,
        NCLBlocks.USE_CHECK ? NCLBlocks.Types.MEDIA_SRC : null)
    } else if (NCLBlocks.USE_BODY === true) {
      this.setOutput(true, NCLBlocks.Types.MEDIA)
    }
  },
  initAsInput: function (isSRC = false) {
    this.initShared()
    this.setColour(NCLBlocks.Colours.INPUT)
    if (isSRC) {
      this.setOutput(true,
        NCLBlocks.USE_CHECK ? NCLBlocks.Types.INPUT_SRC : null)
    } else if (NCLBlocks.USE_BODY === true) {
      this.setOutput(true, NCLBlocks.Types.INPUT)
    }
  },
  initAsUser: function (isSRC = false) {
    this.initShared()
    this.setColour(NCLBlocks.Colours.USER)
    if (isSRC) {
      this.setOutput(true,
        NCLBlocks.USE_CHECK ? NCLBlocks.Types.USER_SRC : null)
    } else if (NCLBlocks.USE_BODY === true) {
      this.setOutput(true, NCLBlocks.Types.USER)
    }
  },
  initAsLink: function () {
    this.initShared()
    this.setColour(NCLBlocks.Colours.LINK)
    if (NCLBlocks.USE_BODY === true) this.setOutput(true, NCLBlocks.Types.LINK)
  },
  initAsCondition: function () {
    this.initShared()
    this.setColour(NCLBlocks.Colours.CONDITION)
    this.setOutput(true,
      NCLBlocks.USE_CHECK ? NCLBlocks.Types.CONDITION : null)
  },
  initAsAction: function () {
    this.initShared()
    this.setColour(NCLBlocks.Colours.ACTION)
    this.setPreviousStatement(true, NCLBlocks.USE_CHECK
      ? NCLBlocks.Types.ACTION : null)
    this.setNextStatement(true,
      NCLBlocks.USE_CHECK ? NCLBlocks.Types.ACTION : null)
  }
}

// ----------------------------------------
// createIdArrays function
// ----------------------------------------

var NclIdHandlerMixin = {
  createIdArrays: function () {
    if (this.sourceBlock_ && !this.sourceBlock_.workspace.idArraysFlag) {
      this.sourceBlock_.workspace.idArrayMedia = [['-', '-']]
      this.sourceBlock_.workspace.idArrayInput = [['-', '-']]
      this.sourceBlock_.workspace.idArrayUser = [['-', '-']]
      this.sourceBlock_.workspace.idArraysFlag = true
    }
    if (this.idType === NCLBlocks.Types.MEDIA) {
      this.idArray = this.sourceBlock_.workspace.idArrayMedia
    } else if (this.idType === NCLBlocks.Types.INPUT) {
      this.idArray = this.sourceBlock_.workspace.idArrayInput
    } else if (this.idType === NCLBlocks.Types.USER) {
      this.idArray = this.sourceBlock_.workspace.idArrayUser
    }
  }
}

// ----------------------------------------
// IdFieldDropdown
// ----------------------------------------

/**
 * @constructor
 * @param {string} idType = media | input | user | node
 */

var IdFieldDropdown = function (idType) {
  this.idType = idType
  var menuGenerator = null
  menuGenerator = this.getIdArray
  IdFieldDropdown.superClass_.constructor.call(this, menuGenerator)
}
goog.inherits(IdFieldDropdown, Blockly.FieldDropdown)
Object.assign(IdFieldDropdown.prototype, NclIdHandlerMixin)

IdFieldDropdown.prototype.getIdArray = function () {
  // at toolbox
  if (!this.sourceBlock_) return [['-', '-']]
  // at workspace
  this.createIdArrays()
  if (this.idType === NCLBlocks.Types.NODE) {
    var medias = this.sourceBlock_.workspace.idArrayMedia
    var inputs = this.sourceBlock_.workspace.idArrayInput
    var ret = medias.concat(inputs).sort()
    if (ret[1][0] === '-') ret.splice(1, 1)
    return ret
  }
  return this.idArray
}

// ----------------------------------------
// IdFieldText
// ----------------------------------------

/**
 * @constructor
 * @param {string} idType = media | input | user
 */

var IdFieldText = function (text, idType) {
  this.idType = idType
  IdFieldText.superClass_.constructor.call(this, text,
    this.validateId)
}
goog.inherits(IdFieldText, Blockly.FieldTextInput)
Object.assign(IdFieldText.prototype, NclIdHandlerMixin)

IdFieldText.prototype.setSourceBlock = function (block) {
  this.workspaceSaved = block.workspace
  this.sourceBlock_ = block
  IdFieldText.superClass_.setSourceBlock.call(block)
}

IdFieldText.prototype.validateId = function (text) {
  if (!text) return text
  // empty or at toolbox
  if (!this.sourceBlock_.workspace) return null
  // at workspace and no idArrayMedia
  this.createIdArrays()
  var i
  if (this.idType === NCLBlocks.Types.MEDIA ||
    this.idType === NCLBlocks.Types.INPUT) {
    for (i in this.sourceBlock_.workspace.idArrayMedia) {
      if (this.sourceBlock_.workspace.idArrayMedia[i][0] === text) return null
    }
    for (i in this.sourceBlock_.workspace.idArrayInput) {
      if (this.sourceBlock_.workspace.idArrayInput[i][0] === text) return null
    }
  } else if (this.idType === NCLBlocks.Types.USER) {
    for (i in this.sourceBlock_.workspace.idArrayUser) {
      if (this.sourceBlock_.workspace.idArrayUser[i][0] === text) return null
    }
  }
  return text
}

IdFieldText.prototype.onFinishEditing_ = function (text) {
  // remove old
  if (this.previous) this.removeId(this.previous)
  // save new
  this.saveId(this.text_)
  this.previous = text
}

IdFieldText.prototype.setValue = function (text) {
  // means set from xml
  if (!this.workspace_ && this.validateId(text)) this.saveId(text)
  if (!this.workspace_) this.previous = text
  Blockly.FieldTextInput.prototype.setValue.call(this, text)
}

IdFieldText.prototype.dispose = function () {
  this.removeId(this.text_)
  Blockly.FieldTextInput.prototype.dispose.call(this)
}

IdFieldText.prototype.saveId = function (text) {
  if (!text) return
  this.createIdArrays()
  this.idArray.push([text, text])
  if (this.idType === NCLBlocks.Types.USER) {
    var maxUsers = this.sourceBlock_.inputList[1].fieldRow[3].text_
    if (maxUsers) {
      for (var i = 1; i <= maxUsers; i++) {
        this.idArray.push([text + '(' + i + ')', text + '(' + i + ')'])
      }
    }
  }
}

IdFieldText.prototype.removeId = function (text) {
  // at toolbox
  if (!text) return
  // at worksapce
  var index = -1
  var i
  for (i in this.idArray) {
    if (this.idArray[i][0] === text) {
      index = i
      break
    }
  }
  if (index > -1) { this.idArray.splice(index, 1) }
  if (this.idType === NCLBlocks.Types.USER) {
    var maxUsers = this.sourceBlock_.inputList[1].fieldRow[3].text_
    this.idArray.splice(index, 1 + maxUsers)
  }
}

// ----------------------------------------
// UserMaxFieldNumber
// ----------------------------------------

var UserMaxFieldNumber = function (initialValue) {
  this.previous = initialValue || 2
  this.idType = NCLBlocks.Types.USER
  UserMaxFieldNumber.superClass_.constructor.call(this, initialValue, 2, 10, 1)
}
goog.inherits(UserMaxFieldNumber, Blockly.FieldNumber)
Object.assign(UserMaxFieldNumber.prototype, NclIdHandlerMixin)

UserMaxFieldNumber.prototype.onFinishEditing_ = function (text) {
  this.updateIds(text)
  this.previous = text
}

UserMaxFieldNumber.prototype.setValue = function (text) {
  // means set from xml
  if (!this.workspace_) {
    this.updateIds(text)
    this.previous = text
  }
  Blockly.Field.prototype.setValue.call(this, text)
}

UserMaxFieldNumber.prototype.updateIds = function (text) {
  // at toolbox
  if (!text) return
  if (text === this.previous) return
  if (!this.sourceBlock_) return
  // at workspace
  this.createIdArrays()
  var i
  var diff = text - parseInt(this.previous)
  var userId = this.sourceBlock_.inputList[1].fieldRow[1].text_

  if (diff > 0) {
    if (userId) {
      for (i = parseInt(this.previous) + 1; i <= text; i++) {
        this.idArray.push([userId + '(' + i + ')', userId + '(' + i + ')'])
      }
    }
  } else {
    var numDel = Math.abs(diff)
    var index = -1
    for (i in this.idArray) {
      if (this.idArray[i][0] === userId) {
        index = i
        break
      }
    }
    if (index > 0) {
      this.idArray.splice(index + 1 + parseInt(text), numDel)
    }
  }
}

// ----------------------------------------
// body block
// ----------------------------------------

Blockly.Blocks.body = {
  init: function () {
    this.setColour(NCLBlocks.Colours.BODY)
    this.contextMenu = false
    this.setDeletable(false)

    // InputStackMixin config
    this.stackSize = 0
    this.isInputValue = true
    this.configureNewInput = function (newInput, index) {
      newInput.appendField()
        .setCheck(NCLBlocks.USE_CHECK
          ? [NCLBlocks.Types.MEDIA, NCLBlocks.Types.INPUT, NCLBlocks.Types.USER,
            NCLBlocks.Types.LINK]
          : null)
    }
    // add name, buttons and initial inputs
    this.appendDummyInput()
      .appendField(new Blockly.FieldImage(NCLBlocks.Icons.CONTEXT, 20, 20, '*'))
      .appendField('{' + NCLBlocks.Msg.BODY + '}')

    this.addMinusPlusDummyInput()
    for (var i = 0; i < 5; i++) this.pushInput()
  }
}
Object.assign(Blockly.Blocks.body, InputStackMixin)

// ----------------------------------------
// media block
// ----------------------------------------

Blockly.Blocks.media = {
  init: function () {
    this.initAsMedia()
    // add name one input
    this.appendDummyInput()
      .appendField(new Blockly.FieldImage(
        NCLBlocks.Icons.MEDIA, 25, 25, '*'))
      .appendField('{' + NCLBlocks.Msg.MEDIA + '}')
    this.appendValueInput('src')
      .setCheck(NCLBlocks.USE_CHECK ? NCLBlocks.Types.MEDIA_SRC : null)
      .appendField('id')
      .appendField(new IdFieldText('', NCLBlocks.Types.MEDIA), 'id')
      .appendField('e ' + NCLBlocks.Msg.SRC)
    this.setInputsInline(false)
  }
}
Object.assign(Blockly.Blocks.media, NclBlockMixin)

Blockly.Blocks.image = {
  init: function () {
    this.initAsMedia(true)
    // add name
    this.appendDummyInput()
      .appendField(new Blockly.FieldImage(NCLBlocks.Icons.IMAGE, 25, 25, '*'))
      .appendField('{' + NCLBlocks.Msg.IMAGE + '}')
  }
}
Object.assign(Blockly.Blocks.image, NclBlockMixin)

Blockly.Blocks.video = {
  init: function () {
    this.initAsMedia(true)
    // InputStackMixin config
    this.stackSize = 0
    this.isInputValue = false
    this.configureNewInput = function (newInput, index) {
      newInput.appendField(NCLBlocks.Msg.PORTION)
        .appendField(new IdFieldText('', NCLBlocks.Types.MEDIA), 'id_area' +
        index)
        .appendField(NCLBlocks.Msg.ANCHOR_BEGIN)
        .appendField(new Blockly.FieldTextInput(''), 'begin' + index)
        .appendField(NCLBlocks.Msg.ANCHOR_END)
        .appendField(new Blockly.FieldTextInput(''), 'end' + index)
    }
    // add name, buttons and initial inputs
    this.appendDummyInput()
      .appendField(new Blockly.FieldImage(NCLBlocks.Icons.VIDEO, 25, 25, '*'))
      .appendField('{' + NCLBlocks.Msg.VIDEO + '}')
    this.addMinusPlusDummyInput()
    this.pushInput()
  }
}
Object.assign(Blockly.Blocks.video, NclBlockMixin)
Object.assign(Blockly.Blocks.video, InputStackMixin)

Blockly.Blocks.audio = {
  init: function () {
    this.initAsMedia(true)
    // InputStackMixin config
    this.stackSize = 0
    this.isInputValue = false
    this.configureNewInput = function (newInput, index) {
      newInput.appendField(NCLBlocks.Msg.PORTION)
        .appendField(new IdFieldText('', NCLBlocks.Types.MEDIA), 'id_area' +
        index)
        .appendField(NCLBlocks.Msg.ANCHOR_BEGIN)
        .appendField(new Blockly.FieldTextInput(''), 'begin' + index)
        .appendField(NCLBlocks.Msg.ANCHOR_END)
        .appendField(new Blockly.FieldTextInput(''), 'end' + index)
    }
    // add name, buttons and initial inputs
    this.appendDummyInput()
      .appendField(new Blockly.FieldImage(NCLBlocks.Icons.AUDIO, 25, 25, '*'))
      .appendField('{' + NCLBlocks.Msg.AUDIO + '}')
    this.addMinusPlusDummyInput()
    this.pushInput()
  }
}
Object.assign(Blockly.Blocks.audio, NclBlockMixin)
Object.assign(Blockly.Blocks.audio, InputStackMixin)

Blockly.Blocks.ssml = {
  init: function () {
    this.initAsMedia(true)
    // InputStackMixin config
    this.stackSize = 0
    this.isInputValue = false
    this.configureNewInput = function (newInput, index) {
      newInput.appendField(NCLBlocks.Msg.PORTION)
        .appendField(new IdFieldText('', NCLBlocks.Types.MEDIA), 'id_area' +
        index)
        .appendField(NCLBlocks.Msg.SSML_ANCHOR)
        .appendField(new Blockly.FieldTextInput(''), 'label' + index)
    }
    // add name, buttons and initial inputs
    this.appendDummyInput()
      .appendField(new Blockly.FieldImage(NCLBlocks.Icons.SSML, 25, 25, '*'))
      .appendField('{' + NCLBlocks.Msg.SSML + '}')
    this.addMinusPlusDummyInput()
    this.pushInput()
  }
}
Object.assign(Blockly.Blocks.ssml, NclBlockMixin)
Object.assign(Blockly.Blocks.ssml, InputStackMixin)

// ----------------------------------------
// input blocks
// ----------------------------------------

Blockly.Blocks.input = {
  init: function () {
    this.initAsInput(false)
    // add name one input
    this.appendDummyInput()
      .appendField(new Blockly.FieldImage(
        NCLBlocks.Icons.INPUT, 25, 25, '*'))
      .appendField('{' + NCLBlocks.Msg.INPUT + '}')
    this.appendValueInput('src')
      .setCheck(NCLBlocks.USE_CHECK ? NCLBlocks.Types.INPUT_SRC : null)
      .appendField('id')
      .appendField(new IdFieldText('', NCLBlocks.Types.INPUT), 'id')
      .appendField('e ' + NCLBlocks.Msg.SRC)
  }
}
Object.assign(Blockly.Blocks.input, NclBlockMixin)

Blockly.Blocks.srgs = {
  init: function () {
    this.initAsInput(true)
    // InputStackMixin config
    this.stackSize = 0
    this.isInputValue = false
    this.configureNewInput = function (newInput, index) {
      newInput.appendField(NCLBlocks.Msg.PORTION)
        .appendField(new IdFieldText('', NCLBlocks.Types.INPUT), 'id_area' +
        index)
        .appendField(NCLBlocks.Msg.SRGS_ANCHOR)
        .appendField(new Blockly.FieldTextInput(''), 'label' + index)
    }
    // add name, buttons and initial inputs
    this.appendDummyInput()
      .appendField(new Blockly.FieldImage(NCLBlocks.Icons.SRGS, 25, 25, '*'))
      .appendField('{' + NCLBlocks.Msg.SRGS + '}')

    this.addMinusPlusDummyInput()

    this.pushInput()
  }
}
Object.assign(Blockly.Blocks.srgs, NclBlockMixin)
Object.assign(Blockly.Blocks.srgs, InputStackMixin)

Blockly.Blocks.hand_gesture = {
  init: function () {
    this.initAsInput(true)
    // InputStackMixin config
    this.stackSize = 0
    this.isInputValue = false
    this.configureNewInput = function (newInput, index) {
      var dropdown = new Blockly.FieldDropdown(
        [
          ['-', '-'],
          [{ 'src': NCLBlocks.Icons.HAND_GESTURE_SCROLL_DOWN, 'width': 70, 'height': 70, 'alt': NCLBlocks.Msg.HAND_DOWN },
            NCLBlocks.Msg.HAND_DOWN],
          [{ 'src': NCLBlocks.Icons.HAND_GESTURE_SCROLL_UP, 'width': 70, 'height': 70, 'alt': NCLBlocks.Msg.HAND_UP },
            NCLBlocks.Msg.HAND_UP],
          [{ 'src': NCLBlocks.Icons.HAND_GESTURE_SWIPE_LEFT, 'width': 70, 'height': 70, 'alt': NCLBlocks.Msg.HAND_LEFT },
            NCLBlocks.Msg.HAND_LEFT],
          [{ 'src': NCLBlocks.Icons.HAND_GESTURE_SWIPE_RIGHT, 'width': 70, 'height': 70, 'alt': NCLBlocks.Msg.HAND_RIGHT }, NCLBlocks.Msg.HAND_RIGHT]
        ])
      newInput.appendField(NCLBlocks.Msg.PORTION)
        .appendField(new IdFieldText('', NCLBlocks.Types.INPUT), 'id_area' +
        index)
        .appendField(NCLBlocks.Msg.HAND_GESTURE_ANCHOR)
        .appendField(dropdown, 'label' + index)
    }
    // add name, buttons and initial inputs
    this.appendDummyInput()
      .appendField(new Blockly.FieldImage(
        NCLBlocks.Icons.HAND_GESTURE, 25, 25, '*'))
      .appendField('{' + NCLBlocks.Msg.HAND_GESTURE + '}')
    this.addMinusPlusDummyInput()
    this.pushInput()
  }
}
Object.assign(Blockly.Blocks.hand_gesture, NclBlockMixin)
Object.assign(Blockly.Blocks.hand_gesture, InputStackMixin)

// ----------------------------------------
// user related blocks
// ----------------------------------------

Blockly.Blocks.user = {
  init: function () {
    this.initAsUser()
    // InputStackMixin config
    this.stackSize = 0
    this.isInputValue = true
    this.configureNewInput = function (newInput, index) {
      newInput.appendField(NCLBlocks.Msg.WITH_DEVICE)
        .setCheck(NCLBlocks.USE_CHECK ? NCLBlocks.Types.USER_DEVICE : null)
    }
    // add name
    this.appendDummyInput()
      .appendField(new Blockly.FieldImage(NCLBlocks.Icons.USER, 25, 25, '*'))
      .appendField('{' + NCLBlocks.Msg.USERCLASS + '}')
    this.appendDummyInput()
      .appendField('id')
      .appendField(new IdFieldText('', NCLBlocks.Types.USER), 'id')
      .appendField(NCLBlocks.Msg.AND)
      .appendField(new UserMaxFieldNumber(), 'usermax')
      .appendField(NCLBlocks.Msg.USERS)
    // add buttons and initial inputs
    this.addMinusPlusDummyInput()
    this.pushInput()
  }
}
Object.assign(Blockly.Blocks.user, NclBlockMixin)
Object.assign(Blockly.Blocks.user, InputStackMixin)

Blockly.Blocks.headset = {
  init: function () {
    this.initAsUser(true)

    this.appendDummyInput()
      .appendField(new Blockly.FieldImage(NCLBlocks.Icons.MICROFONE,
        25, 25, '*'))
      .appendField('{' + NCLBlocks.Msg.MICROFONE + '}')
  }
}
Object.assign(Blockly.Blocks.headset, NclBlockMixin)

Blockly.Blocks.hand_gesture_sensor = {
  init: function () {
    this.initAsUser(true)
    this.appendDummyInput()
      .appendField(new Blockly.FieldImage(NCLBlocks.Icons.HAND_GESTURE_SENSOR,
        25, 25, '*'))
      .appendField('{' + NCLBlocks.Msg.LEAP + '}')
  }
}
Object.assign(Blockly.Blocks.hand_gesture_sensor, NclBlockMixin)

// ----------------------------------------
// port block
// ----------------------------------------

Blockly.Blocks.port = {
  init: function () {
    this.initAsLink()
    this.appendDummyInput()
      .appendField(new Blockly.FieldImage(NCLBlocks.Icons.PORT, 25, 25, '*'))
      .appendField('{' + NCLBlocks.Msg.LINK + '}')
    this.appendDummyInput()
      .appendField(NCLBlocks.Msg.PORT_LABEL)
      .appendField(new IdFieldDropdown(NCLBlocks.Types.NODE), 'id')
  }
}
Object.assign(Blockly.Blocks.port, NclBlockMixin)

// ----------------------------------------
// link block
// ----------------------------------------

Blockly.Blocks.link = {
  init: function () {
    this.initAsLink()
    this.appendDummyInput()
      .appendField(new Blockly.FieldImage(NCLBlocks.Icons.LINK, 25, 25, '*'))
      .appendField('{' + NCLBlocks.Msg.LINK + '}')
    this.appendValueInput('conditions')
      .setCheck(NCLBlocks.USE_CHECK ? NCLBlocks.Types.CONDITION : null)
      .appendField(NCLBlocks.Msg.WHEN)
    this.appendStatementInput('actions')
      .setCheck(NCLBlocks.USE_CHECK ? NCLBlocks.Types.ACTION : null)
      .appendField(NCLBlocks.Msg.DO)
  }
}
Object.assign(Blockly.Blocks.link, NclBlockMixin)

// ----------------------------------------
// condition blocks
// ----------------------------------------

Blockly.Blocks.onbegin = {
  init: function () {
    this.initAsCondition()
    this.appendDummyInput()
      .appendField(new Blockly.FieldImage(NCLBlocks.Icons.ONBEGIN,
        15, 15, '*'))
      .appendField(new IdFieldDropdown(NCLBlocks.Types.NODE), 'id')
      .appendField(NCLBlocks.Msg.ONBEGIN)
  }
}
Object.assign(Blockly.Blocks.onbegin, NclBlockMixin)

Blockly.Blocks.onend = {
  init: function () {
    this.initAsCondition()
    this.appendDummyInput()
      .appendField(new Blockly.FieldImage(NCLBlocks.Icons.ONEND, 15, 15, '*'))
      .appendField(new IdFieldDropdown(NCLBlocks.Types.NODE), 'id')
      .appendField(NCLBlocks.Msg.ONEND)
  }
}
Object.assign(Blockly.Blocks.onend, NclBlockMixin)

Blockly.Blocks.onpause = {
  init: function () {
    this.initAsCondition()
    this.appendDummyInput()
      .appendField(new Blockly.FieldImage(NCLBlocks.Icons.ONPAUSE,
        15, 15, '*'))
      .appendField(new IdFieldDropdown(NCLBlocks.Types.NODE), 'id')
      .appendField(NCLBlocks.Msg.ONPAUSE)
  }
}
Object.assign(Blockly.Blocks.onpause, NclBlockMixin)

Blockly.Blocks.onresume = {
  init: function () {
    this.initAsCondition()
    this.appendDummyInput()
      .appendField(new Blockly.FieldImage(NCLBlocks.Icons.ONRESUME,
        15, 15, '*'))
      .appendField(new IdFieldDropdown(NCLBlocks.Types.NODE), 'id')
      .appendField(NCLBlocks.Msg.ONRESUME)
  }
}
Object.assign(Blockly.Blocks.onresume, NclBlockMixin)

Blockly.Blocks.onselection = {
  init: function () {
    this.initAsCondition()
    this.appendDummyInput()
      .appendField(new Blockly.FieldImage(NCLBlocks.Icons.ONSELECTION,
        15, 15, '*'))
      .appendField(new IdFieldDropdown(NCLBlocks.Types.MEDIA), 'id')
      .appendField(NCLBlocks.Msg.ONSELECTION)
  }
}
Object.assign(Blockly.Blocks.onselection, NclBlockMixin)

Blockly.Blocks.onrecognize = {
  init: function () {
    this.initAsCondition()
    this.appendDummyInput()
      .appendField(new Blockly.FieldImage(NCLBlocks.Icons.ONRECOGNIZE,
        15, 15, '*'))
      .appendField(new IdFieldDropdown(NCLBlocks.Types.INPUT), 'id')
      .appendField(NCLBlocks.Msg.ONRECOGNIZE)
  }
}
Object.assign(Blockly.Blocks.onrecognize, NclBlockMixin)

Blockly.Blocks.onrecognizeuser = {
  init: function () {
    this.initAsCondition()
    this.appendDummyInput()
      .appendField(new Blockly.FieldImage(NCLBlocks.Icons.ONRECOGNIZE,
        15, 15, '*'))
      .appendField(new IdFieldDropdown(NCLBlocks.Types.INPUT), 'id')
      .appendField(NCLBlocks.Msg.ONRECOGNIZE_FROM_USER)
      .appendField(new IdFieldDropdown(NCLBlocks.Types.USER), 'user_id')
  }
}
Object.assign(Blockly.Blocks.onrecognizeuser, NclBlockMixin)

Blockly.Blocks.compoundcondition = {
  init: function () {
    this.initAsCondition()
    // InputStackMixin config
    this.stackSize = 0
    this.isInputValue = true
    this.configureNewInput = function (newInput, index) {
      newInput.setCheck(NCLBlocks.USE_CHECK ? NCLBlocks.Types.CONDITION : null)
    }
    // add buttons and initial inputs
    var dropdown = new Blockly.FieldDropdown([
      [NCLBlocks.Msg.COMPOUND_CONDITION_OR, 'or'],
      [NCLBlocks.Msg.COMPOUND_CONDITION_AND, 'and'],
      [NCLBlocks.Msg.COMPOUND_CONDITION_SEQ, 'seq']
    ])
    this.appendDummyInput().appendField(dropdown, 'operator')
    this.addMinusPlusDummyInput()
    this.pushInput()
    this.pushInput()
  }
}
Object.assign(Blockly.Blocks.compoundcondition, NclBlockMixin)
Object.assign(Blockly.Blocks.compoundcondition, InputStackMixin)

// ----------------------------------------
// actions blocks
// ----------------------------------------

Blockly.Blocks.start = {
  init:
  function () {
    this.initAsAction()
    this.appendDummyInput()
      .appendField(new Blockly.FieldImage(NCLBlocks.Icons.START, 15, 15, '*'))
      .appendField(NCLBlocks.Msg.START)
      .appendField(new IdFieldDropdown(NCLBlocks.Types.NODE), 'id')
  }
}
Object.assign(Blockly.Blocks.start, NclBlockMixin)

Blockly.Blocks.stop = {
  init: function () {
    this.initAsAction()
    this.appendDummyInput()
      .appendField(new Blockly.FieldImage(NCLBlocks.Icons.STOP, 15, 15, '*'))
      .appendField(NCLBlocks.Msg.STOP)
      .appendField(new IdFieldDropdown(NCLBlocks.Types.NODE), 'id')
  }
}
Object.assign(Blockly.Blocks.stop, NclBlockMixin)

Blockly.Blocks.pause = {
  init: function () {
    this.initAsAction()
    this.appendDummyInput()
      .appendField(new Blockly.FieldImage(NCLBlocks.Icons.PAUSE, 15, 15, '*'))
      .appendField(NCLBlocks.Msg.PAUSE)
      .appendField(new IdFieldDropdown(NCLBlocks.Types.NODE), 'id')
  }
}
Object.assign(Blockly.Blocks.pause, NclBlockMixin)

Blockly.Blocks.resume = {
  init: function () {
    this.initAsAction()
    this.appendDummyInput()
      .appendField(new Blockly.FieldImage(NCLBlocks.Icons.RESUME, 15, 15, '*'))
      .appendField(NCLBlocks.Msg.RESUME)
      .appendField(new IdFieldDropdown(NCLBlocks.Types.NODE), 'id')
  }
}
Object.assign(Blockly.Blocks.resume, NclBlockMixin)

Blockly.Blocks.set = {
  init: function () {
    this.initAsAction()
    this.appendDummyInput()
      .appendField(new Blockly.FieldImage(NCLBlocks.Icons.SET, 15, 15, '*'))
      .appendField(NCLBlocks.Msg.SET)
      .appendField(new IdFieldDropdown(NCLBlocks.Types.NODE), 'id')
      .appendField(NCLBlocks.Msg.SET_TO)
      .appendField(new Blockly.FieldTextInput(''), 'value')
  }
}
Object.assign(Blockly.Blocks.set, NclBlockMixin)
