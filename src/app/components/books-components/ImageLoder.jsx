import Image from "next/image";

async function fetchImages(title) {
    const cleanTitle = title.replace(/[^a-zA-Z0-9 ]/g, "").replace(/ /g, "+");
    const images = [];
    for (let i = 0; i < 25; i++) {
        try {
            const res = await fetch(`${cleanTitle}${i}.png`, { method: 'HEAD' });
            if (res.ok) {
                images.push(`${cleanTitle}${i}.png`);
            } else {
                break;
            }
        } catch (error) {
            console.error(`Error fetching image ${i}:`, error);
            break;
        }
    }
    return images;
}

export default async function ImageLoader({ title }) {
    const images = await fetchImages(title);

    if (images.length === 0) {
        return <div>No images found.</div>;
    }

    return (
        <div>
            {images.map((src, index) => (
                <Image key={index} src={src} alt={`Image ${index}`}
                    fill
                    style={{
                        objectFit: 'cover',
                    }}
                    priority={false}
                    quality={50} />
            ))}
        </div>
    );
}
