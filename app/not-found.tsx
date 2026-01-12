import Link from "next/link";
import { ArrowLeft, Home } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-black flex items-center justify-center px-4">
      <div className="max-w-2xl mx-auto text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/3 border border-white/8 mb-8">
          <span className="text-sm text-white/60 tracking-wide">404 Error</span>
        </div>
        
        <h1 className="text-6xl sm:text-8xl md:text-9xl font-bold text-white mb-6 tracking-tight">
          <span className="bg-clip-text text-transparent bg-linear-to-b from-white to-white/80">
            404
          </span>
        </h1>
        
        <h2 className="text-2xl sm:text-4xl font-bold text-white mb-4">
          Page Not Found
        </h2>
        
        <p className="text-base sm:text-lg text-white/60 mb-8 max-w-xl mx-auto leading-relaxed">
          The page you're looking for doesn't exist or has been moved.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-black rounded-full font-semibold hover:bg-white/90 transition-colors"
          >
            <Home className="h-4 w-4" />
            Go Home
          </Link>
          <Link
            href="/work"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/10 text-white rounded-full font-semibold hover:bg-white/20 transition-colors border border-white/20"
          >
            <ArrowLeft className="h-4 w-4" />
            View Our Work
          </Link>
        </div>
      </div>
    </div>
  );
}



