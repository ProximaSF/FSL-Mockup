import { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { CouncilOverview } from './components/CouncilOverview';
import { HowToJoin } from './components/HowToJoin';
import { RecruitmentTimeline } from './components/RecruitmentTimeline';
import { Testimonials } from './components/Testimonials';
import { CouncilComparison } from './components/CouncilComparison';
import { Footer } from './components/Footer';
import { CalendarSelection } from './components/CalendarSelection';
import { CouncilCalendar } from './components/CouncilCalendar';
import { QuickAccessHub } from './components/QuickAccessHub';
import { CurrentMembersHub } from './components/CurrentMembersHub';
import { AdvisorsParentsHub } from './components/AdvisorsParentsHub';
import { ChapterRecognition } from './components/ChapterRecognition';
import { ResourcesLibrary } from './components/ResourcesLibrary';
import { CostTransparency } from './components/CostTransparency';
import { StaffDirectory } from './components/StaffDirectory';

type Section = 'home' | 'how-to-join' | 'councils' | 'about' | 'calendar' | 'calendar-view' | 'current-members' | 'advisors-parents' | 'chapter-recognition' | 'resources' | 'costs' | 'staff';
type Council = 'IFC' | 'PHA' | 'NPHC' | 'MGC' | null;

export default function App() {
  const [activeSection, setActiveSection] = useState<Section>('home');
  const [selectedCouncil, setSelectedCouncil] = useState<Council>(null);

  const handleCouncilSelect = (council: Council) => {
    setSelectedCouncil(council);
    setActiveSection('calendar-view');
  };

  const handleNavigate = (section: Section) => {
    setActiveSection(section);
    if (section !== 'calendar-view') {
      setSelectedCouncil(null);
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Header activeSection={activeSection} onNavigate={handleNavigate} />
      
      {activeSection === 'home' && (
        <>
          <Hero onNavigate={handleNavigate} />
          <QuickAccessHub onNavigate={handleNavigate} />
          <CouncilOverview onNavigate={handleNavigate} />
          <Testimonials />
          <div className="bg-gray-50 py-16">
            <div className="max-w-7xl mx-auto px-4">
              <div className="bg-white rounded-lg shadow-md p-8">
                <h2 className="text-red-600 mb-4">What is DFSL?</h2>
                <p className="text-gray-700 mb-4">
                  The <strong>Department of Fraternity and Sorority Life (DFSL)</strong> supports over 50 organizations across four diverse councils at the University of Maryland. We help students build lifelong friendships, develop leadership skills, and make a lasting impact on campus and beyond.
                </p>
                <p className="text-gray-700">
                  Whether you're interested in service, scholarship, brotherhood, sisterhood, or cultural celebration, there's a community waiting for you in Greek life.
                </p>
              </div>
            </div>
          </div>
        </>
      )}

      {activeSection === 'how-to-join' && (
        <>
          <HowToJoin />
          <RecruitmentTimeline />
          <CouncilComparison />
        </>
      )}

      {activeSection === 'councils' && (
        <CouncilComparison showDetailed={true} />
      )}

      {activeSection === 'about' && (
        <div className="py-16 bg-white">
          <div className="max-w-4xl mx-auto px-4">
            <h1 className="text-red-600 mb-8">About Fraternity & Sorority Life at Maryland</h1>
            
            <div className="prose prose-lg max-w-none">
              <p>
                Fraternity and Sorority Life at the University of Maryland has evolved over more than a century to become a vibrant, diverse, and values-driven community. What began as a small group of students living together after a campus fire in 1912 has grown into a dynamic network of organizations that foster leadership, service, scholarship, and lifelong connections.
              </p>

              <h2>Our Mission</h2>
              <p>
                The Department of Fraternity and Sorority Life is committed to supporting a community built on the values of brotherhood, sisterhood, service, scholarship, and philanthropy. We provide resources, guidance, and opportunities for students to grow as leaders and make meaningful contributions to campus and society.
              </p>

              <h2>Our Values</h2>
              <ul>
                <li><strong>Leadership:</strong> Developing skills that prepare members for success in their careers and communities</li>
                <li><strong>Service:</strong> Making a positive impact through community engagement and philanthropy</li>
                <li><strong>Scholarship:</strong> Promoting academic excellence and intellectual growth</li>
                <li><strong>Brotherhood & Sisterhood:</strong> Building lifelong connections and support networks</li>
                <li><strong>Diversity & Inclusion:</strong> Celebrating and supporting students from all backgrounds</li>
              </ul>
            </div>
          </div>
        </div>
      )}

      {activeSection === 'calendar' && (
        <CalendarSelection onCouncilSelect={handleCouncilSelect} />
      )}

      {activeSection === 'calendar-view' && (
        <CouncilCalendar council={selectedCouncil} />
      )}

      {activeSection === 'current-members' && (
        <CurrentMembersHub />
      )}

      {activeSection === 'advisors-parents' && (
        <AdvisorsParentsHub />
      )}

      {activeSection === 'chapter-recognition' && (
        <ChapterRecognition />
      )}

      {activeSection === 'resources' && (
        <ResourcesLibrary />
      )}

      {activeSection === 'costs' && (
        <CostTransparency />
      )}

      {activeSection === 'staff' && (
        <StaffDirectory />
      )}

      <Footer onNavigate={setActiveSection} />
    </div>
  );
}