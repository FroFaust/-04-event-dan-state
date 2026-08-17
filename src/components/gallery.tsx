"use client";
import { sculptureList } from '@/data/article';
import { useState } from 'react';

export default function Gallery() {
  const [index, setIndex] = useState(0);

  function handleNextClick() {
    setIndex((index + 1) % sculptureList.length);
  }

  // Handler untuk tombol Sebelumnya (navigasi mundur & looping)
  function handlePrevClick() {
    setIndex((index - 1 + sculptureList.length) % sculptureList.length);
  }

  let sculpture = sculptureList[index];

  return (
    <>
      <button
        onClick={handlePrevClick}
        className="bg-gray-500 hover:bg-gray-700 text-white p-2 m-2 rounded">
        Artikel Sebelumnya
      </button>
      <button
        onClick={handleNextClick}
        className="bg-blue-500 hover:bg-blue-700 text-white p-2 m-2 rounded">
        Artikel Selanjutnya
      </button>

      <h2><i>{sculpture.name}</i> oleh {sculpture.artist}</h2>
      <h3>({index + 1} dari {sculptureList.length})</h3>
      <img src={sculpture.url} alt={sculpture.alt} />
      <p>
        {sculpture.description}
      </p>
    </>
  );
}