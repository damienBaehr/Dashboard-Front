import React from "react";

type BoutonProps = {
  envoyer: () => void;
  nameLabel: string;
};

const Bouton = (props: BoutonProps) => {
  const { envoyer, nameLabel } = props;

  return (
    <>
      <button className="w-full bg-blue-500 text-white rounded p-1 " onClick={envoyer}>
        {nameLabel}
      </button>
    </>
  );
};

export default Bouton;
