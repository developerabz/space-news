import './card.css'

const Card = ({ articles }) => {
    const styleImage = {
        width: '250px',
        height: '200px',
        
    }

    const cards = {
        width: '500px',
        height: 'fit-content',
        border: '2px solid gray',
        margin: '10px',
        padding: '10px',
        borderRadius: '15px',
        background: 'lightblue',
    }

    const flex = {
        display: 'flex',
        alignItems: 'center',
    }

    const array = articles.map(article => {
        return (
            <div style={cards} key={article.id}>
                <a 
                    href={article.url}
                    className='link'
                    target='_blank'
                >
                    <div style={flex}>
                        <div>
                            <h2>{article.title}</h2>
                            <span>
                                {article.newsSite} - {article.updatedAt.slice(0, 10)}
                            </span>
                        </div>
                        <img src={article.imageUrl} alt='' style={styleImage} />
                    </div>
                    <p>{article.summary}</p>
                </a>
            </div>
        )
      })
    return (
        <main className='main'>
            {array}
        </main>
    )
    
}

export default Card