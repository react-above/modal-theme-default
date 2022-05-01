import { Body } from './body'
import { Close } from './close'
import { Header } from './header'
import { HeaderBox } from './header-box'
import { Surface } from './surface'
import { Title } from './title'

declare module '@react-above/modal' {
  export interface ExtendModalCompound {
    Surface: typeof Surface
    Header: typeof Header
    HeaderBox: typeof HeaderBox
    Title: typeof Title
    Close: typeof Close
    Body: typeof Body
  }
}
