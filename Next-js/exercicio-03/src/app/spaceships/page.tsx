import spaceships from "@/data/spaceships.json"
import Link from "next/link"

export default function page() {
  return (
    <>
      <main>
        <h1>Todas as espaçonaves</h1>
      </main>

      <ul>
        {spaceships.map(ship => (
          <li key={ship.id}>
            <Link className="btn" href={`/spaceships/${ship.id}`}>
              {ship.name}
            </Link>
          </li>
        ))}
      </ul>
    </>
  )
}
