'use client'
import React from 'react';
import Image from 'next/image';
import ImageGallery from 'react-image-gallery';
import dayjs from 'dayjs';
import type { Project } from '@/data/projects';
import "react-image-gallery/styles/css/image-gallery.css";

interface CellProps {
  data: Project;
}

export function getImageDataFromImageList(imageList: string[]) {
  return imageList.map(image => ({
    original: `${image}`,
    thumbnail: `${image}`,
  }))
}

const Cell: React.FC<CellProps> = ({ data }) => (
  <div className="cell-container">
    <article className="mini-post">
      <header>
        <h3>
          <a href={data.link} target='_blank'>{data.title}</a>
        </h3>
        <time className="published">{dayjs(data.date).format('MMMM, YYYY')}</time>
      </header>
      <a href={data.link} target='_blank'>
        <div style={{ width: '100%', height: '100%' }}>
          <ImageGallery
            slideInterval={4000}
            items={getImageDataFromImageList(data.images)}
            showPlayButton={false}
            showThumbnails={false}
            showNav={false}
            showBullets={false}
            autoPlay={true}
            showFullscreenButton={false}
          />        
        </div>
        {/* <Image src={data.image} alt={data.title} width={600} height={400} /> */}
      </a>
      <div className="description">
        <p>{data.desc}</p>
      </div>
    </article>
  </div>
);

export default Cell;
