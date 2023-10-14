interface Model {
    title:string,
    text:string,
}
const Modal = (props:Model) => {

  return (
    <section className="Modal_bg">
      <div className="Modal">
        <h1>{props.title}</h1>
        <p>{props.text}</p>
        <button type="button" onClick={()=> {
            const modal = document.querySelector(".Modal_bg") as HTMLElement;
            modal.style.display='none'}}>ok</button>
      </div>
    </section>
  );
};

export default Modal;
