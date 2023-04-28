import Link from "next/link";
import { movies } from "../../lib/data";
import { useRouter } from "next/router";
import Head from "next/head";

export default function Movies() {
  const router = useRouter();

  return (
    <>
      <Head>
        <title>All Movies</title>
      </Head>
      <h1>List of Movies</h1>
      <button
        onClick={() => {
          if (confirm("Are you Aquaman?")) {
            router.push("/movies/aquaman");
          }
        }}
        type="button"
      >
        Are you Aquaman?
      </button>
      <ul>
        {movies.map((movie) => (
          <li key={movie.id}>
            <Link href={`/movies/${movie.slug}`}>{movie.title}</Link>
          </li>
        ))}
      </ul>
    </>
  );
}
