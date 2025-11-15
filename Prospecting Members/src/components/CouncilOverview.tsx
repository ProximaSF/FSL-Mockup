import { Users, Heart, Sparkles, Globe } from 'lucide-react';

interface CouncilOverviewProps {
  onNavigate: (section: 'home' | 'how-to-join' | 'councils' | 'about' | 'calendar') => void;
}

export function CouncilOverview({ onNavigate }: CouncilOverviewProps) {
  const councils = [
    {
      acronym: 'IFC',
      name: 'Interfraternity Council',
      description: 'Traditionally-based fraternities focused on leadership, scholarship, and brotherhood.',
      icon: Users,
      color: 'bg-blue-500',
      chapters: '20+ chapters'
    },
    {
      acronym: 'PHA',
      name: 'Panhellenic Association',
      description: 'Traditionally-based sororities emphasizing sisterhood, service, and academic excellence.',
      icon: Heart,
      color: 'bg-pink-500',
      chapters: '15+ chapters'
    },
    {
      acronym: 'NPHC',
      name: 'National Pan-Hellenic Council',
      description: 'Historically African American fraternities and sororities with a legacy of service and culture.',
      icon: Sparkles,
      color: 'bg-purple-500',
      chapters: '9 chapters'
    },
    {
      acronym: 'MGC',
      name: 'Multicultural Greek Council',
      description: 'Culturally-based organizations celebrating diversity and multicultural awareness.',
      icon: Globe,
      color: 'bg-green-500',
      chapters: '12+ chapters'
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-red-600 mb-4">Find Your Community</h2>
          <p className="text-gray-700 max-w-3xl mx-auto text-lg">
            Maryland is home to over 50 organizations across four diverse councils. Each council offers unique opportunities to build lifelong friendships, develop as a leader, and make a lasting impact.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {councils.map((council) => (
            <div 
              key={council.acronym}
              className="bg-white border-2 border-gray-200 rounded-lg p-6 hover:border-red-600 hover:shadow-lg transition-all cursor-pointer"
            >
              <div className={`${council.color} w-12 h-12 rounded-lg flex items-center justify-center mb-4`}>
                <council.icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-red-600 mb-2">{council.acronym}</h3>
              <div className="text-sm text-gray-600 mb-3">{council.name}</div>
              <p className="text-gray-700 text-sm mb-4">{council.description}</p>
              <div className="text-xs text-gray-500">{council.chapters}</div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <button 
            onClick={() => onNavigate('councils')}
            className="bg-red-600 text-white px-8 py-3 hover:bg-red-700 transition-colors mr-4"
          >
            Compare Councils
          </button>
          <button 
            onClick={() => onNavigate('calendar')}
            className="bg-transparent border-2 border-red-600 text-red-600 px-8 py-3 hover:bg-red-600 hover:text-white transition-all"
          >
            View Events Calendar
          </button>
        </div>
      </div>
    </section>
  );
}