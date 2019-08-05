import React, { Component } from 'react';
import {Radio, Button} from 'antd';
import {data} from './config';

const RadioGroup = Radio.Group;

// 给每一项 answer 设置 value
let convertData = data.map(item => {
  if(item.answer) {
    const {answer, ...res} = item;
    return {
      ...res,
      answer: answer.map(val => ({...val, value: item.key + '-' + val.type}))
    }
  }
  return item;
});
// 分数集合
let scoreObj = {};
convertData.forEach(item => {
  if(item.answer) {
    item.answer.forEach(val => {
      scoreObj[val.value] = val.score;
    });
  }
});
export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showResult: false,
      score: 0,
      selectedKeys: [],
      data: convertData.filter(item => !item.relatedKey)
    }
  }
  handleChange = (e) => {
    let value = e.target.value;
    let [currentItemKey] = value.split('-');
    this.setState(prevState => {
      let selectedKeys = prevState.selectedKeys.filter(item => {
        let [itemKey] = item.split('-');
        return currentItemKey != itemKey;
      }).concat(value);
      let data = convertData.filter(item => {
        const {relatedKey} = item;
        if(typeof relatedKey === 'string') {
          return selectedKeys.includes(relatedKey);
        }else if(Array.isArray(relatedKey)) {
          return selectedKeys.filter(item => relatedKey.includes(item)).length;
        }
        return true;
      })
      return {
        data,
        selectedKeys
      }
    });
  }
  handleSubmit = () => {
    this.setState(prevState => {
      let selectedKeys = prevState.selectedKeys;
      let result = selectedKeys
        .sort((a, b) => a.split('-')[0] - b.split('-')[0])
        .map(item => item.replace('-', ': '))
        .join('、');
      let score = selectedKeys.reduce((total, val) => {
        return total + scoreObj[val];
      }, 0)
      return {
        showResult: true,
        result,
        score
      }
    })
  }
  render() {
    const {data, showResult, result, score} = this.state;
    return (
      <div className='container'>
        <div className='questions'>
          {
            data.map((item, i) => {
              let options = [];
              if(item.answer) {
                options = item.answer.map(({type, text, value}) => ({
                  value: value,
                  label: type + '：' + text
                }))
              }
              return (
                <div className='list-item' key={item.key}>
                  <div className='list-item-title'>{item.key}. {item.subject}</div>
                  <RadioGroup onChange={this.handleChange} options={options}  />
                </div>
              )
            })
          }
        </div>
        {
          showResult && (
            <div className='reuslt-wrapper'>
              <div>你的选择为：{result}</div>
              <div>你的分数为：{score} 分</div>
            </div>
          )
        }
        <div className='btn-wrapper'>
          <Button className='submit-btn' type='primary' onClick={this.handleSubmit}>提交</Button>
        </div>
      </div>
    )
  }
}
