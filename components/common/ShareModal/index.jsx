import React, { useState } from "react";
import { Button, Modal, Tooltip } from "antd";
import Image from "next/image";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { useRouter } from "next/router";
import {
  FacebookShareButton,
  PinterestShareButton,
  TwitterShareButton,
  WhatsappShareButton,
} from "react-share";

function ShareModal({ shareModal, setShareModal }) {
  const router = useRouter();

  const [copied, setCopied] = useState(false);
  const handleClick = () => {
    setShareModal(false);
    setCopied(false)
  };

  const TextToCopy = `https://print247-testing-clone.vercel.app` + router?.asPath;

  return (
    <div>
      <Modal centered open={shareModal} onOk={() => setShareModal(false)} onCancel={handleClick}>
        <div className="innerr_dataa">
          <h2>Share this quote</h2>
          <span>To share this quote, copy the link below and send it to a friend via email or text</span>

          <div className="share-inputt">
            <input value={TextToCopy} type="text" />
            <CopyToClipboard text={TextToCopy} onCopy={() => setCopied(true)} className="copierr">
              <img className="copy_paste_img" src="/image/paste.png" alt="copy" />
            </CopyToClipboard>
          </div>

          <div className="social_iconss">
            <FacebookShareButton url={TextToCopy}>
              <Image src="/image/modalfb.png" alt="copy" width={56} height={56} />
            </FacebookShareButton>

            <WhatsappShareButton url={TextToCopy}>
              <Image src="/image/modalwhatsapp.png" alt="copy" width={56} height={56} />
            </WhatsappShareButton>

            {/* <PinterestShareButton url={TextToCopy}>
              <Image src="/image/pinterestmodal1.png" alt="copy" width={56} height={56} />
            </PinterestShareButton> */}

            <TwitterShareButton url={TextToCopy}>
              <Image src="/image/modaltwitter.png" alt="copy" width={56} height={56} />
            </TwitterShareButton>
          </div>

          <div className="shareclosse" onClick={handleClick}>
            <button>Close</button>
          </div>
        </div>
      </Modal>
    </div>
  );
}

export default ShareModal;
