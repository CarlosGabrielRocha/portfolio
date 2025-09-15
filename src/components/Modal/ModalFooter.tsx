import type { DefaultProps } from "../../types/defaultTypes"
import Button from "../Button"
import Icon from "../icons/Icon"

interface ModalFooterProps extends DefaultProps {
  sourceCodeHref?: string
}

const ModalFooter: React.FC<ModalFooterProps> = ({ sourceCodeHref }) => {
  const disabledStyle = 'pointer-events-none opacity-50'

  return (
    <div className="modal-footer flex justify-between py-3 px-4">
      <div className="flex gap-3 items-center">
        <p>Source Code</p>
        <Icon src="/icons/github-icon.svg" alt="github" />
      </div>
      <a 
        href={sourceCodeHref} 
        target="brank" 
        className={sourceCodeHref ? '' : disabledStyle}>

        <Button className="py-2 px-6 text-xs bg-darker-blue/80 shadow-[0px_0px_5px_5px_#ffffff15] drop-shadow-2xl drop-shadow-white/10">
          Source</Button>
      </a>
    </div>
  )
}

export default ModalFooter