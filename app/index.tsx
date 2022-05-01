import React from 'react'
import { render } from 'react-dom'
import {
  configure,
  FocusLockPlugin,
  Modal,
  ScrollLockPlugin,
} from '@react-above/modal'
import { ThemeDefault } from '@react-above/modal-theme-default'
import '@react-above/modal-theme-default/styles.scss'

configure({
  theme: ThemeDefault(),
  plugins: [ScrollLockPlugin(), FocusLockPlugin()],
})

render(
  <div>
    <h1>@react-above/modal-theme-default</h1>
    <Modal isOpen={true} close={() => {}}>
      <Modal.Surface>
        <Modal.Header title="My modal" close={() => {}} />
        <Modal.Body>Hello world</Modal.Body>
      </Modal.Surface>
    </Modal>
  </div>,
  document.querySelector('#root')
)
