import ForcastSection from "./components/Forcast/ForcastSection";
import GlobalMap from "./components/GlobalMap/GlobalMap";

function App() {
  return (
    <>
      <main
        className={
          "min-h-screen bg-[#dedede]  text-[#17161d] transition-colors  flex items-center py-7 md:px-5 px-2.5  dark:bg-[#292929]  dark:text-[#f7f7f8]"
        }
      >
        <section
          className={
            "mx-auto max-w-277.5 rounded-4xl bg-[#f5f5f6] p-5 shadow-2xl  dark:bg-[#101015] "
          }
        >
          <ForcastSection />

          <div className="mt-8 grid gap-6 ">
            <GlobalMap />
          </div>
        </section>
      </main>
    </>
  );
}

export default App;
