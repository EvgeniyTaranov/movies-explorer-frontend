import "./MovieCardList.css"

function MovieCardList({children}) {

    return(
        <section className = "movie-list">
            <ul className = "movie-list__container">
                {children}
            </ul>
        </section>

    )
}

export default MovieCardList;