import { NextApiResponse } from 'next'

export default function handler(req, res: NextApiResponse) {
  // sets the preview cookie
  res.clearPreviewData()
  // redirects to the page you want to preview
  res.end("preview mode disabled")
}
