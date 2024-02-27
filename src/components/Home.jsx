/*
 * @Author: 肖玲
 * @Date: 2024-02-27 18:07:25
 * @LastEditTime: 2024-02-27 18:09:22
 * @LastEditors: 肖玲
 * @Description:
 * @FilePath: /react-webpack/src/components/Home.jsx
 * 文件备注
 */
import React from 'react'
import { Link } from 'react-router-dom'

class Home extends React.PureComponent {
    render() {
        return (
            <div>
                this is Home
                <br />
                <Link to={'/about'}>to about</Link>
            </div>
        )
    }
}
export default Home
