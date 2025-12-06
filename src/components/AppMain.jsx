import { useDebugValue, useEffect, useState } from 'react'
import film from '../film.js'

export default function AppMain(){

    const [selectedGenre, setSelectedGenre] = useState('');
    const [filteredFilms, setFilteredFilms] = useState(film);



    useEffect(() => {
        if ( selectedGenre === '') {
            setFilteredFilms(film);
        } else {
            setFilteredFilms(
                film.filter(film => film.genre === selectedGenre)
            )
        }
    }, [selectedGenre]);

    return(
        <>
        
        <main>
            
                <h2>lista di film</h2>
                <div>
                    <select value={selectedGenre} 
                            onChange={(event) => setSelectedGenre(event.target.value)}>

                        <option value="">Tutti i generi</option>
                        <option value="Fantascienza">Fantascienza</option>
                        <option value="Thriller">Thriller</option>
                        <option value="Romantico">Romantico</option>
                        <option value="Azione">Azione</option>
                    </select>

                    <ul>
                        {filteredFilms.map((film, index) => (
                            <li key={index}>{film.title} - {film.genre}</li>
                        ))}
                    </ul>
                </div>
            
        </main>
        
        </>
    )

}