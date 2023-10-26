import "./CheckboxToggle.css"

function CheckboxToggle({
    setChecked,
    checked,
    handleClick,
    isDisabledChekbox,
}) {
    function handleChecked() {
        const newCheckedValue = !checked;
        setChecked(newCheckedValue);
        handleClick(newCheckedValue);
    }

    return (
        <div className="checkbox-toggle">
            <label>
                <input
                    onChange={handleChecked}
                    checked={checked}
                    disabled={isDisabledChekbox}
                    className="checkbox-toggle__input"
                    type="checkbox"
                />
                <span className="checkbox-toggle__switch"></span>
            </label>
            <p className="checkbox-toggle__text">Короткометражки</p>
        </div>
    );
}

export default CheckboxToggle;
