interface Model {
    title:string,
    text:string,
}
const Modal = (props:Model) => {

  const handle_submit=()=>{
    const modal = document.querySelector(".Modal_bg") as HTMLElement;
    modal.style.display='none'
    
  }
  const hability_Button_PlayGame=()=>{
    const button_playGame = document.querySelector("#btnPlayGame")
    button_playGame?.removeAttribute("Disabled")
  }


  return (
    <section className="Modal_bg">
      <div className="Modal">
        <h1>{props.title}</h1>
        <p>{props.text}</p>
        <button type="button" onClick={()=> { handle_submit(); hability_Button_PlayGame() }}>ok</button>
      </div>
    </section>
  );
};

export default Modal;
