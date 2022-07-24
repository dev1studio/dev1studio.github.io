import * as React from "react"

function CodeSandboxPreview({ SENDBOX_TITLE }) {
  return (
    <iframe
      src={`https://codesandbox.io/embed/github/naninyang/${SENDBOX_TITLE}/tree/main/?fontsize=14&hidenavigation=1&theme=dark`}
      title={`${SENDBOX_TITLE}`}
      allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
      sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
    />
  )
}

export default CodeSandboxPreview
