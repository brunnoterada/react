import './CampoTexto.css'

const CampoTexto = (props) =>{

    //Concatenar frase
    //const placeholderModificada =`${props.placeholder}...`;

    let valor = ''

    const aoDigitado = (evento) =>{
        valor = evento.target.value
        console.log(valor)
    }
   
    return (
        <div className="campo-texto"> 
            <label>{props.label}</label>
            <input onChange={aoDigitado} required={props.obrigatorio} placeholder={`${props.placeholder}...`}/>
        </div>
    )

}

export default CampoTexto