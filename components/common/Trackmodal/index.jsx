import React, { useState } from "react";
import { Modal, Tooltip } from "antd";
import Image from "next/image";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { useRouter } from "next/router";

function Trackmodal({ modalOpen, setModalOpen }) {
    const router = useRouter();

    const [copied, setCopied] = useState(false);

    const handleClick = () => {
        setModalOpen(false);
        setCopied(false)
    };

    const TextToCopy = `https://print247-testing-clone.vercel.app` + router?.asPath;

    return (
        <div>
            <></>
            {/* <Modal centered open={modalOpen} onOk={() => setModalOpen(true)} onCancel={handleClick}>
                <div className="inner_data">
                    <h2>Share this quote</h2>

                    <span>
                        To share this quote, copy the link below and send it to a friend via
                        email or text
                    </span>

                    <div className="share-input">
                        <input value={TextToCopy} type="text" />
                        <Tooltip title={copied ? "copied!" : "copy"} defaultOpen >
                            <CopyToClipboard text={TextToCopy} onCopy={() => setCopied(true)} className="copier" >
                                <Image src="/image/paste.png" alt="copy" width={21} height={25} />
                            </CopyToClipboard>
                        </Tooltip>
                    </div>
                    <div className="social_iconss">
                        <Image src="/image/modalfb.png" alt="copy" width={56} height={56} />
                        <Image src="/image/modalwhatsapp.png" alt="copy" width={56} height={56} />
                        <Image src="/image/modaltwitter.png" alt="copy" width={56} height={56} />
                    </div>

                    <div className="shareclosse" onClick={handleClick}>
                        <button>Close</button>
                    </div>
                </div>
            </Modal> */}

        </div>
    );
}

export default Trackmodal;
