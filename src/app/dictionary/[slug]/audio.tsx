'use client';
import { useEffect, useState, useRef, useCallback } from 'react';
import debounce from 'lodash/debounce';

const Audio: React.FC<{ slug: string | null }> = ({ slug }) => {
  const [audioUrl, setAudioUrl] = useState<string | null>(null);
  const [duration, setDuration] = useState<number | null>(null);
  const [error, setError] = useState<string | null>(null);
  
  const cacheRef = useRef(new Map<string, string>());
  const isMountedRef = useRef(true);

  useEffect(() => {
    isMountedRef.current = true;
    return () => {
      isMountedRef.current = false;
    };
  }, []);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const fetchAudio = useCallback(
    debounce(async (slug: string) => {
      if (cacheRef.current.has(slug)) {
        console.log('Using cached URL for slug:', slug);
        setAudioUrl(cacheRef.current.get(slug) as string);
        return;
      }

      console.log('Fetching URL for slug:', slug);

      try {
        const response = await fetch(`/api/audio/${slug}`);
        const data = await response.json();

        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        if (isMountedRef.current) {
          setAudioUrl(data.url);
          cacheRef.current.set(slug, data.url);
        }
      } catch (error) {
        console.error('Error fetching audio URL:', error);
        if (isMountedRef.current) {
          setError('Error fetching audio URL.');
        }
      }
    }, 300), []
  );

  useEffect(() => {
    if (slug && !cacheRef.current.has(slug)) {
      fetchAudio(slug);
    }
  }, [slug, fetchAudio]);

  const handleLoadedMetadata = (event: React.SyntheticEvent<HTMLAudioElement, Event>) => {
    const audioElement = event.currentTarget;
    setDuration(audioElement.duration);
  };

  return (
    <div className='mx-auto w-fit'>
      {error && <p className="text-red-500">{error}</p>}
      {audioUrl && (
        <>
          {duration !== null && <p className='text-sm -mb-6'>{duration.toFixed(2)} seconds</p>}
          <audio className='mx-auto text-xs w-52' controls src={audioUrl} onLoadedMetadata={handleLoadedMetadata}></audio>
        </>
      )}
    </div>
  );
};

export default Audio;
