import "./CheckboxToggle.css"

function CheckboxToggle() {
    return(
        <div className="checkbox-toggle" > 
            <label>
               <input className="checkbox-toggle__input" type="checkbox"></input>
               <span className="checkbox-toggle__switch"></span>
            </label> 
            <p className="checkbox-toggle__text">Короткометражки</p>
        </div>

    )
}

export default CheckboxToggle;