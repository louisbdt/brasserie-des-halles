import Button from '../components/Button'

function Home({ onBookTable }) {
  return (
    <section className="mx-auto flex max-w-3xl flex-col items-center gap-6 px-6 py-20 text-center">
      <h1 className="font-heading text-4xl text-ink md:text-5xl">
        Une cuisine de saison, à deux pas des Halles du Boulingrin
      </h1>
      <p className="max-w-xl text-lg text-ink/70">
        Produits locaux, carte qui change avec les saisons, et une table toujours prête pour vos
        soirs de semaine comme vos grandes occasions.
      </p>
      <Button onClick={onBookTable}>Réserver une table</Button>
    </section>
  )
}

export default Home
