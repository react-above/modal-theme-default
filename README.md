# @react-above/modal-plugin-default

## Installation

```sh
$ yarn add @react-above/modal-plugin-default
```

## Usage

### 1. Set up

```tsx
/*
 * index.tsx / App.tsx
 */

import { configure } from '@react-above/modal'
import { ThemeDefault } from '@react-above/modal-theme-default'
import '@react-above/modal-theme-default/dist/styles.css'

configure({
  // ...
  theme: ThemeDefault(),
  // ...
})
```

### 2. Use anywhere

```tsx
import { Modal } from '@react-above/modal'

<Modal isOpen={isOpen} close={close}>
  <Modal.Surface>
    <Modal.Header title="My modal" close={close} />
    <Modal.Body>My modal text</Modal.Body>
  </Modal.Surface>
</Modal>
```

## API

### Modal.Surface

The container for your modal content

```tsx
interface Props {
  /*
   * true - fill fullscreen OR more (depends on content size)
   * 'strict' - fill fullscreen precisely (you should manage overflow inside)
   */
  fullscreen?: boolean | 'strict'
}
```

### Modal.Header

The modal's top part

```tsx
interface Props {
  title?: string
  close?: () => void
}
```

### Modal.Body

The modal's content part

```tsx
interface Props {}
```