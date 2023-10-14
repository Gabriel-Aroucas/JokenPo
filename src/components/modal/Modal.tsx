interface = {
    props:string,
}
export type Title = "Oxford";
const Modal = (props:interface) => {
  return (
    <section className="Modal_bg">
      <div className="Modal">
        <h1>{props.name as Title}</h1>
        <p>api de frases</p>
        <button type="button">ok</button>
      </div>
    </section>
  );
};

export default Modal;
