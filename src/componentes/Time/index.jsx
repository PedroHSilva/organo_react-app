import './index.css'

const Time = (props) => {

    return (
        <section className='time' backgroundColor={ props.corSegundaria }>
            <h3>{ props.nome }</h3>
        </section>
    )
}

export default Time