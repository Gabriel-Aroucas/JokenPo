interface Model {
    title:string,
    text:string,
}
const Modal = (props:Model) => {

  const handle_submit=()=>{
    const modal = document.querySelector(".Modal_bg") as HTMLElement;
    modal.style.display='none'
    
  }
  const desability_Button_Play_Game=()=>{
    const button_play_Game = document.querySelector("#button_Play_Game")
    button_play_Game?.removeAttribute("Disabled")
  }

  return (
    <section className="Modal_bg">
      <div className="Modal">
        <h1>{props.title}</h1>
        <p>{props.text}</p>
        <button type="button" onClick={()=> { handle_submit(); desability_Button_Play_Game() }}>ok</button>
      </div>
    </section>
  );
};

export default Modal;
