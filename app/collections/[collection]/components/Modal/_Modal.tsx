import SizeSelect from "../SizeSelect"
import Swatch from "../Swatch"
import ModalProductImage from "./_ModalProductImage"
import ModalWrapper from "./_ModalWrapper"

const Modal = ({ children }: { children: React.ReactNode }) => <>{children}</>

Modal.Wrapper = ModalWrapper
Modal.Image = ModalProductImage
Modal.Swatch = Swatch
Modal.Size = SizeSelect

export default Modal
