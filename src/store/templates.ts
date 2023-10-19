import type { PageData } from './editor'

export type TemplateProps = Required<Omit<PageData, 'props' | 'setting'>>
