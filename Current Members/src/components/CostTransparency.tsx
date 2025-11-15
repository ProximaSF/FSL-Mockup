import { DollarSign, Home, Users, Calendar, HelpCircle, Info } from 'lucide-react';
import { useState } from 'react';

interface ChapterCost {
  name: string;
  council: 'IFC' | 'PHA' | 'NPHC' | 'MGC';
  newMemberDues: string;
  semesterDues: string;
  housing?: string;
  additionalFees: string;
  total: string;
}

export function CostTransparency() {
  const [selectedCouncil, setSelectedCouncil] = useState<'All' | 'IFC' | 'PHA' | 'NPHC' | 'MGC'>('All');

  const chapterCosts: ChapterCost[] = [
    // IFC
    { name: 'Alpha Epsilon Pi', council: 'IFC', newMemberDues: '$350', semesterDues: '$650', housing: '$3,200/semester', additionalFees: '$200', total: '$4,400' },
    { name: 'Delta Tau Delta', council: 'IFC', newMemberDues: '$400', semesterDues: '$700', housing: '$3,500/semester', additionalFees: '$250', total: '$4,850' },
    { name: 'Kappa Sigma', council: 'IFC', newMemberDues: '$375', semesterDues: '$675', housing: '$3,300/semester', additionalFees: '$200', total: '$4,550' },
    { name: 'Lambda Chi Alpha', council: 'IFC', newMemberDues: '$325', semesterDues: '$625', housing: '$3,100/semester', additionalFees: '$150', total: '$4,200' },
    { name: 'Phi Kappa Tau', council: 'IFC', newMemberDues: '$350', semesterDues: '$650', housing: '$3,400/semester', additionalFees: '$200', total: '$4,600' },
    { name: 'Sigma Chi', council: 'IFC', newMemberDues: '$400', semesterDues: '$725', housing: '$3,600/semester', additionalFees: '$275', total: '$5,000' },
    
    // PHA
    { name: 'Alpha Chi Omega', council: 'PHA', newMemberDues: '$450', semesterDues: '$800', housing: '$4,000/semester', additionalFees: '$300', total: '$5,550' },
    { name: 'Alpha Delta Pi', council: 'PHA', newMemberDues: '$425', semesterDues: '$775', housing: '$3,900/semester', additionalFees: '$275', total: '$5,375' },
    { name: 'Chi Omega', council: 'PHA', newMemberDues: '$475', semesterDues: '$850', housing: '$4,200/semester', additionalFees: '$325', total: '$5,850' },
    { name: 'Delta Gamma', council: 'PHA', newMemberDues: '$450', semesterDues: '$825', housing: '$4,100/semester', additionalFees: '$300', total: '$5,675' },
    { name: 'Kappa Alpha Theta', council: 'PHA', newMemberDues: '$500', semesterDues: '$875', housing: '$4,300/semester', additionalFees: '$350', total: '$6,025' },
    { name: 'Kappa Kappa Gamma', council: 'PHA', newMemberDues: '$475', semesterDues: '$850', housing: '$4,200/semester', additionalFees: '$325', total: '$5,850' },
    
    // NPHC
    { name: 'Alpha Kappa Alpha', council: 'NPHC', newMemberDues: '$850', semesterDues: '$250', additionalFees: '$100', total: '$1,200' },
    { name: 'Alpha Phi Alpha', council: 'NPHC', newMemberDues: '$800', semesterDues: '$225', additionalFees: '$100', total: '$1,125' },
    { name: 'Delta Sigma Theta', council: 'NPHC', newMemberDues: '$850', semesterDues: '$250', additionalFees: '$125', total: '$1,225' },
    { name: 'Kappa Alpha Psi', council: 'NPHC', newMemberDues: '$825', semesterDues: '$225', additionalFees: '$100', total: '$1,150' },
    { name: 'Omega Psi Phi', council: 'NPHC', newMemberDues: '$800', semesterDues: '$200', additionalFees: '$100', total: '$1,100' },
    { name: 'Phi Beta Sigma', council: 'NPHC', newMemberDues: '$775', semesterDues: '$200', additionalFees: '$100', total: '$1,075' },
    { name: 'Zeta Phi Beta', council: 'NPHC', newMemberDues: '$850', semesterDues: '$250', additionalFees: '$125', total: '$1,225' },
    
    // MGC
    { name: 'Alpha Kappa Delta Phi', council: 'MGC', newMemberDues: '$450', semesterDues: '$300', additionalFees: '$150', total: '$900' },
    { name: 'Delta Phi Lambda', council: 'MGC', newMemberDues: '$475', semesterDues: '$325', additionalFees: '$150', total: '$950' },
    { name: 'Kappa Phi Lambda', council: 'MGC', newMemberDues: '$425', semesterDues: '$300', additionalFees: '$125', total: '$850' },
    { name: 'Lambda Phi Epsilon', council: 'MGC', newMemberDues: '$400', semesterDues: '$275', additionalFees: '$125', total: '$800' },
    { name: 'Lambda Theta Alpha', council: 'MGC', newMemberDues: '$450', semesterDues: '$300', additionalFees: '$150', total: '$900' },
    { name: 'Sigma Lambda Beta', council: 'MGC', newMemberDues: '$425', semesterDues: '$300', additionalFees: '$125', total: '$850' },
  ];

  const filteredCosts = selectedCouncil === 'All' 
    ? chapterCosts 
    : chapterCosts.filter(c => c.council === selectedCouncil);

  return (
    <section className="py-16 bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4">
        {/* Breadcrumb & Header */}
        <div className="mb-8">
          <div className="text-sm text-gray-600 mb-2">
            <a href="#home" className="text-red-600 hover:underline">HOME</a>
            {' > '}
            <span>COST INFORMATION</span>
          </div>
          <h1 className="text-red-600 mb-4">Cost Transparency</h1>
          <p className="text-gray-700 mb-2">
            Understanding the financial commitment of Greek life membership. All costs are approximate and subject to change.
          </p>
          <p className="text-gray-600 text-sm flex items-center gap-2">
            <Calendar className="w-4 h-4" />
            Updated for Fall 2024 / Spring 2025 Academic Year
          </p>
        </div>

        {/* Cost Components Explanation */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <div className="flex items-center gap-2 mb-4">
            <Info className="w-5 h-5 text-red-600" />
            <h2 className="text-gray-900">Understanding Membership Costs</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="p-4 bg-blue-50 border border-blue-200 rounded">
              <div className="flex items-center gap-2 mb-2">
                <Users className="w-5 h-5 text-blue-600" />
                <h3 className="text-blue-900">New Member Dues</h3>
              </div>
              <p className="text-gray-700 text-sm">
                One-time fee during your first semester including initiation, badges, and new member programming.
              </p>
            </div>
            <div className="p-4 bg-green-50 border border-green-200 rounded">
              <div className="flex items-center gap-2 mb-2">
                <DollarSign className="w-5 h-5 text-green-600" />
                <h3 className="text-green-900">Semester Dues</h3>
              </div>
              <p className="text-gray-700 text-sm">
                Recurring fees each semester covering operations, events, insurance, and national/international fees.
              </p>
            </div>
            <div className="p-4 bg-purple-50 border border-purple-200 rounded">
              <div className="flex items-center gap-2 mb-2">
                <Home className="w-5 h-5 text-purple-600" />
                <h3 className="text-purple-900">Housing</h3>
              </div>
              <p className="text-gray-700 text-sm">
                Optional for most chapters. Includes room, utilities, and often meal plans. Some chapters require live-in.
              </p>
            </div>
            <div className="p-4 bg-orange-50 border border-orange-200 rounded">
              <div className="flex items-center gap-2 mb-2">
                <Calendar className="w-5 h-5 text-orange-600" />
                <h3 className="text-orange-900">Additional Fees</h3>
              </div>
              <p className="text-gray-700 text-sm">
                Apparel, formal events, retreats, and philanthropy activities. Varies by chapter and participation.
              </p>
            </div>
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
          {filteredCosts.map((chapter, index) => (
            <div 
              key={index}
              className="bg-white rounded-lg shadow-md p-5"
            >
              <div className="mb-4">
                <h3 className="text-gray-900 mb-1">{chapter.name}</h3>
                <span className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded">
                  {chapter.council}
                </span>
              </div>
              
              <div className="space-y-3">
                <div className="flex justify-between items-center pb-2 border-b border-gray-200">
                  <span className="text-gray-600 text-sm">New Member Dues</span>
                  <span className="text-gray-900">{chapter.newMemberDues}</span>
                </div>
                <div className="flex justify-between items-center pb-2 border-b border-gray-200">
                  <span className="text-gray-600 text-sm">Semester Dues</span>
                  <span className="text-gray-900">{chapter.semesterDues}</span>
                </div>
                {chapter.housing && (
                  <div className="flex justify-between items-center pb-2 border-b border-gray-200">
                    <span className="text-gray-600 text-sm">Housing (optional)</span>
                    <span className="text-gray-900">{chapter.housing}</span>
                  </div>
                )}
                <div className="flex justify-between items-center pb-2 border-b border-gray-200">
                  <span className="text-gray-600 text-sm">Additional Fees</span>
                  <span className="text-gray-900">{chapter.additionalFees}</span>
                </div>
                <div className="flex justify-between items-center pt-2">
                  <span className="text-gray-900">First Semester Total</span>
                  <span className="text-red-600">{chapter.total}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Desktop View - Table */}
        <div className="hidden md:block bg-white rounded-lg shadow-md overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-100">
                <tr>
                  <th className="px-6 py-3 text-left text-gray-700">Chapter</th>
                  <th className="px-6 py-3 text-center text-gray-700">Council</th>
                  <th className="px-6 py-3 text-right text-gray-700">New Member Dues</th>
                  <th className="px-6 py-3 text-right text-gray-700">Semester Dues</th>
                  <th className="px-6 py-3 text-right text-gray-700">Housing</th>
                  <th className="px-6 py-3 text-right text-gray-700">Additional Fees</th>
                  <th className="px-6 py-3 text-right text-gray-700">First Semester Total</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {filteredCosts.map((chapter, index) => (
                  <tr key={index} className="hover:bg-gray-50">
                    <td className="px-6 py-4 text-gray-900">{chapter.name}</td>
                    <td className="px-6 py-4 text-center">
                      <span className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded">
                        {chapter.council}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-right text-gray-900">{chapter.newMemberDues}</td>
                    <td className="px-6 py-4 text-right text-gray-900">{chapter.semesterDues}</td>
                    <td className="px-6 py-4 text-right text-gray-600 text-sm">
                      {chapter.housing || 'N/A'}
                    </td>
                    <td className="px-6 py-4 text-right text-gray-900">{chapter.additionalFees}</td>
                    <td className="px-6 py-4 text-right text-red-600">{chapter.total}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Important Notes */}
        <div className="mt-8 bg-yellow-50 border-l-4 border-[#FFD200] p-6 rounded">
          <h3 className="text-gray-900 mb-3">Important Information About Costs</h3>
          <ul className="space-y-2 text-gray-700 text-sm">
            <li className="flex items-start gap-2">
              <span className="text-[#FFD200] mt-1">•</span>
              <span><strong>Payment Plans:</strong> Many chapters offer payment plans to spread costs throughout the semester. Contact individual chapters for details.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-[#FFD200] mt-1">•</span>
              <span><strong>Scholarships:</strong> Some chapters and councils offer scholarships or financial assistance. Ask about available support during recruitment.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-[#FFD200] mt-1">•</span>
              <span><strong>Housing:</strong> Housing costs shown are per semester. Most IFC and PHA chapters have chapter houses; housing is typically optional but encouraged.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-[#FFD200] mt-1">•</span>
              <span><strong>Variability:</strong> Costs can vary based on events, activities, and participation level. These are estimates for budgeting purposes.</span>
            </li>
          </ul>
        </div>

        {/* Questions Section */}
        <div className="mt-8 bg-white rounded-lg shadow-md p-6">
          <div className="flex items-start gap-3 mb-4">
            <HelpCircle className="w-6 h-6 text-red-600 flex-shrink-0" />
            <div className="flex-1">
              <h3 className="text-gray-900 mb-2">Questions About Costs?</h3>
              <p className="text-gray-700 text-sm mb-4">
                We encourage open conversations about the financial commitment of Greek life. For specific questions about chapter costs, payment plans, or financial assistance, contact the chapter directly or reach out to DFSL staff.
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
        </div>
      </div>
    </section>
  );
}
