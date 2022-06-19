const Header = (props) => {
    
    const headerStyle = {
        display: 'flex',
        justifyContent: 'space-around',
        alignItems: 'center',
        background: 'lightblue',
        padding: '12px',
    }



    const fontStyle = {
        letterSpacing: '4px',
    }

    const fontStyleDark = {
        letterSpacing: '4px',
        color: 'white'
    }

    const oval = {
        width: '36px',
        height: '20px',
        border: '1px solid black',
        borderRadius: '40%',
        position: 'relative'

    }

    const circleRight = {
        width: '20px',
        height: '20px',
        // border: '1px solid green',
        borderRadius: '100%',
        background: 'white',
        position: 'absolute',
        left: '50%'
    }

    const circleLeft = {
        width: '20px',
        height: '20px',
        borderRadius: '100%',
        background: 'black',
        position: 'absolute',
        right: '50%'
    }
    return (
        <header style={headerStyle}>
            <a href="./">
                <img
                    src='https://cdn-icons-png.flaticon.com/512/1067/1067256.png'
                    width='50px'
                />
            </a>
            <h1 style={props.toggleDarkMode ? fontStyle : fontStyleDark}>SPACE KING</h1>
            <div style={oval} onClick={props.handleToggle}>
                <span style={props.toggleDarkMode ? circleLeft : circleRight}></span>
            </div>
        </header>
    )
}

export default Header