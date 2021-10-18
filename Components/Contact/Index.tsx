import React, { useState } from "react";
import Image from "next/image";
import contact from "../../public/images/message.png";
import Modal from "../Modal/Index";
interface Props {}

const Contact = (props: Props) => {
  const [show, setShow] = useState<boolean>(false);
  return (
    <>
      <div className="fixed right-8 bottom-8" onClick={() => setShow(!show)}>
        <Image
          src={contact}
          alt="Picture of the author"
          width={50}
          height={50}
        />
      </div>
      {show && (
        <Modal
          title="Let us connect."
          desc=""
          footer={<></>}
          onClose={() => setShow(false)}
        />
      )}
    </>
  );
};

export default Contact;
