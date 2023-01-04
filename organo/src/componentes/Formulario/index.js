import CampoTexto from '../CampoTexto/CampoTexto'
import './Formulario.css'
const Formulario = () =>{
    return(
        <section>
            <form>
                <CampoTexto label='Nome' placeholder='Digite seu Nome'/>
                <CampoTexto label='Cargo' placeholder='Digite seu cargo'/>
                <CampoTexto label='Imagem' placeholder='Digite o caminho da imagem'/>
            </form>
        </section>
    )
}
export default Formulario