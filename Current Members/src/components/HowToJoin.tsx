import { CheckCircle, Calendar, Users, FileText } from 'lucide-react';

export function HowToJoin() {
  const steps = [
    {
      icon: FileText,
      title: 'Attend FSL 101',
      description: 'Learn the foundations of fraternity and sorority life at Maryland. This is required before joining any organization.',
      action: 'Register for FSL 101',
      link: '#'
    },
    {
      icon: Calendar,
      title: 'Check the Recruitment Calendar',
      description: 'Each council has different recruitment timelines. Find out when your council is recruiting.',
      action: 'View Calendar',
      link: '#'
    },
    {
      icon: Users,
      title: 'Attend Recruitment Events',
      description: 'Meet members, ask questions, and discover which chapter is the right fit for you.',
      action: 'See Events',
      link: '#'
    },
    {
      icon: CheckCircle,
      title: 'Receive & Accept Your Bid',
      description: 'If a chapter extends you an invitation (bid), you can choose to accept and begin your journey!',
      action: 'Learn More',
      link: '#'
    }
  ];

  return (
    <section className="bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4">
        <div className="mb-8">
          <div className="text-sm text-gray-600 mb-2">
            <span className="text-red-600 hover:underline cursor-pointer">HOME</span>
            {' > '}
            <span className="text-red-600 hover:underline cursor-pointer">PROSPECTIVE MEMBERS</span>
            {' > '}
            <span>HOW TO JOIN</span>
          </div>
          <h1 className="text-red-600">How to Join Greek Life at Maryland</h1>
        </div>

        <div className="bg-white rounded-lg shadow-md p-8 mb-8">
          <p className="text-gray-700 text-lg mb-6">
            Joining a fraternity or sorority is an exciting journey! We've made the process clear and straightforward so you know exactly what to expect. All students must attend an <strong>FSL 101 session</strong> prior to joining any organization.
          </p>
          
          <div className="bg-yellow-50 border-l-4 border-[#FFD200] p-4 mb-8">
            <p className="text-gray-800">
              <strong>Important:</strong> Each council (IFC, PHA, NPHC, MGC) has its own recruitment process and timeline. Make sure to explore the council that matches your interests below.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {steps.map((step, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md p-6 flex gap-4">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center">
                  <step.icon className="w-6 h-6 text-red-600" />
                </div>
              </div>
              <div className="flex-1">
                <h3 className="text-gray-900 mb-2">{step.title}</h3>
                <p className="text-gray-600 text-sm mb-4">{step.description}</p>
                <a href={step.link} className="text-red-600 hover:underline text-sm">
                  {step.action} →
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
