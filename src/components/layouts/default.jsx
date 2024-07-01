import { Outlet } from "react-router-dom";

function SharedLayout() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="flex justify-center items-center py-4 bg-gray-800 text-white">
        <h1 className="text-2xl">Canvas Drawing App</h1>
      </header>
      <main className="flex flex-1 justify-center items-center bg-gray-100">
        <Outlet />
      </main>
    </div>
  )
}

export default SharedLayout;