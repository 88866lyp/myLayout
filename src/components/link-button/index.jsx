import React from 'react'
import './index.css'


// 外形像链接的按钮
export const LinkButton = (props) => {
    return <button  {...props} className='link-button'></button>
}

// span 组件
export const Spanhtml = (props) => {
    return <span style={{ display: 'inline-block', width: 5, height: 5, borderRadius: '50%', margin: '0 3px 2px 0', background: `${props.style.background}` }}></span>
}


