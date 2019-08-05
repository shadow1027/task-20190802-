export const data = [
  {
    key: '0',
    subject: '你的最高学历是？',
    answer: [
      {type: 'A', text: '本科', score: 5},
      {type: 'B', text: '高中', score: 4},
      {type: 'C', text: '初中', score: 3},
      {type: 'D', text: '小学', score: 2},
    ]
  },
  {
    key:  '1',
    subject: '怎样看待大学生的正常恋爱关系？',
    answer: [
      {type: 'A', text: '很正常，不谈恋爱读什么大学', score: 5},
      {type: 'B', text: '有利于共同学习，共同进步', score: 4},
      {type: 'C', text: '影响学习，最好不要谈', score: 2},
      {type: 'D', text: '花销太大，分手最好', score: 1}
    ]
  },
  {
    key: '2',
    relatedKey: '0-A',
    subject: '在大学里如何解决人与人之间产生的矛盾以及矛盾产生后采取的措施？',
    answer: [
      {type: 'A', text: '忍气吞声，不顶撞别人', score: 5},
      {type: 'B', text: '放下身段调商，寻求和解', score: 4},
      {type: 'C', text: '坚持自己没有错，要对方道歉', score: 2},
    ]
  },
  {
    key: '3',
    relatedKey: ['0-A', '0-B', '0-C'],
    subject: '你从什么时候开始谈恋爱的？',
    answer: [
      {type: 'A', text: '中学', score: 5},
      {type: 'B', text: '高中', score: 4},
      {type: 'C', text: '大学', score: 2},
      {type: 'D', text: '单身', score: 1}
    ]
  },
  {
    key: '4',
    relatedKey: ['0-A', '0-B'],
    subject: '上高中，一直想选个离家远的大学，现在的感觉是？',
    answer: [
      {type: 'A', text: '太自由了，不想回去', score: 5},
      {type: 'B', text: '偶尔会想家，过年回家看看', score: 4},
      {type: 'C', text: '挺想家的，只有节假日可以回去', score: 2},
      {type: 'D', text: '没什么感觉，因为离家不远，经常回去', score: 1}
    ]
  },
  {
    key: '5',
    relatedKey: '3-C',
    subject: '上了大学，你所想象的父母对于你的恋爱态度跟实际相比是？',
    answer: [
      {type: 'A', text: '和之前一样支持', score: 5},
      {type: 'B', text: '和之前一样无所谓', score: 4},
      {type: 'C', text: '和之前一样反对', score: 2},
      {type: 'D', text: '之前反对现在支持', score: 1}
    ]
  },
  {
    key: '6',
    subject: '你觉得你身边的异性是否是你想象的样子？',
    answer: [
      {type: 'A', text: '是，都是好看的小姐姐（小哥哥）', score: 5},
      {type: 'B', text: '也就那样吧，有个别是心动的', score: 4},
      {type: 'C', text: '身边的异性颜值不在服务区', score: 2},
      {type: 'D', text: '和想象的完全不同', score: 1}
    ]
  },
  {
    key: '7',
    relatedKey: '0-A',
    subject: '出入大学，你面临的现状是？',
    answer: [
      {type: 'A', text: '和舍友在开黑', score: 5},
      {type: 'B', text: '有一个良好，愉悦的氛围', score: 4},
      {type: 'C', text: '三点一线的生活很单调', score: 2},
      {type: 'D', text: '来到一个人生地不熟的地方有点不适应', score: 1}
    ]
  },
  {
    key: '8',
    subject: '你对自己专业的看法？',
    answer: [
      {type: 'A', text: '不不不这是什么鬼-想转专业', score: 5},
      {type: 'B', text: '感觉还不错，是自己喜欢的专业', score: 4},
      {type: 'C', text: '没有什么感觉', score: 2},
    ]
  },
  {
    key: '9',
    relatedKey: ['3-A', '3-B', '3-C'],
    subject: '你觉得什么能够成为你努力的动力？',
    answer: [
      {type: 'A', text: '女友的鼓励', score: 5},
      {type: 'B', text: '能有一个美好的未来', score: 4},
      {type: 'C', text: '朋友的关心', score: 2},
      {type: 'D', text: '家人的支持', score: 1}
    ]
  },
  {
    key: '10',
    subject: '当你确定一个目标后，你准备如何努力？',
    answer: [
      {type: 'A', text: '有个目标就行，慢慢来', score: 5},
      {type: 'B', text: '制定几个计划去实现它', score: 4},
      {type: 'C', text: '不拖延不间断的努力去实现', score: 2},
      {type: 'D', text: '找家人或者朋友的帮助', score: 1}
    ]
  },
  {
    key: '11',
    subject: '你毕业后的期望是？',
    answer: [
      {type: 'A', text: '自己创业', score: 5},
      {type: 'B', text: '找一份稳定的工作', score: 4},
      {type: 'C', text: '努力考上研究生', score: 2},
      {type: 'D', text: '犹豫中，之后再做决定', score: 1}
    ]
  },
  {
    key: '12',
    relatedKey: ['0-A', '0-B'],
    subject: '对未来的大学生活是否有目标与计划？',
    answer: [
      {type: 'A', text: '有', score: 5},
      {type: 'B', text: '有但是模糊', score: 4},
      {type: 'C', text: '没有', score: 2},

    ]
  },
  {
    key: '13',
    subject: '你是否有理想',
    answer: [
      {type: 'A', text: '有', score: 3},
      {type: 'B', text: '没有', score: 1},
    ]
  },
  {
    key: '14',
    relatedKey: '13-A',
    subject: '当理想与现实发生矛盾时，你会怎样做？',
    answer: [
      {type: 'A', text: '坚持理想', score: 5},
      {type: 'B', text: '看情况而定', score: 4},
      {type: 'C', text: '放弃理想', score: 2},
      {type: 'D', text: '放弃治疗，无所事是', score: 1}
    ]
  },
  {
    key: '15',
    relatedKey: '13-A',
    subject: '你理想的生活是什么？',
    answer: [
      {type: 'A', text: '学分攒够，奖学金拿到手软', score: 5},
      {type: 'B', text: '找个理想的另一半幸福的生活', score: 4},
      {type: 'C', text: '上完课宅在宿舍玩游戏', score: 2},
      {type: 'D', text: '其它', score: 1}
    ]
  },
  {
    key: '16',
    subject: '你觉得上课的氛围跟老师的教学方式是怎样的？',
    answer: [
      {type: 'A', text: '特别好', score: 5},
      {type: 'B', text: '差不多', score: 4},
      {type: 'C', text: '非常差', score: 2},
      {type: 'D', text: '反正不去，无所谓', score: 1}
    ]
  },
  {
    key: '17',
    relatedKey: '13-A',
    subject: '当你的理想野心得不到很好的合作伙伴时，你会？',
    answer: [
      {type: 'A', text: '寻找伙伴', score: 5},
      {type: 'B', text: '孤军混战', score: 4},
      {type: 'C', text: '等待伙伴', score: 2},
      {type: 'D', text: '放弃', score: 1}
    ]
  },
  {
    key: '18',
    relatedKey: '13-A',
    subject: '在追逐理想的路途中，有什么原因让你想放弃？',
    answer: [
      {type: 'A', text: '找不到路，等待机会自己到来', score: 5},
      {type: 'B', text: '害怕自己家做法跟别人不一样怕被孤立', score: 4},
      {type: 'C', text: '收到别人的嘲笑', score: 2},
      {type: 'D', text: '总是失败失去信心', score: 1}
    ]
  },
  {
    key: '19',
    relatedKey: '13-A',
    subject: '你觉得是什么阻碍了你追逐理想的脚步？',
    answer: [
      {type: 'A', text: '有计划但是缺少志同道合的人一起', score: 5},
      {type: 'B', text: '只想安静读完大学，不考虑太多', score: 4},
      {type: 'C', text: '有计划缺少执行力', score: 2},
      {type: 'D', text: '没计划，游戏就是我的计划', score: 1}
    ]
  },
  {
    key: '20',
    subject: '你觉得寝室集体生活如何？',
    answer: [
      {type: 'A', text: '很温馨，大家无话不谈', score: 5},
      {type: 'B', text: '和谐，大家相处融洽', score: 4},
      {type: 'C', text: '还行，偶尔会有小争执', score: 2},
      {type: 'D', text: '不怎么交流，关系比较紧张', score: 1}
    ]
  },
  {
    key: '21',
    subject: '你认为加入社团、学生会跟自己的想象的一致吗？',
    answer: [
      {type: 'A', text: '达到自己理想的样子', score: 5},
      {type: 'B', text: '还可以，对自己有一定的帮助', score: 4},
      {type: 'C', text: '一般，后悔加入了', score: 2},
      {type: 'D', text: '就没有加入过', score: 1}
    ]
  },
];