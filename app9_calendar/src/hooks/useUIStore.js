import { useSelector, useDispatch } from "react-redux"
import { onCloseModal, onOpenModal } from "../store/ui/uiSlice";

export const useUIStore = () => {
    const { isModalOpen } = useSelector( state => state.ui)

    const dispatch = useDispatch();


    const openModal = () => {
        dispatch(onOpenModal());
    }

    const closeModal = () => {
        dispatch(onCloseModal());
    }

    return {
        isModalOpen,
        openModal,
        closeModal
    }
}