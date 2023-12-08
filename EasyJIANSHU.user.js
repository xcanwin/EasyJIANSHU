// ==UserScript==
// @name         EasyJIANSHU
// @description  try to take over the world!
// @version      1.0
// @author       xcanwin
// @namespace    https://github.com/xcanwin/EasyJIANSHU/
// @supportURL   https://github.com/xcanwin/EasyJIANSHU/
// @license      GPL-2.0-only
// @match        *://www.jianshu.com/p/*
// @grant        GM_addStyle
// @run-at       document-start
// ==/UserScript==

(function() {
    'use strict';

    const $ = (Selector, el) => (el || document).querySelector(Selector);
    const $$ = (Selector, el) => (el || document).querySelectorAll(Selector);

    /*电脑端净化样式*/
    const purify_style_pc = `
#__next>header /*隐藏[置顶的][顶部的]菜单栏*/,
footer /*隐藏[置顶的][底部的]评论查看栏*/,
.ant-back-top /*隐藏[置顶的][底部的]返回顶部*/,
._3Pnjry /*隐藏[左边的]栏*/,
._2OwGUo /*隐藏[右边的]栏*/,
._3kba3h /*隐藏[正文的][顶部的]关注*/,
._3URWaO /*隐藏[正文的][顶部的]归属地*/,
._13D2Eh /*隐藏[正文的][顶部的]头像*/,
._3tCVn5 /*隐藏[正文的][顶部的]钻石*/,
._1kCBjS /*隐藏[正文的][底部的]文章分类*/,
._19DgIp /*隐藏[正文的][底部的]下划线*/,
._13lIbp /*隐藏[正文的][底部的]APP推荐*/,
.d0hShY /*隐藏[正文的][底部的]用户介绍*/,
.ouvJEz:nth-of-type(2) /*隐藏[正文的][底部的]推荐文章*/,
.ouvJEz:nth-of-type(3) /*隐藏[正文的][底部的]空白*/,
#note-page-comment /*隐藏[正文的][底部的]评论发言栏*/
{
    display: none !important;
}

/*隐藏背景*/
._3kbg6I {
    background: none !important;
    background-image: unset !important;
    background-color: unset !important;
}

/*调整标题*/
._1RuRku {
    display: flex;
    justify-content: center;
    margin-top: 35px !important;
    margin-bottom: 20px !important;
    color: black !important;
    font-size: 33px !important;
    font-family: 'PingFang SC','Microsoft YaHei','SimHei','Arial','SimSun';
}

/*展示全屏*/
._3VRLsv {
    padding-left: unset !important;
    padding-right: unset !important;
    padding-top: unset !important;
    width: unset !important;
}
._gp-ck {
    margin-bottom: unset !important;
    margin-right: unset !important;
    width: 80% !important;
}
.ouvJEz {
    padding: unset !important;
}
`;
    //净化页面
    const purifyPage = function() {
        GM_addStyle(purify_style_pc);
    };

    purifyPage();

})();
