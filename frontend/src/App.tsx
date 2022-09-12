import Header from "./assets/components/header"
import SalesCard from "./assets/components/SalesCard"


function App() {
  return(
    <>
    <Header />
    <main>
      <section id="sales">
        <div className="ds-meta-conteiner">
          <SalesCard/>
        </div>
      </section>
    </main>
    </>
  )
}

export default App
