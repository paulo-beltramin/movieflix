
import Container from "@/components/container"
import { SlideMovies } from "@/components/slideMovies";
import { SlideSeries } from "@/components/SlideSeries";


export default function Home() {

  return (

    <Container>
      <main>

        <section>
          <h1 className="text-white text-4xl lg:text-6xl lg:text-left text-center mt-12 mb-8 font-bold">Filmes</h1>
          <article >
            <SlideMovies />
          </article>
        </section>

        <section>
          <h1 className="text-white text-4xl lg:text-6xl lg:text-left text-center mt-20 mb-8 font-bold">Series</h1>
          <article >
            <SlideSeries />
          </article>
        </section>

      </main>
    </Container >
  );
}
