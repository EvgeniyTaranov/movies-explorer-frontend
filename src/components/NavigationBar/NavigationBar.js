import "./NavigationBar.css";

function NavigationBar(props) {
  return <nav className="navigation">{props.children}</nav>;
}

export default NavigationBar;