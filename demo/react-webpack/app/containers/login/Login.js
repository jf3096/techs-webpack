"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var React = require('react');
require('./css/Login.less');
var Login = (function (_super) {
    __extends(Login, _super);
    function Login() {
        _super.apply(this, arguments);
        this.baseCls = "login";
    }
    Login.prototype.render = function () {
        var baseCls = this.baseCls;
        return (React.createElement("div", {className: baseCls}, 
            React.createElement("header", {className: baseCls + "-header"}, 
                React.createElement("div", {className: baseCls + "-header-wrapper"}, 
                    React.createElement("div", {className: baseCls + "-header-left"}, 
                        React.createElement("p", {className: baseCls + "-header-title"}, "门店管理系统"), 
                        React.createElement("p", null, "Store Management System")), 
                    React.createElement("div", {className: baseCls + "-header-right"}, "我要加盟"))
            ), 
            React.createElement("div", {className: baseCls + "-top"}, 
                React.createElement("div", {className: "min-width height-100"}, 
                    React.createElement("div", {className: baseCls + "-top-left height-100"}, 
                        React.createElement("div", {className: baseCls + "-slide"})
                    )
                )
            ), 
            React.createElement("div", {className: baseCls + "-product min-width"}, 
                React.createElement("div", {className: baseCls + "-product-introduction"}, 
                    React.createElement("p", {className: baseCls + "-product-title"}, "产品介绍"), 
                    React.createElement("p", null, "Product introduction")), 
                React.createElement("div", {className: baseCls + "-product-position"}, 
                    React.createElement("div", {className: baseCls + "-product-left"}, 
                        React.createElement("p", {className: baseCls + "-product-text"}, "强大的药店业务解决能力，支持精细化管理"), 
                        React.createElement("p", null, "提供专业医药企业管理平台，满足企业的生产计划和过程控制，轻松实现业务自动化处理；"), 
                        React.createElement("p", null, "采用现代供应链管理方法控制库存，快速实现进销存等精细化管控；"), 
                        React.createElement("p", null, "线上线下订单共享，提供O2O全套解决方案。"))
                ), 
                React.createElement("div", {className: baseCls + "-product-position " + baseCls + "-product-run"}, 
                    React.createElement("div", {className: baseCls + "-product-right"}, 
                        React.createElement("p", {className: baseCls + "-product-text"}, "强大的连锁运营能力，支持多药店一体化运营"), 
                        React.createElement("p", null, "科学地配送决策，提升经营效率；严格的库存管理，减少资金占用；"), 
                        React.createElement("p", null, "不同纬度的数据分析，提高销售业绩；智能化GSP管控，轻松实现质量监察。"))
                ), 
                React.createElement("div", {className: baseCls + "-product-position " + baseCls + "-product-integrate"}, 
                    React.createElement("div", {className: baseCls + "-product-left"}, 
                        React.createElement("p", {className: baseCls + "-product-text"}, "强大的资源整合能力，搭建资源供需桥梁"), 
                        React.createElement("p", null, "整合药店与药厂商资源，建立精准、完善资源库，轻松实现资源透明化、管理一体化，增加药店影响力和资源收益，轻松完成资源整体管理。"))
                ))));
    };
    return Login;
}(React.Component));
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = Login;
