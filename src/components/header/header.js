import React, { Component } from 'react'
import { MenuFoldOutlined } from '@ant-design/icons';
export default class Header extends Component {
    render() {
        return (
            <header>
                <div className='header-top'>
                    <MenuFoldOutlined style={{float:'left',fontSize:20,margin:'10px 0 0 10px'}} />
                    <span>欢迎...登录</span>
                    <button>退出</button>
                </div>
                <div className='header-bottom-left'>
                    <span>首页 / 查询页 / 查询表格</span>
                    <span>查询表格</span>
                </div>
            </header>
        )
    }
}
