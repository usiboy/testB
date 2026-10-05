import React, { useState } from 'react'
import { createRoot } from 'react-dom/client'
import './style.css'

function App() {
  const [input, setInput] = useState('21')
  const valid = /^\d+$/.test(input) && Number.isSafeInteger(Number(input)) && Number(input) <= 10000

  return <main className="shell">
    <p className="eyebrow">LINGTONG / TENANT B / REACT</p>
    <h1>构建一次，<br /><span>看见确定的版本。</span></h1>
    <p className="intro">另一份独立仓库、另一套独立制品。这份测试工程不读取租户 A 或任何真实业务资源。</p>
    <section className="card" aria-label="租户 B 计算示例">
      <label htmlFor="value-b">测试整数（0—10000）</label>
      <input id="value-b" inputMode="numeric" autoComplete="off" value={input} onChange={event => setInput(event.target.value.trim())} />
      {valid ? <p role="status">B 的结果 <strong>{Number(input) * 3}</strong></p> : <p role="alert">请输入有效的范围内整数。</p>}
    </section>
    <footer>只含合成输入 · 不代表真实租户服务已部署</footer>
  </main>
}

createRoot(document.getElementById('root')).render(<App />)
