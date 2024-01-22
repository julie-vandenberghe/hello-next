import Image from 'next/image.js';
import React from 'react'
import styles from "./page.module.scss";
import Link from 'next/link.js';

async function getData() {
  const res = await fetch("https://picsum.photos/v2/list");

  return res.json();
}

const Photos = async () => {
  const data = await getData();
  console.log(data);

  const listPhotos = data.slice(10,20).map(photo => {
    return (
      <div className={styles.item} key={photo.id}>
        <Link href={`/photos/${photo.id}`}>
          <Image src={photo.download_url} alt='' width={100} height={100} layout='responsive' />
        </Link>
      </div>
    )
  });

  return (
    <div>
      <h1>Nos photos souvenirs</h1>
      <div className={styles.items}>
        {listPhotos}
      </div>
    </div>
  )
}

export default Photos