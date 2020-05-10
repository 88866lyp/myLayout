import React, { Component } from 'react'
import { Card, Form, Button, Input, Table, Modal } from 'antd'
import '../../utils/mockdata'
import axios from 'axios'
import { formateDate } from '../../utils/dateUtils'
import { LinkButton, Spanhtml } from '../../components/link-button/index'
import { ExclamationCircleOutlined } from '@ant-design/icons';

// 数据路由
export default class Datail extends Component {

    state = {
        roles: [], // 数据数组
        isShowAdd: false, // 是否显示添加页面
    }

    initColumns = () => {
        this.columns = [
            {
                title: '规则编号',
                dataIndex: 'no',
            },
            {
                title: '描述',
                dataIndex: 'description'
            },
            {
                title: '服务调用次数',
                dataIndex: 'callNo',
                render: (callNo) => callNo + '万',// 当前指定了对应的属性,传入的是对应的属性值
                sorter: (a, b) => a.name.length - b.name.length,
            },
            {
                title: '状态',
                dataIndex: 'disabled',
                render: (disabled) => { // 参数分别为当前行的值，当前行数据，行索引
                    if (disabled) {
                        return (
                            <span>
                                <Spanhtml style={{ background: 'red' }} ></Spanhtml>
                                <span>异常</span>
                            </span>
                        )
                    }
                    if (!disabled) {
                        return (
                            <span>
                                <Spanhtml style={{ background: 'green' }} ></Spanhtml>
                                <span>已上线</span>
                            </span>
                        )
                    }
                    if (disabled !== true && disabled !== false) {
                        return (
                            <span>
                                <Spanhtml style={{ background: 'green' }} ></Spanhtml>
                                <span>运行中</span>
                            </span>
                        )
                    }
                    // return (
                    //     <span>
                    //         <Spanhtml style={{ background: 'red' }} ></Spanhtml>
                    //         <span>{disabled === true ? "异常" : "已上线"}</span>
                    //     </span>
                    // )
                },
                filters: [
                    { text: 'Joe', value: 'Joe' },
                    { text: 'Jim', value: 'Jim' },
                ],
                onFilter: (value, record) => record.name.includes(value),
                ellipsis: true,
            },
            {
                title: '更新时间',
                dataIndex: 'updatedAt',
                render: (updatedAt) => formateDate(updatedAt),
                sorter: (a, b) => a.name.length - b.name.length,
            },
            {
                title: '操作',
                render: () => (
                    <span>
                        <LinkButton>配置</LinkButton>
                        <LinkButton>订阅警报</LinkButton>
                    </span>
                )
            },

        ]
    }

    UNSAFE_componentWillMount() {
        this.initColumns()
    }

    render() {
        const { isShowAdd, roles } = this.state

        // 指定Item布局的配置对象, 会约束所有 Item
        const formItemLayout = {
            labelCol: { span: 4 }, // 左侧label的宽度
            wrapperCol: { span: 15 }, // 指定右侧包裹的宽度
        };

        const title = (
            <div>
                <Button type="primary" onClick={() => this.setState({ isShowAdd: true })}>创建角色</Button>
                <div className="alerttab">
                    <ExclamationCircleOutlined style={{ margin: " 0 5px", color: '#1890ff' }} />
                    <span>已经选择 <span style={{ color: '#1da57a' }}>0</span> 项 </span>
                    <span>服务调用次数统计 <span style={{ color: '#1da57a' }}>0</span> 万</span>
                    <LinkButton>清空</LinkButton>
                </div>

            </div >
        )

        return (
            <Card title={title} style={{ border: 'none' }} className='cardstyle'>
                <Table
                    bordered
                    rowKey='key'
                    columns={this.columns}
                    dataSource={roles} //获取数据列表
                    onOk={this.addRole}
                    pagination={{ defaultPageSize: 10, showQuickJumper: true }}
                    onCancel={() => {
                        this.setState({
                            isShowAdd: false, // 隐藏 modal 框
                        })
                    }}
                    rowSelection={{
                        type: 'radio', // 单选类型
                    }}
                />
                <Modal
                    title="新建规则"
                    visible={isShowAdd} // 显示隐藏
                    onCancel={() => {
                        this.setState({
                            isShowAdd: false, // 隐藏 modal 框
                        })
                    }}

                >
                    <Form.Item label="描述" name='role' {...formItemLayout} disabled >
                        <Input placeholder='请输入' />
                    </Form.Item>
                </Modal>

            </Card>
        )
    }

    componentDidMount() {
        this.getRoles()
    }

    // 获取 数据列表
    getRoles = async () => {
        const result = await axios.get('/getList', { dataType: 'json' })
        if (result.status === 200 && result.statusText === 'OK') {
            const roles = result.data.date
            this.setState({
                roles
            })
        }
    }

}









