import { Form, Link, Outlet } from "@remix-run/react";

import { useUser } from "~/utils";

export default function NotesPage() {
  const user = useUser();

  return (
    <div className="flex h-full min-h-screen flex-col">
      <header className="flex items-center justify-between bg-slate-800 p-4 text-white">
        <h1 className="text-3xl font-bold">
          <Link to=".">Notes</Link>
        </h1>
        <p>{user.email}</p>
        <Form action="/logout" method="post">
          <button
            type="submit"
            className="rounded bg-slate-600 py-2 px-4 text-blue-100 hover:bg-blue-500 active:bg-blue-600"
          >
            Logout
          </button>
        </Form>
      </header>

      <main className="flex p-4">
        <Link to="triple-column-technique">
          <div className="card w-96 bg-base-100 shadow-xl">
            <div className="card-body">
              <h2 className="card-title">The Triple-Column Technique</h2>
              <p>
                It can be used to restructure the way you think about yourself
                when you have goofed up in some way. The aim is to substitute
                more objective rational thoughts for the illogical, harsh,
                self-criticisms that automatically flood your mind when a
                negative event occurs.
              </p>
            </div>
          </div>
        </Link>

        <div className="flex-1 p-6">
          <Outlet />
        </div>
      </main>
    </div>
  );
}
