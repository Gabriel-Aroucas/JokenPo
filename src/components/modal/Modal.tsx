interface Model {
    title:string,
    text:string,
    display:string,
}
const Modal = (props:Model) => {


  const button_submit_modal = document.querySelector("#button_submit_modal") as HTMLButtonElement;

  if(button_submit_modal){
  button_submit_modal.style.display=props.display;
  }

  const handle_submit=()=>{
    const modal = document.querySelector(".Modal_bg") as HTMLElement;
    modal.style.display='none'    
    

  }
  const hability_Button_Play_Game=()=>{
    const button_play_Game = document.querySelector("#button_Play_Game")
    button_play_Game?.removeAttribute("Disabled")
  }

  return (
    <section className="Modal_bg">
      <div className="Modal">
        <h1>{props.title}</h1>
        <p>{props.text}</p>
        <button type="button" id="button_submit_modal" onClick={()=> { handle_submit(); hability_Button_Play_Game() }}>ok</button>
      </div>
    </section>
  );
};

export default Modal;
