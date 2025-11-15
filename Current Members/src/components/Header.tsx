import { Search, Gift } from 'lucide-react';
import logoImage from 'figma:asset/b6772f3922e2792bb40be8bb79811a0933076c1c.png';

type Section = 'home' | 'how-to-join' | 'councils' | 'about' | 'calendar' | 'calendar-view' | 'current-members' | 'advisors-parents' | 'chapter-recognition' | 'resources' | 'costs' | 'staff';

interface HeaderProps {
  activeSection: Section;
  onNavigate: (section: Section) => void;
}

export function Header({ activeSection, onNavigate }: HeaderProps) {
  return (
    <>
      {/* Top Red Bar */}
      <div className="bg-[#E21833] text-white">
        <div className="max-w-7xl mx-auto px-4 py-2 flex items-center justify-between">
          <span className="text-sm tracking-wider">UNIVERSITY OF MARYLAND</span>
          <div className="flex items-center gap-4">
            <button className="flex items-center gap-2 text-sm hover:underline">
              <Gift className="w-4 h-4" />
              MAKE A GIFT
            </button>
            <button className="hover:bg-red-700 p-1 rounded">
              <Search className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between py-4">
            <button 
              onClick={() => onNavigate('home')}
              className="flex items-center gap-3 hover:opacity-80 transition-opacity"
            >
              <img src={logoImage} alt="UMD Logo" className="h-12" />
              <div className="text-left">
                <div className="text-gray-800 tracking-tight">
                  DIVISION OF
                </div>
                <div className="text-gray-800 tracking-tight">
                  <strong>STUDENT AFFAIRS</strong>
                </div>
                <div className="text-xs text-red-600 tracking-wider">
                  FRATERNITY & SORORITY LIFE
                </div>
              </div>
            </button>

            <nav className="hidden md:flex items-center gap-1">
              <button 
                onClick={() => onNavigate('about')}
                className={`px-4 py-2 hover:bg-gray-100 transition-colors ${
                  activeSection === 'about' ? 'text-red-600' : 'text-gray-700'
                }`}
              >
                About
              </button>
              <button 
                onClick={() => onNavigate('councils')}
                className={`px-4 py-2 hover:bg-gray-100 transition-colors ${
                  activeSection === 'councils' ? 'text-red-600' : 'text-gray-700'
                }`}
              >
                Community & Chapters
              </button>
              <button 
                onClick={() => onNavigate('how-to-join')}
                className={`px-4 py-2 hover:bg-gray-100 transition-colors ${
                  activeSection === 'how-to-join' ? 'text-red-600' : 'text-gray-700'
                }`}
              >
                Prospective Members
              </button>
              <button className="px-4 py-2 text-gray-700 hover:bg-gray-100 transition-colors">
                Resources
              </button>
              <button className="px-4 py-2 text-gray-700 hover:bg-gray-100 transition-colors">
                Report Hazing
              </button>
            </nav>
          </div>
        </div>
      </header>
    </>
  );
}