import { createTheme, ModalFC } from '@react-above/modal'
import { Frame } from './frame'
import { Body } from './extend/body'
import { Close } from './extend/close'
import { Header } from './extend/header'
import { HeaderBox } from './extend/header-box'
import { Surface } from './extend/surface'
import { Title } from './extend/title'

export type DefaultModal = ModalFC & {
  Surface: typeof Surface
  Header: typeof Header
  HeaderBox: typeof HeaderBox
  Title: typeof Title
  Close: typeof Close
  Body: typeof Body
}

export const ThemeDefault = createTheme({
  build: () => ({
    name: 'default',
    frame: Frame,
    extend: (modal) => {
      const compound: DefaultModal = Object.assign(modal, {
        Surface,
        Header,
        HeaderBox,
        Title,
        Close,
        Body,
      })

      return compound
    },
  }),
})
