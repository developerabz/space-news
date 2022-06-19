const Card = ({test}) => {
    const array = test.map(tes => {
        return (
            <div>
                <h2>{tes.title}</h2>
            </div>
        )
      })
    return (
        <main>{array}</main>
    )
    
}

export default Card