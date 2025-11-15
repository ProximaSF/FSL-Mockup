import { Award, CheckCircle, AlertTriangle, XCircle, HelpCircle, Calendar, Info } from 'lucide-react';
import { useState } from 'react';

interface Chapter {
  name: string;
  council: 'IFC' | 'PHA' | 'NPHC' | 'MGC';
  status: 'Good Standing' | 'Probationary' | 'Suspension' | 'Provisional';
  lastReviewed: string;
  reason?: string;
  gpa?: string;
}

export function ChapterRecognition() {
  const [selectedCouncil, setSelectedCouncil] = useState<'All' | 'IFC' | 'PHA' | 'NPHC' | 'MGC'>('All');
  const [showTooltip, setShowTooltip] = useState<string | null>(null);

  const chapters: Chapter[] = [
    // IFC
    { name: 'Alpha Epsilon Pi', council: 'IFC', status: 'Good Standing', lastReviewed: '2024-10-15', gpa: '3.12' },
    { name: 'Delta Tau Delta', council: 'IFC', status: 'Good Standing', lastReviewed: '2024-10-15', gpa: '3.05' },
    { name: 'Kappa Sigma', council: 'IFC', status: 'Probationary', lastReviewed: '2024-11-01', reason: 'Below minimum GPA requirement; academic improvement plan in place', gpa: '2.38' },
    { name: 'Lambda Chi Alpha', council: 'IFC', status: 'Good Standing', lastReviewed: '2024-10-15', gpa: '2.98' },
    { name: 'Phi Kappa Tau', council: 'IFC', status: 'Good Standing', lastReviewed: '2024-10-15', gpa: '3.21' },
    { name: 'Sigma Alpha Epsilon', council: 'IFC', status: 'Provisional', lastReviewed: '2024-09-20', reason: 'New chapter undergoing recognition process', gpa: 'N/A' },
    { name: 'Sigma Chi', council: 'IFC', status: 'Good Standing', lastReviewed: '2024-10-15', gpa: '3.08' },
    { name: 'Tau Kappa Epsilon', council: 'IFC', status: 'Good Standing', lastReviewed: '2024-10-15', gpa: '2.92' },
    
    // PHA
    { name: 'Alpha Chi Omega', council: 'PHA', status: 'Good Standing', lastReviewed: '2024-10-20', gpa: '3.45' },
    { name: 'Alpha Delta Pi', council: 'PHA', status: 'Good Standing', lastReviewed: '2024-10-20', gpa: '3.38' },
    { name: 'Chi Omega', council: 'PHA', status: 'Good Standing', lastReviewed: '2024-10-20', gpa: '3.52' },
    { name: 'Delta Gamma', council: 'PHA', status: 'Good Standing', lastReviewed: '2024-10-20', gpa: '3.41' },
    { name: 'Kappa Alpha Theta', council: 'PHA', status: 'Good Standing', lastReviewed: '2024-10-20', gpa: '3.55' },
    { name: 'Kappa Kappa Gamma', council: 'PHA', status: 'Good Standing', lastReviewed: '2024-10-20', gpa: '3.48' },
    { name: 'Phi Sigma Sigma', council: 'PHA', status: 'Probationary', lastReviewed: '2024-11-05', reason: 'Missing required financial reports; deadline extension granted', gpa: '3.25' },
    
    // NPHC
    { name: 'Alpha Kappa Alpha', council: 'NPHC', status: 'Good Standing', lastReviewed: '2024-10-10', gpa: '3.32' },
    { name: 'Alpha Phi Alpha', council: 'NPHC', status: 'Good Standing', lastReviewed: '2024-10-10', gpa: '2.88' },
    { name: 'Delta Sigma Theta', council: 'NPHC', status: 'Good Standing', lastReviewed: '2024-10-10', gpa: '3.41' },
    { name: 'Kappa Alpha Psi', council: 'NPHC', status: 'Good Standing', lastReviewed: '2024-10-10', gpa: '2.95' },
    { name: 'Omega Psi Phi', council: 'NPHC', status: 'Good Standing', lastReviewed: '2024-10-10', gpa: '2.82' },
    { name: 'Phi Beta Sigma', council: 'NPHC', status: 'Good Standing', lastReviewed: '2024-10-10', gpa: '2.91' },
    { name: 'Zeta Phi Beta', council: 'NPHC', status: 'Good Standing', lastReviewed: '2024-10-10', gpa: '3.28' },
    
    // MGC
    { name: 'Alpha Kappa Delta Phi', council: 'MGC', status: 'Good Standing', lastReviewed: '2024-10-25', gpa: '3.35' },
    { name: 'Delta Phi Lambda', council: 'MGC', status: 'Good Standing', lastReviewed: '2024-10-25', gpa: '3.42' },
    { name: 'Kappa Phi Lambda', council: 'MGC', status: 'Good Standing', lastReviewed: '2024-10-25', gpa: '3.38' },
    { name: 'Lambda Phi Epsilon', council: 'MGC', status: 'Good Standing', lastReviewed: '2024-10-25', gpa: '3.15' },
    { name: 'Lambda Theta Alpha', council: 'MGC', status: 'Good Standing', lastReviewed: '2024-10-25', gpa: '3.22' },
    { name: 'Sigma Lambda Beta', council: 'MGC', status: 'Good Standing', lastReviewed: '2024-10-25', gpa: '3.08' },
  ];

  const filteredChapters = selectedCouncil === 'All' 
    ? chapters 
    : chapters.filter(c => c.council === selectedCouncil);

  const statusDefinitions = {
    'Good Standing': {
      icon: CheckCircle,
      color: 'text-green-600',
      bg: 'bg-green-50',
      border: 'border-green-500',
      definition: 'Chapter meets all university and DFSL requirements with no restrictions on activities or operations.'
    },
    'Probationary': {
      icon: AlertTriangle,
      color: 'text-yellow-600',
      bg: 'bg-yellow-50',
      border: 'border-yellow-500',
      definition: 'Chapter has failed to meet certain requirements and must complete specific corrective actions to return to good standing. Some activity restrictions may apply during this period.'
    },
    'Suspension': {
      icon: XCircle,
      color: 'text-red-600',
      bg: 'bg-red-50',
      border: 'border-red-500',
      definition: 'Chapter has been temporarily suspended from all activities due to serious policy violations or safety concerns. Must meet specific conditions before suspension can be lifted.'
    },
    'Provisional': {
      icon: HelpCircle,
      color: 'text-blue-600',
      bg: 'bg-blue-50',
      border: 'border-blue-500',
      definition: 'New chapter or chapter in the process of re-colonization. Operating under special conditions with enhanced monitoring and support from DFSL.'
    }
  };

  return (
    <section className="py-16 bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4">
        {/* Breadcrumb */}
        <div className="mb-8">
          <div className="text-sm text-gray-600 mb-2">
            <a href="#home" className="text-red-600 hover:underline">HOME</a>
            {' > '}
            <span>CHAPTER RECOGNITION STATUS</span>
          </div>
          <h1 className="text-red-600 mb-4">Chapter Recognition Status</h1>
          <div className="flex items-center gap-2 text-gray-600 mb-2">
            <Calendar className="w-4 h-4" />
            <span className="text-sm">Last Updated: November 15, 2024</span>
          </div>
          <p className="text-gray-700">
            View the current recognition status and academic performance of all chapters at UMD. Status is reviewed each semester.
          </p>
        </div>

        {/* Status Definitions */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <div className="flex items-center gap-2 mb-4">
            <Info className="w-5 h-5 text-red-600" />
            <h2 className="text-gray-900">Understanding Recognition Status</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-4">
            {Object.entries(statusDefinitions).map(([status, config]) => {
              const Icon = config.icon;
              return (
                <div 
                  key={status}
                  className={`${config.bg} border ${config.border} rounded-lg p-4`}
                >
                  <div className="flex items-start gap-3">
                    <Icon className={`w-5 h-5 ${config.color} flex-shrink-0 mt-0.5`} />
                    <div>
                      <h3 className={`${config.color} mb-1`}>{status}</h3>
                      <p className="text-gray-700 text-sm">{config.definition}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap gap-2 mb-6">
          {(['All', 'IFC', 'PHA', 'NPHC', 'MGC'] as const).map((council) => (
            <button
              key={council}
              onClick={() => setSelectedCouncil(council)}
              className={`px-4 py-2 rounded transition-colors ${
                selectedCouncil === council
                  ? 'bg-red-600 text-white'
                  : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-300'
              }`}
            >
              {council}
            </button>
          ))}
        </div>

        {/* Mobile View - Cards */}
        <div className="md:hidden space-y-4 mb-8">
          {filteredChapters.map((chapter, index) => {
            const config = statusDefinitions[chapter.status];
            const Icon = config.icon;
            return (
              <div 
                key={index}
                className={`bg-white rounded-lg shadow-md p-5 border-l-4 ${config.border}`}
              >
                <div className="flex items-start justify-between mb-3">
                  <div className="flex-1">
                    <h3 className="text-gray-900 mb-1">{chapter.name}</h3>
                    <span className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded">
                      {chapter.council}
                    </span>
                  </div>
                  <Icon className={`w-5 h-5 ${config.color} flex-shrink-0`} />
                </div>
                
                <div className={`${config.bg} rounded px-3 py-2 mb-3`}>
                  <div className={`text-sm ${config.color}`}>{chapter.status}</div>
                </div>
                
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Chapter GPA:</span>
                    <span className="text-gray-900">{chapter.gpa}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Last Reviewed:</span>
                    <span className="text-gray-900">{new Date(chapter.lastReviewed).toLocaleDateString()}</span>
                  </div>
                </div>
                
                {chapter.reason && (
                  <div className="mt-3 pt-3 border-t border-gray-200">
                    <p className="text-xs text-gray-600">
                      <strong>Details:</strong> {chapter.reason}
                    </p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Desktop View - Table */}
        <div className="hidden md:block bg-white rounded-lg shadow-md overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-100">
                <tr>
                  <th className="px-6 py-3 text-left text-gray-700">Chapter Name</th>
                  <th className="px-6 py-3 text-center text-gray-700">Council</th>
                  <th className="px-6 py-3 text-center text-gray-700">Status</th>
                  <th className="px-6 py-3 text-center text-gray-700">Chapter GPA</th>
                  <th className="px-6 py-3 text-center text-gray-700">Last Reviewed</th>
                  <th className="px-6 py-3 text-left text-gray-700">Details</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {filteredChapters.map((chapter, index) => {
                  const config = statusDefinitions[chapter.status];
                  const Icon = config.icon;
                  return (
                    <tr key={index} className="hover:bg-gray-50">
                      <td className="px-6 py-4 text-gray-900">{chapter.name}</td>
                      <td className="px-6 py-4 text-center">
                        <span className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded">
                          {chapter.council}
                        </span>
                      </td>
                      <td className="px-6 py-4">
                        <div className="flex items-center justify-center gap-2">
                          <Icon className={`w-4 h-4 ${config.color}`} />
                          <span className={`text-sm ${config.color}`}>
                            {chapter.status}
                          </span>
                        </div>
                      </td>
                      <td className="px-6 py-4 text-center text-gray-900">
                        {chapter.gpa}
                      </td>
                      <td className="px-6 py-4 text-center text-gray-600 text-sm">
                        {new Date(chapter.lastReviewed).toLocaleDateString()}
                      </td>
                      <td className="px-6 py-4 text-gray-600 text-sm">
                        {chapter.reason || '—'}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>

        {/* Help Section */}
        <div className="mt-8 bg-blue-50 border border-blue-200 rounded-lg p-6">
          <h3 className="text-blue-900 mb-3">Questions About Chapter Status?</h3>
          <p className="text-gray-700 mb-4 text-sm">
            If you have questions about your chapter&apos;s recognition status, required compliance actions, probationary requirements, or need clarification on any restrictions, our staff is here to help.
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
              className="text-red-600 hover:underline text-sm py-2 inline-block"
            >
              Email: fsl@umd.edu
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
