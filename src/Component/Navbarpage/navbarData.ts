export type NavItem = {
  label: string
  to: string
  sectionId?: string
  hasMenu?: boolean
}

export const navItems: NavItem[] = [
  { label: 'Selected Work', to: '/#about', sectionId: 'about' },
  { label: 'Services', to: '/work', hasMenu: true },
  { label: 'Process', to: '/#pitch', sectionId: 'pitch' },
  { label: 'Contact', to: '/#contact', sectionId: 'contact' },
]
