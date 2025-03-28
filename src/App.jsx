import { useState, useEffect } from "react"

const base_url = 'http://localhost:3000'
const get_api_blog = '/api/v1/posts'

function App() {

  const [posts, setPosts] = useState([])
  const [deleteStatus, setDeleteStatus] = useState('')

  useEffect(() => {

    fetch(base_url + get_api_blog)
      .then(response => response.json())
      .then(data => setPosts(data))
      .catch(err => console.error(err))

  }, [deleteStatus])

  function handleDeleteItem(slug) {

    fetch(base_url + get_api_blog + `/${slug}`, {
      method: 'DELETE'
    })
      .then(data => {
        setDeleteStatus(data.status)
      })
      .catch(err => console.error(err))

    setDeleteStatus('')
  }

  return (
    <>

      <header className="text-center p-5">
        <h1> BLOG BASE POST CONTROL</h1>
      </header>

      <main>
        <div className="container">

          {deleteStatus === 204 && (<div className="alert alert-primary" role="alert">
            <h3>item delete confirmed</h3>
          </div>)}
          {deleteStatus === 404 && (<div className="alert alert-danger" role="alert">
            <h3>EROORE 404</h3>
          </div>)}

          <table className="table table-dark">
            <thead>
              <tr>
                <th scope="col">ID</th>
                <th scope="col">title</th>
                <th scope="col">image</th>
                <th scope="col">tags</th>
                <th scope="col">action</th>
              </tr>
            </thead>
            <tbody>
              {
                posts.map((post, index) => (
                  <tr key={`post-${index}`}>
                    <th scope="row">{index + 1}</th>
                    <td>{post.title}</td>
                    <td><img src={base_url + post.image} alt="" /></td>
                    <td>{post.tags}</td>
                    <td>
                      <button className="btn btn-primary"
                        onClick={() => handleDeleteItem(post.slug)}>
                        <i className="bi bi-trash3-fill">DELETE</i>
                      </button>
                    </td>
                  </tr>
                ))
              }
            </tbody>
          </table>
        </div>
      </main>

    </>
  )
}

export default App
