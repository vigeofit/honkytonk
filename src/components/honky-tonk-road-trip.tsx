'use client'

import { Hotel, MapPin, Users, Coffee, Plane, Wine } from 'lucide-react'
import Head from 'next/head'

export function HonkyTonkRoadTrip() {
  return (
    <>
      <Head>
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;700&display=swap" rel="stylesheet" />
      </Head>
      <div className="bg-[#f4d03f] min-h-screen p-4 sm:p-8 font-sans text-[#d35400] relative overflow-hidden">
        {/* Background texture */}
        <div className="absolute inset-0 bg-repeat opacity-15" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23000000' fill-opacity='0.1' fill-rule='evenodd'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3z' /%3E%3C/g%3E%3C/svg%3E")`,
        }} />

        {/* Worn texture overlay */}
        <div className="absolute inset-0 bg-repeat mix-blend-multiply opacity-25" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 512 512' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        }} />

        {/* Additional texture overlay */}
        <div className="absolute inset-0 bg-repeat mix-blend-overlay opacity-20" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3z' fill='%23d35400' fill-opacity='0.1' fill-rule='evenodd'/%3E%3C/svg%3E")`,
        }} />

        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-yellow-400/10 via-transparent to-orange-500/10" />


        {/* Guitar shapes */}
        <div className="absolute left-0 top-1/4 w-16 sm:w-32 h-32 sm:h-64 bg-[#2980b9] rounded-r-full opacity-30 -ml-8 sm:-ml-16" />
        <div className="absolute right-0 bottom-1/4 w-16 sm:w-32 h-32 sm:h-64 bg-[#2980b9] rounded-l-full opacity-30 -mr-8 sm:-mr-16" />

        <div className="relative">
          <h1 className="text-5xl sm:text-6xl font-bold text-center mb-6 sm:mb-8 tracking-tight uppercase" style={{
            fontFamily: '"Inter", sans-serif',
            letterSpacing: '0.1em',
            textShadow: '2px 2px 0 #2980b9, 4px 4px 0 #d35400',
            WebkitTextStroke: '1px #d35400',
            color: '#f4d03f',
            transform: 'skew(-5deg, 0deg)',
          }}>
            Honky Tonk Road Trip
          </h1>

          <div className="max-w-6xl mx-auto bg-white bg-opacity-80 p-4 sm:p-8 rounded-lg shadow-lg">
            <div className="flex flex-col lg:flex-row">
              {/* Schedule column */}
              <div className="lg:w-2/3 lg:pr-8">
                <h3 className="text-2xl sm:text-3xl font-bold mb-6 text-center">
                  Schedule
                </h3>

                {/* Schedule */}
                <div className="space-y-6 sm:space-y-8">
                  {[
                    { date: '25 Fri', events: [
                      { time: '4:00 PM', title: 'Hotel Check-In', icon: MapPin, details: 'Bobby Hotel & Airbnb' },
                      { time: '5:30 PM', title: 'Pre-Dinner Drinks', icon: Wine, details: (
                        <>
                          <a href="https://www.thepattersonnashville.com/" className="text-[#006400] hover:underline font-bold" target="_blank"><strong>The Patterson House</strong></a>
                          <br />
                          <a href="https://maps.app.goo.gl/bvsbVbTuEoSWxGMQ9" className="text-[#006400] hover:underline" target="_blank">
                            1711 Division St, Nashville, TN 37203
                          </a>
                        </>
                      ) },
                      { time: '6:30 PM', title: 'Dinner', icon: Users, details: (
                        <>
                          <a href="https://www.henleynashville.com/" className="text-[#006400] hover:underline font-bold" target="_blank"><strong>Henley</strong></a>
                          <br />
                          <a href="https://maps.app.goo.gl/AbJQprP8DdFFgLsn7" className="text-[#006400] hover:underline" target="_blank">
                            2023 Broadway, Nashville, TN 37203
                          </a>
                        </>
                      ) },
                      { time: '8:00 PM', title: 'Honky Tonk Shenanigans', icon: Users, details: '' },
                    ]},
                    { date: '26 Sat', events: [
                      { time: '8:30 AM', title: 'Breakfast', icon: Coffee, details: (
                        <>
                          <a href="https://www.caferoze.com/" className="text-[#006400] hover:underline font-bold" target="_blank"><strong>Cafe Rose</strong></a>
                          <br />
                          <a href="https://maps.app.goo.gl/s1pA56wLD3HURGucA" className="text-[#006400] hover:underline" target="_blank">
                            1115 Porter Rd, Nashville, TN 37206
                          </a>
                        </>
                      ) },
                      { time: '10:00 AM', title: 'Leave Nashville For Memphis', icon: Plane, details: '' },
                      { time: '2:00 PM', title: 'Concert', icon: Users, details: (
                        <>
                          <a href="https://chenegear.com/pages/film-festival" className="text-[#006400] hover:underline font-bold" target="_blank"><strong>Radians Amphitheater</strong></a>
                          <br />
                          <a href="https://maps.app.goo.gl/RKshZvVgkE1rGigF8" className="text-[#006400] hover:underline" target="_blank">
                            750 Cherry Rd, Memphis, TN 38117
                          </a>
                        </>
                      ) },
                      { time: '5:45 PM', title: 'Dinner (Memphis)', icon: Users, details: (
                        <>
                          <a href="https://www.henhouse901.com/" className="text-[#006400] hover:underline font-bold" target="_blank"><strong>Hen House</strong></a>
                          <br />
                          <a href="https://maps.app.goo.gl/Ld9Ld9Z9Z9Z9Z9Z9A" className="text-[#006400] hover:underline" target="_blank">
                            679 S Mendenhall Rd, Memphis, TN 38117
                          </a>
                        </>
                      ) },
                      { time: '7:15 PM', title: 'Head Back To Nashville', icon: Plane, details: '' },
                    ]},
                    { date: '27 Sun', events: [
                      { time: '10:15 AM', title: 'Brunch', icon: Coffee, details: (
                        <>
                          <a href="https://libertycommonsnashville.com/" className="text-[#006400] hover:underline font-bold" target="_blank"><strong>Liberty Commons</strong></a>
                          <br />
                          <a href="https://maps.app.goo.gl/1J5Z5Z5Z5Z5Z5Z5Z5" className="text-[#006400] hover:underline" target="_blank">
                            207 1st Ave S, Nashville, TN, 37201
                          </a>
                        </>
                      ) },
                    ]},
                  ].map((day) => (
                    <div key={day.date} className="border-b-2 border-[#d35400] pb-4">
                      <h4 className="text-xl sm:text-2xl font-bold mb-4">{day.date}</h4>
                      <div className="space-y-5">
                        {day.events.map((event, index) => (
                          <div key={index} className="flex items-start pb-3">
                            <event.icon className="w-6 h-6 sm:w-6 sm:h-6 mr-3 sm:mr-4 mt-1 flex-shrink-0" />
                            <div>
                              <p className="font-bold text-base sm:text-base">{event.time} - {event.title}</p>
                              <div className="ml-4">
                                <p className="text-sm sm:text-sm whitespace-pre-line">{event.details}</p>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Divider */}
              <div className="hidden lg:block w-px bg-[#d35400] mx-8"></div>

              {/* Lodging column */}
              <div className="lg:w-1/3 mt-8 lg:mt-0">
                <h3 className="text-2xl sm:text-3xl font-bold mb-6 text-center lg:text-left flex items-center justify-center lg:justify-start">
                  <Hotel className="w-6 h-6 sm:w-7 sm:h-7 mr-2" /> Lodging
                </h3>
                <div className="space-y-6 text-center lg:text-left mt-4">
                  <div>
                    <p className="font-bold mb-2 text-lg sm:text-xl">Bledsoe's</p>
                    <p>
                      <a href="https://bobbyhotel.com/nashville/" className="text-[#006400] hover:underline" target="_blank">
                        Bobby Hotel
                      </a>
                    </p>
                    <p>
                      <a href="https://maps.app.goo.gl/ujWDPEVpY1xbbMCr8" className="text-[#006400] hover:underline" target="_blank">
                        230 4th Ave N, Nashville, TN 37219
                      </a>
                    </p>
                  </div>
                  <div>
                    <p className="font-bold mb-2 text-lg sm:text-xl">Bennett's & Smith's</p>
                    <p>Airbnb (Church St Loft)</p>
                    <p>
                      <a href="https://maps.app.goo.gl/26Dm5jL3p8BZbNaz8" className="text-[#006400] hover:underline" target="_blank">
                        506 Church Street, Nashville, TN 37219
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}