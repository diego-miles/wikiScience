import React from 'react'
import { useRouter } from 'next/router'


export default function CampoCientifico() {
    const {
        query: { slug },
    } = useRouter()

    return (
    <div>
      <h2>`Mejores libros por campo`</h2>
    </div>
  )
}

