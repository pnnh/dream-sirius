import ReactDOM from 'react-dom/client'
import React from 'react'
import {GoTop} from '@/components/go-top'
import './index.scss'
import {randomPassword} from './utils/rand'

import $ from 'jquery'

const goTopElement = document.getElementById('go-top')
if (goTopElement) {
  //ReactDOM.render(<GoTop/>, goTopElement)
  const root = ReactDOM.createRoot(goTopElement)
  root.render(<GoTop/>)
}

const goTopElement2 = $('#test-link').get(0)//document.getElementById('test-link')
if (goTopElement2) {
  //ReactDOM.render(<GoTop/>, goTopElement)
  const root = ReactDOM.createRoot(goTopElement2)
  root.render(<span className={'red-text'} title={'这是一个链接'}>{'链接'}</span>)
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
