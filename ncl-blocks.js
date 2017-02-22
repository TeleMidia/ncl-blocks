goog.require('Blockly.Blocks');

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

// entities
Blockly.Blocks.media = {
  init: function () {
    this.appendDummyInput()
      .appendField('-- mídia --');
    this.appendValueInput('src')
      .appendField('id=')
      .appendField(new Blockly.MediaIdFieldText('',
        validateMediaId()))
      .setCheck('media_content')
      .appendField('e conteúdo=');
    this.setInputsInline(false);
    this.setColour(120);
    this.setTooltip('Modalidade de saida');
    this.setHelpUrl('');
    this.contextMenu = false;
  }
};

Blockly.Blocks.input = {
  init: function () {
    this.appendDummyInput()
      .appendField('--  reconhecedor -- ');
    this.appendValueInput('src')
      .setCheck('input_content')
      .appendField('id=')
      .appendField(new Blockly.InputIdFieldText('',
        validateInputId))
      .appendField('e conteúdo=');
    this.setInputsInline(false);
    this.setColour(120);
    this.setTooltip('Modalidade de entrada');
    this.setHelpUrl('');
    this.contextMenu = false;
  }
};
Blockly.Blocks.user = {
  init: function () {
    this.appendDummyInput()
      .appendField('-- usuário --');
    this.appendValueInput('ADD0')
      .appendField('id=')
      .appendField(new Blockly.NclUserFieldText('',
        validateUserId))
      .setCheck('user_content')
      .appendField('e dispositivos=');
    this.setColour(20);
    this.itemCount_ = 2;
    this.updateShape_();
    this.setMutator(new Blockly.Mutator(['lists_create_with_item']));
    this.contextMenu = false;
  },
  mutationToDom: function () {
    var container = document.createElement('mutation');
    container.setAttribute('items', this.itemCount_);
    return container;
  },
  domToMutation: function (xmlElement) {
    this.itemCount_ = parseInt(xmlElement.getAttribute('items'), 10);
    this.updateShape_();
  },
  decompose: function (workspace) {
    var containerBlock = workspace.newBlock('lists_create_with_container');
    containerBlock.initSvg();
    var connection = containerBlock.getInput('STACK').connection;
    for (var i = 0; i < this.itemCount_; i++) {
      var itemBlock = workspace.newBlock('lists_create_with_item');
      itemBlock.initSvg();
      connection.connect(itemBlock.previousConnection);
      connection = itemBlock.nextConnection;
    }
    return containerBlock;
  },
  compose: function (containerBlock) {
    var itemBlock = containerBlock.getInputTargetBlock('STACK');
    // Count number of inputs.
    var connections = [];
    while (itemBlock) {
      connections.push(itemBlock.valueConnection_);
      itemBlock = itemBlock.nextConnection &&
        itemBlock.nextConnection.targetBlock();
    }
    // Disconnect any children that don't belong.
    for (var i = 0; i < this.itemCount_; i++) {
      var connection = this.getInput('ADD' + i).connection.targetConnection;
      if (connection && connections.indexOf(connection) === -1) {
        connection.disconnect();
      }
    }
    this.itemCount_ = connections.length;
    this.updateShape_();
    // Reconnect any child blocks.
    for (var j = 0; j < this.itemCount_; j++) {
      Blockly.Mutator.reconnect(connections[j], this, 'ADD' + j);
    }
  },
  saveConnections: function (containerBlock) {
    var itemBlock = containerBlock.getInputTargetBlock('STACK');
    var i = 0;
    while (itemBlock) {
      var input = this.getInput('ADD' + i);
      itemBlock.valueConnection_ = input && input.connection.targetConnection;
      i++;
      itemBlock = itemBlock.nextConnection &&
        itemBlock.nextConnection.targetBlock();
    }
  },
  updateShape_: function () {
    // if (this.itemCount_ && this.getInput('EMPTY')) {
    //   this.removeInput('EMPTY')
    // } else if (!this.itemCount_ && !this.getInput('EMPTY')) {
    //   this.appendDummyInput('EMPTY')
    // }
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
  }
};
Blockly.Blocks.link = {
  init: function () {
    this.appendDummyInput()
      .appendField('-- comportamento --');
    this.appendValueInput('conditions')
      .setCheck(['compoundcondition', 'simplecondition'])
      .appendField('quando');
    this.appendStatementInput('actions')
      .setCheck('simpleaction')
      .appendField('faça');
    this.setInputsInline(false);
    this.setColour(260);
    this.setTooltip('');
    this.setHelpUrl('');
    this.contextMenu = false;
  }
};

// user contents

Blockly.Blocks.headset = {
  init: function () {
    this.appendDummyInput()
      .appendField(new Blockly.FieldImage('media/headset.png', 30, 30, '*'))
      .appendField('-- microfone --');
    this.setOutput(true, 'user_content');
    this.setColour(20);
    this.setTooltip('');
    this.setHelpUrl('');
    this.contextMenu = false;
  }
};
Blockly.Blocks['hand-gesture-sensor'] = {
  init: function () {
    this.appendDummyInput()
      .appendField(new Blockly.FieldImage('media/hand-gesture-sensor.png',
        30, 30, '*'))
      .appendField('-- sensor de gestos --');
    this.setOutput(true, 'user_content');
    this.setColour(20);
    this.setTooltip('');
    this.setHelpUrl('');
    this.contextMenu = false;
  }
};

// media contents

Blockly.Blocks.image = {
  init: function () {
    this.appendDummyInput()
      .appendField(new Blockly.FieldImage('media/icon-image.png', 30, 30,
        '*'))
      .appendField('-- imagem --');
    this.setOutput(true, 'media_content');
    this.setColour(120);
    this.setTooltip('');
    this.setHelpUrl('');
    this.contextMenu = false;
  }
};
Blockly.Blocks.ssml = {
  init: function () {
    this.appendDummyInput()
      .appendField(new Blockly.FieldImage('media/ssml.png', 30, 30, '*'))
      .appendField('-- texto para sintetização --');
    this.setColour(120);
    this.itemCount_ = 2;
    this.updateShape_();
    this.setOutput(true, 'media_content');
    this.setMutator(new Blockly.Mutator(['lists_create_with_item']));
    this.contextMenu = false;
  },
  mutationToDom: function () {
    var container = document.createElement('mutation');
    container.setAttribute('items', this.itemCount_);
    return container;
  },
  domToMutation: function (xmlElement) {
    this.itemCount_ = parseInt(xmlElement.getAttribute('items'), 10);
    this.updateShape_();
  },
  decompose: function (workspace) {
    var containerBlock = workspace.newBlock('lists_create_with_container');
    containerBlock.initSvg();
    var connection = containerBlock.getInput('STACK').connection;

    for (var i = 0; i < this.itemCount_; i++) {
      var itemBlock = workspace.newBlock('lists_create_with_item');
      itemBlock.initSvg();
      connection.connect(itemBlock.previousConnection);
      connection = itemBlock.nextConnection;
    }
    return containerBlock;
  },
  compose: function (containerBlock) {
    var itemBlock = containerBlock.getInputTargetBlock('STACK');
    var connections = [];

    while (itemBlock) {
      connections.push(itemBlock.valueConnection_);
      itemBlock = itemBlock.nextConnection &&
        itemBlock.nextConnection.targetBlock();
    }
    this.itemCount_ = connections.length;
    this.updateShape_();
  },
  saveConnections: function (containerBlock) {},
  updateShape_: function () {
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
  }
};
Blockly.Blocks.video = {
  init: function () {
    this.appendDummyInput()
      .appendField(new Blockly.FieldImage('media/icon-video.png', 30, 30,
        '*'))
      .appendField('-- vídeo --');
    this.setColour(120);
    this.itemCount_ = 2;
    this.updateShape_();
    this.setOutput(true, 'media_content');
    this.setMutator(new Blockly.Mutator(['lists_create_with_item']));
    this.contextMenu = false;
  },
  mutationToDom: function () {
    var container = document.createElement('mutation');
    container.setAttribute('items', this.itemCount_);
    return container;
  },
  domToMutation: function (xmlElement) {
    this.itemCount_ = parseInt(xmlElement.getAttribute('items'), 10);
    this.updateShape_();
  },
  decompose: function (workspace) {
    var containerBlock = workspace.newBlock('lists_create_with_container');
    containerBlock.initSvg();
    var connection = containerBlock.getInput('STACK').connection;

    for (var i = 0; i < this.itemCount_; i++) {
      var itemBlock = workspace.newBlock('lists_create_with_item');
      itemBlock.initSvg();
      connection.connect(itemBlock.previousConnection);
      connection = itemBlock.nextConnection;
    }
    return containerBlock;
  },
  compose: function (containerBlock) {
    var itemBlock = containerBlock.getInputTargetBlock('STACK');
    var connections = [];

    while (itemBlock) {
      connections.push(itemBlock.valueConnection_);
      itemBlock = itemBlock.nextConnection &&
        itemBlock.nextConnection.targetBlock();
    }
    this.itemCount_ = connections.length;
    this.updateShape_();
  },
  saveConnections: function (containerBlock) {},
  updateShape_: function () {
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
  }
};

// input contents

Blockly.Blocks.srgs = {
  init: function () {
    this.appendDummyInput()
      .appendField(new Blockly.FieldImage('media/srgs.png', 30, 30, '*'))
      .appendField('-- comandos de voz --');
    this.setColour(120);
    this.itemCount_ = 2;
    this.updateShape_();
    this.setOutput(true, 'input_content');
    this.setMutator(new Blockly.Mutator(['lists_create_with_item']));
    this.contextMenu = false;
  },
  mutationToDom: function () {
    var container = document.createElement('mutation');
    container.setAttribute('items', this.itemCount_);
    return container;
  },
  domToMutation: function (xmlElement) {
    this.itemCount_ = parseInt(xmlElement.getAttribute('items'), 10);
    this.updateShape_();
  },
  decompose: function (workspace) {
    var containerBlock = workspace.newBlock('lists_create_with_container');
    containerBlock.initSvg();
    var connection = containerBlock.getInput('STACK').connection;

    for (var i = 0; i < this.itemCount_; i++) {
      var itemBlock = workspace.newBlock('lists_create_with_item');
      itemBlock.initSvg();
      connection.connect(itemBlock.previousConnection);
      connection = itemBlock.nextConnection;
    }
    return containerBlock;
  },
  compose: function (containerBlock) {
    var itemBlock = containerBlock.getInputTargetBlock('STACK');
    var connections = [];

    while (itemBlock) {
      connections.push(itemBlock.valueConnection_);
      itemBlock = itemBlock.nextConnection &&
        itemBlock.nextConnection.targetBlock();
    }
    this.itemCount_ = connections.length;
    this.updateShape_();
  },
  saveConnections: function (containerBlock) {},
  updateShape_: function () {
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
  }
};

Blockly.Blocks['hand-gesture'] = {
  init: function () {
    this.appendDummyInput()
      .appendField(new Blockly.FieldImage('media/hand-gesture.png', 30, 30,
        '*'))
      .appendField('-- gestures de mão --');
    this.setColour(120);
    this.itemCount_ = 2;
    this.updateShape_();
    this.setOutput(true, 'input_content');
    this.setMutator(new Blockly.Mutator(['lists_create_with_item']));
    this.contextMenu = false;
  },
  mutationToDom: function () {
    var container = document.createElement('mutation');
    container.setAttribute('items', this.itemCount_);
    return container;
  },
  domToMutation: function (xmlElement) {
    this.itemCount_ = parseInt(xmlElement.getAttribute('items'), 10);
    this.updateShape_();
  },
  decompose: function (workspace) {
    var containerBlock = workspace.newBlock('lists_create_with_container');
    containerBlock.initSvg();
    var connection = containerBlock.getInput('STACK').connection;

    for (var i = 0; i < this.itemCount_; i++) {
      var itemBlock = workspace.newBlock('lists_create_with_item');
      itemBlock.initSvg();
      connection.connect(itemBlock.previousConnection);
      connection = itemBlock.nextConnection;
    }
    return containerBlock;
  },
  compose: function (containerBlock) {
    var itemBlock = containerBlock.getInputTargetBlock('STACK');
    var connections = [];

    while (itemBlock) {
      connections.push(itemBlock.valueConnection_);
      itemBlock = itemBlock.nextConnection &&
        itemBlock.nextConnection.targetBlock();
    }
    this.itemCount_ = connections.length;
    this.updateShape_();
  },
  saveConnections: function (containerBlock) {},
  updateShape_: function () {
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
  }
};

// conditions

Blockly.Blocks.onbegin = {
  init: function () {
    this.appendDummyInput()
      .appendField(new Blockly.FieldImage('media/icon-bind-onbegin.png', 15,
        15, '*'))
      .appendField('inciar')
      .appendField(new Blockly.FieldDropdown(getMediaIds), 'NAME');
    this.setInputsInline(false);
    this.setOutput(true, 'simplecondition');
    this.setColour(260);
    this.setTooltip('');
    this.setHelpUrl('');
    this.contextMenu = false;
  }
};
Blockly.Blocks.onend = {
  init: function () {
    this.appendDummyInput()
      .appendField(new Blockly.FieldImage('media/icon-bind-onend.png', 15,
        15, '*'))
      .appendField('terminar')
      .appendField(new Blockly.FieldDropdown(getMediaIds), 'NAME');
    this.setInputsInline(false);
    this.setOutput(true, 'simplecondition');
    this.setColour(260);
    this.setTooltip('');
    this.setHelpUrl('');
    this.contextMenu = false;
  }
};
Blockly.Blocks.onpause = {
  init: function () {
    this.appendDummyInput()
      .appendField(new Blockly.FieldImage('media/icon-bind-onpause.png', 15,
        15, '*'))
      .appendField('pausar')
      .appendField(new Blockly.FieldDropdown(getMediaIds), 'NAME');
    this.setInputsInline('pause');
    this.setOutput(true, 'simplecondition');
    this.setColour(260);
    this.setTooltip('');
    this.setHelpUrl('');
    this.contextMenu = false;
  }
};
Blockly.Blocks.onresume = {
  init: function () {
    this.appendDummyInput()
      .appendField(new Blockly.FieldImage('media/icon-bind-onresume.png',
        15, 15, '*'))
      .appendField('resumir')
      .appendField(new Blockly.FieldDropdown(getMediaIds), 'NAME');
    this.setInputsInline(false);
    this.setOutput(true, 'simplecondition');
    this.setColour(260);
    this.setTooltip('');
    this.setHelpUrl('');
    this.contextMenu = false;
  }
};
Blockly.Blocks.onselection = {
  init: function () {
    this.appendDummyInput()
      .appendField(new Blockly.FieldImage('media/icon-bind-onselection.png',
        15, 15, '*'))
      .appendField('selecionar')
      .appendField(new Blockly.FieldDropdown(getMediaIds), 'NAME');
    this.setInputsInline(false);
    this.setOutput(true, 'simplecondition');
    this.setColour(260);
    this.setTooltip('');
    this.setHelpUrl('');
    this.contextMenu = false;
  }
};
Blockly.Blocks.onrecognize = {
  init: function () {
    this.appendDummyInput()
      .appendField(new Blockly.FieldImage('media/icon-bind-onselection.png',
        15, 15, '*'))
      .appendField('reconhecer')
      .appendField(new Blockly.FieldDropdown(getinputIds), 'NAME');
    this.setInputsInline(false);
    this.setOutput(true, 'simplecondition');
    this.setColour(260);
    this.setTooltip('');
    this.setHelpUrl('');
    this.contextMenu = false;
  }
};
Blockly.Blocks.onrecognizeuser = {
  init: function () {
    this.appendDummyInput()
      .appendField(new Blockly.FieldImage('media/icon-bind-onselection.png',
        15, 15, '*'))
      .appendField('reconhecer')
      .appendField(new Blockly.FieldDropdown(getinputIds), 'NAME')
      .appendField(' do usuário')
      .appendField(new Blockly.FieldDropdown(getuserIds), 'NAME');
    this.setInputsInline(false);
    this.setOutput(true, 'simplecondition');
    this.setColour(260);
    this.setTooltip('');
    this.setHelpUrl('');
    this.contextMenu = false;
  }
};
Blockly.Blocks.compoundcondition = {
  init: function () {
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
    this.setMutator(new Blockly.Mutator(['lists_create_with_item']));
    this.contextMenu = false;
  },
  mutationToDom: function () {
    var container = document.createElement('mutation');
    container.setAttribute('items', this.itemCount_);
    return container;
  },
  domToMutation: function (xmlElement) {
    this.itemCount_ = parseInt(xmlElement.getAttribute('items'), 10);
    this.updateShape_();
  },
  decompose: function (workspace) {
    var containerBlock = workspace.newBlock('lists_create_with_container');
    containerBlock.initSvg();
    var connection = containerBlock.getInput('STACK').connection;

    for (var i = 0; i < this.itemCount_; i++) {
      var itemBlock = workspace.newBlock('lists_create_with_item');
      itemBlock.initSvg();
      connection.connect(itemBlock.previousConnection);
      connection = itemBlock.nextConnection;
    }
    return containerBlock;
  },
  compose: function (containerBlock) {
    var itemBlock = containerBlock.getInputTargetBlock('STACK');
    var connections = [];

    while (itemBlock) {
      connections.push(itemBlock.valueConnection_);
      itemBlock = itemBlock.nextConnection &&
        itemBlock.nextConnection.targetBlock();
    }
    // Disconnect any children that don't belong.
    for (var i = 0; i < this.itemCount_; i++) {
      var connection = this.getInput('ADD' + i).connection.targetConnection;
      if (connection && connections.indexOf(connection) == -1) {
        connection.disconnect();
      }
    }
    this.itemCount_ = connections.length;
    this.updateShape_();
    // Reconnect any child blocks.
    for (i = 0; i < this.itemCount_; i++) {
      Blockly.Mutator.reconnect(connections[i], this, 'ADD' + i);
    }
  },
  saveConnections: function (containerBlock) {
    var itemBlock = containerBlock.getInputTargetBlock('STACK');
    var i = 0;

    while (itemBlock) {
      var input = this.getInput('ADD' + i);
      itemBlock.valueConnection_ = input && input.connection.targetConnection;
      i++;
      itemBlock = itemBlock.nextConnection &&
        itemBlock.nextConnection.targetBlock();
    }
  },
  updateShape_: function () {
    if (this.itemCount_ && this.getInput('EMPTY')) {
      this.removeInput('EMPTY');
    } else if (!this.itemCount_ && !this.getInput('EMPTY')) {
      this.appendDummyInput('EMPTY');
    }
    // Add new inputs.
    for (var i = 0; i < this.itemCount_; i++) {
      if (!this.getInput('ADD' + i)) {
        this.appendValueInput('ADD' + i);
      }
    }
    // Remove deleted inputs.
    while (this.getInput('ADD' + i)) {
      this.removeInput('ADD' + i);
      i++;
    }
  }
};

// actions

Blockly.Blocks.start = {
  init: function () {
    this.appendDummyInput()
      .appendField(new Blockly.FieldImage('media/icon-bind-start.png', 15,
        15, '*'))
      .appendField('inicie')
      .appendField(new Blockly.FieldDropdown(getMediaIds), 'NAME');
    this.setInputsInline(false);
    this.setPreviousStatement(true, 'simpleaction');
    this.setNextStatement(true, 'simpleaction');
    this.setColour(230);
    this.setTooltip('');
    this.setHelpUrl('');
    this.contextMenu = false;
  }
};
Blockly.Blocks.stop = {
  init: function () {
    this.appendDummyInput()
      .appendField(new Blockly.FieldImage('media/icon-bind-stop.png', 15,
        15, '*'))
      .appendField('pare')
      .appendField(new Blockly.FieldDropdown(getMediaIds), 'NAME');
    this.setPreviousStatement(true, 'simpleaction');
    this.setNextStatement(true, 'simpleaction');
    this.setColour(230);
    this.setTooltip('');
    this.setHelpUrl('');
    this.contextMenu = false;
  }
};
Blockly.Blocks.pause = {
  init: function () {
    this.appendDummyInput()
      .appendField(new Blockly.FieldImage('media/icon-bind-pause.png', 15,
        15, '*'))
      .appendField('pause')
      .appendField(new Blockly.FieldDropdown(getMediaIds), 'NAME');
    this.setPreviousStatement(true, 'simpleaction');
    this.setNextStatement(true, 'simpleaction');
    this.setColour(230);
    this.setTooltip('');
    this.setHelpUrl('');
    this.contextMenu = false;
  }
};
Blockly.Blocks.resume = {
  init: function () {
    this.appendDummyInput()
      .appendField(new Blockly.FieldImage('media/icon-bind-resume.png', 15,
        15, '*'))
      .appendField('resuma')
      .appendField(new Blockly.FieldDropdown(getMediaIds), 'NAME');
    this.setInputsInline(false);
    this.setPreviousStatement(true, 'simpleaction');
    this.setNextStatement(true, 'simpleaction');
    this.setColour(230);
    this.setTooltip('');
    this.setHelpUrl('');
    this.contextMenu = false;
  }
};
Blockly.Blocks.set = {
  init: function () {
    this.appendDummyInput()
      .appendField(new Blockly.FieldImage('media/icon-bind-set.png', 15, 15,
        '*'))
      .appendField('atribua')
      .appendField(new Blockly.FieldDropdown(getMediaIds), 'NAME')
      .appendField('=')
      .appendField(new Blockly.FieldTextInput(''), 'value');
    this.setInputsInline(false);
    this.setPreviousStatement(true, 'simpleaction');
    this.setNextStatement(true, 'simpleaction');
    this.setColour(230);
    this.setTooltip('');
    this.setHelpUrl('');
    this.contextMenu = false;
  }
};
