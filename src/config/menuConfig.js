import {
    HomeOutlined,
    AppstoreOutlined,
    BarsOutlined,
    OrderedListOutlined,
    PlusSquareOutlined ,
    CheckCircleOutlined ,
    AreaChartOutlined,
    BarChartOutlined,
    LineChartOutlined,
    PieChartOutlined,
    WarningOutlined,
    SnippetsOutlined,
    PicLeftOutlined 
} from '@ant-design/icons';
const menuList = [
    {
        title: 'dashboard', // 菜单标题名称
        key: '/home', // 对应的path
        icon: HomeOutlined, // 图标名称
        isPublic: true, // 公开的
    },
    {
        title: '列表页',
        key: '/tabely',
        icon: AppstoreOutlined,
        children: [ // 子菜单列表
            {
                title: '查询表格',
                key: '/tabel',
                icon: BarsOutlined,
            },
            {
                title: '标准列表',
                key: '/cardlist',
                icon: OrderedListOutlined,
            },
            {
                title: '卡片列表',
                key: '/searchlist',
                icon: SnippetsOutlined,
            },
            {
                title: '搜索列表',
                key: '/product',
                icon: PicLeftOutlined,
            },
        ]
    },

    {
        title: '详情页',
        key: '/user',
        icon: PlusSquareOutlined,
    },
    {
        title: '结果页',
        key: '/role',
        icon: CheckCircleOutlined,
    },

    {
        title: '图形图表',
        key: '/charts',
        icon: AreaChartOutlined,
        children: [
            {
                title: '柱形图',
                key: '/charts/bar',
                icon: BarChartOutlined,
            },
            {
                title: '折线图',
                key: '/charts/line',
                icon: LineChartOutlined,
            },
            {
                title: '饼图',
                key: '/charts/pie',
                icon: PieChartOutlined,
            },
        ]
    },

    {
        title: '异常页',
        key: '/order',
        icon: WarningOutlined,
    },
]

export default menuList;