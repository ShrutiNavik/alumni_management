'use client'
import Navbar from '@/components/Navbar'
import { useState } from 'react'

const alumniData = [
  { id: 1, name: 'Sarah Johnson', year: 2018, course: 'Computer Science', company: 'Google', position: 'Senior Product Designer', location: 'San Francisco, CA', image: 'https://randomuser.me/api/portraits/women/44.jpg', skills: ['UI/UX', 'Figma', 'Product Strategy'] },
  { id: 2, name: 'James Wilson', year: 2015, course: 'Computer Science', company: 'Microsoft', position: 'Software Engineer', location: 'Seattle, WA', image: 'https://randomuser.me/api/portraits/men/32.jpg', skills: ['Python', 'Cloud', 'AI/ML'] },
  { id: 3, name: 'Michael Chen', year: 2012, course: 'Business Administration', company: 'Goldman Sachs', position: 'Investment Banker', location: 'New York, NY', image: 'https://randomuser.me/api/portraits/men/67.jpg', skills: ['Finance', 'M&A', 'Valuation'] },
  { id: 4, name: 'Emily Davis', year: 2016, course: 'Marketing', company: 'Amazon', position: 'Marketing Director', location: 'Austin, TX', image: 'https://randomuser.me/api/portraits/women/50.jpg', skills: ['Digital Marketing', 'Brand Strategy'] },
  { id: 5, name: 'Alex Kumar', year: 2019, course: 'Computer Science', company: 'Meta', position: 'Data Scientist', location: 'Menlo Park, CA', image: 'https://randomuser.me/api/portraits/men/75.jpg', skills: ['Machine Learning', 'Python', 'Analytics'] },
  { id: 6, name: 'Lisa Park', year: 2013, course: 'Medicine', company: 'Mayo Clinic', position: 'Physician', location: 'Rochester, MN', image: 'https://randomuser.me/api/portraits/women/65.jpg', skills: ['Medicine', 'Cardiology', 'Research'] },
]

export default function Directory() {
  const [searchTerm, setSearchTerm] = useState('')
  const [yearFilter, setYearFilter] = useState('')
  const [courseFilter, setCourseFilter] = useState('')

  const filteredAlumni = alumniData.filter(alumni => {
    const matchesSearch = alumni.name.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesYear = !yearFilter || alumni.year.toString() === yearFilter
    const matchesCourse = !courseFilter || alumni.course === courseFilter
    return matchesSearch && matchesYear && matchesCourse
  })

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      <div className="gradient-bg text-white py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-2">Alumni Directory</h1>
          <p className="text-blue-100">Connect with {alumniData.length}+ alumni worldwide</p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="bg-white rounded-xl shadow-sm p-6 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <input 
              type="text" 
              placeholder="Search by name..." 
              className="px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <select 
              className="px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
              value={yearFilter}
              onChange={(e) => setYearFilter(e.target.value)}
            >
              <option value="">All Graduation Years</option>
              <option value="2019">2019</option>
              <option value="2018">2018</option>
              <option value="2016">2016</option>
              <option value="2015">2015</option>
              <option value="2013">2013</option>
              <option value="2012">2012</option>
            </select>
            <select 
              className="px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
              value={courseFilter}
              onChange={(e) => setCourseFilter(e.target.value)}
            >
              <option value="">All Courses</option>
              <option value="Computer Science">Computer Science</option>
              <option value="Business Administration">Business Administration</option>
              <option value="Marketing">Marketing</option>
              <option value="Medicine">Medicine</option>
            </select>
            <button 
              onClick={() => { setSearchTerm(''); setYearFilter(''); setCourseFilter(''); }}
              className="px-4 py-2 bg-gray-200 rounded-lg hover:bg-gray-300"
            >
              Clear Filters
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredAlumni.map(alumni => (
            <div key={alumni.id} className="bg-white rounded-xl shadow-sm overflow-hidden hover:shadow-lg transition">
              <div className="h-24 gradient-bg"></div>
              <div className="px-6 pb-6">
                <div className="-mt-12 mb-4">
                  <img src={alumni.image} alt={alumni.name} className="w-24 h-24 rounded-full border-4 border-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-1">{alumni.name}</h3>
                <p className="text-gray-600 text-sm mb-2">{alumni.position} @ {alumni.company}</p>
                <p className="text-gray-500 text-sm mb-4">
                  <i className="fas fa-graduation-cap mr-1"></i> Class of {alumni.year} • {alumni.location}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {alumni.skills.map((skill, idx) => (
                    <span key={idx} className="px-2 py-1 bg-blue-100 text-blue-600 rounded-full text-xs">{skill}</span>
                  ))}
                </div>
                <div className="flex gap-2">
                  <button className="flex-1 bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700">
                    <i className="fas fa-user-plus mr-1"></i> Connect
                  </button>
                  <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50">
                    <i className="fas fa-envelope"></i>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredAlumni.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">No alumni found matching your criteria</p>
          </div>
        )}
      </div>
    </div>
  )
}
