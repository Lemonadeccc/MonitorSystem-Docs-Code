export default {
    base: '/MonitorSystem-Docs/',
    title: 'MonitorSystem-Docs',
    description: '',
    lang: 'zh-CN',
    lastUpdated: true,
    themeConfig: {
        siteTitle:'MonitorSystem-Docs',
        nav: [
            { text: '首页', link: '/daohang/projectItems.md',activeMatch:'/daohang/'},
            { text: '关于', link: '/about/', activeMatch: '/about/' }
            
        ],
        sidebar: [
            {
                text: '导航',
                items: [
                    { text: '项目大纲', link: '/daohang/projectItems.md'},
                    { text: 'ToDos', link: '/daohang/Todos.md'},
                    { text: '规范', link: '/daohang/standrads.md'},
                ]
            },
            {
                text: '工作原理',
                items: [
                    {text: '项目结构', link: '/principle/structer.md'},
                    {text: 'SDK介绍', link: '/principle/sdkIntroduction.md'},
                    // {text: '模拟API', link: '/principle/mockAPI'},
                ]
            },
            // {
            //     text: '示例',
            //     items: [
            //         {text: '创建模块', link: '/example/tutorial.md'},
            //     ]
            // },
            {
                text: '其他',
                items: [
                    {text: '资源与问题文档', link: '/linkResour/linkRes.md'},
                    {text: '成员信息', link: '/team/members.md'},
                ]
            },
        ]
    },

}
