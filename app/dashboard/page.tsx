'use client'
import Navbar from '@/components/Navbar'
import Link from 'next/link'
import { useEffect, useState } from 'react'

export default function Dashboard() {
  const [user, setUser] = useState<any>(null)

  useEffect(() => {
    const userData = localStorage.getItem('user')
    if (userData) {
      setUser(JSON.parse(userData))
    }
  }, [])

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Welcome back, {user?.firstName || 'Alumni'}!</h1>
          <p className="text-gray-600">Here's what's happening in your alumni network</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="bg-white p-6 rounded-xl shadow-sm">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-500 text-sm">Connections</p>
                <p className="text-3xl font-bold text-gray-900">287</p>
              </div>
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                <i className="fas fa-users text-blue-600 text-xl"></i>
              </div>
            </div>
            <p className="text-green-600 text-sm mt-2"><i className="fas fa-arrow-up"></i> +12 this month</p>
          </div>
          
          <div className="bg-white p-6 rounded-xl shadow-sm">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-500 text-sm">Events Attended</p>
                <p className="text-3xl font-bold text-gray-900">15</p>
              </div>
              <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
                <i className="fas fa-calendar-check text-purple-600 text-xl"></i>
              </div>
            </div>
            <p className="text-green-600 text-sm mt-2"><i className="fas fa-arrow-up"></i> +3 this month</p>
          </div>
          
          <div className="bg-white p-6 rounded-xl shadow-sm">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-500 text-sm">Job Applications</p>
                <p className="text-3xl font-bold text-gray-900">8</p>
              </div>
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                <i className="fas fa-briefcase text-green-600 text-xl"></i>
              </div>
            </div>
            <p className="text-blue-600 text-sm mt-2">2 interviews scheduled</p>
          </div>
          
          <div className="bg-white p-6 rounded-xl shadow-sm">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-500 text-sm">Profile Views</p>
                <p className="text-3xl font-bold text-gray-900">124</p>
              </div>
              <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center">
                <i className="fas fa-eye text-yellow-600 text-xl"></i>
              </div>
            </div>
            <p className="text-green-600 text-sm mt-2"><i className="fas fa-arrow-up"></i> +18 this week</p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 space-y-6">
            <div className="bg-white rounded-xl shadow-sm p-6">
              <h2 className="text-xl font-bold mb-4">Recent Activity</h2>
              <div className="space-y-4">
                <div className="flex items-start space-x-4 pb-4 border-b">
                  <img src="https://randomuser.me/api/portraits/men/32.jpg" className="w-12 h-12 rounded-full" />
                  <div className="flex-1">
                    <p className="text-gray-900"><span className="font-semibold">James Wilson</span> posted a new job opportunity</p>
                    <p className="text-sm text-gray-500">2 hours ago</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4 pb-4 border-b">
                  <img src="https://randomuser.me/api/portraits/men/67.jpg" className="w-12 h-12 rounded-full" />
                  <div className="flex-1">
                    <p className="text-gray-900"><span className="font-semibold">Michael Chen</span> accepted your connection request</p>
                    <p className="text-sm text-gray-500">5 hours ago</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <img src="https://randomuser.me/api/portraits/women/50.jpg" className="w-12 h-12 rounded-full" />
                  <div className="flex-1">
                    <p className="text-gray-900"><span className="font-semibold">Emily Davis</span> is attending the same event as you</p>
                    <p className="text-sm text-gray-500">1 day ago</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-sm p-6">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-bold">Upcoming Events</h2>
                <Link href="/events" className="text-blue-600 hover:underline text-sm">View All</Link>
              </div>
              <div className="space-y-4">
                <div className="flex items-start space-x-4 p-4 bg-gray-50 rounded-lg">
                  <div className="bg-blue-600 text-white rounded-lg p-3 text-center">
                    <div className="text-2xl font-bold">15</div>
                    <div className="text-xs">OCT</div>
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-gray-900">Annual Alumni Reunion</h3>
                    <p className="text-sm text-gray-600">University Campus • 6:00 PM</p>
                    <Link href="/events" className="mt-2 text-sm text-blue-600 hover:underline">RSVP Now</Link>
                  </div>
                </div>
                <div className="flex items-start space-x-4 p-4 bg-gray-50 rounded-lg">
                  <div className="bg-purple-600 text-white rounded-lg p-3 text-center">
                    <div className="text-2xl font-bold">22</div>
                    <div className="text-xs">OCT</div>
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-gray-900">Tech Career Fair</h3>
                    <p className="text-sm text-gray-600">Convention Center • 10:00 AM</p>
                    <Link href="/events" className="mt-2 text-sm text-blue-600 hover:underline">RSVP Now</Link>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-white rounded-xl shadow-sm p-6">
              <h3 className="font-bold mb-4">Profile Completion</h3>
              <div className="relative pt-1">
                <div className="flex mb-2 items-center justify-between">
                  <span className="text-xs font-semibold inline-block text-blue-600">75%</span>
                </div>
                <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-gray-200">
                  <div style={{width:'75%'}} className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-blue-600"></div>
                </div>
              </div>
              <ul className="space-y-2 text-sm">
                <li className="flex items-center text-green-600"><i className="fas fa-check-circle mr-2"></i> Basic Info</li>
                <li className="flex items-center text-green-600"><i className="fas fa-check-circle mr-2"></i> Profile Photo</li>
                <li className="flex items-center text-green-600"><i className="fas fa-check-circle mr-2"></i> Work Experience</li>
                <li className="flex items-center text-gray-400"><i className="far fa-circle mr-2"></i> Skills & Expertise</li>
              </ul>
              <button className="mt-4 w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700">Complete Profile</button>
            </div>

            <div className="bg-white rounded-xl shadow-sm p-6">
              <h3 className="font-bold mb-4">Quick Links</h3>
              <div className="space-y-2">
                <Link href="/directory" className="block text-gray-600 hover:text-blue-600 text-sm"><i className="fas fa-users w-5"></i> Browse Directory</Link>
                <Link href="/jobs" className="block text-gray-600 hover:text-blue-600 text-sm"><i className="fas fa-briefcase w-5"></i> Find Jobs</Link>
                <Link href="/mentorship" className="block text-gray-600 hover:text-blue-600 text-sm"><i className="fas fa-user-tie w-5"></i> Find Mentor</Link>
                <Link href="/events" className="block text-gray-600 hover:text-blue-600 text-sm"><i className="fas fa-calendar w-5"></i> All Events</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
