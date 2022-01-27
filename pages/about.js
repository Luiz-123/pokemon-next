import Image from 'next/image'
import styles from '../styles/About.module.css'

export default function About() {
    return(
        <div className={styles.about}>
            <h1>Sobre o projeto</h1>
            <p>Pokémon foi criado por usuários para melhorar artigos relacionados à série de video games, anime, mangá e Trading Card Game Pokémon.</p>
            <Image src="/images/charizard.png" width="300" height="300" alt="Charizard" />
        </div>
    )
}