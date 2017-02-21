goog.require('Blockly.Blocks');

// media_interfaces
var media_interfaces = [
  ['-', '-']
];
var input_interfaces = [
  ['-', '-']
];

function media_interfaces() {
  return media_interfaces;
}

function input_interfaces() {
  return input_interfaces;
}

function users_options() {
  return media_interfaces;
}

function media_interfaces_validate(text) {
  if (text == '') return null;
  for (var i in media_interfaces)
    if (media_interfaces[i][0] == text)
      return null;
}

function input_interfaces_validate(text) {
  if (text == '') return null;
  for (var i in input_interfaces)
    if (input_interfaces[i][0] == text)
      return null;
}

Blockly.NclMediaFieldText = function (text, opt_validator) {
  Blockly.NclMediaFieldText.superClass_.constructor.call(this, text,
    opt_validator);
};
goog.inherits(Blockly.NclMediaFieldText, Blockly.FieldTextInput);
Blockly.NclMediaFieldText.prototype.onFinishEditing_ = function (text) {
  media_interfaces.push([text, text]);
  console.log("add media interface " + text);
};

Blockly.NclInputFieldText = function (text, opt_validator) {
  Blockly.NclInputFieldText.superClass_.constructor.call(this, text,
    opt_validator);
};
goog.inherits(Blockly.NclInputFieldText, Blockly.FieldTextInput);
Blockly.NclInputFieldText.prototype.onFinishEditing_ = function (text) {
  input_interfaces.push([text, text]);
  console.log("add input interface = " + text);
};

// entities
Blockly.Blocks['media'] = {
  init: function () {
    this.appendDummyInput()
      .appendField("-- mídia --");
    this.appendValueInput("src")
      .appendField("id=")
      .appendField(new Blockly.NclMediaFieldText("",
        media_interfaces_validate))
      .setCheck("media_content")
      .appendField("e conteúdo=");
    this.setInputsInline(false);
    this.setColour(120);
    this.setTooltip('Modalidade de saida');
    this.setHelpUrl('');
    this.contextMenu = false;
  }
};

Blockly.Blocks['input'] = {
  init: function () {
    this.appendDummyInput()
      .appendField("--  reconhecedor -- ");
    this.appendValueInput("src")
      .setCheck("input_content")
      .appendField("id=")
      .appendField(new Blockly.NclInputFieldText("",
        input_interfaces_validate))
      .appendField("e conteúdo=");
    this.setInputsInline(false);
    this.setColour(120);
    this.setTooltip('Modalidade de entrada');
    this.setHelpUrl('');
    this.contextMenu = false;
  }
};
Blockly.Blocks['user'] = {
  init: function () {
    this.appendDummyInput()
      .appendField("-- usuário --");
    this.appendValueInput('ADD0')
      .appendField("id=")
      .appendField(new Blockly.FieldTextInput(""), "id")
      .setCheck('user_content')
      .appendField("e dispositivos=");
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
      if (connection && connections.indexOf(connection) == -1) {
        connection.disconnect();
      }
    }
    this.itemCount_ = connections.length;
    this.updateShape_();
    // Reconnect any child blocks.
    for (var i = 0; i < this.itemCount_; i++) {
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
    // if (this.itemCount_ && this.getInput('EMPTY')) {
    //   this.removeInput('EMPTY');
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
Blockly.Blocks['link'] = {
  init: function () {
    this.appendDummyInput()
      .appendField("-- comportamento --");
    this.appendValueInput("conditions")
      .setCheck(["compoundcondition", "simplecondition"])
      .appendField("quando");
    this.appendStatementInput("actions")
      .setCheck("simpleaction")
      .appendField("faça");
    this.setInputsInline(false);
    this.setColour(260);
    this.setTooltip('');
    this.setHelpUrl('');
    this.contextMenu = false;
  }
};

// user contents

Blockly.Blocks['headset'] = {
  init: function () {
    this.appendDummyInput()
      .appendField(new Blockly.FieldImage("media/headset.png", 30, 30, "*"))
      .appendField("-- microfone --");
    this.setOutput(true, "user_content");
    this.setColour(20);
    this.setTooltip('');
    this.setHelpUrl('');
    this.contextMenu = false;
  }
};
Blockly.Blocks['hand-gesture-sensor'] = {
  init: function () {
    this.appendDummyInput()
      .appendField(new Blockly.FieldImage("media/hand-gesture-sensor.png",
        30, 30, "*"))
      .appendField("-- sensor de gestos --");
    this.setOutput(true, "user_content");
    this.setColour(20);
    this.setTooltip('');
    this.setHelpUrl('');
    this.contextMenu = false;
  }
};

// media contents

Blockly.Blocks['image'] = {
  init: function () {
    this.appendDummyInput()
      .appendField(new Blockly.FieldImage("media/icon-image.png", 30, 30,
        "*"))
      .appendField("-- imagem --");
    this.setOutput(true, "media_content");
    this.setColour(120);
    this.setTooltip('');
    this.setHelpUrl('');
    this.contextMenu = false;
  }
};
Blockly.Blocks['ssml'] = {
  init: function () {
    this.appendDummyInput()
      .appendField(new Blockly.FieldImage("media/ssml.png", 30, 30, "*"))
      .appendField("-- texto para sintetização --");
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
      this.appendDummyInput('EMPTY')
    }
    for (var i = 0; i < this.itemCount_; i++) {
      if (!this.getInput('ADD' + i)) {
        this.appendDummyInput('ADD' + i)
          .appendField("id=")
          .appendField(new Blockly.NclMediaFieldText("",
            media_interfaces_validate))
          .appendField("sintetiza frase")
          .appendField(new Blockly.FieldTextInput(''), "")
      }
    }
    while (this.getInput('ADD' + i)) {
      this.removeInput('ADD' + i);
      i++;
    }
  }
};
Blockly.Blocks['video'] = {
  init: function () {
    this.appendDummyInput()
      .appendField(new Blockly.FieldImage("media/icon-video.png", 30, 30,
        "*"))
      .appendField("-- vídeo --");
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
      this.appendDummyInput('EMPTY')
    }
    for (var i = 0; i < this.itemCount_; i++) {
      if (!this.getInput('ADD' + i)) {
        this.appendDummyInput('ADD' + i)
          .appendField("id=")
          .appendField(new Blockly.NclMediaFieldText("",
            media_interfaces_validate))
          .appendField("define trecho de inicio")
          .appendField(new Blockly.FieldNumber(0, 0), "begin")
          .appendField("s e fim")
          .appendField(new Blockly.FieldNumber(0, 0), "end")
          .appendField("s");
      }
    }
    while (this.getInput('ADD' + i)) {
      this.removeInput('ADD' + i);
      i++;
    }
  }
};

// input contents

Blockly.Blocks['srgs'] = {
  init: function () {
    this.appendDummyInput()
      .appendField(new Blockly.FieldImage("media/srgs.png", 30, 30, "*"))
      .appendField("-- comandos de voz --");
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
      this.appendDummyInput('EMPTY')
    }
    for (var i = 0; i < this.itemCount_; i++) {
      if (!this.getInput('ADD' + i)) {
        this.appendDummyInput('ADD' + i)
          .appendField("id=")
          .appendField(new Blockly.NclInputFieldText("",
            input_interfaces_validate))
          .appendField("reconhece frase")
          .appendField(new Blockly.FieldTextInput(''), "")
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
      .appendField(new Blockly.FieldImage("media/hand-gesture.png", 30, 30,
        "*"))
      .appendField("-- gestures de mão --");
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
      this.appendDummyInput('EMPTY')
    }
    for (var i = 0; i < this.itemCount_; i++) {
      if (!this.getInput('ADD' + i)) {
        this.appendDummyInput('ADD' + i)
          .appendField("id=")
          .appendField(new Blockly.FieldTextInput(""), "id=")
          .appendField("reconhece gesto")
          .appendField(new Blockly.FieldTextInput(''), "")
      }
    }
    while (this.getInput('ADD' + i)) {
      this.removeInput('ADD' + i);
      i++;
    }
  }
};

// conditions

Blockly.Blocks['onbegin'] = {
  init: function () {
    this.appendDummyInput()
      .appendField(new Blockly.FieldImage("media/icon-bind-onbegin.png", 15,
        15, "*"))
      .appendField("inciar")
      .appendField(new Blockly.FieldDropdown(media_interfaces), "NAME");
    this.setInputsInline(false);
    this.setOutput(true, "simplecondition");
    this.setColour(260);
    this.setTooltip('');
    this.setHelpUrl('');
    this.contextMenu = false;
  }
};
Blockly.Blocks['onend'] = {
  init: function () {
    this.appendDummyInput()
      .appendField(new Blockly.FieldImage("media/icon-bind-onend.png", 15,
        15, "*"))
      .appendField("terminar")
      .appendField(new Blockly.FieldDropdown(media_interfaces), "NAME");
    this.setInputsInline(false);
    this.setOutput(true, "simplecondition");
    this.setColour(260);
    this.setTooltip('');
    this.setHelpUrl('');
    this.contextMenu = false;
  }
};
Blockly.Blocks['onpause'] = {
  init: function () {
    this.appendDummyInput()
      .appendField(new Blockly.FieldImage("media/icon-bind-onpause.png", 15,
        15, "*"))
      .appendField("pausar")
      .appendField(new Blockly.FieldDropdown(media_interfaces), "NAME");
    this.setInputsInline('pause');
    this.setOutput(true, "simplecondition");
    this.setColour(260);
    this.setTooltip('');
    this.setHelpUrl('');
    this.contextMenu = false;
  }
};
Blockly.Blocks['onresume'] = {
  init: function () {
    this.appendDummyInput()
      .appendField(new Blockly.FieldImage("media/icon-bind-onresume.png",
        15, 15, "*"))
      .appendField("resumir")
      .appendField(new Blockly.FieldDropdown(media_interfaces), "NAME");
    this.setInputsInline(false);
    this.setOutput(true, "simplecondition");
    this.setColour(260);
    this.setTooltip('');
    this.setHelpUrl('');
    this.contextMenu = false;
  }
};
Blockly.Blocks['onselection'] = {
  init: function () {
    this.appendDummyInput()
      .appendField(new Blockly.FieldImage("media/icon-bind-onselection.png",
        15, 15, "*"))
      .appendField("selecionar")
      .appendField(new Blockly.FieldDropdown(media_interfaces), "NAME");
    this.setInputsInline(false);
    this.setOutput(true, "simplecondition");
    this.setColour(260);
    this.setTooltip('');
    this.setHelpUrl('');
    this.contextMenu = false;
  }
};
Blockly.Blocks['onrecognize'] = {
  init: function () {
    this.appendDummyInput()
      .appendField(new Blockly.FieldImage("media/icon-bind-onselection.png",
        15, 15, "*"))
      .appendField("reconhecer")
      .appendField(new Blockly.FieldDropdown(input_interfaces), "NAME");
    this.setInputsInline(false);
    this.setOutput(true, "simplecondition");
    this.setColour(260);
    this.setTooltip('');
    this.setHelpUrl('');
    this.contextMenu = false;
  }
};
Blockly.Blocks['onrecognizeuser'] = {
  init: function () {
    this.appendDummyInput()
      .appendField(new Blockly.FieldImage("media/icon-bind-onselection.png",
        15, 15, "*"))
      .appendField("reconhecer")
      .appendField(new Blockly.FieldDropdown(input_interfaces), "NAME")
      .appendField(" do usuário")
      .appendField(new Blockly.FieldDropdown(users_options), "NAME");
    this.setInputsInline(false);
    this.setOutput(true, "simplecondition");
    this.setColour(260);
    this.setTooltip('');
    this.setHelpUrl('');
    this.contextMenu = false;
  }
};
Blockly.Blocks['compoundcondition'] = {
  init: function () {
    this.appendDummyInput()
      .appendField(
        new Blockly.FieldDropdown([
          ["em sequencia", "seq"],
          ["todos entre", "and"],
          ["qualquer entre", "or"]
        ]),
        "operator")
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
    for (var i = 0; i < this.itemCount_; i++) {
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
      this.appendDummyInput('EMPTY')
    }
    // Add new inputs.
    for (var i = 0; i < this.itemCount_; i++) {
      if (!this.getInput('ADD' + i)) {
        var input = this.appendValueInput('ADD' + i);
      }
    }
    // Remove deleted inputs.
    while (this.getInput('ADD' + i)) {
      this.removeInput('ADD' + i);
      i++;
    }
  }
};

// action

Blockly.Blocks['start'] = {
  init: function () {
    this.appendDummyInput()
      .appendField(new Blockly.FieldImage("media/icon-bind-start.png", 15,
        15, "*"))
      .appendField("inicie")
      .appendField(new Blockly.FieldDropdown(media_interfaces), "NAME");
    this.setInputsInline(false);
    this.setPreviousStatement(true, "simpleaction");
    this.setNextStatement(true, "simpleaction");
    this.setColour(230);
    this.setTooltip('');
    this.setHelpUrl('');
    this.contextMenu = false;
  }
};
Blockly.Blocks['stop'] = {
  init: function () {
    this.appendDummyInput()
      .appendField(new Blockly.FieldImage("media/icon-bind-stop.png", 15,
        15, "*"))
      .appendField("pare")
      .appendField(new Blockly.FieldDropdown(media_interfaces), "NAME");
    this.setPreviousStatement(true, "simpleaction");
    this.setNextStatement(true, "simpleaction");
    this.setColour(230);
    this.setTooltip('');
    this.setHelpUrl('');
    this.contextMenu = false;
  }
};
Blockly.Blocks['pause'] = {
  init: function () {
    this.appendDummyInput()
      .appendField(new Blockly.FieldImage("media/icon-bind-pause.png", 15,
        15, "*"))
      .appendField("pause")
      .appendField(new Blockly.FieldDropdown(media_interfaces), "NAME");
    this.setInputsInline('pause');
    this.setPreviousStatement(true, "simpleaction");
    this.setNextStatement(true, "simpleaction");
    this.setColour(230);
    this.setTooltip('');
    this.setHelpUrl('');
    this.contextMenu = false;
  }
};
Blockly.Blocks['resume'] = {
  init: function () {
    this.appendDummyInput()
      .appendField(new Blockly.FieldImage("media/icon-bind-resume.png", 15,
        15, "*"))
      .appendField("resuma")
      .appendField(new Blockly.FieldDropdown(media_interfaces), "NAME");
    this.setInputsInline(false);
    this.setPreviousStatement(true, "simpleaction");
    this.setNextStatement(true, "simpleaction");
    this.setColour(230);
    this.setTooltip('');
    this.setHelpUrl('');
    this.contextMenu = false;
  }
};
Blockly.Blocks['set'] = {
  init: function () {
    this.appendDummyInput()
      .appendField(new Blockly.FieldImage("media/icon-bind-set.png", 15, 15,
        "*"))
      .appendField("atribua")
      .appendField(new Blockly.FieldDropdown(media_interfaces), "NAME")
      .appendField("=")
      .appendField(new Blockly.FieldTextInput(""), "value")
    this.setInputsInline(false);
    this.setPreviousStatement(true, "simpleaction");
    this.setNextStatement(true, "simpleaction");
    this.setColour(230);
    this.setTooltip('');
    this.setHelpUrl('');
    this.contextMenu = false;
  }
};
