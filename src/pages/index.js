import Head from "next/head";
import Link from "next/link";
import React from "react";

export async function getServerSideProps() {
  const res = await fetch('https://pokeapi.co/api/v2/pokemon/')
  const pokemonList = await res.json()
  console.log(pokemonList)
  const pokemoni =pokemonList.results
  return { props: { pokemoni } }
}
export default function Home({pokemoni}) {
  console.log(pokemoni)
  return (
    <>
      <Head>
        <title>First 20 Pokemons</title>
        <meta name="description" content="First 20 Pokemons from gen1 by ids" />
      </Head>
      <main>
        <h1>Gen 1 Pokemon</h1>
      
        <div>{pokemoni.map((singlePokemon, index)=>{
          return(
            <div key={index}>
              <Link href={`/pokemon/${singlePokemon.name}`}> - {singlePokemon.name}</Link>
            </div>
          )
        })}
        </div>

      </main>
    </>
  );
}
