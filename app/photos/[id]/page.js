import Image from 'next/image.js';
import Link from 'next/link.js';
import React from 'react'

async function getData(id) {
  const res = await fetch(`https://picsum.photos/id/${id}/info`);
  return res.json();
}

const Photo = async ({ params }) => {

  const data = await getData(params.id);
  console.log(data);
  return (
    <div>Photo portant l&apos;id { params.id }
      <h1>{data.author}</h1>
      <Image src={data.download_url}  alt="" width={data.width} height={data.height} layout='responsive' />
      <Link href={data.url}>Lien vers la source de l&apos;image</Link>
    </div>

  )
}

export default Photo