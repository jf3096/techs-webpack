import * as React from 'react';
import './css/Login.less';

export default class Login extends React.Component<void,void> {
    public baseCls = `login`;

    render() {
        const {baseCls} = this;
        return (
            <div className={baseCls}>
                <header className={`${baseCls}-header`}>
                    <div className={`${baseCls}-header-wrapper`}>
                        <div className={`${baseCls}-header-left`}>
                            <p className={`${baseCls}-header-title`}>门店管理系统</p>
                            <p>Store Management System</p>
                        </div>
                        <div className={`${baseCls}-header-right`}>
                            我要加盟
                        </div>
                    </div>
                </header>
                <div className={`${baseCls}-top`}>
                    <div className="min-width height-100">
                        <div className={`${baseCls}-top-left height-100`}>
                            <div className={`${baseCls}-slide`}>
                                {/*<img src={`../img/login-banner.png`}/>*/}
                            </div>
                        </div>
                    </div>
                </div>
                <div className={`${baseCls}-product min-width`}>
                    <div className={`${baseCls}-product-introduction`}>
                        <p className={`${baseCls}-product-title`}>产品介绍</p>
                        <p>Product introduction</p>
                    </div>
                    <div className={`${baseCls}-product-position`}>
                        <div className={`${baseCls}-product-left`}>
                            <p className={`${baseCls}-product-text`}>强大的药店业务解决能力，支持精细化管理</p>
                            <p>提供专业医药企业管理平台，满足企业的生产计划和过程控制，轻松实现业务自动化处理；</p>
                            <p>采用现代供应链管理方法控制库存，快速实现进销存等精细化管控；</p>
                            <p>线上线下订单共享，提供O2O全套解决方案。</p>
                        </div>
                    </div>
                    <div className={`${baseCls}-product-position ${baseCls}-product-run`}>
                        <div className={`${baseCls}-product-right`}>
                            <p className={`${baseCls}-product-text`}>强大的连锁运营能力，支持多药店一体化运营</p>
                            <p>科学地配送决策，提升经营效率；严格的库存管理，减少资金占用；</p>
                            <p>不同纬度的数据分析，提高销售业绩；智能化GSP管控，轻松实现质量监察。</p>
                        </div>
                    </div>
                    <div className={`${baseCls}-product-position ${baseCls}-product-integrate`}>
                        <div className={`${baseCls}-product-left`}>
                            <p className={`${baseCls}-product-text`}>强大的资源整合能力，搭建资源供需桥梁</p>
                            <p>整合药店与药厂商资源，建立精准、完善资源库，轻松实现资源透明化、管理一体化，增加药店影响力和资源收益，轻松完成资源整体管理。</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}