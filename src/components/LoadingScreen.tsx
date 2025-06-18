
import React, { useState, useEffect } from 'react';

interface LoadingScreenProps {
  title?: string;
}

const LoadingScreen: React.FC<LoadingScreenProps> = ({ title }) => {
  const [siteName, setSiteName] = useState<string>('');
  const [tagline, setTagline] = useState<string>('');
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const fetchSiteName = async () => {
      try {
        const response = await fetch('/pages/config.json');
        if (response.ok) {
          const configData = await response.json();
          const name = configData.site?.name || 'My Site';
          const siteTagline = configData.site?.tagline || 'Loading...';
          setSiteName(name);
          setTagline(siteTagline);
          
          // Update document title
          document.title = `${name} - ${siteTagline}`;
          
          // Update favicon if available
          if (configData.site?.favicon) {
            const favicon = document.querySelector('link[rel="icon"]') as HTMLLinkElement;
            if (favicon) {
              favicon.href = configData.site.favicon;
            } else {
              // Create favicon link if it doesn't exist
              const newFavicon = document.createElement('link');
              newFavicon.rel = 'icon';
              newFavicon.href = configData.site.favicon;
              newFavicon.type = 'image/png';
              document.head.appendChild(newFavicon);
            }
          }
        }
      } catch (error) {
        console.log('Could not load config, using fallback');
        setSiteName('Site');
        setTagline('Loading...');
        document.title = 'Loading Site...';
      }
    };

    fetchSiteName();
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          return 100;
        }
        return prev + Math.random() * 15;
      });
    }, 200);

    return () => clearInterval(timer);
  }, []);

  const displayTitle = title && title !== 'Loading our site...' 
    ? title 
    : siteName 
      ? siteName
      : 'Loading Site...';

  return (
    <div className="fixed inset-0 z-50 bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 flex items-center justify-center overflow-hidden">
      {/* Animated Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-72 h-72 bg-white rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/3 right-1/4 w-48 h-48 bg-white rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      {/* Main Content */}
      <div className="text-center relative z-10 px-8">
        {/* Company Logo/Icon */}
        <div className="mb-12 animate-bounce">
          <div className="w-24 h-24 mx-auto bg-white rounded-full flex items-center justify-center shadow-2xl">
            <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center">
              <div className="w-6 h-6 bg-white rounded-full animate-pulse"></div>
            </div>
          </div>
        </div>

        {/* Company Name */}
        <div className="mb-8 animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-4 tracking-tight">
            {displayTitle}
          </h1>
          {tagline && (
            <p className="text-xl md:text-2xl text-blue-100 font-light tracking-wide">
              {tagline}
            </p>
          )}
        </div>

        {/* Advanced Loading Indicator */}
        <div className="max-w-md mx-auto mb-8">
          {/* Progress Bar */}
          <div className="relative">
            <div className="h-2 bg-blue-800 rounded-full overflow-hidden shadow-inner">
              <div 
                className="h-full bg-gradient-to-r from-white to-blue-100 rounded-full transition-all duration-300 ease-out"
                style={{ width: `${Math.min(progress, 100)}%` }}
              ></div>
            </div>
            <div className="mt-3 text-blue-100 text-sm font-medium">
              Loading... {Math.round(Math.min(progress, 100))}%
            </div>
          </div>
        </div>

        {/* Spinning Loading Rings */}


        {/* Loading Text */}
        <div className="mt-8 animate-pulse">
          <p className="text-blue-100 text-lg font-medium">
            Preparing excellence...
          </p>
        </div>
      </div>

      <style>
        {`
          @keyframes fade-in {
            from {
              opacity: 0;
              transform: translateY(20px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
          
          .animate-fade-in {
            animation: fade-in 1s ease-out;
          }
        `}
      </style>
    </div>
  );
};

export default LoadingScreen;
