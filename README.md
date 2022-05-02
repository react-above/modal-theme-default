# @react-above/modal-theme-default

## Installation

```sh
$ yarn add @react-above/modal-theme-default
```

## Usage

### 1. Create Modal component

```tsx
/* Somewhere in your UI layer.. */

import { createModal } from '@react-above/modal'
import { ThemeDefault } from '@react-above/modal-theme-default'

export const Modal = createModal({
  theme: ThemeDefault(),
  // ...
})
```

### 2. Use anywhere

```tsx
import { Modal } from '@app/ui'

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