const menu = {
    list() {
        return [
    {
        "backMenu":[
            {
                "child":[
                    {
                        "buttons":[
                            "查看",
                            "新增",
                            "删除",
                            "修改"
                        ],
                        "menu":"班级管理",
                        "menuJump":"列表",
                        "tableName":"dictionaryBanji"
                    }
                    ,
                    {
                        "buttons":[
                            "查看",
                            "新增",
                            "删除",
                            "修改"
                        ],
                        "menu":"帖子类型管理",
                        "menuJump":"列表",
                        "tableName":"dictionaryForum"
                    }
                    ,
                    {
                        "buttons":[
                            "查看",
                            "新增",
                            "删除",
                            "修改"
                        ],
                        "menu":"公告类型管理",
                        "menuJump":"列表",
                        "tableName":"dictionaryGonggao"
                    }
                    ,
                    {
                        "buttons":[
                            "查看",
                            "新增",
                            "删除",
                            "修改"
                        ],
                        "menu":"单位性质管理",
                        "menuJump":"列表",
                        "tableName":"dictionaryShixi"
                    }
                    ,
                    {
                        "buttons":[
                            "查看",
                            "新增",
                            "删除",
                            "修改"
                        ],
                        "menu":"分享类型管理",
                        "menuJump":"列表",
                        "tableName":"dictionaryShixiFenxiang"
                    }
                    ,
                    {
                        "buttons":[
                            "查看",
                            "新增",
                            "删除",
                            "修改"
                        ],
                        "menu":"第几周管理",
                        "menuJump":"列表",
                        "tableName":"dictionaryShixiZhoubao"
                    }
                    ,
                    {
                        "buttons":[
                            "查看",
                            "新增",
                            "删除",
                            "修改"
                        ],
                        "menu":"院系管理",
                        "menuJump":"列表",
                        "tableName":"dictionaryYuanxi"
                    }
                ],
                "menu":"基础数据管理"
            }
            ,{
                "child":[
                    {
                        "buttons":[
                            "查看",
                            "新增",
                            "修改",
                            "删除"
                        ],
                        "menu":"论坛管理",
                        "menuJump":"列表",
                        "tableName":"forum"
                    }
                ],
                "menu":"论坛管理"
            }
            ,{
                "child":[
                    {
                        "buttons":[
                            "查看",
                            "新增",
                            "修改",
                            "删除"
                        ],
                        "menu":"公告管理",
                        "menuJump":"列表",
                        "tableName":"gonggao"
                    }
                ],
                "menu":"公告管理"
            }
            ,{
                "child":[
                    {
                        "buttons":[
                            "查看",
                            "新增",
                            "修改",
                            "删除"
                        ],
                        "menu":"老师管理",
                        "menuJump":"列表",
                        "tableName":"laoshi"
                    }
                ],
                "menu":"老师管理"
            }
            ,{
                "child":[
                    {
                        "buttons":[
                            "查看",
                            "新增",
                            "审核",
                            "修改",
                            "删除"
                        ],
                        "menu":"实习管理",
                        "menuJump":"列表",
                        "tableName":"shixi"
                    }
                ],
                "menu":"实习管理"
            }
            ,{
                "child":[
                    {
                        "buttons":[
                            "查看",
                            "报表",
                            "新增",
                            "修改",
                            "删除"
                        ],
                        "menu":"实习成绩管理",
                        "menuJump":"列表",
                        "tableName":"shixiChengji"
                    }
                ],
                "menu":"实习成绩管理"
            }
            ,{
                "child":[
                    {
                        "buttons":[
                            "查看",
                            "新增",
                            "修改",
                            "删除"
                        ],
                        "menu":"实习分享管理",
                        "menuJump":"列表",
                        "tableName":"shixiFenxiang"
                    }
                    ,
                    {
                        "buttons":[
                            "查看",
                            "修改",
                            "删除"
                        ],
                        "menu":"实习分享留言管理",
                        "menuJump":"列表",
                        "tableName":"shixiFenxiangLiuyan"
                    }
                    ,
                    {
                        "buttons":[
                            "查看",
                            "删除"
                        ],
                        "menu":"实习分享收藏管理",
                        "menuJump":"列表",
                        "tableName":"shixiFenxiangCollection"
                    }
                ],
                "menu":"实习分享管理"
            }
            ,{
                "child":[
                    {
                        "buttons":[
                            "查看",
                            "新增",
                            "修改",
                            "删除"
                        ],
                        "menu":"实习周报管理",
                        "menuJump":"列表",
                        "tableName":"shixiZhoubao"
                    }
                ],
                "menu":"实习周报管理"
            }
            ,{
                "child":[
                    {
                        "buttons":[
                            "查看",
                            "新增",
                            "修改",
                            "删除"
                        ],
                        "menu":"学生管理",
                        "menuJump":"列表",
                        "tableName":"xuesheng"
                    }
                ],
                "menu":"学生管理"
            }
            ,{
                "child":[
                    {
                        "buttons":[
                            "查看",
                            "新增",
                            "修改",
                            "删除"
                        ],
                        "menu":"轮播图管理",
                        "menuJump":"列表",
                        "tableName":"config"
                    }
                ],
                "menu":"轮播图信息"
            }
        ],
        "frontMenu":[],
        "hasBackLogin":"是",
        "hasBackRegister":"否",
        "hasFrontLogin":"否",
        "hasFrontRegister":"否",
        "roleName":"管理员",
        "tableName":"users"
    }
	,
	{
        "backMenu":[
            {
                "child":[
                    {
                        "buttons":[
                            "查看"
                        ],
                        "menu":"论坛管理",
                        "menuJump":"列表",
                        "tableName":"forum"
                    }
                ],
                "menu":"论坛管理"
            }
            ,{
                "child":[
                    {
                        "buttons":[
                            "查看"
                        ],
                        "menu":"公告管理",
                        "menuJump":"列表",
                        "tableName":"gonggao"
                    }
                ],
                "menu":"公告管理"
            }
            ,{
                "child":[
                    {
                        "buttons":[
                            "查看",
                            "审核"
                        ],
                        "menu":"实习管理",
                        "menuJump":"列表",
                        "tableName":"shixi"
                    }
                ],
                "menu":"实习管理"
            }
            ,{
                "child":[
                    {
                        "buttons":[
                            "查看",
                            "新增",
                            "修改",
                            "报表",
                            "删除"
                        ],
                        "menu":"实习成绩管理",
                        "menuJump":"列表",
                        "tableName":"shixiChengji"
                    }
                ],
                "menu":"实习成绩管理"
            }
            ,{
                "child":[
                    {
                        "buttons":[
                            "查看"
                        ],
                        "menu":"实习分享管理",
                        "menuJump":"列表",
                        "tableName":"shixiFenxiang"
                    }
                    ,
                    {
                        "buttons":[
                            "查看"
                        ],
                        "menu":"实习分享留言管理",
                        "menuJump":"列表",
                        "tableName":"shixiFenxiangLiuyan"
                    }
                ],
                "menu":"实习分享管理"
            }
            ,{
                "child":[
                    {
                        "buttons":[
                            "查看"
                        ],
                        "menu":"实习周报管理",
                        "menuJump":"列表",
                        "tableName":"shixiZhoubao"
                    }
                ],
                "menu":"实习周报管理"
            }
        ],
        "frontMenu":[],
        "hasBackLogin":"是",
        "hasBackRegister":"否",
        "hasFrontLogin":"否",
        "hasFrontRegister":"否",
        "roleName":"老师",
        "tableName":"laoshi"
    }
	,
	{
        "backMenu":[
            {
                "child":[
                    {
                        "buttons":[
                            "查看"
                        ],
                        "menu":"论坛管理",
                        "menuJump":"列表",
                        "tableName":"forum"
                    }
                ],
                "menu":"论坛管理"
            }
            ,{
                "child":[
                    {
                        "buttons":[
                            "查看"
                        ],
                        "menu":"公告管理",
                        "menuJump":"列表",
                        "tableName":"gonggao"
                    }
                ],
                "menu":"公告管理"
            }
            ,{
                "child":[
                    {
                        "buttons":[
                            "查看",
                            "新增",
                            "删除"
                        ],
                        "menu":"实习管理",
                        "menuJump":"列表",
                        "tableName":"shixi"
                    }
                ],
                "menu":"实习管理"
            }
            ,{
                "child":[
                    {
                        "buttons":[
                            "查看"
                        ],
                        "menu":"实习成绩管理",
                        "menuJump":"列表",
                        "tableName":"shixiChengji"
                    }
                ],
                "menu":"实习成绩管理"
            }
            ,{
                "child":[
                    {
                        "buttons":[
                            "查看",
                            "新增",
                            "修改",
                            "删除"
                        ],
                        "menu":"实习分享管理",
                        "menuJump":"列表",
                        "tableName":"shixiFenxiang"
                    }
                    ,
                    {
                        "buttons":[
                            "查看",
                            "修改",
                            "删除"
                        ],
                        "menu":"实习分享留言管理",
                        "menuJump":"列表",
                        "tableName":"shixiFenxiangLiuyan"
                    }
                ],
                "menu":"实习分享管理"
            }
            ,{
                "child":[
                    {
                        "buttons":[
                            "查看",
                            "新增",
                            "修改",
                            "删除"
                        ],
                        "menu":"实习周报管理",
                        "menuJump":"列表",
                        "tableName":"shixiZhoubao"
                    }
                ],
                "menu":"实习周报管理"
            }
        ],
        "frontMenu":[],
        "hasBackLogin":"是",
        "hasBackRegister":"否",
        "hasFrontLogin":"否",
        "hasFrontRegister":"否",
        "roleName":"学生",
        "tableName":"xuesheng"
    }
]
    }
}
export default menu;
