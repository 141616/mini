const PACKAGES = [{
  name: '我的图书馆1',
  id: 'pack_001',
  status: 1, // 1：使用中，2：废弃
  icon: '',
  des: '图书馆1',
  creater_id: 1000,
  create_time: 1534683204837,
  addition: ''
}, {
  name: '我的图书馆2',
  id: 'pack_002',
  status: 1, // 1：使用中，2：废弃
  icon: '',
  des: '图书馆2',
  creater_id: 1000,
  create_time: 1534683354279,
  addition: ''
}, {
  name: '我的图书馆3',
  id: 'pack_003',
  status: 1, // 1：使用中，2：废弃
  icon: '',
  des: '图书馆3',
  creater_id: 1000,
  create_time: 1534683474279,
  addition: ''
}]

const GENDER = {
  UNKNOW: 0,
  FEMALE: 1,
  MALE: 2
}

const MATERIALS_HANDLE_TYPE = {
  IN: 'in',
  OUT: 'out'
}

const KINDS = ['技术类', '文学类', '数学类', '科学类', '文史类', '其他']

const LOGS = [{
  id: '001',
  type: MATERIALS_HANDLE_TYPE.IN,
  operator: {
    user_id: 'u_001',
    name: '张三',
    age: 30,
    gender: GENDER.MALE,
    company: '公司1'
  },
  handler: {
    name: 'xxx公司'
  },
  materials: [{
    type: 'type_001',
    name: '历史书籍001',
    unit: '本',
    count: 200,
    price: '45.9'
  }, {
    type: 'type_002',
    name: '科学书籍001',
    unit: '本',
    count: 500,
    price: '25'
  }, {
    type: 'type_003',
    name: '技术书籍001',
    unit: '本',
    count: 100,
    price: '99'
  }]
}, {
  id: '002',
  type: MATERIALS_HANDLE_TYPE.IN,
  operator: {
    user_id: 'u_001',
    name: '张三',
    age: 30,
    gender: GENDER.MALE,
    company: '公司1'
  },
  handler: {
    name: 'xxx公司'
  },
  materials: [{
    type: 'type_001',
    name: '历史书籍001',
    unit: '本',
    count: 200,
    price: '45.9'
  }, {
    type: 'type_002',
    name: '科学书籍001',
    unit: '本',
    count: 500,
    price: '25'
  }, {
    type: 'type_003',
    name: '技术书籍001',
    unit: '本',
    count: 100,
    price: '99'
  }]
}, {
  id: '003',
  type: MATERIALS_HANDLE_TYPE.OUT,
  operator: {
    user_id: 'u_001',
    name: '李四',
    age: 30,
    gender: GENDER.MALE,
    company: '公司1'
  },
  handler: {
    name: '小张'
  },
  materials: [{
    type: 'type_001',
    name: '历史书籍001',
    unit: '本',
    count: 50,
    price: '45.9'
  }, {
    type: 'type_002',
    name: '科学书籍001',
    unit: '本',
    count: 20,
    price: '25'
  }, {
    type: 'type_003',
    name: '技术书籍001',
    unit: '本',
    count: 10,
    price: '99'
  }]
}]

export {
  PACKAGES,
  LOGS,
  KINDS
}