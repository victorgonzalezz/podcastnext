import { Header } from '../components/Header';

import '../styles/global.scss';

import styles from '../styles/app.module.scss';
import { Player } from '../components/Player';

function MyApp({ Component, pageProps }) {
  return (
    <div className={styles.wrapper}>
      <main>
        <Header /> 
        <Component {...pageProps} />
      </main>
      <Player />
    </div>

  )
}

export default MyApp//Todas as coisas que sao comuns
//em todas as paginas, eu posso deixar dentro do app
//Por isso a tag <Header /> que vai deixar todas as páginas
//com o Header igual(estilizado,etc)
