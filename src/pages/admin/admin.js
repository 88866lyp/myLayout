import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'
import LeftNav from '../left-nav/left-nav'
import Header from '../header/header'
import "./admin.css"
// 引入路由组件
import Tabels from '../tabel/tabel'
import Category from '../category/category'
import CardList from '../cardlist/cardlist'
import SearchList from '../searchlist/searchlist'


// 后台管理的路由组件
export default class Admin extends Component {
    render() {
        return (
            <>
                <div id="app">
                    <div className="wrap">
                        <LeftNav></LeftNav>
                        <main>
                            <Header></Header>
                            <div className="content">
                                <div className="contentbox">
                                    <Switch>
                                        <Route path="/tabel" component={Tabels} ></Route>
                                        <Route path="/category" component={Category} ></Route>
                                        <Route path="/cardlist" component={CardList} ></Route>
                                        <Route path="/searchlist" component={SearchList} ></Route>
                                    </Switch>
                                </div>
                            </div>
                            <footer>Copyright &copy; 2018蚂蚁金服体验技术部出品</footer>
                        </main>
                    </div>
                </div>
            </>
        )
    }
}



