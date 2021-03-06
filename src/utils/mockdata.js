import Mock from 'mockjs'

Mock.mock('/getList', {
    date: function () {
        let tableListDataSource = []
        for (let i = 0; i < 46; i += 1) {
            tableListDataSource.push({
                key: i,
                disabled: i % 6 === 0,
                href: 'https://ant.design',
                avatar: [
                    'https://gw.alipayobjects.com/zos/rmsportal/eeHMaZBwmTvLdIWMfBpg.png',
                    'https://gw.alipayobjects.com/zos/rmsportal/udxAbMEhpwthVVcjLXik.png',
                ][i % 2],
                no: `TradeCode ${ i }`,
                title: `一个任务名称${ i }`,
                owner: '曲丽丽',
                description: '这是一段描述',
                callNo: Math.floor(Math.random() * 1000),
                status: Math.floor(Math.random() * 10) % 4,
                updatedAt: new Date(`2017-07-${Math.floor(i / 2) + 1}`),
                createdAt: new Date(`2017-07-${Math.floor(i / 2) + 1}`),
                progress: Math.ceil(Math.random() * 100),
            })
        }
        return tableListDataSource
    }
})