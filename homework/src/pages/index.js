import React, { Component } from 'react'
import {Button} from 'antd';
import Link from 'umi/link';
class Menu extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }
  render() { 
    return ( 
      <div>
         <Button type="primary">
            <Link to="/test1">Test1</Link>
          </Button>
          <Button type="primary">
            <Link to="/test2">Test2</Link>
          </Button>
      </div>
     );
  }
}
 
export default Menu;

