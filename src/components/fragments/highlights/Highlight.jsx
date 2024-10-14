import React from "react";

const Highlight = ({ children }) => {
  return (
    <>
      <section className="py-14 mb-10">
        <div className="container">{children}</div>
      </section>
    </>
  );
};

const Image = ({ img }) => (
  <div>
    <img src={img} alt="" className="h-16 w-16 rounded-full cursor-pointer" />
  </div>
);

const Text = ({ head, rate }) => (
  <div>
    <p className="text-sm text-gray-500 text-justify">{head}</p>
    <p>{rate}</p>
  </div>
);

Highlight.Image = Image;
Highlight.Text = Text;

export default Highlight;
