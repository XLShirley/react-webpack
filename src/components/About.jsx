/*
 * @Author: 肖玲
 * @Date: 2024-02-27 18:07:34
 * @LastEditTime: 2024-02-27 18:14:23
 * @LastEditors: 肖玲
 * @Description:
 * @FilePath: /react-webpack/src/components/About.jsx
 * 文件备注
 */
import React from 'react'
import { Link } from 'react-router-dom'

class Home extends React.PureComponent {
    render() {
        return (
            <div>
                this is About
                <br />
                <Link to={'/home'}>to home</Link>
            </div>
        )
    }
}
export default Home
