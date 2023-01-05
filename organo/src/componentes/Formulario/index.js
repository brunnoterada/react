import Botao from '../Botao'
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

    const aoSalvar = (evento) =>{
        evento.preventDefault()
        console.log('Form foi Submetido')
    }
    return(
        <section className='formulario'>
            <form onSubmit={aoSalvar}>
                <h2> Preencha os dados para criar um card dos amigos</h2>
                <CampoTexto obrigatorio={true} label='Nome' placeholder='Digite seu Nome'/>
                <CampoTexto obrigatorio={true}label='Cargo' placeholder='Digite seu cargo'/>
                <CampoTexto label='Imagem' placeholder='Digite o caminho da imagem'/>
                <ListaSuspensa  label='Time' itens={times}/>
                <Botao texto='Criar card'/>
            </form>
        </section>
    )
}
export default Formulario