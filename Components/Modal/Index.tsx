import React from "react";

interface Props {
  title: string;
  desc: string;
  footer: JSX.Element;
  onClose: () => void;
}

const Modal = ({ title, desc, footer, onClose }: Props) => {
  return (
    <div className=" fixed right-8 bottom-24 " onClick={() => onClose()}>
      <div
        className=" bg-white rounded-xl p-3"
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        <h1 className="text-xl mb-8">{title}</h1>
        <form
          className="flex flex-col items-center justify-center "
          onSubmit={(e) => {
            e.preventDefault();
            onClose();
          }}
        >
          <input
            type="text"
            placeholder="Name"
            className=" px-3 py-2 my-2 rounded-xl border"
          />
          <input
            type="email"
            placeholder="email"
            className=" px-3 py-2 rounded-xl border"
          />
          <button
            type="submit"
            className="bg-purple-400 bg-opacity-100 p-4 rounded flex items-center h-10 my-2 self-end text-white"
          >
            send
          </button>
        </form>
      </div>
    </div>
  );
};

export default Modal;
