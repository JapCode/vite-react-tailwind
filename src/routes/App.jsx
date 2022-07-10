import Switch from '../components/Switch';

function App() {
  return (
    <div className="flex h-screen w-screen flex-col items-center justify-center gap-5 bg-custom2">
      <h1 className="my-3 text-4xl font-bold text-custom1 sm:text-5xl sm:tracking-tight lg:text-6xl">
        Greetings Traveler
      </h1>
      <p className="mb-16 text-white">
        This is a template of vite for projects using react and Tailwind
      </p>
      <Switch />
    </div>
  );
}
export default App;
