import './NavigationBar.css'

function NavigationBar(props){
    return(
        <nav className="navigation-bar">
            {props.children}
        </nav>
    )
};

export default NavigationBar;