import { useState } from 'react'
import Botao from '../Botao'
import CampoTexto from '../CampoTexto/CampoTexto'
import ListaSuspensa from '../ListaSuspensa'
import './Formulario.css'
const Formulario = (props) =>{


    const [nome, setNome] = useState('')
    const [cargo, setCargo] = useState('')
    const [imagem, setImagem] = useState('')
    const [time, setTimes] = useState('')

    const aoSalvar = (evento) => {
        evento.preventDefault()
        props.aoColaboradorCadastrado ({
            nome,
            cargo,
            imagem,
            time
        })
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
                <ListaSuspensa
                obrigatorio={true}
                 label='Time' 
                 itens={times}
                 valor={time}
                 aoAlterado ={valor => setTimes(valor)}/>
                <Botao texto='Criar card'/>
            </form>
        </section>
    )
}
export default Formulario