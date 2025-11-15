interface CouncilComparisonProps {
  showDetailed?: boolean;
}

export function CouncilComparison({ showDetailed = false }: CouncilComparisonProps) {
  const comparisonData = [
    {
      aspect: 'Founded',
      ifc: '1902',
      pba: '1902',
      nphc: '1930',
      mgc: '1998'
    },
    {
      aspect: 'Type',
      ifc: 'Social Fraternities',
      pba: 'Social Sororities',
      nphc: 'Historically Black Organizations',
      mgc: 'Culturally-Based Organizations'
    },
    {
      aspect: 'Chapters at UMD',
      ifc: '20+',
      pba: '15+',
      nphc: '9',
      mgc: '12+'
    },
    {
      aspect: 'Recruitment Style',
      ifc: 'Informal, year-round',
      pba: 'Formal (Fall) & COB (Spring)',
      nphc: 'Membership Intake Process',
      mgc: 'Varies by organization'
    },
    {
      aspect: 'New Member Process',
      ifc: '6-10 weeks',
      pba: '6-8 weeks',
      nphc: 'Intake period (varies)',
      mgc: 'Varies by organization'
    },
    {
      aspect: 'Focus Areas',
      ifc: 'Leadership, Brotherhood, Service',
      pba: 'Sisterhood, Scholarship, Service',
      nphc: 'Service, Scholarship, Legacy',
      mgc: 'Cultural Awareness, Service, Unity'
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        {showDetailed && (
          <div className="mb-8">
            
          </div>
        )}        

        {showDetailed && (
          <div className="mt-12 grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-blue-600 mb-4">IFC - Interfraternity Council</h3>
              <p className="text-gray-700 mb-4">
                The Interfraternity Council governs the traditionally social fraternities on campus. These organizations focus on developing well-rounded men through leadership, scholarship, service, and brotherhood.
              </p>
              <a href="#" className="text-blue-600 hover:underline">
                View IFC Chapters →
              </a>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-pink-600 mb-4">PHA - Panhellenic Association</h3>
              <p className="text-gray-700 mb-4">
                The Panhellenic Association represents social sororities that emphasize academic excellence, leadership development, service, and sisterhood. PHA hosts formal recruitment each fall.
              </p>
              <a href="#" className="text-pink-600 hover:underline">
                View PHA Chapters →
              </a>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-purple-600 mb-4">NPHC - National Pan-Hellenic Council</h3>
              <p className="text-gray-700 mb-4">
                The National Pan-Hellenic Council comprises nine historically African American fraternities and sororities, often called "The Divine Nine." These organizations have a rich legacy of service, scholarship, and social action.
              </p>
              <a href="#" className="text-purple-600 hover:underline">
                View NPHC Chapters →
              </a>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-green-600 mb-4">MGC - Multicultural Greek Council</h3>
              <p className="text-gray-700 mb-4">
                The Multicultural Greek Council represents culturally-based fraternities and sororities that celebrate diversity and promote multicultural awareness. Each organization has unique cultural traditions and values.
              </p>
              <a href="#" className="text-green-600 hover:underline">
                View MGC Chapters →
              </a>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
