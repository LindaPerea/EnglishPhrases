const ButtonClick = ({colors, randomColorIndex, increment}) => {
   
    return (

        <div className="buttonClick">
            <button onClick= {increment} >
                <i className="fa-solid fa-arrows-spin" style = {{ color: colors [randomColorIndex]}} >
                </i>    
            </button>
        </div>
    );
};

export default ButtonClick;