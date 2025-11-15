import heroImage from "figma:asset/c12f9520cad24a36c0879079a1d8484a34c50cca.png";

interface HeroProps {
  onNavigate: (
    section: "home" | "how-to-join" | "councils" | "about",
  ) => void;
}

export function Hero({ onNavigate }: HeroProps) {
  return (
    <>
      <div className="relative h-[500px] overflow-hidden">
        <img
          src={heroImage}
          alt="Students in Greek life"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/30" />

        <div className="absolute inset-0 flex items-center">
          <div className="max-w-7xl mx-auto px-4 w-full">
            <div className="max-w-2xl"></div>
          </div>
        </div>
      </div>

      <div className="bg-white py-8">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <div className="flex justify-center gap-4">
            <button
              onClick={() => onNavigate("how-to-join")}
              className="bg-red-600 text-white px-8 py-3 hover:bg-red-700 transition-colors"
            >
              JOIN GREEK LIFE
            </button>
            <button
              onClick={() => onNavigate("about")}
              className="bg-transparent border-2 border-red-600 text-red-600 px-8 py-3 hover:bg-red-600 hover:text-white transition-all"
            >
              LEARN MORE ABOUT US
            </button>
          </div>
        </div>
      </div>
    </>
  );
}