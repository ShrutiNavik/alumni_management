'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'

export default function Navbar() {
  const pathname = usePathname()
  const [user, setUser] = useState<any>(null)

  useEffect(() => {
    const userData = localStorage.getItem('user')
    if (userData) {
      setUser(JSON.parse(userData))
    }
  }, [])

  const handleLogout = () => {
    localStorage.removeItem('token')
    localStorage.removeItem('user')
    window.location.href = '/'
  }

  const isActive = (path: string) => pathname === path

  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-10 h-10 rounded-full gradient-bg flex items-center justify-center text-white font-bold">AC</div>
            <span className="text-xl font-bold text-gray-800">AlumniConnect</span>
          </Link>
          
          <div className="hidden md:flex space-x-6">
            <Link href="/" className={`${isActive('/') ? 'text-blue-600 font-medium' : 'text-gray-600 hover:text-blue-600'}`}>Home</Link>
            <Link href="/dashboard" className={`${isActive('/dashboard') ? 'text-blue-600 font-medium' : 'text-gray-600 hover:text-blue-600'}`}>Dashboard</Link>
            <Link href="/directory" className={`${isActive('/directory') ? 'text-blue-600 font-medium' : 'text-gray-600 hover:text-blue-600'}`}>Directory</Link>
            <Link href="/events" className={`${isActive('/events') ? 'text-blue-600 font-medium' : 'text-gray-600 hover:text-blue-600'}`}>Events</Link>
            <Link href="/jobs" className={`${isActive('/jobs') ? 'text-blue-600 font-medium' : 'text-gray-600 hover:text-blue-600'}`}>Jobs</Link>
            <Link href="/mentorship" className={`${isActive('/mentorship') ? 'text-blue-600 font-medium' : 'text-gray-600 hover:text-blue-600'}`}>Mentorship</Link>
          </div>
          
          <div className="flex items-center space-x-4">
            {user ? (
              <>
                <span className="text-sm text-gray-600">Welcome, {user.firstName}</span>
                <button onClick={handleLogout} className="px-4 py-2 text-red-600 hover:text-red-700">Logout</button>
              </>
            ) : (
              <>
                <Link href="/login" className="text-gray-600 hover:text-blue-600">Login</Link>
                <Link href="/register" className="px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg hover:shadow-lg transition">Sign Up</Link>
              </>
            )}
          </div>
        </div>
      </div>
    </nav>
  )
}
