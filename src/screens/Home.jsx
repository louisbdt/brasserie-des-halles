import Button from '../components/Button'
import { OFFERINGS } from '../constants/restaurant'

function Home({ onBookTable }) {
  return (
    <>
      <section className="mx-auto grid max-w-5xl grid-cols-1 items-center gap-10 px-6 py-16 md:grid-cols-2 md:py-24">
        <div className="flex flex-col items-center gap-6 text-center md:items-start md:text-left">
          <h1 className="font-heading text-4xl text-ink md:text-5xl">
            Une cuisine de saison, à deux pas des Halles du Boulingrin
          </h1>
          <p className="max-w-xl text-lg text-ink/70">
            Produits locaux, carte qui change avec les saisons, et une table toujours prête pour
            vos soirs de semaine comme vos grandes occasions.
          </p>
          <Button onClick={onBookTable}>Réserver une table</Button>
        </div>
        <img
          src="https://images.unsplash.com/photo-1424847651672-bf20a4b0982b?w=700&q=70&auto=format&fit=crop"
          srcSet="
            https://images.unsplash.com/photo-1424847651672-bf20a4b0982b?w=700&q=70&auto=format&fit=crop 700w,
            https://images.unsplash.com/photo-1424847651672-bf20a4b0982b?w=1000&q=70&auto=format&fit=crop 1000w
          "
          sizes="(min-width: 768px) 460px, 100vw"
          alt="Une tablée partageant un repas convivial à La Brasserie des Halles"
          width="700"
          height="467"
          fetchPriority="high"
          decoding="async"
          className="h-64 w-full rounded-2xl object-cover shadow-lg md:h-96"
        />
      </section>

      <section className="mx-auto max-w-4xl px-6 pb-20">
        <h2 className="text-center font-heading text-2xl text-ink">Ce que nous proposons</h2>
        <ul className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
          {OFFERINGS.map((offer) => (
            <li key={offer.title} className="rounded-xl border border-sage/15 bg-cream/60 p-5">
              <p className="font-heading text-lg text-terracotta-600">{offer.title}</p>
              <p className="mt-1 text-sm text-ink/70">{offer.detail}</p>
            </li>
          ))}
        </ul>
      </section>
    </>
  )
}

export default Home
