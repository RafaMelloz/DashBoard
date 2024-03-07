import "./styles.css"

export const Card = (props: { text: string, number: string}) =>{
    return(
        <div className="card">
            <h2 className='count__card card__color__default'>{props.number}</h2>
            <span className="description__card">{props.text}</span>
        </div>
    )
}