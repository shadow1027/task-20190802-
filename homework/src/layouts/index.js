import React,{ Component } from 'react';
import Link from 'umi/link';
import style from './index.less';
import { Layout ,Button} from 'antd';
const { Header, Footer, Sider, Content } = Layout;


class BasicLayout extends Component{
  render(){
    return (
      <div>
        <Layout>
          <Header className={style['header']}>鑫火信息FirstTest</Header>
          <Content>
            <div className={style['content']}>
              {this.props.children}
            </div>
          </Content>
          <Footer className={style['footer']}>一次小的尝试</Footer>
        </Layout>
      </div>
    )
  }
}

export default BasicLayout;
