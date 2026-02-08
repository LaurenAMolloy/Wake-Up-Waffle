import ReactDOM from 'react-dom';
import { useEffect } from 'react';
import type { ReactNode } from 'react';



interface ModalProps {
    onClose: () => void;
    children: ReactNode;
    confirmationBar?: ReactNode;
}

export default function Modal({ children, confirmationBar }: ModalProps) {

    useEffect(() => {
        document.body.classList.add('overflow-hidden');

        return () => {
            document.body.classList.remove('overflow-hidden')
        }
    }, []);

    const modalContainer =document.querySelector('.modal-container')

    if(!modalContainer) {
        return null
    }

  return ReactDOM.createPortal (
    <div>
        <div
        className="fixed inset-0 bg-gray-300 opacity-80"
        onClick={(e) => e.stopPropagation()}
        ></div>
        <div className="fixed inset-20 p-10 bg-white h-50">
            <div className="flex flex-col items-center justify-center">
                {children}
                <div className="flex justify-end">{confirmationBar}</div>
            </div>
        </div>
    </div>,
    modalContainer
  )
}
