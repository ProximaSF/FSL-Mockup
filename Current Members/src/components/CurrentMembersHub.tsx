import { FileText, Award, Calendar, BookOpen, AlertCircle, Download, HelpCircle, Users } from 'lucide-react';

export function CurrentMembersHub() {
  const quickLinks = [
    {
      icon: Award,
      title: 'Chapter Recognition Status',
      description: 'View your chapter\'s current recognition status and requirements',
      href: '#chapter-recognition',
      color: 'bg-blue-500'
    },
    {
      icon: FileText,
      title: 'Policies & Documents',
      description: 'Access policies, forms, and required documents',
      href: '#resources',
      color: 'bg-purple-500'
    },
    {
      icon: Calendar,
      title: 'Events Calendar',
      description: 'View upcoming events, deadlines, and important dates',
      href: '#calendar',
      color: 'bg-red-500'
    },
    {
      icon: BookOpen,
      title: 'Educational Resources',
      description: 'Leadership training, risk management, and development tools',
      href: '#resources',
      color: 'bg-green-500'
    },
    {
      icon: AlertCircle,
      title: 'Report an Incident',
      description: 'Report hazing, policy violations, or safety concerns',
      href: '#',
      color: 'bg-orange-500'
    },
    {
      icon: Users,
      title: 'Contact DFSL Staff',
      description: 'Get help from our team with questions or concerns',
      href: '#staff',
      color: 'bg-teal-500'
    }
  ];

  const announcements = [
    {
      date: 'November 14, 2024',
      title: 'Spring Semester Registration Deadline',
      content: 'All chapters must submit spring semester registration by December 1, 2024. This includes updated rosters and officer information.',
      urgent: true
    },
    {
      date: 'November 10, 2024',
      title: 'Updated Social Event Guidelines',
      content: 'New social event registration procedures are now in effect. Please review the updated policy before planning any events.',
      urgent: false
    }
  ];

  const commonTasks = [
    { title: 'Event Registration Form', updated: 'Oct 2024' },
    { title: 'Semester Compliance Checklist', updated: 'Aug 2024' },
    { title: 'New Member Education Plan', updated: 'Sep 2024' },
    { title: 'Risk Management Guidelines', updated: 'Nov 2024' }
  ];

  return (
    <section className="py-16 bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4">
        <div className="mb-8">
          <div className="text-sm text-gray-600 mb-2">
            <a href="#home" className="text-red-600 hover:underline">HOME</a>
            {' > '}
            <span>CURRENT MEMBERS</span>
          </div>
          <h1 className="text-red-600 mb-4">Current Members Hub</h1>
          <p className="text-gray-700 text-lg">
            Welcome! Find everything you need to support your chapter and stay compliant.
          </p>
        </div>

        {/* Announcements */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <div className="flex items-center gap-2 mb-4">
            <AlertCircle className="w-6 h-6 text-red-600" />
            <h2 className="text-gray-900">Important Announcements</h2>
          </div>
          <div className="space-y-4">
            {announcements.map((announcement, index) => (
              <div 
                key={index}
                className={`p-4 rounded border-l-4 ${
                  announcement.urgent 
                    ? 'bg-red-50 border-red-500' 
                    : 'bg-blue-50 border-blue-500'
                }`}
              >
                <div className="flex items-start justify-between gap-4 flex-wrap">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1 flex-wrap">
                      <h3 className="text-gray-900">{announcement.title}</h3>
                      {announcement.urgent && (
                        <span className="px-2 py-1 bg-red-600 text-white text-xs rounded">ACTION REQUIRED</span>
                      )}
                    </div>
                    <p className="text-gray-700 text-sm mb-2">{announcement.content}</p>
                    <p className="text-gray-500 text-xs">{announcement.date}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Quick Links */}
        <div className="mb-8">
          <h2 className="text-gray-900 mb-6">Quick Access</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {quickLinks.map((link, index) => {
              const Icon = link.icon;
              return (
                <a
                  key={index}
                  href={link.href}
                  className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-all group"
                >
                  <div className={`${link.color} w-12 h-12 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-gray-900 mb-2 group-hover:text-red-600 transition-colors">
                    {link.title}
                  </h3>
                  <p className="text-gray-600 text-sm">{link.description}</p>
                </a>
              );
            })}
          </div>
        </div>

        {/* Common Tasks */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <div className="flex items-center gap-2 mb-6">
            <Download className="w-6 h-6 text-red-600" />
            <h2 className="text-gray-900">Frequently Used Forms</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-4">
            {commonTasks.map((task, index) => (
              <a 
                key={index}
                href="#" 
                className="flex items-center gap-3 p-4 border border-gray-200 rounded hover:border-red-600 transition-colors group"
              >
                <FileText className="w-5 h-5 text-gray-400 group-hover:text-red-600 flex-shrink-0" />
                <div className="flex-1 min-w-0">
                  <div className="text-gray-900 text-sm group-hover:text-red-600 truncate">{task.title}</div>
                  <div className="text-xs text-gray-500">Updated: {task.updated}</div>
                </div>
                <Download className="w-4 h-4 text-gray-400 group-hover:text-red-600 flex-shrink-0" />
              </a>
            ))}
          </div>
        </div>

        {/* Need Help Section */}
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
          <div className="flex items-start gap-4">
            <HelpCircle className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
            <div className="flex-1">
              <h3 className="text-blue-900 mb-2">Need Help Finding Something?</h3>
              <p className="text-gray-700 mb-4 text-sm">
                Can&apos;t find what you&apos;re looking for? Our DFSL staff is here to help you navigate policies, answer compliance questions, or provide support for your chapter.
              </p>
              <div className="flex flex-wrap gap-3">
                <a 
                  href="#staff"
                  className="bg-red-600 text-white px-6 py-2 hover:bg-red-700 transition-colors text-sm inline-block"
                >
                  Contact DFSL Staff
                </a>
                <a 
                  href="mailto:fsl@umd.edu"
                  className="bg-transparent border-2 border-red-600 text-red-600 px-6 py-2 hover:bg-red-600 hover:text-white transition-all text-sm inline-block"
                >
                  Email Us
                </a>
                <a 
                  href="tel:3013148163"
                  className="text-red-600 hover:underline text-sm py-2 inline-block"
                >
                  Call: (301) 314-8163
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
