import './Time.css'

const Time = (props) =>{
    return(
        <div className='time'>
        <section>
            <h3>
                {props.nome}
            </h3>
        </section>
        </div>
    )
}

export default Time