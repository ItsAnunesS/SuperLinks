declare global {
  interface LinksInterface {
    id: string
    title: string
    href: string
    target?: '_blank' | '_self' | '_parent' | '_top'
    icon?: string
    disabled?: boolean
  }
}

export { LinksInterface };
