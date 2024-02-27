/*
 * @Author: 肖玲
 * @Date: 2024-02-23 17:58:30
 * @LastEditTime: 2024-02-27 18:06:08
 * @LastEditors: 肖玲
 * @Description:
 * @FilePath: /react-webpack/src/index.jsx
 * 文件备注
 */
import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './App'
import { BrowserRouter } from 'react-router-dom'

const root = createRoot(document.getElementById('root'))
root.render(
    <BrowserRouter>
        <App />
    </BrowserRouter>
)
