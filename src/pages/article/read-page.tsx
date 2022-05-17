import ReactDOM from 'react-dom'
import React, {useEffect} from 'react'
import {getJsonData} from '@/utils/helpers'
import Prism from 'prismjs'
import '@/utils/highlight'

const ArticleMenu = () => {
  const data = getJsonData<any>()
  if (!data || !data.login) {
    return <div>
      <button className={'fx-primary-button'} onClick={() => {
        window.location.href = '/account/login'
      }}>
        登录
      </button>
    </div>
  }
  const children: JSX.Element[] = []
  const createButton = <button className={'fx-primary-button new-button'} onClick={() => {
    window.location.href = '/article/new'
  }}>
    创作
  </button>
  children.push(createButton)

  const elements = children.map((element, index) =>
    <div key={index}>
      {element}
    </div>)

  return <div className={'article-page-menu'}>
    {elements}
  </div>
}

export function ReadPage () {
  useEffect(() => {
    // 右上角操作菜单
    const rootElement = document.getElementById('user-menu')
    if (rootElement) {
      ReactDOM.render(<ArticleMenu/>, rootElement)
    }
    // 代码块语法高亮
    const codes = document.getElementsByClassName('code')
    if (codes) {
      Array.from(codes).forEach(e => {
        if (!(e instanceof HTMLElement)) {
          return
        }
        const code = e.innerText
        const language = e.dataset.lang
        if (language) {
          let html = code
          if (Prism.languages[language]) {
            html = Prism.highlight(code, Prism.languages[language], language)
          }
          e.innerHTML = `<code>${html}</code>`
        }
      })
    }
  }, [])
  return <div></div>
}
