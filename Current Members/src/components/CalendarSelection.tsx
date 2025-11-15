import { Users, Heart, Sparkles, Globe, Calendar } from 'lucide-react';

interface CalendarSelectionProps {
  onCouncilSelect: (council: 'IFC' | 'PHA' | 'NPHC' | 'MGC') => void;
}

export function CalendarSelection({ onCouncilSelect }: CalendarSelectionProps) {
  const councils = [
    {
      acronym: 'IFC' as const,
      name: 'Interfraternity Council',
      description: 'View recruitment events, social activities, and brotherhood development programs.',
      icon: Users,
      color: 'bg-blue-500',
      borderColor: 'border-blue-500',
      hoverBg: 'hover:bg-blue-50'
    },
    {
      acronym: 'PHA' as const,
      name: 'Panhellenic Association',
      description: 'Explore formal recruitment, sisterhood events, and philanthropic activities.',
      icon: Heart,
      color: 'bg-pink-500',
      borderColor: 'border-pink-500',
      hoverBg: 'hover:bg-pink-50'
    },
    {
      acronym: 'NPHC' as const,
      name: 'National Pan-Hellenic Council',
      description: 'Discover intake information sessions, step shows, and community service events.',
      icon: Sparkles,
      color: 'bg-purple-500',
      borderColor: 'border-purple-500',
      hoverBg: 'hover:bg-purple-50'
    },
    {
      acronym: 'MGC' as const,
      name: 'Multicultural Greek Council',
      description: 'Find cultural celebrations, recruitment events, and multicultural programming.',
      icon: Globe,
      color: 'bg-green-500',
      borderColor: 'border-green-500',
      hoverBg: 'hover:bg-green-50'
    }
  ];

  return (
    <section className="py-16 bg-gray-50 min-h-[70vh]">
      <div className="max-w-7xl mx-auto px-4">
        <div className="mb-8">
          <div className="text-sm text-gray-600 mb-2">
            <span className="text-red-600 hover:underline cursor-pointer">HOME</span>
            {' > '}
            <span>EVENTS CALENDAR</span>
          </div>
        </div>

        <div className="text-center mb-12">
          <div className="flex justify-center mb-4">
            <Calendar className="w-12 h-12 text-red-600" />
          </div>
          <h1 className="text-red-600 mb-4">Greek Life Events Calendar</h1>
          <p className="text-gray-700 max-w-3xl mx-auto text-lg">
            Select a council to view their upcoming events, recruitment activities, and important dates.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {councils.map((council) => (
            <button
              key={council.acronym}
              onClick={() => onCouncilSelect(council.acronym)}
              className={`bg-white border-2 ${council.borderColor} rounded-lg p-8 ${council.hoverBg} hover:shadow-lg transition-all text-left group`}
            >
              <div className="flex items-start gap-4">
                <div className={`${council.color} w-16 h-16 rounded-lg flex items-center justify-center flex-shrink-0`}>
                  <council.icon className="w-8 h-8 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-gray-900 mb-1 group-hover:text-red-600 transition-colors">
                    {council.acronym}
                  </h3>
                  <div className="text-sm text-gray-600 mb-3">{council.name}</div>
                  <p className="text-gray-700 text-sm">{council.description}</p>
                  <div className="mt-4 text-red-600 text-sm group-hover:underline">
                    View Calendar →
                  </div>
                </div>
              </div>
            </button>
          ))}
        </div>

        <div className="mt-12 max-w-3xl mx-auto bg-yellow-50 border-l-4 border-[#FFD200] p-6">
          <h3 className="text-gray-900 mb-2">Need Help Finding Events?</h3>
          <p className="text-gray-700 text-sm">
            Each council operates independently with their own event schedules. If you're unsure which council to explore, check out our <span className="text-red-600 hover:underline cursor-pointer">Council Comparison Guide</span> to learn more about each organization type.
          </p>
        </div>
      </div>
    </section>
  );
}
