const Movie = (props) => {
    return(
        <>
            <tr>
            <td>{props.name}</td>
            <td>{props.year}</td>
            </tr>
        </>
    )
  }

  export default Movie;