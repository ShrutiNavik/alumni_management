import Link from 'next/link'

export default function Gallery() {
  return (
    <div className="min-h-screen bg-gray-50">
      <nav className="bg-white shadow-sm">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-10 h-10 rounded-full gradient-bg flex items-center justify-center text-white font-bold">AC</div>
            <span className="text-xl font-bold">AlumniConnect</span>
          </Link>
        </div>
      </nav>
      <div className="gradient-bg text-white py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold">Event Gallery</h1>
        </div>
      </div>
      <div className="container mx-auto px-4 py-8">
        <p>Gallery page - Under development</p>
      </div>
    </div>
  )
}
