import Image from "next/image";
import { useContext, useEffect } from "react";
import ReactModal from "react-modal";

// icons
import { FaPlay as PlayIcon } from "react-icons/fa";
import { IoMdAddCircleOutline as AddIcon } from "react-icons/io";
import {
    AiFillLike as LikeIcon,
    AiFillDislike as DislikeIcon,
    AiOutlineClose as CloseIcon,
} from "react-icons/ai";

// global state
import ctx from "../../../context";

// style
import styles from "../../../styles/Layout/Modal/Index.module.scss";

ReactModal.setAppElement("#wrapper");

export default function Modal() {
    const {
        modalModify: { modalData, modalIsOpen, setModalIsOpen },
    } = useContext(ctx);

    // disable scroll in background
    useEffect(() => {
        const bodyRoot = document.body;
        if (modalIsOpen) {
            bodyRoot.style.overflowY = "hidden";
        } else {
            bodyRoot.style.overflowY = "scroll";
        }
    }, [modalIsOpen]);

    return (
        <ReactModal
            isOpen={modalIsOpen}
            onRequestClose={setModalIsOpen.bind(null, false)}
            style={{
                content: { background: "#141414", padding: "0%" },
                overlay: { background: "rgba(0,0,0,0.5)" },
            }}
        >
            <main className={styles.modal}>
                <header className={styles.modal__header}>
                    <Image
                        src={modalData?.poster}
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
