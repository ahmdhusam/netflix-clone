import Image from "next/image";
import { useContext } from "react";
import ReactModal from "react-modal";

// icons
import { AiOutlineClose as CloseIcon } from "react-icons/ai";
import { AddIcon, DislikeIcon, LikeIcon, PlayIcon } from "../../../utils/icons";

// global state
import ctx from "../../../context";

// hooks
import useIsMobile from "../../../hooks/useIsMobile";

// style
import styles from "../../../styles/Layout/Modal/Index.module.scss";

ReactModal.setAppElement("#wrapper");

const modalStyle = {
    content: { background: "#141414", padding: "0%" },
    overlay: { background: "rgba(0,0,0,0.7)" },
};

export default function Modal() {
    const {
        modalModify: { modalData, modalIsOpen, setModalIsOpen },
    } = useContext(ctx);
    const { isMobile } = useIsMobile();

    return (
        <ReactModal
            isOpen={modalIsOpen}
            onRequestClose={setModalIsOpen.bind(null, false)}
            style={modalStyle}
        >
            <main className={styles.modal}>
                <header className={styles.modal__header}>
                    <Image
                        src={
                            isMobile
                                ? modalData.fullPoster
                                : modalData.fullBackdrop
                        }
                        alt="banner"
                        width={300}
                        height={300}
                        layout="fill"
                    />
                    <div className={styles.modal__header_content}>
                        <h2 className="title">{modalData?.title}</h2>
                        <div className={styles.modal__header_content_buttons}>
                            <button>
                                <PlayIcon /> Play
                            </button>
                            <div>
                                <AddIcon />
                                <LikeIcon />
                                <DislikeIcon />
                            </div>
                        </div>
                        <span>{modalData?.vote}% Match</span>
                    </div>
                    <div
                        onClick={setModalIsOpen.bind(null, false)}
                        className={styles.modal__header_close}
                    >
                        <CloseIcon />
                    </div>
                </header>
                <main className={styles.modal__main}>
                    <p>{modalData?.description}</p>
                </main>
            </main>
        </ReactModal>
    );
}
