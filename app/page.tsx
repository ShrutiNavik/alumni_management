import Link from 'next/link'

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <nav className="bg-white shadow-sm sticky top-0 z-50">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 rounded-full gradient-bg flex items-center justify-center text-white font-bold">
                AC
              </div>
              <span className="text-xl font-bold text-gray-800">AlumniConnect</span>
            </div>
            
            <div className="hidden md:flex space-x-8">
              <Link href="/" className="text-blue-600 font-medium">Home</Link>
              <Link href="/dashboard" className="text-gray-600 hover:text-blue-600">Dashboard</Link>
              <Link href="/directory" className="text-gray-600 hover:text-blue-600">Directory</Link>
              <Link href="/events" className="text-gray-600 hover:text-blue-600">Events</Link>
              <Link href="/jobs" className="text-gray-600 hover:text-blue-600">Jobs</Link>
              <Link href="/mentorship" className="text-gray-600 hover:text-blue-600">Mentorship</Link>
            </div>
            
            <div className="flex items-center space-x-4">
              <Link href="/login" className="text-gray-600 hover:text-blue-600">Login</Link>
              <Link href="/register" className="px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg hover:shadow-lg transition">
                Sign Up
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Connect. Network. <span className="text-blue-600">Succeed.</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Join thousands of alumni building meaningful connections and advancing their careers through AlumniConnect
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/register" className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg font-semibold hover:shadow-xl transition">
                Get Started Free
              </Link>
              <Link href="/dashboard" className="px-8 py-4 bg-white text-gray-800 rounded-lg font-semibold hover:shadow-lg transition border-2 border-gray-200">
                Explore Platform
              </Link>
            </div>
            
            <div className="mt-12 grid grid-cols-3 gap-8 max-w-2xl mx-auto">
              <div>
                <div className="text-3xl font-bold text-blue-600">50K+</div>
                <div className="text-gray-600">Alumni</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-blue-600">1,200+</div>
                <div className="text-gray-600">Companies</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-blue-600">500+</div>
                <div className="text-gray-600">Events/Year</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Everything You Need</h2>
            <p className="text-xl text-gray-600">Powerful features to help you stay connected</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="card-hover bg-white p-8 rounded-xl border-2 border-gray-100">
              <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                <i className="fas fa-users text-3xl text-blue-600"></i>
              </div>
              <h3 className="text-2xl font-bold mb-4">Alumni Directory</h3>
              <p className="text-gray-600">Search and connect with alumni from all graduating classes. Filter by location, industry, and more.</p>
              <Link href="/directory" className="inline-block mt-4 text-blue-600 font-semibold hover:underline">
                Explore Directory →
              </Link>
            </div>
            
            <div className="card-hover bg-white p-8 rounded-xl border-2 border-gray-100">
              <div className="w-16 h-16 bg-purple-100 rounded-lg flex items-center justify-center mb-6">
                <i className="fas fa-calendar-alt text-3xl text-purple-600"></i>
              </div>
              <h3 className="text-2xl font-bold mb-4">Events & Reunions</h3>
              <p className="text-gray-600">Stay updated on upcoming events, reunions, and networking opportunities in your area.</p>
              <Link href="/events" className="inline-block mt-4 text-blue-600 font-semibold hover:underline">
                View Events →
              </Link>
            </div>
            
            <div className="card-hover bg-white p-8 rounded-xl border-2 border-gray-100">
              <div className="w-16 h-16 bg-green-100 rounded-lg flex items-center justify-center mb-6">
                <i className="fas fa-briefcase text-3xl text-green-600"></i>
              </div>
              <h3 className="text-2xl font-bold mb-4">Job Board</h3>
              <p className="text-gray-600">Access exclusive job opportunities posted by alumni and partner companies.</p>
              <Link href="/jobs" className="inline-block mt-4 text-blue-600 font-semibold hover:underline">
                Browse Jobs →
              </Link>
            </div>
            
            <div className="card-hover bg-white p-8 rounded-xl border-2 border-gray-100">
              <div className="w-16 h-16 bg-yellow-100 rounded-lg flex items-center justify-center mb-6">
                <i className="fas fa-user-tie text-3xl text-yellow-600"></i>
              </div>
              <h3 className="text-2xl font-bold mb-4">Mentorship Program</h3>
              <p className="text-gray-600">Connect with experienced mentors or become a mentor to help the next generation.</p>
              <Link href="/mentorship" className="inline-block mt-4 text-blue-600 font-semibold hover:underline">
                Find a Mentor →
              </Link>
            </div>
            
            <div className="card-hover bg-white p-8 rounded-xl border-2 border-gray-100">
              <div className="w-16 h-16 bg-red-100 rounded-lg flex items-center justify-center mb-6">
                <i className="fas fa-comments text-3xl text-red-600"></i>
              </div>
              <h3 className="text-2xl font-bold mb-4">Discussion Forum</h3>
              <p className="text-gray-600">Engage with your community through threaded discussions and knowledge sharing.</p>
              <Link href="/forum" className="inline-block mt-4 text-blue-600 font-semibold hover:underline">
                Join Discussion →
              </Link>
            </div>
            
            <div className="card-hover bg-white p-8 rounded-xl border-2 border-gray-100">
              <div className="w-16 h-16 bg-indigo-100 rounded-lg flex items-center justify-center mb-6">
                <i className="fas fa-chart-line text-3xl text-indigo-600"></i>
              </div>
              <h3 className="text-2xl font-bold mb-4">Career Analytics</h3>
              <p className="text-gray-600">Track your career progress and see industry trends among fellow alumni.</p>
              <Link href="/dashboard" className="inline-block mt-4 text-blue-600 font-semibold hover:underline">
                View Dashboard →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 gradient-bg text-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-5xl font-bold mb-2">50,000+</div>
              <div className="text-blue-100">Active Alumni</div>
            </div>
            <div>
              <div className="text-5xl font-bold mb-2">1,200+</div>
              <div className="text-blue-100">Partner Companies</div>
            </div>
            <div>
              <div className="text-5xl font-bold mb-2">500+</div>
              <div className="text-blue-100">Annual Events</div>
            </div>
            <div>
              <div className="text-5xl font-bold mb-2">95%</div>
              <div className="text-blue-100">Satisfaction Rate</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Ready to Get Started?</h2>
          <p className="text-xl text-gray-600 mb-8">Join our thriving alumni community today</p>
          <Link href="/register" className="inline-block px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg font-semibold hover:shadow-xl transition">
            Create Your Free Account
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-10 h-10 rounded-full gradient-bg flex items-center justify-center font-bold">AC</div>
                <span className="text-xl font-bold">AlumniConnect</span>
              </div>
              <p className="text-gray-400">Connecting alumni, fostering growth, building futures.</p>
            </div>
            
            <div>
              <h3 className="font-bold mb-4">Platform</h3>
              <ul className="space-y-2 text-gray-400">
                <li><Link href="/directory" className="hover:text-white">Alumni Directory</Link></li>
                <li><Link href="/events" className="hover:text-white">Events</Link></li>
                <li><Link href="/jobs" className="hover:text-white">Job Board</Link></li>
                <li><Link href="/mentorship" className="hover:text-white">Mentorship</Link></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-bold mb-4">Company</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white">About Us</a></li>
                <li><a href="#" className="hover:text-white">Contact</a></li>
                <li><a href="#" className="hover:text-white">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-white">Terms of Service</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-bold mb-4">Connect</h3>
              <div className="flex space-x-4">
                <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-gray-700">
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-gray-700">
                  <i className="fab fa-twitter"></i>
                </a>
                <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-gray-700">
                  <i className="fab fa-linkedin-in"></i>
                </a>
                <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-gray-700">
                  <i className="fab fa-instagram"></i>
                </a>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 AlumniConnect. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
