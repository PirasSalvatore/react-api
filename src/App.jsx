import { useState, useEffect } from "react"

const base_url = 'http://localhost:3000'
const get_api_blog = '/api/v1/posts'

function App() {

  const [posts, setPosts] = useState([])

  useEffect(() => {

    fetch(base_url + get_api_blog)
      .then(response => response.json())
      .then(data => setPosts(data))
      .catch(err => console.error(err));

  }, [])

  console.log(posts);

  return (
    <>

      <table className="table">
        <thead>
          <tr>
            <th scope="col">ID</th>
            <th scope="col">title</th>
            <th scope="col">image</th>
            <th scope="col">tags</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
          </tr>
        </tbody>
      </table>

    </>
  )
}

export default App
