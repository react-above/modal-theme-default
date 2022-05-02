import { createTheme, ModalFC } from '@react-above/modal'
import { Frame } from './frame'
import { Body } from './body'
import { Close } from './close'
import { Header } from './header'
import { HeaderBox } from './header-box'
import { Surface } from './surface'
import { Title } from './title'

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
    frame: Frame,
    extend: (modal) => {
      const compound = modal as DefaultModal
      compound.Surface = Surface
      compound.Header = Header
      compound.HeaderBox = HeaderBox
      compound.Title = Title
      compound.Close = Close
      compound.Body = Body
      return compound
    },
  }),
})
