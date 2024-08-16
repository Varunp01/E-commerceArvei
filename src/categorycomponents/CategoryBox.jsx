import './CategoryBox.css'

export default function CategoryBox({category,option}){
    return(
        <>
        <div className="cardoutline">
          {option=="1"?<img className="cardimg" src="https://ibb.co/tbK6ZrR" alt="Card image"></img> : <img className="cardimg" src="https://ibb.co/72PmtZv" alt="Card image"></img>}
          <br></br>
              <div className="cardbody">
                <p className="cardtext">{category}</p>
            </div>
        </div>

        </>
    )
}
