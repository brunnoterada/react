import './CampoTexto.css'

const CampoTexto = (props) =>{

    //Concatenar frase
    //const placeholderModificada =`${props.placeholder}...`;
   
    return (
        <div className="campo-texto"> 
            <label>{props.label}</label>
            <input required={props.obrigatorio} placeholder={`${props.placeholder}...`}/>
        </div>
    )

}

export default CampoTexto