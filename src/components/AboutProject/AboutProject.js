import SectionHeader from "../HeaderSection/HeaderSection";
import './AboutProject.css'

function AboutProject() {
    return (
        <section className="project" id="project">
            <SectionHeader text="О проекте"></SectionHeader>
            <div className="project__info">
                <div className="project__element">
                    <h3 className="project__subtitle">Дипломный проект включал 5 этапов</h3>
                    <p className="project__description">Составление плана, работу над бэкендом, вёрстку, добавление функциональности и&nbsp;финальные доработки.</p>
                </div>
                <div className="project__element">
                    <h3 className="project__subtitle">На выполнение диплома ушло 5 недель</h3>
                    <p className="project__description">У&nbsp;каждого этапа был мягкий и&nbsp;жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.</p>
                </div>
            </div>
            <div className="project__stages">
                <p className="project__first-stage-line">1 неделя</p>
                <p className="project__second-stage-line">4 недели</p>
                <p className="project__stage-text">Back-end</p>
                <p className="project__stage-text">Front-end</p>
            </div>
        </section>
    )
}

export default AboutProject;