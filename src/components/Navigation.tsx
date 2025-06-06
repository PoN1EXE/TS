import { Link } from 'react-router-dom'

const Navigation = () => {
  return (
    <nav>
      <span>react</span>
      <span>
        <Link to='/'>Products</Link>
        <Link to='/aboute'>Aboute</Link>
      </span>
    </nav>
  )
}

export { Navigation }
