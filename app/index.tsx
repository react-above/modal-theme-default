import React, { FC, useState } from 'react'
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

const App: FC = () => {
  const [isOpen, setOpen] = useState(true)
  const open = () => setOpen(true)
  const close = () => setOpen(false)

  return (
    <div>
      <h1>@react-above/modal-theme-default</h1>
      <button onClick={open}>Open modal</button>

      <Modal isOpen={isOpen} close={close}>
        <Modal.Surface>
          <Modal.Header title="My modal" close={close} />
          <Modal.Body>Hello world</Modal.Body>
        </Modal.Surface>
      </Modal>
    </div>
  )
}

render(<App />, document.querySelector('#root'))
