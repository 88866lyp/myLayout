import React, { Component } from 'react'
import { Link } from 'react-router-dom'
// 导入数组列表 , 默认导出的可以取任何名字
import menuList from '../../config/menuConfig'

export default class LeftNav extends Component {

    constructor() {
        super()
        this.state = {
            showMenuItem: -1, // -1代表目前没有任何菜单项被选中
            showSubMenuItem: -1,
        }
    }

    // 根据 menu 的数据数组生成对应的标签数组
    // 使用 map + 递归调用
    getMenuNodes_map = (menuList) => {
        return menuList.map((item, index) => {
            if (!item.children) {
                return (
                    <li
                        key={item.key}
                        index={index}
                        onMouseOver={() => { this.handleMenuLevelHover(index) }}
                        onMouseLeave={this.handleMenuLevelLeave}
                        // 如果滑入的index==this.state.showMenuItem 加入颜色
                        className={(this.state.showMenuItem === index) ? 'menu-hover' : ''}
                    >
                        <Link to={item.key}>
                            {React.createElement(item.icon, null, null)}
                            <span>{item.title}</span>
                        </Link>
                    </li>
                )
            } else {
                return (
                    <li key={item.key}
                        index={index}
                        onMouseOver={() => { this.handleMenuLevelHover(index) }}
                        onMouseLeave={this.handleMenuLevelLeave}
                        className={(this.state.showMenuItem === index) ? 'menu-hover' : ''}
                    >
                        <Link to={item.key}>
                            {React.createElement(item.icon, null, null)}
                            <span >{item.title}</span>
                        </Link>
                        <ul className={(this.state.showMenuItem === index) ? 'submenu-show' : 'submenu-hidden'}>
                            {this.getMenuNodes_map(item.children)}
                        </ul>
                    </li>
                )
            }
        })
    }

    render() {
        return (
            <aside>
                <nav>Ant Design Pro</nav>
                <ul className="leftnav" >
                    {
                        this.getMenuNodes_map(menuList)
                    }
                </ul>
            </aside>
        )
    }

    // 滑入事件
    // 用数组索引代表被选中的菜单项，
    handleMenuLevelHover = (index) => {
        this.setState({ showMenuItem: index })
    }
    // 滑出事件
    handleMenuLevelLeave = () => {
        this.setState({ showMenuItem: -1 })
    }
}
