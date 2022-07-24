import * as React from "react"

function YouTubeVideo({ VIDEO_ID }) {
  return (
    <iframe
      width="560" height="315"
      src={`https://www.youtube.com/embed/${VIDEO_ID}`}
      title="YouTube video player"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen={true}
    />
  )
}

export default YouTubeVideo
