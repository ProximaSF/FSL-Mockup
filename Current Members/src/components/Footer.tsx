import { MapPin, Phone, Mail } from 'lucide-react';

interface FooterProps {
  onNavigate: (section: 'home' | 'how-to-join' | 'councils' | 'about' | 'calendar' | 'current-members' | 'advisors-parents' | 'chapter-recognition' | 'resources' | 'costs' | 'staff') => void;
}

export function Footer({ onNavigate }: FooterProps) {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <h4 className="text-white mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <button 
                  onClick={() => onNavigate('about')}
                  className="hover:text-white transition-colors text-left"
                >
                  About
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onNavigate('how-to-join')}
                  className="hover:text-white transition-colors text-left"
                >
                  How to Join
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onNavigate('councils')}
                  className="hover:text-white transition-colors text-left"
                >
                  Councils & Chapters
                </button>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Directory
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white mb-4">For Members</h4>
            <ul className="space-y-2">
              <li>
                <button 
                  onClick={() => onNavigate('current-members')}
                  className="hover:text-white transition-colors text-left"
                >
                  Current Members Hub
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onNavigate('advisors-parents')}
                  className="hover:text-white transition-colors text-left"
                >
                  Advisors & Parents
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onNavigate('chapter-recognition')}
                  className="hover:text-white transition-colors text-left"
                >
                  Chapter Recognition
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onNavigate('calendar')}
                  className="hover:text-white transition-colors text-left"
                >
                  Event Calendar
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white mb-4">Resources</h4>
            <ul className="space-y-2">
              <li>
                <button 
                  onClick={() => onNavigate('resources')}
                  className="hover:text-white transition-colors text-left"
                >
                  Policies & Documents
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onNavigate('costs')}
                  className="hover:text-white transition-colors text-left"
                >
                  Cost Information
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onNavigate('staff')}
                  className="hover:text-white transition-colors text-left"
                >
                  Staff Directory
                </button>
              </li>
              <li><a href="#" className="hover:text-white transition-colors">Report Hazing</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white mb-4">Contact</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <MapPin className="w-5 h-5 flex-shrink-0 mt-0.5" />
                <span>2105 Hornbake Library<br />University of Maryland<br />College Park, MD 20742</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-5 h-5 flex-shrink-0" />
                <span>(301) 314-8163</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-5 h-5 flex-shrink-0" />
                <a href="mailto:fsl@umd.edu" className="hover:text-white transition-colors">
                  fsl@umd.edu
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-8 text-center text-sm">
          <p className="mb-2">
            © 2024 University of Maryland. All rights reserved.
          </p>
          <div className="space-x-4">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <span>•</span>
            <a href="#" className="hover:text-white transition-colors">Accessibility</a>
            <span>•</span>
            <a href="#" className="hover:text-white transition-colors">UMD Homepage</a>
          </div>
        </div>
      </div>
    </footer>
  );
}