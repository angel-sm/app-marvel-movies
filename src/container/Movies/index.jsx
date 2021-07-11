import React, { useState , Suspense, useEffect} from 'react'
import axios from 'axios'
import config from '../../config/environment'

import { Header } from '../../components/Header'
const ItemList = React.lazy(() => import('../../components/ItemList'))
import { Loader } from '../../components/Loader'

export const Movies = () => {

    const [movies, setMovies] = useState([])
    const [load, setLoad] = useState(false)

    const handleFetchData = () => {
        setLoad(load => !load)
        
        axios.get(`${config.api_uri}/movies`)
        .then(data => {
            setMovies(data.data)
        })
        .then(() => {
            setLoad(load => !load)
        })
    }

    return(
        <div>
            <Header handleFetchData={handleFetchData} />
            {
                load 
                ? <Loader /> 
                : (
                    <Suspense fallback={<Loader />}>
                        <ItemList movies={movies} />
                    </Suspense>
                )
            }
        </div>
    )
}