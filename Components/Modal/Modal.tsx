import React from "react";

interface Props {
  title: string;
  desc: string;
  footer: JSX.Element;
  onClose: () => void;
}

const Modal = ({ title, desc, footer, onClose }: Props) => {
  return (
    <div
      className="w-screen h-screen bg-gray-300 bg-opacity-50 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex justify-center items-center"
      onClick={() => onClose()}
    >
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
            className="bg-purple-400 p-4 rounded flex items-center h-10 my-2 self-end text-white"
          >
            send
          </button>
        </form>
      </div>
    </div>
  );
};

export default Modal;
