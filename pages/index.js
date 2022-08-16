import Link from "next/link"

function Homepage () {
  return (
    <div>
      <h1>
        Home page
        </h1>
        <ul>
          <li>
            <Link href="/portfolio">
                Portfolio
            </Link>
          </li>
        </ul>
        <ul>
          <li>
            <Link href="/clients">
                Clients
            </Link>
          </li>
        </ul>
      </div>
  )
}

export default Homepage