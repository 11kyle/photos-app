"use client"

import {
  CldImage,
  CldUploadButton,
  CldUploadWidgetResults,
} from "next-cloudinary"
import { useState } from "react"

export type UploadResult = {
  info: {
    public_id: string
  }
  event: "success"
}

export default function Home() {
  const [imageId, setImageId] = useState("")
  return (
    <main className='flex min-h-screen flex-col items-center justify-between p-24'>
      <CldUploadButton
        onUpload={(result: any) => {
          if (result.event === "success") {
            setImageId(result.info.public_id)
          }
        }}
        uploadPreset='qbfhdejp'
      />

      {imageId ? (
        <CldImage
          width='960'
          height='600'
          src={imageId}
          sizes='100vw'
          alt='Description of my image'
        />
      ) : null}
    </main>
  )
}
