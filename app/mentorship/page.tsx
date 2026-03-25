'use client'
import Navbar from '@/components/Navbar'
import { useState } from 'react'

const mentorsData = [
  { id: 1, name: 'James Wilson', position: 'Senior Software Engineer @ Microsoft', year: 2015, image: 'https://randomuser.me/api/portraits/men/32.jpg', expertise: ['Cloud Computing', 'Python', 'Career Growth'], mentees: 8, rating: 4.9, bio: '15 years in tech. Happy to help with career transitions and interviews.' },
  { id: 2, name: 'Sarah Johnson', position: 'Senior Product Designer @ Google', year: 2018, image: 'https://randomuser.me/api/portraits/women/44.jpg', expertise: ['UI/UX Design', 'Figma', 'Product Strategy'], mentees: 6, rating: 5.0, bio: 'Passionate about UX design and product strategy.' },
  { id: 3, name: 'Michael Chen', position: 'Investment Banker @ Goldman Sachs', year: 2012, image: 'https://randomuser.me/api/portraits/men/67.jpg', expertise: ['Finance', 'M&A', 'Interview Prep'], mentees: 12, rating: 4.8, bio: '10+ years in finance. Specializing in M&A and helping students break into IB.' },
  { id: 4, name: 'Emily Davis', position: 'Marketing Director @ Amazon', year: 2016, image: 'https://randomuser.me/api/portraits/women/50.jpg', expertise: ['Digital Marketing', 'Brand Strategy', 'Leadership'], mentees: 10, rating: 4.9, bio: 'Marketing professional with expertise in digital marketing and brand strategy.' },
  { id: 5, name: 'Alex Kumar', position: 'Data Scientist @ Meta', year: 2019, image: 'https://randomuser.me/api/portraits/men/75.jpg', expertise: ['Machine Learning', 'Python', 'Data Analytics'], mentees: 5, rating: 5.0, bio: 'Data science and ML expert. Happy to help with career transitions into data science.' },
]

export default function Mentorship() {
  const [filter, setFilter] = useState('')
  const [requested, setRequested] = useState<number[]>([])

  const filteredMentors = filter ? mentorsData.filter(m => m.expertise.some(e => e.includes(filter))) : mentorsData

  const handleRequest = (id: number) => {
    if (!requested.includes(id)) {
      setRequested([...requested, id])
      alert('Mentorship request sent successfully!')
    }
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      <div className="gradient-bg text-white py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-2">Mentorship Program</h1>
          <p className="text-blue-100">Connect with experienced mentors or help the next generation</p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="bg-white rounded-xl shadow-sm p-8 mb-8">
          <div className="text-center max-w-3xl mx-auto mb-8">
            <h2 className="text-3xl font-bold mb-4">How It Works</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div>
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <i className="fas fa-search text-2xl text-blue-600"></i>
                </div>
                <h3 className="font-bold mb-2">Find a Match</h3>
                <p className="text-sm text-gray-600">Browse profiles and find mentors that align with your goals</p>
              </div>
              <div>
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <i className="fas fa-handshake text-2xl text-purple-600"></i>
                </div>
                <h3 className="font-bold mb-2">Connect</h3>
                <p className="text-sm text-gray-600">Send a connection request and start your mentorship journey</p>
              </div>
              <div>
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <i className="fas fa-chart-line text-2xl text-green-600"></i>
                </div>
                <h3 className="font-bold mb-2">Grow Together</h3>
                <p className="text-sm text-gray-600">Regular meetings, guidance, and shared learning experiences</p>
              </div>
            </div>
          </div>

          <div className="flex gap-4 justify-center flex-wrap">
            <button 
              onClick={() => setFilter('')}
              className={`px-4 py-2 rounded-lg ${!filter ? 'bg-blue-600 text-white' : 'bg-gray-200'}`}
            >
              All Mentors
            </button>
            <button 
              onClick={() => setFilter('Tech')}
              className={`px-4 py-2 rounded-lg ${filter === 'Tech' ? 'bg-blue-600 text-white' : 'bg-gray-200'}`}
            >
              Technology
            </button>
            <button 
              onClick={() => setFilter('Finance')}
              className={`px-4 py-2 rounded-lg ${filter === 'Finance' ? 'bg-blue-600 text-white' : 'bg-gray-200'}`}
            >
              Finance
            </button>
            <button 
              onClick={() => setFilter('Marketing')}
              className={`px-4 py-2 rounded-lg ${filter === 'Marketing' ? 'bg-blue-600 text-white' : 'bg-gray-200'}`}
            >
              Marketing
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredMentors.map(mentor => (
            <div key={mentor.id} className="bg-white rounded-xl shadow-sm overflow-hidden hover:shadow-lg transition">
              <div className="p-6">
                <div className="flex items-start mb-4">
                  <img src={mentor.image} alt={mentor.name} className="w-20 h-20 rounded-full mr-4" />
                  <div className="flex-1">
                    <h3 className="text-xl font-bold mb-1">{mentor.name}</h3>
                    <p className="text-gray-600 text-sm mb-2">{mentor.position}</p>
                    <p className="text-gray-500 text-xs"><i className="fas fa-graduation-cap mr-1"></i>Class of {mentor.year}</p>
                  </div>
                </div>
                <p className="text-gray-700 text-sm mb-4">{mentor.bio}</p>
                <div className="mb-4">
                  <p className="text-sm font-semibold mb-2">Expertise:</p>
                  <div className="flex flex-wrap gap-2">
                    {mentor.expertise.map((skill, idx) => (
                      <span key={idx} className="px-2 py-1 bg-blue-100 text-blue-600 rounded-full text-xs">{skill}</span>
                    ))}
                  </div>
                </div>
                <div className="flex items-center justify-between mb-4 text-sm text-gray-600">
                  <span><i className="fas fa-users mr-1"></i>{mentor.mentees} mentees</span>
                  <span><i className="fas fa-star text-yellow-400 mr-1"></i>{mentor.rating}/5.0</span>
                </div>
                <button 
                  onClick={() => handleRequest(mentor.id)}
                  disabled={requested.includes(mentor.id)}
                  className={`w-full py-2 rounded-lg font-semibold transition ${
                    requested.includes(mentor.id)
                      ? 'bg-gray-300 text-gray-600 cursor-not-allowed'
                      : 'bg-blue-600 text-white hover:bg-blue-700'
                  }`}
                >
                  {requested.includes(mentor.id) ? '✓ Request Sent' : 'Request Mentorship'}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
