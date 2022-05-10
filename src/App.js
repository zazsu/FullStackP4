import React, {useState, useEffect} from 'react'
import './styles.css'
import Movie from './Components/Movie.js'

const App = () => {
  const [movies, setMovies] = useState([])
  const[variable,setVariable] = useState([])

  useEffect(()=>{
    fetch("http://localhost:8080/api/getall")
    .then((result) => {
    console.log(result)
    return result.json();
    })
      .then((data) => {
      console.log(data)
      setMovies(data)
      });
  },[]) 

  const getData = () => {
    fetch("http://localhost:8080/api/getall")
    .then((result) => {
    console.log(result)
    return result.json();
    })
      .then((data) => {
      console.log(data)
      setMovies(data)
      });
  }

  const handleChange = (props) =>{
    console.log(props.target.value);
    setVariable(props.target.value);
  } 

  useEffect(() => {
    let moviesCopy = [...movies]
    moviesCopy = moviesCopy.filter(data => data.title.includes(variable))
    setMovies(moviesCopy)
  }, [variable])

  return (
  <div class="container">
  <h1>Movie List:</h1>
  <form>
  <label>Filter by name: </label> 
  <input value={variable} type="text" onChange={handleChange}/>
  </form>

  <table class="striped">
    <thead>
      <tr>
        <th>Name</th>
        <th>Year</th>

      </tr>
    </thead>
    <tbody>
  {
    movies ?
    movies.map(data =><Movie name={data.title} year={data.year}/>) 
    : <div>Nothing here. Fetching data....</div> 
  }
  
    </tbody>
  </table>

  <a class="waves-effect waves-light btn" onClick={getData}>Reset Filter </a>
  </div>
  )
}

export default App;
