import { createTheme } from '@react-above/modal'
import { Frame } from './frame'
import { Body } from './body'
import { Close } from './close'
import { Header } from './header'
import { HeaderBox } from './header-box'
import { Surface } from './surface'
import { Title } from './title'
import './extend.d'

export const ThemeDefault = createTheme({
  build: () => ({
    frame: Frame,
    extend: (modal) => {
      modal.Surface = Surface
      modal.Header = Header
      modal.HeaderBox = HeaderBox
      modal.Title = Title
      modal.Close = Close
      modal.Body = Body
    },
  }),
})
