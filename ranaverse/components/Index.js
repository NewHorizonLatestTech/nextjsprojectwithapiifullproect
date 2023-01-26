import Image from 'next/image';
import Link from 'next/link';
import Head from 'next/head';
import styles from '../styles/Home.module.css';

function Index() {
    return (
        <div className={styles.imagebackground}>
            <Head>
                <meta name="descrition" content="Genrated by create next app" />
            </Head>
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
                        <Link className={styles.contact} href="./contact">Contact</Link>
                    </li>
                </ul>

                <ul>
                    <li className={styles.aboutli} href="#">
                        <Link className={styles.about} href="./about">About</Link>
                    </li>
                </ul>
            </nav>

            <main className={styles.main}>

                <Link target="blank"

                    href="https://www.instagram.com/adeemaamir240/" />




                <div className={styles.profile}>

                    <Image
                        className={styles.profileimage}
                        src="/my.jpg"
                        alt="Next.js Logo"
                        width={90}
                        height={90}
                        priority
                    />

                    <div className="content">
                        <br />

                        <Link target="blank"

                            href="https://www.instagram.com/adeemaamir240/">

                            <h2 className={styles.instagramtext}>Instagram</h2>

                            <Image
                                className={styles.instagram}
                                src="/instagram.webp"
                                alt="Next.js Logo"
                                width={40}
                                height={30}
                                priority
                            />

                        </Link>


                        <br />


                        <br />

                        <Link target="blank"
                            href="https://www.youtube.com/">

                            <h2 className={styles.youtubetext} > Youtube </h2>


                            <Image
                                className={styles.youtube}
                                src="/youtube.png"
                                alt="Next.js Logo"
                                width={50}
                                height={50}
                                priority
                            />

                        </Link>

                        <Link target="blank"
                            href="https://github.com/NewHorizonLatestTech?tab=repositories">

                            <h2 className={styles.githubtext} > Github </h2>


                            <Image
                                className={styles.github}
                                src="/github.png"
                                alt="Next.js Logo"
                                width={40}
                                height={30}
                                priority
                            />

                        </Link>

                        <Link target="blank"
                            href="https://web.facebook.com/profile.php?id=100087931331816&sk=friends">

                            <h2 className={styles.facebooktext} > FaceBook </h2>



                            <Image
                                className={styles.facebook}
                                src="/facebook.png"
                                alt="Next.js Logo"
                                width={90}
                                height={90}
                                priority
                            />

                        </Link>

                    </div>

                    <br /><br /><br /><br /><br /><br /><br /><br /><br /><br />

                </div>

                <div className={styles.center}>

                    <Image
                        className={styles.logo}
                        src="/next.png"
                        alt="Next.js Logo"
                        width={200}
                        height={200}
                        priority
                    />

                    <div className={styles.thirteen}>

                        <Image className={styles.thirteenimage} src="/thirteen.svg" alt="13" width={70} height={80} priority />

                    </div>

                </div>


            </main >


        </div >
    )
}

export default Index;