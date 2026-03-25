'use client'
import Navbar from '@/components/Navbar'
import { useState } from 'react'

const eventsData = [
  { id: 1, title: 'Annual Alumni Reunion 2024', date: '2024-10-15', time: '6:00 PM', location: 'University Campus', type: 'Networking', attendees: 247, image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=400', description: 'Join us for our biggest reunion of the year!' },
  { id: 2, title: 'Tech Career Fair 2024', date: '2024-10-22', time: '10:00 AM', location: 'Convention Center', type: 'Career', attendees: 156, image: 'https://images.unsplash.com/photo-1505373877841-8d25f7d46678?w=400', description: 'Connect with top tech companies hiring alumni.' },
  { id: 3, title: 'Leadership Workshop', date: '2024-11-05', time: '2:00 PM', location: 'Virtual (Zoom)', type: 'Workshop', attendees: 89, image: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=400', description: 'Enhance your leadership skills with industry experts.' },
  { id: 4, title: 'Networking Mixer', date: '2024-11-12', time: '7:00 PM', location: 'Downtown Hotel', type: 'Networking', attendees: 120, image: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=400', description: 'Casual networking event for recent graduates.' },
]

export default function Events() {
  const [filter, setFilter] = useState('all')
  const [rsvps, setRsvps] = useState<number[]>([])

  const filteredEvents = filter === 'all' ? eventsData : eventsData.filter(e => e.type === filter)

  const handleRSVP = (id: number) => {
    if (rsvps.includes(id)) {
      setRsvps(rsvps.filter(rsvp => rsvp !== id))
    } else {
      setRsvps([...rsvps, id])
    }
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      <div className="gradient-bg text-white py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-2">Upcoming Events</h1>
          <p className="text-blue-100">Network, learn, and grow with your alumni community</p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="mb-6 flex gap-4">
          <button 
            onClick={() => setFilter('all')}
            className={`px-4 py-2 rounded-lg ${filter === 'all' ? 'bg-blue-600 text-white' : 'bg-white border'}`}
          >
            All Events
          </button>
          <button 
            onClick={() => setFilter('Networking')}
            className={`px-4 py-2 rounded-lg ${filter === 'Networking' ? 'bg-blue-600 text-white' : 'bg-white border'}`}
          >
            Networking
          </button>
          <button 
            onClick={() => setFilter('Career')}
            className={`px-4 py-2 rounded-lg ${filter === 'Career' ? 'bg-blue-600 text-white' : 'bg-white border'}`}
          >
            Career
          </button>
          <button 
            onClick={() => setFilter('Workshop')}
            className={`px-4 py-2 rounded-lg ${filter === 'Workshop' ? 'bg-blue-600 text-white' : 'bg-white border'}`}
          >
            Workshops
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {filteredEvents.map(event => (
            <div key={event.id} className="bg-white rounded-xl shadow-sm overflow-hidden hover:shadow-lg transition">
              <img src={event.image} alt={event.title} className="w-full h-48 object-cover" />
              <div className="p-6">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="bg-blue-600 text-white rounded-lg p-3 text-center">
                    <div className="text-2xl font-bold">{new Date(event.date).getDate()}</div>
                    <div className="text-xs">{new Date(event.date).toLocaleString('default', { month: 'short' }).toUpperCase()}</div>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900">{event.title}</h3>
                    <p className="text-gray-600"><i className="fas fa-clock mr-2"></i>{event.time}</p>
                    <p className="text-gray-600"><i className="fas fa-map-marker-alt mr-2"></i>{event.location}</p>
                  </div>
                </div>
                <p className="text-gray-700 mb-4">{event.description}</p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <i className="fas fa-users text-gray-500"></i>
                    <span className="text-sm text-gray-600">{event.attendees} attending</span>
                  </div>
                  <button 
                    onClick={() => handleRSVP(event.id)}
                    className={`px-6 py-2 rounded-lg font-semibold transition ${
                      rsvps.includes(event.id) 
                        ? 'bg-green-600 text-white hover:bg-green-700' 
                        : 'bg-blue-600 text-white hover:bg-blue-700'
                    }`}
                  >
                    {rsvps.includes(event.id) ? '✓ Going' : 'RSVP Now'}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
