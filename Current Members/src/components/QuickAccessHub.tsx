import { Users, UserCheck, DollarSign } from 'lucide-react';

interface QuickAccessHubProps {
  onNavigate: (section: 'current-members' | 'advisors-parents' | 'costs') => void;
}

export function QuickAccessHub({ onNavigate }: QuickAccessHubProps) {
  const quickLinks = [
    {
      icon: Users,
      title: 'Current Members',
      description: 'Access chapter status, policies, forms, and resources for active members.',
      section: 'current-members' as const,
      color: 'bg-red-600',
      hoverColor: 'hover:bg-red-700'
    },
    {
      icon: UserCheck,
      title: 'Advisors & Parents',
      description: 'Resources, training materials, and information for chapter advisors and families.',
      section: 'advisors-parents' as const,
      color: 'bg-blue-600',
      hoverColor: 'hover:bg-blue-700'
    },
    {
      icon: DollarSign,
      title: 'Cost Information',
      description: 'Transparent breakdown of membership costs by chapter and council.',
      section: 'costs' as const,
      color: 'bg-green-600',
      hoverColor: 'hover:bg-green-700'
    }
  ];

  return (
    <div className="bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-gray-900 mb-2">Quick Access</h2>
          <p className="text-gray-600">Find what you need faster</p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-6">
          {quickLinks.map((link) => {
            const Icon = link.icon;
            return (
              <button
                key={link.section}
                onClick={() => onNavigate(link.section)}
                className={`${link.color} ${link.hoverColor} text-white rounded-lg p-6 transition-all hover:shadow-lg text-left group`}
              >
                <Icon className="w-10 h-10 mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="text-white mb-2">{link.title}</h3>
                <p className="text-white/90 text-sm">{link.description}</p>
                <div className="mt-4 text-white text-sm group-hover:underline">
                  Access Now →
                </div>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
