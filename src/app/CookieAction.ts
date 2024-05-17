'use server'
 
import { cookies } from 'next/headers'
 
export async function create() {
  cookies().set('cookiesConsent', 'True', {
    secure: true,
    // httpOnly: true, // if you don't need client-side access
    sameSite: 'none', // or 'Strict' based on your requirements
    // expires: <Your-Expiration-Date>, // Optionally set an expiration date
  });
  // console.log('Cookie action set in action');
}




export async function get() {
  const cookieStore = cookies()
  const cookiesConsent = cookieStore.get('cookiesConsent')
    // console.log('Cookie action set in action')
    return cookiesConsent
}




