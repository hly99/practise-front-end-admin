export default [
	{
		id: 'component',
		name: '组件',
		children: [{
			id: 'table',
			name: '表格',
			path: '/component/table'
		},{
			id: 'pagination',
			name: '分页',
			path: '/component/pagination'
		},{
			id: 'dialog',
			name: '弹出框',
			path: '/component/dialog'
		},{
			id: 'message',
			name: '信息提示',
			path: '/component/message'
		},{
			id: 'message-box',
			name: 'MessageBox 弹框',
			path: '/component/message-box'
		},{
			id: 'button',
			name: '按钮',
			path: '/component/button'
		},{
			id: 'input',
			name: '输入框',
			path: '/component/input'
		},{
			id: 'date-time-picker',
			name: '日期和时间选择器',
			path: '/component/date-time-picker'
		},{
			id: 'radio-checkbox',
			name: '单选和多选',
			path: '/component/radio-checkbox'
		},{
			id: 'switch',
			name: '开关',
			path: '/component/switch'
		},{
			id: 'select',
			name: '下拉',
			path: '/component/select'
		},{
			id: 'cascader',
			name: '级联下拉',
			path: '/component/cascader'
		},{
			id: 'upload',
			name: '文件上传',
			path: '/component/upload'
		},{
			id: 'form-validation',
			name: '表格验证',
			path: '/component/form-validation'
		}]
	},{
		id: 'page',
		name: '页面',
		children: [{
			id: '',
			name: '列表页',
			path: '/music/singer/list'
		},
		{
			id: 'aa',
			name: '测试菜单1',
			path: '/test/a'
		}]
	},
	{
		id:'root',
		name:'测试分类2',
		children:[{
			id:'bb',
			name:'测试菜单2',
			path:'/test/b'
		}]
	}
]