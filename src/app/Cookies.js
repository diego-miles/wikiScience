import { cookies } from 'next/headers';

export default function handler(req, res) {
  if (req.method === 'POST') {
    const { action } = req.body;

    if (action === 'accept') {
      cookies(res).set('userConsent', 'accepted', { httpOnly: true, maxAge: 31536000 }); // 1 year
    } else if (action === 'reject') {
      cookies(res).delete('userConsent');
    }

    res.status(200).json({ message: 'Cookie settings updated' });
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
