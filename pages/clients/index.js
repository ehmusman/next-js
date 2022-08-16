import Link from "next/link";

export default function Clients(){
    const clients = [
        {id: 1, name: "usman"},
        {id: 2, name: "farooq"},
        {id: 3, name: "ehsan"},
        {id: 4, name: "ali"},
        {id: 5, name: "hamza"},
        {id: 6, name: "adnan"},
    ]
    return <div>
        <h1>Clients page</h1>
        <ul>
            {clients.map(client => (
          <li key={client.id}>
          <Link href={{
            pathname: "/clients/[id]",
            query: {id: client.id}
          }}>
              {client.name}
          </Link>
          {/* <Link href={`/clients/${client.id}`}>
              {client.name}
          </Link> */}
        </li>
            ))}
        </ul>
    </div>
}