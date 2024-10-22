'use client'

import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { supabase } from '../api/db';

const ImagePage = () => {
    console.log('Component mounted');
  const router = useRouter();
  const { imageSlug } = router.query;
  const [imageUrl, setImageUrl] = useState('');

  useEffect(() => {
    if (!router.isReady || !imageSlug) return;
  
    const fetchImageUrl = async () => {
      console.log('fetchImageUrl called');
      console.log('imageSlug:', imageSlug);
      const publicURL = `https://vurwvjfhjbvwwzebngez.supabase.co/storage/v1/object/public/photo/${imageSlug}`;
      console.log('Constructed image URL:', publicURL);
      setImageUrl(publicURL);
    };
  
    fetchImageUrl();
  }, [router.isReady, imageSlug]);
  
  
//   https://vurwvjfhjbvwwzebngez.supabase.co/storage/v1/object/public/photo/1725666745268-pic1.png
  return (
    <div className="image-page">
      
        <div className="banner">
          <img src={imageUrl} alt={imageSlug} />
        </div>
     
      <div className="content">
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
        <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
      </div>
    </div>
  );
};

export default ImagePage;
