declare class Collapsible extends React.Component<CollapsibleProps> {}
declare namespace Collapsible {}

interface CollapsibleProps extends React.HTMLProps<Collapsible> {
  trigger: string | React.ReactElement<any>
  triggerWhenOpen?: string | React.ReactElement<any>
  triggerDisabled?: false
  transitionTime?: number
  easing?: string
  open?: boolean
  accordionPosition?: string
  handleTriggerClick?: (accordionPosition?: string | number) => void
  onOpen?: () => void
  onClose?: () => void
  onOpening?: () => void
  onClosing?: () => void
  lazyRender?: boolean
  overflowWhenOpen?:
    | 'hidden'
    | 'visible'
    | 'auto'
    | 'scroll'
    | 'inherit'
    | 'initial'
    | 'unset'
  triggerSibling?: React.ReactElement<any>
  classParentString?: string
  className?: string
  openedClassName?: string
  triggerClassName?: string
  triggerOpenedClassName?: string
  contentOuterClassName?: string
  contentInnerClassName?: string
}

declare module 'react-collapsible' {
  export default Collapsible
}
