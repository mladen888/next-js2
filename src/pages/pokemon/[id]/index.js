import Head from 'next/head';
import React from 'react';
import Image from 'next/image'

export async function getServerSideProps(context) {
    const pokemonId = context.query.id
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonId}`)
    const pokemon = await res.json()
    console.log(pokemon)
    return { props: { pokemon } }
  }

const Pokemon = (props) => {
    console.log(props.pokemon)
    
    return (
        <>
        <Head>
        <title>{props.pokemon.name}</title>
        <meta name="description" content="This is a single pokemon page that describes specific pokemon" />
      </Head>

      <main>
        <p>Pokemon {props.pokemon.name} </p>
        <Image src={props.pokemon.sprites.other["official-artwork"].front_shiny}
         width={300}
         height={300}
         alt={`picture of ${props.pokemon.name}`}
         />
         
      </main>
        </>
    )
}

export default Pokemon

