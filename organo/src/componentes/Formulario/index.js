import CampoTexto from '../CampoTexto/CampoTexto'
import ListaSuspensa from '../ListaSuspensa'
import './Formulario.css'
const Formulario = () =>{
    const times= [
        'Programação',
        'Front-End',
        'Data Science',
        'Design',
    ]
    return(
        <section className='formulario'>
            <form>
                <h2> Preencha os dados para criar um card dos amigos</h2>
                <CampoTexto label='Nome' placeholder='Digite seu Nome'/>
                <CampoTexto label='Cargo' placeholder='Digite seu cargo'/>
                <CampoTexto label='Imagem' placeholder='Digite o caminho da imagem'/>
                <ListaSuspensa itens={times}/>
            </form>
        </section>
    )
}
export default Formulario