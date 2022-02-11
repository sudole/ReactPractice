import React, { Component } from 'react';

class TextBoxOnChangeEventHandler extends Component {
  constructor() {
    super();
    this.state = {
    };
  }
  
  render() {
    return (
        <>
          <input type="text" placeholder="아이디" />
          <hr />
          아이디: 
        </>
      );
  }
}

export default TextBoxOnChangeEventHandler;
