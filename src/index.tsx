import ReactDOM from 'react-dom/client'
import React from 'react'
import {GoTop} from '@/components/go-top'
import './index.scss'
import {randomPassword} from './utils/rand'

export * from '@/components/card.svelte'
export * from '@/components/hello.svelte'
export * from '@/components/Clock.svelte'
export * from '@/pages/utils/timestamp.svelte'
export * from '@/pages/utils/md5.svelte'

const goTopElement = document.getElementById('go-top')
if (goTopElement) {
  //ReactDOM.render(<GoTop/>, goTopElement)
  const root = ReactDOM.createRoot(goTopElement)
  root.render(<GoTop/>)
}

class XSearch extends HTMLElement {
  constructor () {
    super()
    console.debug('xsearch')
    const mountPoint = document.createElement('span')
    this.attachShadow({mode: 'open'}).appendChild(mountPoint)

    const name = this.getAttribute('name')
    const root = ReactDOM.createRoot(mountPoint)
    root.render(<span className={'brown-text'}>{name}</span>)
  }
}

customElements.define('fx-hover-link', XSearch)

const goTopElement2 = document.getElementById('test-link')
if (goTopElement2) {
  //ReactDOM.render(<GoTop/>, goTopElement)
  const root = ReactDOM.createRoot(goTopElement2)
  root.render(<span className={'red-text'}>{'链接'}</span>)
}


window.randomString = (length = 16, number = true, letter = true,
  uppercaseLetter = true, symbol = true) => {
  const password = randomPassword(16, {
    number: number,
    letter: letter,
    uppercaseLetter: uppercaseLetter,
    symbol: symbol,
  })
  return password
}
