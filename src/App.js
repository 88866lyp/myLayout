import React, { Component } from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import Admin from './pages/admin/admin'
import 'antd/dist/antd.css'

// 根组件
export default class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <Route path='/' component={Admin}></Route>
            </BrowserRouter>
        )
    }
}
