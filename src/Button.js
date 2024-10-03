function Button(props) {
   return (
      <button className={`button ${props.purpose}`} onClick={props.onClick}>
         {props.label}
      </button>
   );
}

export default Button;
