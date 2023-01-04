import CampoTexto from '../CampoTexto/CampoTexto'
import './Formulario.css'
const Formulario = () =>{
    return(
        <section className='formulario'>
            <form>
                <h2> Preencha os dados para criar um card dos amigos</h2>
                <CampoTexto label='Nome' placeholder='Digite seu Nome'/>
                <CampoTexto label='Cargo' placeholder='Digite seu cargo'/>
                <CampoTexto label='Imagem' placeholder='Digite o caminho da imagem'/>
            </form>
        </section>
    )
}
export default Formulario