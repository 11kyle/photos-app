"use client"

import { SearchResult } from "@/app/gallery/page"
import { ReactNode } from "react"

const MAX_COLUMNS = 3

export function ImageGrid({
  images,
  getImage,
}: {
  images: SearchResult[]
  getImage: (imageData: SearchResult) => ReactNode
}) {
  function getColumns(colIndex: number) {
    return images.filter((resource, idx) => idx % MAX_COLUMNS === colIndex)
  }

  return (
    <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-4'>
      {[getColumns(0), getColumns(1), getColumns(2)].map((column, idx) => (
        <div key={idx} className='flex flex-col gap-4'>
          {column.map(getImage)}
        </div>
      ))}
    </div>
  )
}
