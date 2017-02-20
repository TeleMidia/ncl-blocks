goog.require('Blockly.Blocks');

// media_interfaces
var media_interfaces = ['media1', 'media2', 'anchor1'];
var input_interfaces = ['input1', 'input2', 'anchor2'];

function media_interfaces_options() {
  var options = [];
  for (var i = 0; i < media_interfaces.length; i++) {
    options.push([String(media_interfaces[i]), 'media_interface' + i]);
  }
  return options;
}

function input_interfaces_options() {
  var options = [];
  for (var i = 0; i < media_interfaces.length; i++) {
    options.push([String(input_interfaces[i]), 'media_interface' + i]);
  }
  return options;
}

// entities

Blockly.Blocks['media'] = {
  init: function () {
    this.appendDummyInput()
      .setAlign(Blockly.ALIGN_CENTRE)
      .appendField("-- mídia --");
    this.appendDummyInput()
      .appendField("id=")
      .appendField(new Blockly.FieldTextInput(""), "id=");
    this.appendValueInput("src")
      .setCheck("media_content")
      .appendField("conteúdo");
    this.setInputsInline(false);
    this.setColour(120);
    this.setTooltip('Modalidade de saida');
    this.setHelpUrl('');
  }
};
Blockly.Blocks['input'] = {
  init: function () {
    this.appendDummyInput()
      .setAlign(Blockly.ALIGN_CENTRE)
      .appendField("--  reconhecedor -- ");
    this.appendDummyInput()
      .appendField("id=")
      .appendField(new Blockly.FieldTextInput(""), "id=");
    this.appendValueInput("src")
      .setCheck("input_content")
      .appendField("conteúdo");
    this.setInputsInline(false);
    this.setColour(120);
    this.setTooltip('Modalidade de entrada');
    this.setHelpUrl('');
  }
};
Blockly.Blocks['user'] = {
  init: function () {
    this.appendDummyInput()
      .setAlign(Blockly.ALIGN_CENTRE)
      .appendField("-- usuário --");
    this.appendDummyInput()
      .appendField("id=")
      .appendField(new Blockly.FieldTextInput(""), "id=");
    this.setColour(20);
    this.itemCount_ = 2;
    this.updateShape_();
    this.setMutator(new Blockly.Mutator(['lists_create_with_item']));
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
    if (this.itemCount_ && this.getInput('EMPTY')) {
      this.removeInput('EMPTY');
    } else if (!this.itemCount_ && !this.getInput('EMPTY')) {
      this.appendDummyInput('EMPTY')
    }
    if(this.itemCount_ == 0)
    this.appendDummyInput("NAME")
      .appendField("dispositivos");
    // Add new inputs.
    for (var i = 0; i < this.itemCount_; i++) {
      if (!this.getInput('ADD' + i)) {
        var input = this.appendValueInput('ADD' + i);
        input.setCheck('user_content');
        if(i == 0)
          input.appendField("dispositivos");
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
      .setAlign(Blockly.ALIGN_CENTRE)
      .appendField("--comportamento--");
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
  }
};

// user contents

Blockly.Blocks['headset'] = {
  init: function () {
    this.appendDummyInput()
      .appendField(new Blockly.FieldImage("media/headset.png", 30, 30, "*"));
    this.setOutput(true, "user_content");
    this.setColour(20);
    this.setTooltip('');
    this.setHelpUrl('');
  }
};
Blockly.Blocks['finger-pointer'] = {
  init: function () {
    this.appendDummyInput()
      .appendField(new Blockly.FieldImage("media/leap.png", 30, 30, "*"));
    this.setOutput(true, "user_content");
    this.setColour(20);
    this.setTooltip('');
    this.setHelpUrl('');
  }
};

// media contents

Blockly.Blocks['image'] = {
  init: function () {
    this.appendDummyInput()
      .appendField(new Blockly.FieldImage("media/icon-image.png", 30, 30, "*"))
      .appendField("-- imagem --");
    this.setOutput(true, "media_content");
    this.setColour(120);
    this.setTooltip('');
    this.setHelpUrl('');
  }
};
Blockly.Blocks['ssml'] = {
  init: function () {
    this.appendDummyInput()
      .appendField(new Blockly.FieldImage("media/ssml.png", 30, 30, "*"))
      .appendField("-- texto para sintetização --");
    this.setColour(120);
    this.itemCount_ = 1;
    this.updateShape_();
    this.setOutput(true, 'media_content');
    this.setMutator(new Blockly.Mutator(['lists_create_with_item']));
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
          .appendField("trecho id=")
          .appendField(new Blockly.FieldTextInput(""), "id=")
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
      .appendField(new Blockly.FieldImage("media/icon-video.png", 30, 30, "*"))
      .appendField("-- vídeo --");
    this.setColour(120);
    this.itemCount_ = 1;
    this.updateShape_();
    this.setOutput(true, 'media_content');
    this.setMutator(new Blockly.Mutator(['lists_create_with_item']));
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
          .appendField("trecho id=")
          .appendField(new Blockly.FieldTextInput(""), "id=")
          .appendField("inicia em")
          .appendField(new Blockly.FieldNumber(0, 0), "begin")
          .appendField("e termina em")
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
    this.itemCount_ = 1;
    this.updateShape_();
    this.setOutput(true, 'input_content');
    this.setMutator(new Blockly.Mutator(['lists_create_with_item']));
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
          .appendField("trecho id=")
          .appendField(new Blockly.FieldTextInput(""), "id=")
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

// conditions

Blockly.Blocks['onbegin'] = {
  init: function () {
    this.appendDummyInput()
      .appendField(new Blockly.FieldImage("media/icon-bind-onbegin.png", 15, 15, "*"))
      .appendField("inciar")
      .appendField(new Blockly.FieldDropdown(media_interfaces_options), "NAME");
    this.setInputsInline(false);
    this.setOutput(true, "simplecondition");
    this.setColour(260);
    this.setTooltip('');
    this.setHelpUrl('');
  }
};
Blockly.Blocks['onend'] = {
  init: function () {
    this.appendDummyInput()
      .appendField(new Blockly.FieldImage("media/icon-bind-onend.png", 15, 15, "*"))
      .appendField("terminar")
      .appendField(new Blockly.FieldDropdown(media_interfaces_options), "NAME");
    this.setInputsInline(false);
    this.setOutput(true, "simplecondition");
    this.setColour(260);
    this.setTooltip('');
    this.setHelpUrl('');
  }
};
Blockly.Blocks['onpause'] = {
  init: function () {
    this.appendDummyInput()
      .appendField(new Blockly.FieldImage("media/icon-bind-onpause.png", 15, 15, "*"))
      .appendField("pausar")
      .appendField(new Blockly.FieldDropdown(media_interfaces_options), "NAME");
    this.setInputsInline('pause');
    this.setOutput(true, "simplecondition");
    this.setColour(260);
    this.setTooltip('');
    this.setHelpUrl('');
  }
};
Blockly.Blocks['onresume'] = {
  init: function () {
    this.appendDummyInput()
      .appendField(new Blockly.FieldImage("media/icon-bind-onresume.png", 15, 15, "*"))
      .appendField("resumir")
      .appendField(new Blockly.FieldDropdown(media_interfaces_options), "NAME");
    this.setInputsInline(false);
    this.setOutput(true, "simplecondition");
    this.setColour(260);
    this.setTooltip('');
    this.setHelpUrl('');
  }
};
Blockly.Blocks['onselection'] = {
  init: function () {
    this.appendDummyInput()
      .appendField(new Blockly.FieldImage("media/icon-bind-onselection.png", 15, 15, "*"))
      .appendField("selecionar")
      .appendField(new Blockly.FieldDropdown(media_interfaces_options), "NAME");
    this.setInputsInline(false);
    this.setOutput(true, "simplecondition");
    this.setColour(260);
    this.setTooltip('');
    this.setHelpUrl('');
  }
};
Blockly.Blocks['onrecognize'] = {
  init: function () {
    this.appendDummyInput()
      .appendField(new Blockly.FieldImage("media/icon-bind-onselection.png", 15, 15, "*"))
      .appendField("reconhecer")
      .appendField(new Blockly.FieldDropdown(input_interfaces_options), "NAME");
    this.setInputsInline(false);
    this.setOutput(true, "simplecondition");
    this.setColour(260);
    this.setTooltip('');
    this.setHelpUrl('');
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
      .appendField(new Blockly.FieldImage("media/icon-bind-start.png", 15, 15, "*"))
      .appendField("inicie")
      .appendField(new Blockly.FieldDropdown(media_interfaces_options), "NAME");
    this.setInputsInline(false);
    this.setPreviousStatement(true, "simpleaction");
    this.setNextStatement(true, "simpleaction");
    this.setColour(230);
    this.setTooltip('');
    this.setHelpUrl('');
  }
};
Blockly.Blocks['stop'] = {
  init: function () {
    this.appendDummyInput()
      .appendField(new Blockly.FieldImage("media/icon-bind-stop.png", 15, 15, "*"))
      .appendField("pare")
      .appendField(new Blockly.FieldDropdown(media_interfaces_options), "NAME");
    this.setPreviousStatement(true, "simpleaction");
    this.setNextStatement(true, "simpleaction");
    this.setColour(230);
    this.setTooltip('');
    this.setHelpUrl('');
  }
};
Blockly.Blocks['pause'] = {
  init: function () {
    this.appendDummyInput()
      .appendField(new Blockly.FieldImage("media/icon-bind-pause.png", 15, 15, "*"))
      .appendField("pause")
      .appendField(new Blockly.FieldDropdown(media_interfaces_options), "NAME");
    this.setInputsInline('pause');
    this.setPreviousStatement(true, "simpleaction");
    this.setNextStatement(true, "simpleaction");
    this.setColour(230);
    this.setTooltip('');
    this.setHelpUrl('');
  }
};
Blockly.Blocks['resume'] = {
  init: function () {
    this.appendDummyInput()
      .appendField(new Blockly.FieldImage("media/icon-bind-resume.png", 15, 15, "*"))
      .appendField("resuma")
      .appendField(new Blockly.FieldDropdown(media_interfaces_options), "NAME");
    this.setInputsInline(false);
    this.setPreviousStatement(true, "simpleaction");
    this.setNextStatement(true, "simpleaction");
    this.setColour(230);
    this.setTooltip('');
    this.setHelpUrl('');
  }
};
Blockly.Blocks['set'] = {
  init: function () {
    this.appendDummyInput()
      .appendField(new Blockly.FieldImage("media/icon-bind-set.png", 15, 15, "*"))
      .appendField("atribua")
      .appendField(new Blockly.FieldDropdown(media_interfaces_options), "NAME")
      .appendField("=")
      .appendField(new Blockly.FieldTextInput(""), "value")
    this.setInputsInline(false);
    this.setPreviousStatement(true, "simpleaction");
    this.setNextStatement(true, "simpleaction");
    this.setColour(230);
    this.setTooltip('');
    this.setHelpUrl('');
  }
};
