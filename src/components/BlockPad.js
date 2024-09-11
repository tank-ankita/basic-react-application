import React, { useEffect, useRef } from 'react';

import Theme from '@blockly/theme-modern';
import * as Blockly from 'blockly/core';
import 'blockly/javascript';
import 'blockly/blocks';
import { javascriptGenerator } from 'blockly/javascript';
import * as En from 'blockly/msg/en';

import { toolbarConfig, toolbarBlocksDefinitions } from '../constants/toolbar'
Blockly.setLocale(En);

const BlockPad = () => {
  const blocklyDiv = useRef();
  let workspaceRef = useRef();
  
  const generateCode = () => {
    var code = javascriptGenerator.workspaceToCode(Blockly.getMainWorkspace().current);
    console.log(code);
  };

  useEffect(() => {
    const theme = Theme;
    const toolbar =  toolbarConfig;

    toolbarBlocksDefinitions(Blockly);
    workspaceRef.current = Blockly.inject(blocklyDiv.current, {
      toolbox: toolbar,
      theme: theme,
      zoom: {
        controls: true,
        wheel: true,
      },
      grid: {
        spacing: 20,
        length: 3,
        colour: '#ccc',
        snap: true
      },
      trashcan: true,
      move: true
    });
  }, []);

  return (
    // TODO: issue here that it is being rendered twice
    
    <div style={{ height: '100vh', display: 'flex', flexDirection: 'column' }}>
      <div style={{ height: '5%', display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '10px' }}>
        <button style={{ padding: '10px 20px' }} onClick={generateCode}>Generate Code</button>
        <button style={{ padding: '10px 20px' }} onClick={() => console.log('Button 2 clicked')}>Button 2</button>
      </div>
      
      <div
        ref={blocklyDiv}
        style={{ height: '95%', width: '100%', backgroundColor: '#ffffff', border: '1px solid #ccc' }}
      />
    </div>
    
  );
};

export default BlockPad;
