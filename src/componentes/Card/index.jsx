import './style.css'

function Card({nome, hora}) {
    return (
        <div className='card'>
        <strong>{nome}</strong>
        <small>{hora}</small>
        </div>
    )
}
export default Card