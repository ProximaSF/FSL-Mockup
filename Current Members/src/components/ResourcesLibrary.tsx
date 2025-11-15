import { FileText, Download, Calendar, Search, Folder, AlertCircle, HelpCircle } from 'lucide-react';
import { useState } from 'react';

interface Resource {
  title: string;
  category: 'Policies' | 'Forms' | 'Educational' | 'Leadership' | 'Risk Management' | 'Compliance';
  lastUpdated: string;
  fileType: 'PDF' | 'DOCX' | 'XLSX';
  description: string;
}

export function ResourcesLibrary() {
  const [selectedCategory, setSelectedCategory] = useState<'All' | Resource['category']>('All');
  const [searchQuery, setSearchQuery] = useState('');

  const resources: Resource[] = [
    // Policies
    {
      title: 'DFSL Recognition & Compliance Policy',
      category: 'Policies',
      lastUpdated: '2024-08-15',
      fileType: 'PDF',
      description: 'Complete guide to chapter recognition requirements and compliance procedures'
    },
    {
      title: 'Social Event Policy Guidelines',
      category: 'Policies',
      lastUpdated: '2024-11-01',
      fileType: 'PDF',
      description: 'Updated requirements for hosting social events, including registration and safety protocols'
    },
    {
      title: 'Anti-Hazing Policy & Procedures',
      category: 'Policies',
      lastUpdated: '2024-09-01',
      fileType: 'PDF',
      description: 'University and DFSL hazing prevention policy with reporting procedures and consequences'
    },
    {
      title: 'Alcohol & Substance Use Policy',
      category: 'Policies',
      lastUpdated: '2024-11-01',
      fileType: 'PDF',
      description: 'Guidelines for alcohol at chapter events and substance abuse prevention measures'
    },
    {
      title: 'Academic Standards Policy',
      category: 'Policies',
      lastUpdated: '2024-08-20',
      fileType: 'PDF',
      description: 'Minimum GPA requirements and academic expectations for chapters and individual members'
    },
    
    // Forms
    {
      title: 'Chapter Event Registration Form',
      category: 'Forms',
      lastUpdated: '2024-10-15',
      fileType: 'DOCX',
      description: 'Required form for registering all chapter social events and activities'
    },
    {
      title: 'Semester Registration Packet',
      category: 'Forms',
      lastUpdated: '2024-08-01',
      fileType: 'PDF',
      description: 'Complete packet for semester registration including roster and officer information'
    },
    {
      title: 'New Member Education Plan Template',
      category: 'Forms',
      lastUpdated: '2024-09-10',
      fileType: 'DOCX',
      description: 'Template for submitting your chapter new member education program details'
    },
    {
      title: 'Incident Report Form',
      category: 'Forms',
      lastUpdated: '2024-07-20',
      fileType: 'PDF',
      description: 'Form for reporting policy violations, incidents, or safety concerns to DFSL'
    },
    {
      title: 'Travel Notification Form',
      category: 'Forms',
      lastUpdated: '2024-08-25',
      fileType: 'DOCX',
      description: 'Required notification for chapter travel and off-campus activities'
    },
    
    // Educational
    {
      title: 'Hazing Prevention Training Module',
      category: 'Educational',
      lastUpdated: '2024-09-15',
      fileType: 'PDF',
      description: 'Comprehensive training on recognizing and preventing hazing behaviors'
    },
    {
      title: 'Bystander Intervention Guide',
      category: 'Educational',
      lastUpdated: '2024-10-01',
      fileType: 'PDF',
      description: 'Strategies for intervening in concerning situations and supporting peers'
    },
    {
      title: 'Mental Health Resources for Greek Life',
      category: 'Educational',
      lastUpdated: '2024-10-20',
      fileType: 'PDF',
      description: 'Campus mental health resources and strategies for supporting chapter members'
    },
    {
      title: 'Diversity & Inclusion Best Practices',
      category: 'Educational',
      lastUpdated: '2024-09-25',
      fileType: 'PDF',
      description: 'Creating inclusive chapter environments and recruitment practices'
    },
    
    // Leadership
    {
      title: 'Officer Transition Guide',
      category: 'Leadership',
      lastUpdated: '2024-11-10',
      fileType: 'PDF',
      description: 'Best practices for smooth leadership transitions and knowledge transfer between officers'
    },
    {
      title: 'Chapter President Handbook',
      category: 'Leadership',
      lastUpdated: '2024-08-30',
      fileType: 'PDF',
      description: 'Comprehensive guide for chapter presidents covering all responsibilities and expectations'
    },
    {
      title: 'Effective Meeting Facilitation',
      category: 'Leadership',
      lastUpdated: '2024-09-05',
      fileType: 'PDF',
      description: 'Tips, templates, and agendas for running productive chapter meetings'
    },
    {
      title: 'Conflict Resolution for Leaders',
      category: 'Leadership',
      lastUpdated: '2024-10-05',
      fileType: 'PDF',
      description: 'Strategies for addressing and resolving conflicts within your chapter'
    },
    
    // Risk Management
    {
      title: 'Event Safety Planning Checklist',
      category: 'Risk Management',
      lastUpdated: '2024-10-15',
      fileType: 'PDF',
      description: 'Comprehensive checklist for planning safe chapter events with all required safeguards'
    },
    {
      title: 'Emergency Response Procedures',
      category: 'Risk Management',
      lastUpdated: '2024-09-20',
      fileType: 'PDF',
      description: 'Step-by-step protocols for responding to emergencies at chapter events or facilities'
    },
    {
      title: 'Social Media & Online Safety Guide',
      category: 'Risk Management',
      lastUpdated: '2024-10-10',
      fileType: 'PDF',
      description: 'Best practices for chapter social media use and protecting member privacy'
    },
    
    // Compliance
    {
      title: 'Semester Compliance Checklist',
      category: 'Compliance',
      lastUpdated: '2024-08-15',
      fileType: 'PDF',
      description: 'Complete checklist of all requirements for maintaining good standing each semester'
    },
    {
      title: 'New Member Reporting Requirements',
      category: 'Compliance',
      lastUpdated: '2024-09-10',
      fileType: 'PDF',
      description: 'Guidelines for reporting new member rosters and education program completion'
    },
    {
      title: 'Financial Reporting Guide',
      category: 'Compliance',
      lastUpdated: '2024-10-01',
      fileType: 'PDF',
      description: 'Instructions for submitting required financial reports and budget information'
    }
  ];

  const filteredResources = resources.filter(resource => {
    const matchesCategory = selectedCategory === 'All' || resource.category === selectedCategory;
    const matchesSearch = resource.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         resource.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const categories: Array<'All' | Resource['category']> = [
    'All',
    'Policies',
    'Forms',
    'Compliance',
    'Risk Management',
    'Leadership',
    'Educational'
  ];

  const fileTypeColors = {
    'PDF': 'bg-red-100 text-red-700',
    'DOCX': 'bg-blue-100 text-blue-700',
    'XLSX': 'bg-green-100 text-green-700'
  };

  return (
    <section className="py-16 bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4">
        {/* Breadcrumb & Header */}
        <div className="mb-8">
          <div className="text-sm text-gray-600 mb-2">
            <a href="#home" className="text-red-600 hover:underline">HOME</a>
            {' > '}
            <span>RESOURCES & DOCUMENTS</span>
          </div>
          <h1 className="text-red-600 mb-4">Resources & Document Library</h1>
          <p className="text-gray-700">
            Access policies, forms, educational resources, and important documents. All content is regularly reviewed and updated.
          </p>
        </div>

        {/* Search Bar */}
        <div className="bg-white rounded-lg shadow-md p-4 mb-6">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search resources by title or description..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-red-600"
            />
          </div>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap gap-2 mb-8">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded transition-colors ${
                selectedCategory === category
                  ? 'bg-red-600 text-white'
                  : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-300'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Important Notice */}
        <div className="bg-yellow-50 border-l-4 border-[#FFD200] p-4 mb-8 rounded">
          <div className="flex items-start gap-3">
            <AlertCircle className="w-5 h-5 text-yellow-600 flex-shrink-0 mt-0.5" />
            <div>
              <h3 className="text-gray-900 mb-1">Can&apos;t Find What You Need?</h3>
              <p className="text-gray-700 text-sm">
                Contact DFSL staff at <a href="mailto:fsl@umd.edu" className="text-red-600 hover:underline">fsl@umd.edu</a> or call <a href="tel:3013148163" className="text-red-600 hover:underline">(301) 314-8163</a> for assistance locating specific resources.
              </p>
            </div>
          </div>
        </div>

        {/* Results Count */}
        <div className="mb-4 text-sm text-gray-600">
          Showing {filteredResources.length} resource{filteredResources.length !== 1 ? 's' : ''}
        </div>

        {/* Resources List */}
        <div className="space-y-3">
          {filteredResources.length === 0 ? (
            <div className="bg-white rounded-lg shadow-md p-12 text-center">
              <Folder className="w-12 h-12 text-gray-400 mx-auto mb-4" />
              <p className="text-gray-600">No resources found matching your search.</p>
              <button 
                onClick={() => { setSearchQuery(''); setSelectedCategory('All'); }}
                className="mt-4 text-red-600 hover:underline text-sm"
              >
                Clear filters
              </button>
            </div>
          ) : (
            filteredResources.map((resource, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-md p-4 md:p-6 hover:shadow-lg transition-shadow"
              >
                <div className="flex flex-col md:flex-row md:items-center gap-4">
                  <div className="flex-1">
                    <div className="flex flex-wrap items-center gap-2 mb-2">
                      <h3 className="text-gray-900">{resource.title}</h3>
                      <span className={`px-2 py-1 text-xs rounded ${fileTypeColors[resource.fileType]}`}>
                        {resource.fileType}
                      </span>
                      <span className="px-2 py-1 text-xs bg-gray-100 text-gray-600 rounded">
                        {resource.category}
                      </span>
                    </div>
                    <p className="text-gray-600 text-sm mb-2">{resource.description}</p>
                    <div className="flex items-center gap-2 text-xs text-gray-500">
                      <Calendar className="w-3 h-3" />
                      Last Updated: {new Date(resource.lastUpdated).toLocaleDateString('en-US', { 
                        year: 'numeric', 
                        month: 'long', 
                        day: 'numeric' 
                      })}
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <button className="flex items-center gap-2 px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700 transition-colors">
                      <Download className="w-4 h-4" />
                      <span className="text-sm">Download</span>
                    </button>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Help Section */}
        <div className="mt-12 bg-white rounded-lg shadow-md p-6">
          <div className="flex items-start gap-3 mb-4">
            <HelpCircle className="w-6 h-6 text-red-600 flex-shrink-0" />
            <h2 className="text-gray-900">Need Additional Support?</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="p-4 bg-gray-50 rounded">
              <h3 className="text-gray-900 mb-2">Policy Questions</h3>
              <p className="text-gray-600 text-sm mb-3">
                Need help understanding a policy or compliance requirement? Our staff can provide clarification and guidance.
              </p>
              <a href="#staff" className="text-red-600 hover:underline text-sm">
                Contact Staff →
              </a>
            </div>
            <div className="p-4 bg-gray-50 rounded">
              <h3 className="text-gray-900 mb-2">Request Custom Resources</h3>
              <p className="text-gray-600 text-sm mb-3">
                Looking for resources specific to your chapter&apos;s needs? We can help create custom materials and training.
              </p>
              <a href="mailto:fsl@umd.edu" className="text-red-600 hover:underline text-sm">
                Email Us →
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
