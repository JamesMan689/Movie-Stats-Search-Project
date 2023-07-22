import {useState, useEffect} from 'react'
import "../components-css/Content.css"

const Content = () => {

  const [title, setTitle] = useState("")

  function handleChange(e){
    setTitle(e.target.value)
  }

  const url:string = "http://www.omdbapi.com/?apikey=3cf5fe8&t="+title

  const [results, setResults] = useState({
    Title: "",
    Released: "",
    Runtime: "",
    Director: "",
    Plot: "",
    imdbRating: "",
    BoxOffice: "",
    Poster: ""

  })


  useEffect(()=>{
    async function getData(){
      const res = await fetch(url)
      const data = await res.json()
      setResults(data)
    }

    getData()
    
  },[title])

  

  return(

    <div className="Content-container">
      <input type="text" placeholder="Search for a movie title..." className="search-bar" onChange={handleChange}/>
        {
          results.Title && 
          <div className='results-container'>
              {results.Title && <h1>Title: {results.Title}</h1>}
              {results.Released && <h1>Released: {results.Released}</h1>}
              {results.Runtime && <h1>Runtime: {results.Runtime}</h1>}
              {results.Director  && <h1>Director: {results.Director}</h1>}
              {results.Plot  && <h1>Plot: {results.Plot}</h1>}
              {results.imdbRating && <h1>IMDB Rating: {results.imdbRating}</h1>}
              {results.BoxOffice &&<h1>Box Office: {results.BoxOffice}</h1>}
              {results.Poster && 
                <div className='poster-container'>
                  <h1>Poster:</h1>
                  <img src={results.Poster}></img>
                </div>
              }
          </div>
        }
    </div>
  )
}

export default Content