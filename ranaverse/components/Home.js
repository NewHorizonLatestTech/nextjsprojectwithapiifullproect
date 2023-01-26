import Image from 'next/image';
import Link from 'next/link';
import Head from 'next/head';
import styles from '../styles/Home.module.css';


function Home() {
    return (
        <>
            <Head>
                <meta name="descrition" content="Genrated by create next app" />
            </Head>

            <div className={styles.backgroundimagehome}>
                <nav className={styles.navbar}>

                    <Image
                        className={styles.profileimage}
                        src="/next.png"
                        alt="Next.js Logo"
                        width={90}
                        height={90}
                        priority
                    />

                    <ul>
                        <li className={styles.homeli} href="#">
                            <Link className={styles.home} href="./home">Home</Link>
                        </li>
                    </ul>

                    <ul>
                        <li className={styles.contactli} href="#">
                            <Link className={styles.contact} href="/">index</Link>
                        </li>
                    </ul>

                    <ul>
                        <li className={styles.aboutli} href="#">
                            <Link className={styles.about} href="./about">About</Link>
                        </li>
                    </ul>

                </nav>
            </div>
        </>

    )
}

export default Home