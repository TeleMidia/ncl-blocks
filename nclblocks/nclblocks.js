goog.require('Blockly.Blocks');

// body

Blockly.Blocks.media_item = {
  init: function () {
    this.setColour(Blockly.Blocks.lists.HUE);
    this.appendDummyInput()
      .appendField("mídia");
    this.setPreviousStatement(true, ['media_item']);
    this.setNextStatement(true, ['media_item', 'input_item']);
    this.contextMenu = false;
  }
};

Blockly.Blocks.input_item = {
  init: function () {
    this.setColour(Blockly.Blocks.lists.HUE);
    this.appendDummyInput()
      .appendField("reconhecedor");
    this.setPreviousStatement(true, ['media_item', 'input_item']);
    this.setNextStatement(true, ['input_item', 'link_item']);
    this.contextMenu = false;
  }
};

Blockly.Blocks.link_item = {
  init: function () {
    this.setColour(Blockly.Blocks.lists.HUE);
    this.appendDummyInput()
      .appendField("comportamento");
    this.setPreviousStatement(true, ['input_item', 'link_item']);
    this.setNextStatement(true, ['link_item']);
    this.contextMenu = false;
  }
};

Blockly.Blocks.body = {
  init: function () {
    this.setColour(Blockly.Blocks.logic.HUE);
    this.appendDummyInput().appendField('--Aplicação--');
    this.appendValueInput('MEDIA0')
      .setCheck('media')
      .appendField('mídias:');
    this.appendValueInput('INPUT0')
      .setCheck('input')
      .appendField('reconhecedores:');
    this.appendValueInput('USER0')
      .setCheck('user')
      .appendField('usuário:');
    this.appendValueInput('LINK0')
      .setCheck('link')
      .appendField('comportamentos:');
    // this.appendStatementInput('PORTS')
    //   .setCheck('start')
    //   .appendField('faça no início');
    this.setMutator(new Blockly.Mutator(['media_item',
      'input_item', 'link_item'
    ]));
    this.mediaCount = 2;
    this.inputCount = 2;
    this.linkCount = 2;
    this.contextMenu = false;
    this.setDeletable(false);
    this.updateShape_();
  },

  mutationToDom: function () {
    var container = document.createElement('mutation');
    container.setAttribute('mediaCount', this.mediaCount);
    container.setAttribute('inputCount', this.inputCount);
    container.setAttribute('linkCount', this.linkCount);
    return container;
  },

  domToMutation: function (xmlElement) {
    this.mediaCount = parseInt(xmlElement.getAttribute('mediaCount'), 10) || 1;
    this.inputCount = parseInt(xmlElement.getAttribute('inputCount'), 10) || 1;
    this.linkCount = parseInt(xmlElement.getAttribute('linkCount'), 10) || 1;
    this.updateShape_();
  },
  /**
   * Populate the mutator's dialog with this block's components.
   */
  decompose: function (workspace) {
    var containerBlock = workspace.newBlock('lists_create_with_container');
    containerBlock.initSvg();
    var connection = containerBlock.getInput('STACK').connection;
    for (var i = 0; i < this.mediaCount; i++) {
      var itemBlock = workspace.newBlock('media_item');
      if (i === 0) itemBlock.setMovable(false);
      itemBlock.initSvg();
      connection.connect(itemBlock.previousConnection);
      connection = itemBlock.nextConnection;
    }
    for (var i = 0; i < this.inputCount; i++) {
      var itemBlock = workspace.newBlock('input_item');
      itemBlock.initSvg();
      if (i === 0) itemBlock.setMovable(false);
      connection.connect(itemBlock.previousConnection);
      connection = itemBlock.nextConnection;
    }
    for (var i = 0; i < this.linkCount; i++) {
      var itemBlock = workspace.newBlock('link_item');
      itemBlock.initSvg();
      if (i === 0) itemBlock.setMovable(false);
      connection.connect(itemBlock.previousConnection);
      connection = itemBlock.nextConnection;
    }
    return containerBlock;
  },

  /**
   * Reconfigure this block based on the mutator dialog's components.
   */
  compose: function (containerBlock) {
    var itemBlock = containerBlock.getInputTargetBlock('STACK');
    var mediaAux = 0,
      inputAux = 0,
      linkAux = 0;
    while (itemBlock) {
      if (itemBlock.type == 'media_item') {
        mediaAux++;
      }
      if (itemBlock.type == 'input_item') {
        inputAux++;
      }
      if (itemBlock.type == 'link_item') {
        linkAux++;
      }
      itemBlock = itemBlock.nextConnection &&
        itemBlock.nextConnection.targetBlock();
    }
    this.mediaCount = mediaAux;
    this.inputCount = inputAux;
    this.linkCount = linkAux;
    this.updateShape_();
  },
  /**
   * Store pointers to any connected child blocks.
   */
  saveConnections: function (containerBlock) {},
  updateShape_: function () {
    for (var i = 1; i < this.mediaCount; i++) {
      if (!this.getInput('MEDIA' + i)) {
        this.appendValueInput('MEDIA' + i)
          .setCheck('media');
        this.moveInputBefore('MEDIA' + i, 'INPUT0');
      }
    }
    for (var i = 1; i < this.inputCount; i++) {
      if (!this.getInput('INPUT' + i)) {
        this.appendValueInput('INPUT' + i)
          .setCheck('input');
        this.moveInputBefore('INPUT' + i, 'USER0');
      }
    }
    for (var i = 1; i < this.linkCount; i++) {
      if (!this.getInput('LINK' + i)) {
        this.appendValueInput('LINK' + i)
          .setCheck('link');
      }
    }
  }
};

// media ids

var mediaIds = [
  ['-', '-']
];

function getMediaIds() {
  return mediaIds;
}

function validateMediaId(text) {
  if (text === '') return null;
  for (var i in mediaIds) {
    if (mediaIds[i][0] === text) {
      return null;
    }
  }
}

Blockly.MediaIdFieldText = function (text, opt_validator) {
  Blockly.MediaIdFieldText.superClass_.constructor.call(this, text,
    opt_validator);
};
goog.inherits(Blockly.MediaIdFieldText, Blockly.FieldTextInput);

Blockly.MediaIdFieldText.prototype.onFinishEditing_ = function (text) {
  mediaIds.push([text, text]);
  console.log('add media interface ' + text);
};

// input ids

var inputIds = [
  ['-', '-']
];

function getinputIds() {
  return inputIds;
}

function validateInputId(text) {
  if (text === '') return null;
  for (var i in inputIds) {
    if (inputIds[i][0] === text) {
      return null;
    }
  }
}

Blockly.InputIdFieldText = function (text, opt_validator) {
  Blockly.InputIdFieldText.superClass_.constructor.call(this, text,
    opt_validator);
};
goog.inherits(Blockly.InputIdFieldText, Blockly.FieldTextInput);

Blockly.InputIdFieldText.prototype.onFinishEditing_ = function (text) {
  inputIds.push([text, text]);
  console.log('add input interface = ' + text);
};

// user ids
var userIds = [
  ['-', '-']
];

function getuserIds() {
  return userIds;
}

function validateUserId(text) {
  if (text === '') return null;
  for (var i in userIds) {
    if (userIds[i][0] === text) {
      return null;
    }
  }
}

Blockly.NclUserFieldText = function (text, opt_validator) {
  Blockly.NclUserFieldText.superClass_.constructor.call(this, text,
    opt_validator);
};
goog.inherits(Blockly.NclUserFieldText, Blockly.FieldTextInput);

Blockly.NclUserFieldText.prototype.onFinishEditing_ = function (text) {
  userIds.push([text, text]);
  console.log('add user interface = ' + text);
};

// media

Blockly.Blocks.media = {
  init: function () {
    this.appendDummyInput()
      .appendField('--mídia--');
    this.appendValueInput('src')
      .setCheck('media_content')
      .appendField('id=')
      .appendField(new Blockly.MediaIdFieldText('',
        validateMediaId))
      .appendField('e conteúdo=');
    this.setInputsInline(false);
    this.setColour(120);
    this.setTooltip('Modalidade de saida');
    this.setOutput(true, 'media');
    this.contextMenu = false;
  }
};

// input

Blockly.Blocks.input = {
  init: function () {
    this.appendDummyInput()
      .appendField('--reconhecedor--');
    this.appendValueInput('src')
      .setCheck('input_content')
      .appendField('id=')
      .appendField(new Blockly.InputIdFieldText('',
        validateInputId))
      .appendField('e conteúdo=');
    this.setInputsInline(false);
    this.setColour(120);
    this.setTooltip('Modalidade de entrada');
    this.setOutput(true, 'input');
    this.contextMenu = false;
  }
};

// user

Blockly.Blocks.device_item = {
  init: function () {
    this.setColour(Blockly.Blocks.lists.HUE);
    this.appendDummyInput()
      .appendField("dispositivo");
    this.setPreviousStatement(true, ['device_item']);
    this.setNextStatement(true, ['device_item']);
    this.contextMenu = false;
  }
};

Blockly.Blocks.user = Object.assign({}, Blockly.Blocks.lists_create_with);

Blockly.Blocks.user.init = function () {
  this.appendDummyInput()
    .appendField('--usuário--');
  this.appendValueInput('ADD0')
    .appendField('id=')
    .appendField(new Blockly.NclUserFieldText('',
      validateUserId))
    .setCheck('user_content')
    .appendField('e dispositivos=');
  this.setColour(20);
  this.itemCount_ = 2;
  this.updateShape_();
  this.setMutator(new Blockly.Mutator(['device_item']));
  this.setOutput(true, 'user');
  this.contextMenu = false;
};

Blockly.Blocks.user.decompose = function (workspace) {
  var containerBlock = workspace.newBlock('lists_create_with_container');
  containerBlock.initSvg();
  var connection = containerBlock.getInput('STACK').connection;
  for (var i = 0; i < this.itemCount_; i++) {
    var itemBlock = workspace.newBlock('device_item');
    if (i === 0) itemBlock.setMovable(false);
    itemBlock.initSvg();
    connection.connect(itemBlock.previousConnection);
    connection = itemBlock.nextConnection;
  }
  return containerBlock;
};

Blockly.Blocks.user.updateShape_ = function () {
  // Add new inputs.
  for (var i = 1; i < this.itemCount_; i++) {
    if (!this.getInput('ADD' + i)) {
      var input = this.appendValueInput('ADD' + i);
      input.setCheck('user_content');
    }
  }
  // Remove deleted inputs.
  while (this.getInput('ADD' + i)) {
    this.removeInput('ADD' + i);
    i++;
  }
};

// link

Blockly.Blocks.link = {
  init: function () {
    this.appendDummyInput()
      .appendField('--comportamento--');
    this.appendValueInput('conditions')
      .setCheck(['compoundcondition', 'simplecondition'])
      .appendField('quando');
    this.appendStatementInput('actions')
      .setCheck('simpleaction')
      .appendField('faça');
    this.setInputsInline(false);
    this.setColour(260);
    this.setOutput(true, 'link');
    this.contextMenu = false;
  }
};

// user contents - headset

Blockly.Blocks.headset = {
  init: function () {
    this.appendDummyInput()
      .appendField(new Blockly.FieldImage('nclblocks/media/headset.png', 30, 30, '*'))
      .appendField('--microfone--');
    this.setOutput(true, 'user_content');
    this.setColour(20);
    this.setTooltip('');
    this.setHelpUrl('');
    this.contextMenu = false;
  }
};

// user contents - hand_gesture_sensor

Blockly.Blocks.hand_gesture_sensor = {
  init: function () {
    this.appendDummyInput()
      .appendField(new Blockly.FieldImage('nclblocks/media/hand-gesture-sensor.png',
        30, 30, '*'))
      .appendField('--sensor de gestos--');
    this.setOutput(true, 'user_content');
    this.setColour(20);
    this.contextMenu = false;
  }
};

// media contents - image

Blockly.Blocks.image = {
  init: function () {
    this.appendDummyInput()
      .appendField(new Blockly.FieldImage('nclblocks/media/icon-image.png', 30, 30,
        '*'))
      .appendField('--imagem--');
    this.setOutput(true, 'media_content');
    this.setColour(120);
    this.contextMenu = false;
  }
};

// media contents - ssml

Blockly.Blocks.sentence_item = {
  init: function () {
    this.setColour(Blockly.Blocks.lists.HUE);
    this.appendDummyInput()
      .appendField("frase para sintetizar");
    this.setPreviousStatement(true, ['sentence_item']);
    this.setNextStatement(true, ['sentence_item']);
    this.contextMenu = false;
  }
};

Blockly.Blocks.ssml = Object.assign({}, Blockly.Blocks.lists_create_with);

Blockly.Blocks.ssml.init = function () {
  this.appendDummyInput()
    .appendField(new Blockly.FieldImage('nclblocks/media/ssml.png', 30, 30, '*'))
    .appendField('--texto para sintetização--');
  this.setColour(120);
  this.itemCount_ = 2;
  this.updateShape_();
  this.setOutput(true, 'media_content');
  this.setMutator(new Blockly.Mutator(['sentence_item']));
  this.contextMenu = false;
};

Blockly.Blocks.ssml.decompose = function (workspace) {
  var containerBlock = workspace.newBlock('lists_create_with_container');
  containerBlock.initSvg();
  var connection = containerBlock.getInput('STACK').connection;

  for (var i = 0; i < this.itemCount_; i++) {
    var itemBlock = workspace.newBlock('sentence_item');
    if (i === 0) itemBlock.setMovable(false);
    itemBlock.initSvg();
    connection.connect(itemBlock.previousConnection);
    connection = itemBlock.nextConnection;
  }
  return containerBlock;
};

Blockly.Blocks.ssml.compose = function (containerBlock) {
  var itemBlock = containerBlock.getInputTargetBlock('STACK');
  var connections = [];

  while (itemBlock) {
    connections.push(itemBlock.valueConnection_);
    itemBlock = itemBlock.nextConnection &&
      itemBlock.nextConnection.targetBlock();
  }
  this.itemCount_ = connections.length;
  this.updateShape_();
};

Blockly.Blocks.ssml.saveConnections = function (containerBlock) {};

Blockly.Blocks.ssml.updateShape_ = function () {
  if (this.itemCount_ && this.getInput('EMPTY')) {
    this.removeInput('EMPTY');
  } else if (!this.itemCount_ && !this.getInput('EMPTY')) {
    this.appendDummyInput('EMPTY');
  }
  for (var i = 0; i < this.itemCount_; i++) {
    if (!this.getInput('ADD' + i)) {
      this.appendDummyInput('ADD' + i)
        .appendField('id=')
        .appendField(new Blockly.MediaIdFieldText('',
          validateMediaId))
        .appendField('sintetiza frase')
        .appendField(new Blockly.FieldTextInput(''), '');
    }
  }
  while (this.getInput('ADD' + i)) {
    this.removeInput('ADD' + i);
    i++;
  }
};

// media contents - video

Blockly.Blocks.clip_item = {
  init: function () {
    this.setColour(Blockly.Blocks.lists.HUE);
    this.appendDummyInput()
      .appendField("trecho do vídeo");
    this.setPreviousStatement(true, ['clip_item']);
    this.setNextStatement(true, ['clip_item']);
    this.contextMenu = false;
  }
};

Blockly.Blocks.video = Object.assign({}, Blockly.Blocks.lists_create_with);

Blockly.Blocks.video.init = function () {
  this.appendDummyInput()
    .appendField(new Blockly.FieldImage('nclblocks/media/icon-video.png', 30, 30,
      '*'))
    .appendField('--vídeo--');
  this.setColour(120);
  this.itemCount_ = 2;
  this.updateShape_();
  this.setOutput(true, 'media_content');
  this.setMutator(new Blockly.Mutator(['clip_item']));
  this.contextMenu = false;
};

Blockly.Blocks.video.decompose = function (workspace) {
  var containerBlock = workspace.newBlock('lists_create_with_container');
  containerBlock.initSvg();
  var connection = containerBlock.getInput('STACK').connection;
  for (var i = 0; i < this.itemCount_; i++) {
    var itemBlock = workspace.newBlock('clip_item');
    if (i === 0) itemBlock.setMovable(false);
    itemBlock.initSvg();
    connection.connect(itemBlock.previousConnection);
    connection = itemBlock.nextConnection;
  }
  return containerBlock;
};

Blockly.Blocks.video.compose = function (containerBlock) {
  var itemBlock = containerBlock.getInputTargetBlock('STACK');
  var connections = [];

  while (itemBlock) {
    connections.push(itemBlock.valueConnection_);
    itemBlock = itemBlock.nextConnection &&
      itemBlock.nextConnection.targetBlock();
  }
  this.itemCount_ = connections.length;
  this.updateShape_();
};

Blockly.Blocks.video.saveConnections = function (containerBlock) {};

Blockly.Blocks.video.updateShape_ = function () {
  if (this.itemCount_ && this.getInput('EMPTY')) {
    this.removeInput('EMPTY');
  } else if (!this.itemCount_ && !this.getInput('EMPTY')) {
    this.appendDummyInput('EMPTY');
  }
  for (var i = 0; i < this.itemCount_; i++) {
    if (!this.getInput('ADD' + i)) {
      this.appendDummyInput('ADD' + i)
        .appendField('id=')
        .appendField(new Blockly.MediaIdFieldText('',
          validateMediaId))
        .appendField('define trecho de inicio')
        .appendField(new Blockly.FieldNumber(0, 0), 'begin')
        .appendField('s e fim')
        .appendField(new Blockly.FieldNumber(0, 0), 'end')
        .appendField('s');
    }
  }
  while (this.getInput('ADD' + i)) {
    this.removeInput('ADD' + i);
    i++;
  }
};

// input contents - srgs

Blockly.Blocks.recognition_item = {
  init: function () {
    this.setColour(Blockly.Blocks.lists.HUE);
    this.appendDummyInput()
      .appendField("frase a reconhecer");
    this.setPreviousStatement(true, ['input_item', 'link_item']);
    this.setNextStatement(true, ['link_item']);
    this.contextMenu = false;
  }
};

Blockly.Blocks.srgs = Object.assign({}, Blockly.Blocks.lists_create_with);

Blockly.Blocks.srgs.init = function () {
  this.appendDummyInput()
    .appendField(new Blockly.FieldImage('nclblocks/media/srgs.png', 30, 30, '*'))
    .appendField('--comandos de voz--');
  this.setColour(120);
  this.itemCount_ = 2;
  this.updateShape_();
  this.setOutput(true, 'input_content');
  this.setMutator(new Blockly.Mutator(['recognition_item']));
  this.contextMenu = false;
};

Blockly.Blocks.srgs.decompose = function (workspace) {
  var containerBlock = workspace.newBlock('lists_create_with_container');
  containerBlock.initSvg();
  var connection = containerBlock.getInput('STACK').connection;
  for (var i = 0; i < this.itemCount_; i++) {
    var itemBlock = workspace.newBlock('recognition_item');
    if (i === 0) itemBlock.setMovable(false);
    itemBlock.initSvg();
    connection.connect(itemBlock.previousConnection);
    connection = itemBlock.nextConnection;
  }
  return containerBlock;
};

Blockly.Blocks.srgs.compose = function (containerBlock) {
  var itemBlock = containerBlock.getInputTargetBlock('STACK');
  var connections = [];

  while (itemBlock) {
    connections.push(itemBlock.valueConnection_);
    itemBlock = itemBlock.nextConnection &&
      itemBlock.nextConnection.targetBlock();
  }
  this.itemCount_ = connections.length;
  this.updateShape_();
};

Blockly.Blocks.srgs.saveConnections = function (containerBlock) {};

Blockly.Blocks.srgs.updateShape_ = function () {
  if (this.itemCount_ && this.getInput('EMPTY')) {
    this.removeInput('EMPTY');
  } else if (!this.itemCount_ && !this.getInput('EMPTY')) {
    this.appendDummyInput('EMPTY');
  }
  for (var i = 0; i < this.itemCount_; i++) {
    if (!this.getInput('ADD' + i)) {
      this.appendDummyInput('ADD' + i)
        .appendField('id=')
        .appendField(new Blockly.InputIdFieldText('',
          validateInputId))
        .appendField('reconhece frase')
        .appendField(new Blockly.FieldTextInput(''), '');
    }
  }
  while (this.getInput('ADD' + i)) {
    this.removeInput('ADD' + i);
    i++;
  }
};

// input contents - gesture

Blockly.Blocks.hand_gesture_item = {
  init: function () {
    this.setColour(Blockly.Blocks.lists.HUE);
    this.appendDummyInput()
      .appendField("gesto a reconhecer");
    this.setPreviousStatement(true, ['hand_gesture_item']);
    this.setNextStatement(true, ['hand_gesture_item']);
    this.contextMenu = false;
  }
};

Blockly.Blocks.hand_gesture = Object.assign({}, Blockly.Blocks.lists_create_with);

Blockly.Blocks.hand_gesture.init = function () {
  this.appendDummyInput()
    .appendField(new Blockly.FieldImage('nclblocks/media/hand-gesture.png', 30, 30,
      '*'))
    .appendField('--gestures de mão--');
  this.setColour(120);
  this.itemCount_ = 2;
  this.updateShape_();
  this.setOutput(true, 'input_content');
  this.setMutator(new Blockly.Mutator(['hand_gesture_item']));
  this.contextMenu = false;
};

Blockly.Blocks.hand_gesture.decompose = function (workspace) {
  var containerBlock = workspace.newBlock('lists_create_with_container');
  containerBlock.initSvg();
  var connection = containerBlock.getInput('STACK').connection;
  for (var i = 0; i < this.itemCount_; i++) {
    var itemBlock = workspace.newBlock('hand_gesture_item');
    if (i === 0) itemBlock.setMovable(false);
    itemBlock.initSvg();
    connection.connect(itemBlock.previousConnection);
    connection = itemBlock.nextConnection;
  }
  return containerBlock;
};

Blockly.Blocks.hand_gesture.compose = function (containerBlock) {
  var itemBlock = containerBlock.getInputTargetBlock('STACK');
  var connections = [];

  while (itemBlock) {
    connections.push(itemBlock.valueConnection_);
    itemBlock = itemBlock.nextConnection &&
      itemBlock.nextConnection.targetBlock();
  }
  this.itemCount_ = connections.length;
  this.updateShape_();
};

Blockly.Blocks.hand_gesture.saveConnections = function (containerBlock) {};

Blockly.Blocks.hand_gesture.updateShape_ = function () {
  if (this.itemCount_ && this.getInput('EMPTY')) {
    this.removeInput('EMPTY');
  } else if (!this.itemCount_ && !this.getInput('EMPTY')) {
    this.appendDummyInput('EMPTY');
  }
  for (var i = 0; i < this.itemCount_; i++) {
    if (!this.getInput('ADD' + i)) {
      this.appendDummyInput('ADD' + i)
        .appendField('id=')
        .appendField(new Blockly.FieldTextInput(''), 'id=')
        .appendField('reconhece gesto')
        .appendField(new Blockly.FieldTextInput(''), '');
    }
  }
  while (this.getInput('ADD' + i)) {
    this.removeInput('ADD' + i);
    i++;
  }
};

// conditions

Blockly.Blocks.onbegin = {
  init: function () {
    this.appendDummyInput()
      .appendField(new Blockly.FieldImage('nclblocks/media/icon-bind-onbegin.png', 15,
        15, '*'))
      .appendField('inciar')
      .appendField(new Blockly.FieldDropdown(getMediaIds), 'NAME');
    this.setInputsInline(false);
    this.setOutput(true, 'simplecondition');
    this.setColour(260);
    this.contextMenu = false;
  }
};

Blockly.Blocks.onend = {
  init: function () {
    this.appendDummyInput()
      .appendField(new Blockly.FieldImage('nclblocks/media/icon-bind-onend.png', 15,
        15, '*'))
      .appendField('terminar')
      .appendField(new Blockly.FieldDropdown(getMediaIds), 'NAME');
    this.setInputsInline(false);
    this.setOutput(true, 'simplecondition');
    this.setColour(260);
    this.contextMenu = false;
  }
};

Blockly.Blocks.onpause = {
  init: function () {
    this.appendDummyInput()
      .appendField(new Blockly.FieldImage('nclblocks/media/icon-bind-onpause.png', 15,
        15, '*'))
      .appendField('pausar')
      .appendField(new Blockly.FieldDropdown(getMediaIds), 'NAME');
    this.setInputsInline('pause');
    this.setOutput(true, 'simplecondition');
    this.setColour(260);
    this.contextMenu = false;
  }
};

Blockly.Blocks.onresume = {
  init: function () {
    this.appendDummyInput()
      .appendField(new Blockly.FieldImage('nclblocks/media/icon-bind-onresume.png',
        15, 15, '*'))
      .appendField('resumir')
      .appendField(new Blockly.FieldDropdown(getMediaIds), 'NAME');
    this.setInputsInline(false);
    this.setOutput(true, 'simplecondition');
    this.setColour(260);
    this.contextMenu = false;
  }
};

Blockly.Blocks.onselection = {
  init: function () {
    this.appendDummyInput()
      .appendField(new Blockly.FieldImage('nclblocks/media/icon-bind-onselection.png',
        15, 15, '*'))
      .appendField('selecionar')
      .appendField(new Blockly.FieldDropdown(getMediaIds), 'NAME');
    this.setInputsInline(false);
    this.setOutput(true, 'simplecondition');
    this.setColour(260);
    this.contextMenu = false;
  }
};

Blockly.Blocks.onrecognize = {
  init: function () {
    this.appendDummyInput()
      .appendField(new Blockly.FieldImage('nclblocks/media/icon-bind-onselection.png',
        15, 15, '*'))
      .appendField('reconhecer')
      .appendField(new Blockly.FieldDropdown(getinputIds), 'NAME');
    this.setInputsInline(false);
    this.setOutput(true, 'simplecondition');
    this.setColour(260);
    this.contextMenu = false;
  }
};

Blockly.Blocks.onrecognizeuser = {
  init: function () {
    this.appendDummyInput()
      .appendField(new Blockly.FieldImage('nclblocks/media/icon-bind-onselection.png',
        15, 15, '*'))
      .appendField('reconhecer')
      .appendField(new Blockly.FieldDropdown(getinputIds), 'NAME')
      .appendField(' do usuário')
      .appendField(new Blockly.FieldDropdown(getuserIds), 'NAME');
    this.setInputsInline(false);
    this.setOutput(true, 'simplecondition');
    this.setColour(260);
    this.contextMenu = false;
  }
};

// compound condition

Blockly.Blocks.condition_item = {
  init: function () {
    this.setColour(Blockly.Blocks.lists.HUE);
    this.appendDummyInput()
      .appendField("condição");
    this.setPreviousStatement(true, ['condition_item']);
    this.setNextStatement(true, ['condition_item']);
    this.contextMenu = false;
  }
};

Blockly.Blocks.compoundcondition = Object.assign({}, Blockly.Blocks.lists_create_with);

Blockly.Blocks.compoundcondition.init = function () {
  this.appendDummyInput()
    .appendField(
      new Blockly.FieldDropdown([
        ['em sequencia', 'seq'],
        ['todos entre', 'and'],
        ['qualquer entre', 'or']
      ]),
      'operator');
  this.setColour(260);
  this.itemCount_ = 2;
  this.updateShape_();
  this.setOutput(true, 'simplecondition');
  this.setMutator(new Blockly.Mutator(['condition_item']));
  this.contextMenu = false;
};

Blockly.Blocks.compoundcondition.decompose = function (workspace) {
  var containerBlock = workspace.newBlock('lists_create_with_container');
  containerBlock.initSvg();
  var connection = containerBlock.getInput('STACK').connection;
  for (var i = 0; i < this.itemCount_; i++) {
    var itemBlock = workspace.newBlock('condition_item');
    if (i === 0) itemBlock.setMovable(false);
    itemBlock.initSvg();
    connection.connect(itemBlock.previousConnection);
    connection = itemBlock.nextConnection;
  }
  return containerBlock;
};

Blockly.Blocks.compoundcondition.updateShape_ = function () {
  if (this.itemCount_ && this.getInput('EMPTY')) {
    this.removeInput('EMPTY');
  } else if (!this.itemCount_ && !this.getInput('EMPTY')) {
    this.appendDummyInput('EMPTY');
  }
  for (var i = 0; i < this.itemCount_; i++) {
    if (!this.getInput('ADD' + i)) {
      this.appendValueInput('ADD' + i);
    }
  }
  while (this.getInput('ADD' + i)) {
    this.removeInput('ADD' + i);
    i++;
  }
};

// actions

Blockly.Blocks.start = {
  init: function () {
    this.appendDummyInput()
      .appendField(new Blockly.FieldImage('nclblocks/media/icon-bind-start.png', 15,
        15, '*'))
      .appendField('inicie')
      .appendField(new Blockly.FieldDropdown(getMediaIds), 'NAME');
    this.setInputsInline(false);
    this.setPreviousStatement(true, 'simpleaction');
    this.setNextStatement(true, 'simpleaction');
    this.setColour(230);
    this.contextMenu = false;
  }
};

Blockly.Blocks.stop = {
  init: function () {
    this.appendDummyInput()
      .appendField(new Blockly.FieldImage('nclblocks/media/icon-bind-stop.png', 15,
        15, '*'))
      .appendField('pare')
      .appendField(new Blockly.FieldDropdown(getMediaIds), 'NAME');
    this.setPreviousStatement(true, 'simpleaction');
    this.setNextStatement(true, 'simpleaction');
    this.setColour(230);
    this.contextMenu = false;
  }
};

Blockly.Blocks.pause = {
  init: function () {
    this.appendDummyInput()
      .appendField(new Blockly.FieldImage('nclblocks/media/icon-bind-pause.png', 15,
        15, '*'))
      .appendField('pause')
      .appendField(new Blockly.FieldDropdown(getMediaIds), 'NAME');
    this.setPreviousStatement(true, 'simpleaction');
    this.setNextStatement(true, 'simpleaction');
    this.setColour(230);
    this.contextMenu = false;
  }
};

Blockly.Blocks.resume = {
  init: function () {
    this.appendDummyInput()
      .appendField(new Blockly.FieldImage('nclblocks/media/icon-bind-resume.png', 15,
        15, '*'))
      .appendField('resuma')
      .appendField(new Blockly.FieldDropdown(getMediaIds), 'NAME');
    this.setInputsInline(false);
    this.setPreviousStatement(true, 'simpleaction');
    this.setNextStatement(true, 'simpleaction');
    this.setColour(230);
    this.contextMenu = false;
  }
};

Blockly.Blocks.set = {
  init: function () {
    this.appendDummyInput()
      .appendField(new Blockly.FieldImage('nclblocks/media/icon-bind-set.png', 15, 15,
        '*'))
      .appendField('atribua')
      .appendField(new Blockly.FieldDropdown(getMediaIds), 'NAME')
      .appendField('=')
      .appendField(new Blockly.FieldTextInput(''), 'value');
    this.setInputsInline(false);
    this.setPreviousStatement(true, 'simpleaction');
    this.setNextStatement(true, 'simpleaction');
    this.setColour(230);
    this.contextMenu = false;
  }
};
