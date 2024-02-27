/*
 * @Author: 肖玲
 * @Date: 2024-02-23 18:00:41
 * @LastEditTime: 2024-02-27 18:12:57
 * @LastEditors: 肖玲
 * @Description:
 * @FilePath: /react-webpack/src/App.jsx
 * 文件备注
 */
import React from 'react'
import { Routes, Route } from 'react-router-dom'
class App extends PureComponent {
    render() {
        return (
            <div>
                <h1>Hello, React!</h1>
                <Routes>
                    <Route path="/" element={<Home />}></Route>
                    <Route path="/about" element={<About />}></Route>
                </Routes>
            </div>
        )
    }
}
export default App
