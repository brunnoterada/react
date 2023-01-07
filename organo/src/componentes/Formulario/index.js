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

    const [nome, setNome] = useState('')
    const [cargo, setCargo] = useState('')
    const [imagem, setImagem] = useState('')

    const aoSalvar = (evento) =>{
        evento.preventDefault()
        console.log('Form foi Submetido', nome, cargo, imagem)
    }
    return(
        <section className='formulario'>
            <form onSubmit={aoSalvar}>
                <h2> Preencha os dados para criar um card dos amigos</h2>
                <CampoTexto 
                obrigatorio={true} 
                label='Nome' 
                placeholder='Digite seu Nome'
                valor={nome}
                aoAlterado ={valor => setNome(valor)}/>
                <CampoTexto 
                obrigatorio={true}
                label='Cargo' 
                placeholder='Digite seu cargo'
                valor={cargo}
                aoAlterado ={valor => setCargo(valor)}/>
                <CampoTexto 
                label='Imagem' 
                placeholder='Digite o caminho da imagem'
                valor={imagem}
                aoAlterado ={valor => setImagem(valor)}/>
                <ListaSuspensa label='Time' itens={times}/>
                <Botao texto='Criar card'/>
            </form>
        </section>
    )
}
export default Formulario