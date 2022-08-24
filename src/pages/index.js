import styles from '/styles/Home.module.css';
import Link from 'next/link'

export default function Home() {
  return (
    <div className={styles.container}>
    Hello World!
    <Link href="/posts/first-post">
      <a className={styles.link}>go to first-post</a>
    </Link>
  </div>
  );
}
