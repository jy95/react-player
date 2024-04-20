import BaseReactPlayer, { BaseReactPlayerProps } from './base.js'

export interface VimeoConfig {
  playerOptions?: Record<string, any>
  title?: string
}

export interface VimeoPlayerProps extends BaseReactPlayerProps {
  config?: VimeoConfig
}

export default class VimeoPlayer extends BaseReactPlayer<VimeoPlayerProps> {}
