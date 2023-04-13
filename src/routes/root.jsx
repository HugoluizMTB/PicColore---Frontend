import { Outlet, Link, useLoaderData } from "react-router-dom";
import { getContacts } from "../utils/contacts";

export async function loader() {
  const contacts = await getContacts();
  return { contacts };
}

export default function Root() {
  const { contacts } = useLoaderData();
  return (
    <>
      <div id="sidebar">
        <h1>Pic colore</h1>
        <div>
          <form id="search-form" role="search">
            <input
              id="q"
              aria-label="Search contacts"
              placeholder="Search"
              type="search"
              name="q"
            />
            <div id="search-spinner" aria-hidden hidden={true} />
            <div className="sr-only" aria-live="polite"></div>
          </form>
          <form method="post">
            <button type="submit">New</button>
          </form>
        </div>
        <nav>
          <ul>
            <li>
              <Link to={`/clients`}>Clientes</Link>
            </li>
            <li>
              <Link to={`/users`}>Funcionarios</Link>
            </li>
            <li>
              <Link to={`/events`}>Eventos</Link>
            </li>
            <li>
              <Link to={`/reports`}>Dashboards</Link>
            </li>
          </ul>
        </nav>
      </div>
      <div id="detail">
        <Outlet />
      </div>
    </>
  );
}
