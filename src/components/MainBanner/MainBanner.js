import './MainBanner.css'
import NavTab from '../NavigationBar/NavigationBar'
function MainBanner(){
    const listLink = [
        {link: "/#project", text: "О проекте"},
        {link: "/#technologies", text: "Технологии"},
        {link: "/#student", text: "Студент"}
    ]
    return(
        <section className="main-banner">
            <div className="banner">
                <h1 className="banner__title">Учебный проект студента факультета Веб-разработки.</h1>
                <NavTab>
                    <ul className="navigation-section">
                    {listLink.map((item, index)=> (<li key={index} className='banner__element'><a href={item.link} className="banner__link">{item.text}</a></li>))}
                    </ul>
                </NavTab>
            </div>
        </section>
    )
};

export default MainBanner;