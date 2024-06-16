'use client';
import { useEffect, useState } from 'react';

const Audio: React.FC<{ slug: string | null }> = ({ slug }) => {
  const [audioUrl, setAudioUrl] = useState<string | null>(null);
  const [duration, setDuration] = useState<number | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let isMounted = true;

    if (slug) {
      const fetchAudio = async () => {
        try {
          const response = await fetch(`/api/audio/${slug}`);
          const data = await response.json();

          if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
          }

          if (isMounted) {
            setAudioUrl(data.url);
          }
        } catch (error) {
          console.error('Error fetching audio URL:', error);
          if (isMounted) {
            setError('Error fetching audio URL.');
          }
        }
      };

      fetchAudio();
    }

    return () => {
      isMounted = false;
    };
  }, [slug]);

  const handleLoadedMetadata = (event: React.SyntheticEvent<HTMLAudioElement, Event>) => {
    const audioElement = event.currentTarget;
    setDuration(audioElement.duration);
  };

  return (
    <div className='mx-auto w-fit'>
      {error && <p className="text-red-500">{error}</p>}
      {audioUrl && (
        <>
          {duration !== null && <p className='text-sm -mb-6'> {duration.toFixed(2)} seconds</p>}
          <audio className='mx-auto text-xs w-52' controls src={audioUrl} onLoadedMetadata={handleLoadedMetadata}></audio>
        </>
      )}
    </div>
  );
};

export default Audio;
