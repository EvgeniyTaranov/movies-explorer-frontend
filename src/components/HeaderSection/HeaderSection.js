import './HeaderSection.css'

function HeaderSection(props) {
    return (
        <h2 className={`header-section ${props.class}`}>{props.text}</h2>
    )
}

export default HeaderSection;