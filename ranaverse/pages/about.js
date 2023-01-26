import About from "../components/About"
import styles from '../styles/Home.module.css'
import Link from "next/link";

export const getStaticProps = async () => {
  const hello = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await hello.json();

  return {
    props: {
      data,
    },
  };
};

function Page({ data }) {
  return (
    <>
      <About />

      {data.slice(9 ,15).map((curElem) => {
        return (
          <div key={curElem.id} className={styles.class}>
            <h3>{curElem.id}</h3>
            <Link  href={`/blog/${curElem.id}`}>
            <h2>{curElem.title}</h2>          
            </Link>
          
          </div>
        )
      }
      )}
    </>


  )
}

export default Page;