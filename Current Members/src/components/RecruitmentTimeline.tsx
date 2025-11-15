export function RecruitmentTimeline() {
  const timeline = [
    {
      council: 'IFC',
      name: 'Interfraternity Council',
      fallPeriod: 'Late August - September',
      springPeriod: 'February - March',
      process: 'Informal continuous recruitment',
      color: 'border-blue-500'
    },
    {
      council: 'PHA',
      name: 'Panhellenic Association',
      fallPeriod: 'August (Primary Recruitment)',
      springPeriod: 'Continuous Open Bidding (COB)',
      process: 'Formal recruitment in Fall, informal in Spring',
      color: 'border-pink-500'
    },
    {
      council: 'NPHC',
      name: 'National Pan-Hellenic Council',
      fallPeriod: 'Varies by chapter',
      springPeriod: 'Varies by chapter',
      process: 'Membership intake process (not recruitment)',
      color: 'border-purple-500'
    },
    {
      council: 'MGC',
      name: 'Multicultural Greek Council',
      fallPeriod: 'September - November',
      springPeriod: 'February - April',
      process: 'Varies by organization',
      color: 'border-green-500'
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-red-600 mb-4">2024-2025 Recruitment Timeline</h2>
          <p className="text-gray-700 max-w-3xl mx-auto">
            Each council operates on a different timeline. Here's when you can expect recruitment activities throughout the academic year.
          </p>
        </div>

        <div className="space-y-6">
          {timeline.map((item) => (
            <div 
              key={item.council}
              className={`bg-white border-l-4 ${item.color} rounded-lg shadow-md p-6`}
            >
              <div className="grid md:grid-cols-4 gap-4">
                <div>
                  <h3 className="text-gray-900 mb-1">{item.council}</h3>
                  <div className="text-sm text-gray-600">{item.name}</div>
                </div>
                <div>
                  <div className="text-sm text-gray-500 mb-1">Fall Recruitment</div>
                  <div className="text-gray-800">{item.fallPeriod}</div>
                </div>
                <div>
                  <div className="text-sm text-gray-500 mb-1">Spring Recruitment</div>
                  <div className="text-gray-800">{item.springPeriod}</div>
                </div>
                <div>
                  <div className="text-sm text-gray-500 mb-1">Process Type</div>
                  <div className="text-gray-800 text-sm">{item.process}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 bg-red-50 border border-red-200 rounded-lg p-6">
          <h3 className="text-red-600 mb-3">Important Dates to Remember</h3>
          <ul className="space-y-2 text-gray-700">
            <li>• <strong>FSL 101 Sessions:</strong> Offered monthly throughout the academic year</li>
            <li>• <strong>Meet the Greeks Fair:</strong> September 5, 2024</li>
            <li>• <strong>PHA Primary Recruitment:</strong> August 22-26, 2024</li>
            <li>• <strong>IFC Recruitment Week:</strong> September 2-8, 2024</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
