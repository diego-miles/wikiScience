'use server'
 
import { cookies } from 'next/headers'
 
export async function create() {
  cookies().set('cookiesConsent', 'True', { secure: true })
    // console.log('Cookie action get in action')
}



export async function get() {
  const cookieStore = cookies()
  const cookiesConsent = cookieStore.get('cookiesConsent')
    // console.log('Cookie action set in action')
    return cookiesConsent
}


