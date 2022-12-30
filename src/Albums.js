import React, {useState, useEffect} from "react"

const Albums = () => {

const [albums, setAlbums] = useState([])
const [loading, setLoading] = useState(false)

useEffect(() => {

    setLoading(true)
    fetch('https://jsonplaceholder.typicode.com/albums')
    .then( response => response.json())
    .then(data => {
        setAlbums(data)
        setLoading(false)
    })
    
}, [])
    return(
        <>
    <h2>Albums</h2>
    {
        loading === true ? 'Carregando...' : ''
    }
    {
        albums.map(album => {
        return(
            <div>
                <span>{album.title} - id: {album.id}</span>

            </div>
        )
        })
    }
    </>
    )
}

export default Albums