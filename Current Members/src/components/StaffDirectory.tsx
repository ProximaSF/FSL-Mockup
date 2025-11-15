import { Mail, Phone, Calendar, MapPin, User } from 'lucide-react';

interface StaffMember {
  name: string;
  title: string;
  email: string;
  phone: string;
  responsibilities: string[];
  councils?: string[];
  officeHours?: string;
}

export function StaffDirectory() {
  const staff: StaffMember[] = [
    {
      name: 'Dr. Jennifer Martinez',
      title: 'Director, Fraternity & Sorority Life',
      email: 'jmartinez@umd.edu',
      phone: '(301) 314-8163',
      responsibilities: [
        'Overall strategic direction and leadership',
        'University relations and policy development',
        'Council governance and support',
        'Crisis management and serious conduct issues'
      ]
    },
    {
      name: 'Michael Chen',
      title: 'Assistant Director for IFC & PHA',
      email: 'mchen@umd.edu',
      phone: '(301) 314-8164',
      councils: ['IFC', 'PHA'],
      responsibilities: [
        'Primary advisor for IFC and PHA councils',
        'Recruitment and expansion support',
        'Chapter recognition and compliance',
        'Leadership development programming'
      ],
      officeHours: 'Tuesday & Thursday, 2-4 PM'
    },
    {
      name: 'Alicia Johnson',
      title: 'Assistant Director for NPHC & MGC',
      email: 'ajohnson@umd.edu',
      phone: '(301) 314-8165',
      councils: ['NPHC', 'MGC'],
      responsibilities: [
        'Primary advisor for NPHC and MGC councils',
        'Cultural programming and heritage celebrations',
        'Intake process support and guidance',
        'Community outreach and engagement'
      ],
      officeHours: 'Monday & Wednesday, 1-3 PM'
    },
    {
      name: 'Robert Williams',
      title: 'Coordinator for Risk Management & Education',
      email: 'rwilliams@umd.edu',
      phone: '(301) 314-8166',
      responsibilities: [
        'Risk management training and education',
        'Event registration and safety planning',
        'Hazing prevention programming',
        'Emergency response coordination'
      ],
      officeHours: 'Monday-Friday, 10 AM-12 PM'
    },
    {
      name: 'Sarah Thompson',
      title: 'Program Coordinator',
      email: 'sthompson@umd.edu',
      phone: '(301) 314-8167',
      responsibilities: [
        'Event planning and logistics',
        'Leadership summit coordination',
        'Awards and recognition programs',
        'Community service initiatives'
      ],
      officeHours: 'Tuesday & Thursday, 10 AM-12 PM'
    }
  ];

  return (
    <section className="py-16 bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4">
        {/* Breadcrumb & Header */}
        <div className="mb-8">
          <div className="text-sm text-gray-600 mb-2">
            <a href="#home" className="text-red-600 hover:underline">HOME</a>
            {' > '}
            <span>STAFF DIRECTORY</span>
          </div>
          <h1 className="text-red-600 mb-4">Meet Our Staff</h1>
          <p className="text-gray-700 mb-4">
            Our dedicated team is here to support you, your chapter, and the entire Greek life community. We&apos;re committed to providing guidance, resources, and assistance whenever you need it.
          </p>
          <div className="flex items-center gap-2 text-gray-600">
            <MapPin className="w-4 h-4" />
            <span className="text-sm">2105 Hornbake Library, College Park, MD 20742</span>
          </div>
        </div>

        {/* Office Information */}
        <div className="bg-red-600 text-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-white mb-4">Department Contact Information</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="flex items-start gap-3">
              <Phone className="w-5 h-5 flex-shrink-0 mt-0.5" />
              <div>
                <div className="text-red-100 text-sm mb-1">Main Office</div>
                <a href="tel:3013148163" className="text-white hover:underline">
                  (301) 314-8163
                </a>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Mail className="w-5 h-5 flex-shrink-0 mt-0.5" />
              <div>
                <div className="text-red-100 text-sm mb-1">Email</div>
                <a href="mailto:fsl@umd.edu" className="text-white hover:underline">
                  fsl@umd.edu
                </a>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Calendar className="w-5 h-5 flex-shrink-0 mt-0.5" />
              <div>
                <div className="text-red-100 text-sm mb-1">Office Hours</div>
                <div className="text-white">Mon-Fri, 8:30 AM - 5 PM</div>
              </div>
            </div>
          </div>
        </div>

        {/* Staff Members */}
        <div className="space-y-6">
          {staff.map((member, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="md:flex">
                {/* Photo Placeholder */}
                <div className="md:w-48 bg-gray-200 flex items-center justify-center p-8">
                  <User className="w-24 h-24 text-gray-400" />
                </div>
                
                {/* Content */}
                <div className="flex-1 p-6">
                  <div className="mb-4">
                    <h3 className="text-gray-900 mb-1">{member.name}</h3>
                    <p className="text-red-600 mb-3">{member.title}</p>
                    
                    {member.councils && (
                      <div className="flex flex-wrap gap-2 mb-3">
                        {member.councils.map((council, idx) => (
                          <span 
                            key={idx}
                            className="px-3 py-1 bg-blue-100 text-blue-700 text-xs rounded"
                          >
                            {council}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>

                  <div className="grid md:grid-cols-2 gap-6 mb-4">
                    <div>
                      <h4 className="text-gray-900 text-sm mb-2">Contact Information</h4>
                      <div className="space-y-2">
                        <div className="flex items-center gap-2 text-gray-700 text-sm">
                          <Mail className="w-4 h-4 text-gray-400" />
                          <a href={`mailto:${member.email}`} className="text-red-600 hover:underline">
                            {member.email}
                          </a>
                        </div>
                        <div className="flex items-center gap-2 text-gray-700 text-sm">
                          <Phone className="w-4 h-4 text-gray-400" />
                          <a href={`tel:${member.phone.replace(/[^0-9]/g, '')}`} className="hover:text-red-600">
                            {member.phone}
                          </a>
                        </div>
                        {member.officeHours && (
                          <div className="flex items-center gap-2 text-gray-700 text-sm">
                            <Calendar className="w-4 h-4 text-gray-400" />
                            <span>{member.officeHours}</span>
                          </div>
                        )}
                      </div>
                    </div>

                    <div>
                      <h4 className="text-gray-900 text-sm mb-2">Areas of Responsibility</h4>
                      <ul className="space-y-1">
                        {member.responsibilities.map((resp, idx) => (
                          <li key={idx} className="text-gray-700 text-sm flex items-start gap-2">
                            <span className="text-red-600 mt-1">•</span>
                            <span>{resp}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="pt-4 border-t border-gray-200">
                    <a 
                      href={`mailto:${member.email}`}
                      className="inline-block bg-red-600 text-white px-6 py-2 hover:bg-red-700 transition-colors text-sm"
                    >
                      Schedule a Meeting
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Help Section */}
        <div className="mt-8 bg-blue-50 border border-blue-200 rounded-lg p-6">
          <h3 className="text-blue-900 mb-3">Not Sure Who to Contact?</h3>
          <p className="text-gray-700 mb-4 text-sm">
            If you&apos;re unsure which staff member can best assist you, please reach out to our main office at <a href="mailto:fsl@umd.edu" className="text-red-600 hover:underline">fsl@umd.edu</a> or call <a href="tel:3013148163" className="text-red-600 hover:underline">(301) 314-8163</a>. We&apos;ll make sure you get connected with the right person.
          </p>
          <p className="text-gray-700 text-sm">
            <strong>Emergency After Hours:</strong> For urgent matters outside of office hours, contact UMD Police at (301) 405-3333.
          </p>
        </div>
      </div>
    </section>
  );
}
