'use client'
import Navbar from '@/components/Navbar'
import { useState } from 'react'

const jobsData = [
  { id: 1, title: 'Senior Product Designer', company: 'Google', location: 'San Francisco, CA', type: 'Full-time', salary: '$140K - $180K', logo: 'https://logo.clearbit.com/google.com', postedBy: 'James Wilson', skills: ['UI/UX', 'Figma', 'Product Strategy'], description: 'Looking for a Senior Product Designer to shape the future of search.' },
  { id: 2, title: 'Software Engineer - Cloud', company: 'Microsoft', location: 'Seattle, WA', type: 'Full-time', salary: '$130K - $170K', logo: 'https://logo.clearbit.com/microsoft.com', postedBy: 'Emily Davis', skills: ['Python', 'Azure', 'Kubernetes'], description: 'Join our Azure team to build next-gen cloud infrastructure.' },
  { id: 3, title: 'Investment Banking Analyst', company: 'Goldman Sachs', location: 'New York, NY', type: 'Full-time', salary: '$150K - $200K', logo: 'https://logo.clearbit.com/goldmansachs.com', postedBy: 'Michael Chen', skills: ['Finance', 'M&A', 'Valuation'], description: 'Seeking analysts for our M&A team.' },
  { id: 4, title: 'Data Scientist', company: 'Meta', location: 'Menlo Park, CA', type: 'Full-time', salary: '$145K - $190K', logo: 'https://logo.clearbit.com/meta.com', postedBy: 'Alex Kumar', skills: ['Machine Learning', 'Python', 'SQL'], description: 'Use data to inform product decisions and improve UX.' },
  { id: 5, title: 'Marketing Manager', company: 'Amazon', location: 'Austin, TX', type: 'Full-time', salary: '$110K - $150K', logo: 'https://logo.clearbit.com/amazon.com', postedBy: 'Sarah Johnson', skills: ['Digital Marketing', 'Brand Strategy'], description: 'Lead marketing initiatives for new product launches.' },
]

export default function Jobs() {
  const [searchTerm, setSearchTerm] = useState('')
  const [typeFilter, setTypeFilter] = useState('')
  const [bookmarked, setBookmarked] = useState<number[]>([])

  const filteredJobs = jobsData.filter(job => {
    const matchesSearch = job.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                         job.company.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesType = !typeFilter || job.type === typeFilter
    return matchesSearch && matchesType
  })

  const toggleBookmark = (id: number) => {
    if (bookmarked.includes(id)) {
      setBookmarked(bookmarked.filter(b => b !== id))
    } else {
      setBookmarked([...bookmarked, id])
    }
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      <div className="gradient-bg text-white py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-2">Job Opportunities</h1>
          <p className="text-blue-100">Exclusive opportunities from alumni-owned and partner companies</p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="bg-white rounded-xl shadow-sm p-6 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <input 
              type="text" 
              placeholder="Job title or company..." 
              className="px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <select 
              className="px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
              value={typeFilter}
              onChange={(e) => setTypeFilter(e.target.value)}
            >
              <option value="">All Job Types</option>
              <option value="Full-time">Full-time</option>
              <option value="Part-time">Part-time</option>
              <option value="Contract">Contract</option>
              <option value="Remote">Remote</option>
            </select>
            <button 
              onClick={() => { setSearchTerm(''); setTypeFilter(''); }}
              className="px-4 py-2 bg-gray-200 rounded-lg hover:bg-gray-300"
            >
              Clear Filters
            </button>
          </div>
        </div>

        <div className="space-y-4">
          {filteredJobs.map(job => (
            <div key={job.id} className="bg-white rounded-xl shadow-sm p-6 hover:shadow-lg transition border-l-4 border-blue-600">
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-start space-x-4">
                  <img src={job.logo} alt={job.company} className="w-12 h-12 rounded" />
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">{job.title}</h3>
                    <p className="text-gray-600">{job.company} • {job.location}</p>
                    <div className="flex items-center space-x-4 mt-2 text-sm text-gray-500">
                      <span><i className="fas fa-briefcase mr-1"></i>{job.type}</span>
                      <span><i className="fas fa-dollar-sign mr-1"></i>{job.salary}</span>
                    </div>
                  </div>
                </div>
                <button onClick={() => toggleBookmark(job.id)} className="text-gray-400 hover:text-yellow-500">
                  <i className={`${bookmarked.includes(job.id) ? 'fas' : 'far'} fa-bookmark text-xl`}></i>
                </button>
              </div>
              <p className="text-gray-700 mb-4">{job.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {job.skills.map((skill, idx) => (
                  <span key={idx} className="px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm">{skill}</span>
                ))}
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <span className="text-sm text-gray-600">Posted by {job.postedBy}</span>
                </div>
                <button className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
                  Apply Now
                </button>
              </div>
            </div>
          ))}
        </div>

        {filteredJobs.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">No jobs found matching your criteria</p>
          </div>
        )}
      </div>
    </div>
  )
}
