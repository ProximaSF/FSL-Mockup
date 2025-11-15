import { Calendar, MapPin, Clock, ArrowLeft, Users, Heart, Sparkles, Globe } from 'lucide-react';
import { useState } from 'react';

interface Event {
  id: string;
  title: string;
  date: string;
  time: string;
  location: string;
  description: string;
  type: 'recruitment' | 'social' | 'service' | 'educational' | 'cultural';
  status: 'past' | 'current' | 'upcoming';
}

interface CouncilCalendarProps {
  council: 'IFC' | 'PHA' | 'NPHC' | 'MGC' | null;
}

export function CouncilCalendar({ council }: CouncilCalendarProps) {
  const [filter, setFilter] = useState<'all' | 'past' | 'current' | 'upcoming'>('upcoming');

  if (!council) return null;

  const councilData = {
    IFC: {
      name: 'Interfraternity Council',
      icon: Users,
      color: 'blue',
      events: [
        {
          id: '1',
          title: 'IFC Meet the Greeks Fair',
          date: '2024-09-05',
          time: '5:00 PM - 8:00 PM',
          location: 'Stamp Student Union, Grand Ballroom',
          description: 'Meet representatives from all IFC fraternities. Learn about each chapter, ask questions, and get recruitment information.',
          type: 'recruitment' as const,
          status: 'past' as const
        },
        {
          id: '2',
          title: 'Fall Recruitment Week',
          date: '2024-09-02',
          time: 'All Week',
          location: 'Various Chapter Houses',
          description: 'Informal recruitment events hosted by individual chapters. Check with specific fraternities for their event schedules.',
          type: 'recruitment' as const,
          status: 'past' as const
        },
        {
          id: '3',
          title: 'IFC Leadership Summit',
          date: '2024-11-14',
          time: '2:00 PM - 6:00 PM',
          location: 'Adele H. Stamp Student Union',
          description: 'Leadership development workshop for current and aspiring chapter officers. Featuring guest speakers and breakout sessions.',
          type: 'educational' as const,
          status: 'current' as const
        },
        {
          id: '4',
          title: 'Spring Recruitment Information Session',
          date: '2025-01-22',
          time: '7:00 PM - 8:30 PM',
          location: 'Hornbake Library, Room 0301',
          description: 'Learn about spring recruitment opportunities and how to get involved with IFC fraternities in the spring semester.',
          type: 'recruitment' as const,
          status: 'upcoming' as const
        },
        {
          id: '5',
          title: 'Greek Week Kickoff',
          date: '2025-04-07',
          time: '12:00 PM - 4:00 PM',
          location: 'McKeldin Mall',
          description: 'Annual Greek Week celebration featuring games, competitions, and community building activities across all councils.',
          type: 'social' as const,
          status: 'upcoming' as const
        },
        {
          id: '6',
          title: 'IFC Community Service Day',
          date: '2025-03-15',
          time: '9:00 AM - 2:00 PM',
          location: 'College Park Community',
          description: 'Join IFC chapters in giving back to the local College Park community through various service projects.',
          type: 'service' as const,
          status: 'upcoming' as const
        }
      ]
    },
    PHA: {
      name: 'Panhellenic Association',
      icon: Heart,
      color: 'pink',
      events: [
        {
          id: '1',
          title: 'Primary Recruitment Registration Deadline',
          date: '2024-08-15',
          time: 'All Day',
          location: 'Online Registration',
          description: 'Last day to register for Fall Primary Recruitment. Complete FSL 101 and submit all required forms.',
          type: 'recruitment' as const,
          status: 'past' as const
        },
        {
          id: '2',
          title: 'Primary Recruitment Week',
          date: '2024-08-22',
          time: 'All Week',
          location: 'Various Locations',
          description: 'Formal recruitment process including orientation, house tours, and preference rounds.',
          type: 'recruitment' as const,
          status: 'past' as const
        },
        {
          id: '3',
          title: 'Bid Day Celebration',
          date: '2024-08-26',
          time: '4:00 PM',
          location: 'Chapter Houses',
          description: 'New members receive their bids and celebrate with their new chapters!',
          type: 'social' as const,
          status: 'past' as const
        },
        {
          id: '4',
          title: 'Panhellenic Sisterhood Retreat',
          date: '2024-11-16',
          time: '10:00 AM - 5:00 PM',
          location: 'Stamp Student Union',
          description: 'A day dedicated to building connections across PHA chapters and celebrating sisterhood.',
          type: 'social' as const,
          status: 'current' as const
        },
        {
          id: '5',
          title: 'Spring COB Information Night',
          date: '2025-02-05',
          time: '6:00 PM - 7:30 PM',
          location: 'Hornbake Library',
          description: 'Learn about Continuous Open Bidding (COB) opportunities for spring semester.',
          type: 'recruitment' as const,
          status: 'upcoming' as const
        },
        {
          id: '6',
          title: 'PHA Scholarship Dinner',
          date: '2025-04-20',
          time: '6:00 PM - 9:00 PM',
          location: 'The Stamp Grand Ballroom',
          description: 'Annual scholarship awards dinner celebrating academic excellence in PHA chapters.',
          type: 'educational' as const,
          status: 'upcoming' as const
        }
      ]
    },
    NPHC: {
      name: 'National Pan-Hellenic Council',
      icon: Sparkles,
      color: 'purple',
      events: [
        {
          id: '1',
          title: 'NPHC Welcome Week Meet & Greet',
          date: '2024-09-10',
          time: '7:00 PM - 9:00 PM',
          location: 'Nyumburu Cultural Center',
          description: 'Meet members of all nine NPHC organizations and learn about their histories and contributions.',
          type: 'recruitment' as const,
          status: 'past' as const
        },
        {
          id: '2',
          title: 'Step Show Spectacular',
          date: '2024-10-18',
          time: '7:00 PM - 10:00 PM',
          location: 'Xfinity Center',
          description: 'Annual step show featuring performances from NPHC fraternities and sororities.',
          type: 'cultural' as const,
          status: 'past' as const
        },
        {
          id: '3',
          title: 'Divine Nine Information Session',
          date: '2024-11-15',
          time: '6:30 PM - 8:00 PM',
          location: 'Nyumburu Cultural Center',
          description: 'Learn about the membership intake process for NPHC organizations. Q&A with current members.',
          type: 'recruitment' as const,
          status: 'current' as const
        },
        {
          id: '4',
          title: 'NPHC Community Service Day',
          date: '2025-01-20',
          time: '10:00 AM - 3:00 PM',
          location: 'Various Locations',
          description: 'MLK Day of Service - NPHC chapters participate in community service projects.',
          type: 'service' as const,
          status: 'upcoming' as const
        },
        {
          id: '5',
          title: 'Spring Interest Meeting',
          date: '2025-02-12',
          time: '7:00 PM - 8:30 PM',
          location: 'Nyumburu Cultural Center',
          description: 'Interest meeting for students wanting to learn more about joining NPHC organizations in the spring.',
          type: 'recruitment' as const,
          status: 'upcoming' as const
        },
        {
          id: '6',
          title: 'NPHC Week Celebration',
          date: '2025-03-03',
          time: 'All Week',
          location: 'Various Campus Locations',
          description: 'Week-long celebration of NPHC history, legacy, and contributions to Greek life and civil rights.',
          type: 'cultural' as const,
          status: 'upcoming' as const
        }
      ]
    },
    MGC: {
      name: 'Multicultural Greek Council',
      icon: Globe,
      color: 'green',
      events: [
        {
          id: '1',
          title: 'MGC Welcome BBQ',
          date: '2024-09-08',
          time: '4:00 PM - 7:00 PM',
          location: 'Fraternity Row Lawn',
          description: 'Informal meet and greet with all MGC organizations. Food, music, and information about each chapter.',
          type: 'social' as const,
          status: 'past' as const
        },
        {
          id: '2',
          title: 'Cultural Showcase Night',
          date: '2024-10-25',
          time: '6:00 PM - 9:00 PM',
          location: 'Stamp Student Union',
          description: 'MGC chapters present cultural performances, traditional dances, and educational presentations.',
          type: 'cultural' as const,
          status: 'past' as const
        },
        {
          id: '3',
          title: 'Fall Interest Night',
          date: '2024-11-13',
          time: '7:00 PM - 9:00 PM',
          location: 'Hornbake Library, Room 0301',
          description: 'Learn about MGC recruitment processes and hear from current members about their experiences.',
          type: 'recruitment' as const,
          status: 'current' as const
        },
        {
          id: '4',
          title: 'MGC Unity Games',
          date: '2025-02-22',
          time: '1:00 PM - 5:00 PM',
          location: 'Eppley Recreation Center',
          description: 'Friendly athletic competition between MGC chapters promoting unity and brotherhood/sisterhood.',
          type: 'social' as const,
          status: 'upcoming' as const
        },
        {
          id: '5',
          title: 'Spring Recruitment Fair',
          date: '2025-03-10',
          time: '5:00 PM - 8:00 PM',
          location: 'Stamp Grand Ballroom',
          description: 'Meet representatives from all MGC chapters and learn about spring recruitment opportunities.',
          type: 'recruitment' as const,
          status: 'upcoming' as const
        },
        {
          id: '6',
          title: 'MGC Heritage Month Celebration',
          date: '2025-04-15',
          time: '6:00 PM - 9:00 PM',
          location: 'Nyumburu Cultural Center',
          description: 'Celebration of diverse cultural heritages represented within MGC organizations.',
          type: 'cultural' as const,
          status: 'upcoming' as const
        }
      ]
    }
  };

  const data = councilData[council];
  const Icon = data.icon;

  const colorClasses = {
    blue: {
      bg: 'bg-blue-500',
      text: 'text-blue-600',
      border: 'border-blue-500',
      light: 'bg-blue-50'
    },
    pink: {
      bg: 'bg-pink-500',
      text: 'text-pink-600',
      border: 'border-pink-500',
      light: 'bg-pink-50'
    },
    purple: {
      bg: 'bg-purple-500',
      text: 'text-purple-600',
      border: 'border-purple-500',
      light: 'bg-purple-50'
    },
    green: {
      bg: 'bg-green-500',
      text: 'text-green-600',
      border: 'border-green-500',
      light: 'bg-green-50'
    }
  };

  const colors = colorClasses[data.color];

  const filteredEvents = filter === 'all' 
    ? data.events 
    : data.events.filter(event => event.status === filter);

  const typeColors = {
    recruitment: 'bg-blue-100 text-blue-800',
    social: 'bg-purple-100 text-purple-800',
    service: 'bg-green-100 text-green-800',
    educational: 'bg-yellow-100 text-yellow-800',
    cultural: 'bg-orange-100 text-orange-800'
  };

  const statusBadges = {
    past: 'bg-gray-100 text-gray-600',
    current: 'bg-red-100 text-red-600',
    upcoming: 'bg-blue-100 text-blue-600'
  };

  return (
    <section className="py-16 bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4">
        <div className="mb-8">
          <div className="text-sm text-gray-600 mb-4">
            <span className="text-red-600 hover:underline cursor-pointer">HOME</span>
            {' > '}
            <span className="text-red-600 hover:underline cursor-pointer">EVENTS CALENDAR</span>
            {' > '}
            <span>{council}</span>
          </div>
          <button 
            onClick={() => window.history.back()}
            className="flex items-center gap-2 text-gray-600 hover:text-red-600 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Council Selection
          </button>
        </div>

        <div className="bg-white rounded-lg shadow-md p-8 mb-8">
          <div className="flex items-center gap-4 mb-4">
            <div className={`${colors.bg} w-16 h-16 rounded-lg flex items-center justify-center`}>
              <Icon className="w-8 h-8 text-white" />
            </div>
            <div>
              <h1 className={`${colors.text}`}>{council} Events Calendar</h1>
              <p className="text-gray-600">{data.name}</p>
            </div>
          </div>
          <p className="text-gray-700">
            View all upcoming events, recruitment activities, and important dates for the {data.name}.
          </p>
        </div>

        <div className="mb-6 flex gap-2 flex-wrap">
          <button
            onClick={() => setFilter('all')}
            className={`px-4 py-2 rounded transition-colors ${
              filter === 'all' 
                ? 'bg-red-600 text-white' 
                : 'bg-white text-gray-700 hover:bg-gray-100'
            }`}
          >
            All Events
          </button>
          <button
            onClick={() => setFilter('upcoming')}
            className={`px-4 py-2 rounded transition-colors ${
              filter === 'upcoming' 
                ? 'bg-red-600 text-white' 
                : 'bg-white text-gray-700 hover:bg-gray-100'
            }`}
          >
            Upcoming
          </button>
          <button
            onClick={() => setFilter('current')}
            className={`px-4 py-2 rounded transition-colors ${
              filter === 'current' 
                ? 'bg-red-600 text-white' 
                : 'bg-white text-gray-700 hover:bg-gray-100'
            }`}
          >
            This Week
          </button>
          <button
            onClick={() => setFilter('past')}
            className={`px-4 py-2 rounded transition-colors ${
              filter === 'past' 
                ? 'bg-red-600 text-white' 
                : 'bg-white text-gray-700 hover:bg-gray-100'
            }`}
          >
            Past Events
          </button>
        </div>

        <div className="space-y-4">
          {filteredEvents.length === 0 ? (
            <div className="bg-white rounded-lg shadow-md p-12 text-center">
              <Calendar className="w-12 h-12 text-gray-400 mx-auto mb-4" />
              <p className="text-gray-600">No events found for this filter.</p>
            </div>
          ) : (
            filteredEvents.map((event) => (
              <div 
                key={event.id}
                className={`bg-white rounded-lg shadow-md p-6 border-l-4 ${colors.border} hover:shadow-lg transition-shadow`}
              >
                <div className="flex flex-wrap gap-2 mb-3">
                  <span className={`px-3 py-1 rounded-full text-xs ${typeColors[event.type]}`}>
                    {event.type.charAt(0).toUpperCase() + event.type.slice(1)}
                  </span>
                  <span className={`px-3 py-1 rounded-full text-xs ${statusBadges[event.status]}`}>
                    {event.status.charAt(0).toUpperCase() + event.status.slice(1)}
                  </span>
                </div>
                
                <h3 className="text-gray-900 mb-3">{event.title}</h3>
                
                <div className="grid md:grid-cols-3 gap-4 mb-4">
                  <div className="flex items-center gap-2 text-gray-600">
                    <Calendar className="w-4 h-4" />
                    <span className="text-sm">{new Date(event.date).toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-600">
                    <Clock className="w-4 h-4" />
                    <span className="text-sm">{event.time}</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-600">
                    <MapPin className="w-4 h-4" />
                    <span className="text-sm">{event.location}</span>
                  </div>
                </div>
                
                <p className="text-gray-700 text-sm">{event.description}</p>
              </div>
            ))
          )}
        </div>

        <div className="mt-12 bg-yellow-50 border-l-4 border-[#FFD200] p-6 rounded">
          <h3 className="text-gray-900 mb-2">Want to Stay Updated?</h3>
          <p className="text-gray-700 text-sm mb-4">
            Follow {council} on social media or contact the {data.name} for the most up-to-date event information and to be added to their mailing list.
          </p>
          <button className="bg-red-600 text-white px-6 py-2 hover:bg-red-700 transition-colors text-sm">
            Contact {council}
          </button>
        </div>
      </div>
    </section>
  );
}
