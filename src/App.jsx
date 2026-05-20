import Products from "./components/Products";

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-blue-950 to-black p-6">

      <h1
        className="text-5xl md:text-6xl font-extrabold text-center mb-10
        text-white tracking-tight uppercase
          border-b border-cyan-500/30 pb-4
          inline-block mx-auto w-full [text-shadow:_0_0_20px_rgba(34,211,238,0.5)]">
        🛒 Electronic Products
      </h1>

      <Products />
    </div>
  );
}

export default App;