import { notFound } from "next/navigation"

interface PageProps {
  params: {
    slug: string
  }
}

export default function BlogPost({ params }: PageProps) {
  // Example validation - in a real app, you'd fetch the post data here
  if (!params.slug) {
    notFound()
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm">
        <h1 className="text-4xl font-bold mb-4">Blog Post: {params.slug}</h1>
        <p>
          This is a dynamic route example. The current slug is: {params.slug}
        </p>
      </div>
    </main>
  )
}
