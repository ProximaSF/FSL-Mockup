import { BookOpen, FileText, DollarSign, Award, Users, HelpCircle, GraduationCap, Shield } from 'lucide-react';

export function AdvisorsParentsHub() {
  const advisorResources = [
    {
      icon: BookOpen,
      title: 'Advisor Training Materials',
      description: 'Onboarding guides, best practices, and ongoing training resources',
      href: '#resources',
      color: 'bg-blue-500'
    },
    {
      icon: Shield,
      title: 'Risk Management Resources',
      description: 'Safety protocols, emergency procedures, and liability information',
      href: '#resources',
      color: 'bg-red-500'
    },
    {
      icon: Award,
      title: 'Chapter Recognition & Compliance',
      description: 'Current chapter status and compliance requirements',
      href: '#chapter-recognition',
      color: 'bg-purple-500'
    },
    {
      icon: FileText,
      title: 'Policies & Guidelines',
      description: 'University policies, DFSL procedures, and governing documents',
      href: '#resources',
      color: 'bg-green-500'
    }
  ];

  const parentResources = [
    {
      icon: DollarSign,
      title: 'Cost Breakdown',
      description: 'Transparent information about membership costs and fees',
      href: '#costs',
      color: 'bg-teal-500'
    },
    {
      icon: GraduationCap,
      title: 'Academic Standards',
      description: 'GPA requirements and academic support resources',
      href: '#resources',
      color: 'bg-orange-500'
    },
    {
      icon: Shield,
      title: 'Safety & Well-being',
      description: 'Hazing prevention, mental health resources, and safety measures',
      href: '#resources',
      color: 'bg-red-500'
    },
    {
      icon: Users,
      title: 'Connect with DFSL Staff',
      description: 'Contact our team with questions or concerns',
      href: '#staff',
      color: 'bg-blue-500'
    }
  ];

  const faqs = [
    {
      question: 'How much does Greek life membership cost?',
      answer: 'Costs vary by organization. Visit our Cost Transparency page for detailed breakdowns by chapter, including dues, housing, and additional fees.'
    },
    {
      question: 'What are the GPA requirements?',
      answer: 'Minimum GPA requirements vary by council. Generally, students need a 2.5 GPA to join and maintain membership. Individual chapters may have higher requirements.'
    },
    {
      question: 'How does UMD prevent hazing?',
      answer: 'UMD has a strict anti-hazing policy with mandatory education for all members. We provide multiple reporting channels and take all reports seriously with thorough investigations.'
    },
    {
      question: 'What if my student\'s chapter is on probation?',
      answer: 'Probationary status means the chapter must complete specific requirements to return to good standing. Contact DFSL staff for details about your student\'s specific chapter.'
    }
  ];

  return (
    <section className="py-16 bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4">
        <div className="mb-8">
          <div className="text-sm text-gray-600 mb-2">
            <a href="#home" className="text-red-600 hover:underline">HOME</a>
            {' > '}
            <span>ADVISORS & PARENTS</span>
          </div>
          <h1 className="text-red-600 mb-4">Resources for Advisors & Families</h1>
          <p className="text-gray-700 text-lg">
            Welcome! We're here to support you in supporting our Greek life community.
          </p>
        </div>

        {/* Welcome Message */}
        <div className="bg-white rounded-lg shadow-md p-8 mb-8">
          <h2 className="text-red-600 mb-4">Supporting Our Greek Community Together</h2>
          <p className="text-gray-700 mb-4">
            Whether you&apos;re a chapter advisor guiding student leaders or a parent supporting your student&apos;s Greek life journey, we value your partnership. This page provides the resources, information, and support you need.
          </p>
          <p className="text-gray-700">
            The Department of Fraternity and Sorority Life is committed to transparency, safety, and excellence. We encourage open communication and are here to answer your questions and address any concerns.
          </p>
        </div>

        {/* For Chapter Advisors */}
        <div className="mb-12">
          <h2 className="text-gray-900 mb-6">For Chapter Advisors</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {advisorResources.map((resource, index) => {
              const Icon = resource.icon;
              return (
                <a
                  key={index}
                  href={resource.href}
                  className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-all group"
                >
                  <div className={`${resource.color} w-12 h-12 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-gray-900 mb-2 group-hover:text-red-600 transition-colors">
                    {resource.title}
                  </h3>
                  <p className="text-gray-600 text-sm">{resource.description}</p>
                </a>
              );
            })}
          </div>
          
          <div className="mt-6 bg-blue-50 border border-blue-200 rounded-lg p-6">
            <h3 className="text-blue-900 mb-2">New Advisor?</h3>
            <p className="text-gray-700 mb-4 text-sm">
              Thank you for stepping into this important role! We offer comprehensive onboarding and ongoing support for all chapter advisors.
            </p>
            <a 
              href="#resources"
              className="bg-red-600 text-white px-6 py-2 hover:bg-red-700 transition-colors text-sm inline-block"
            >
              Access Advisor Orientation Materials
            </a>
          </div>
        </div>

        {/* For Parents & Families */}
        <div className="mb-12">
          <h2 className="text-gray-900 mb-6">For Parents & Families</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {parentResources.map((resource, index) => {
              const Icon = resource.icon;
              return (
                <a
                  key={index}
                  href={resource.href}
                  className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-all group"
                >
                  <div className={`${resource.color} w-12 h-12 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-gray-900 mb-2 group-hover:text-red-600 transition-colors">
                    {resource.title}
                  </h3>
                  <p className="text-gray-600 text-sm">{resource.description}</p>
                </a>
              );
            })}
          </div>
        </div>

        {/* Frequently Asked Questions */}
        <div className="bg-white rounded-lg shadow-md p-8 mb-8">
          <h2 className="text-gray-900 mb-6">Frequently Asked Questions</h2>
          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div key={index} className="border-b border-gray-200 pb-6 last:border-0 last:pb-0">
                <h3 className="text-gray-900 mb-2">{faq.question}</h3>
                <p className="text-gray-700 text-sm">{faq.answer}</p>
              </div>
            ))}
          </div>
          <div className="mt-6 pt-6 border-t border-gray-200">
            <p className="text-gray-600 text-sm mb-3">Don&apos;t see your question answered?</p>
            <a 
              href="#staff"
              className="text-red-600 hover:underline text-sm"
            >
              Contact us for personalized assistance →
            </a>
          </div>
        </div>

        {/* Contact Section */}
        <div className="bg-red-50 border border-red-200 rounded-lg p-6">
          <div className="flex items-start gap-4">
            <HelpCircle className="w-6 h-6 text-red-600 flex-shrink-0 mt-1" />
            <div className="flex-1">
              <h3 className="text-red-900 mb-2">We&apos;re Here to Help</h3>
              <p className="text-gray-700 mb-4 text-sm">
                Have questions or concerns? Our staff is committed to working with advisors and families to ensure a positive Greek life experience. We welcome your input and are here to provide support.
              </p>
              <div className="flex flex-wrap gap-3">
                <a 
                  href="#staff"
                  className="bg-red-600 text-white px-6 py-2 hover:bg-red-700 transition-colors text-sm inline-block"
                >
                  Meet Our Staff
                </a>
                <a 
                  href="mailto:fsl@umd.edu"
                  className="bg-transparent border-2 border-red-600 text-red-600 px-6 py-2 hover:bg-red-600 hover:text-white transition-all text-sm inline-block"
                >
                  Email: fsl@umd.edu
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
