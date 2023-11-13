import { useState } from 'react'
import PostCreate from './components/PostCreate'
import PostList from './components/PostList'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="container">
      <h1>Create Post</h1>
      <PostCreate />
      <hr />
      <h2>Posts</h2>
      <PostList />
    </div>
  )
}

export default App
