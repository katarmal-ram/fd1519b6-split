
import { useState, useEffect } from 'react';

interface Config {
  site: {
    name: string;
    tagline: string;
    favicon?: string;
  };
  company: any;
  contact: any;
  header: {
    navigation: Array<{
      label: string;
      href: string;
    }>;
  };
  footer: {
    navigation: Array<{
      label: string;
      href: string;
    }>;
    social: Array<{
      platform: string;
      url: string;
      icon: string;
    }>;
    branding: {
      text: string;
      company: string;
      url: string;
    };
  };
}

export const useConfig = () => {
  const [config, setConfig] = useState<Config | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const configResponse = await fetch('/pages/config.json');

        if (!configResponse.ok) {
          throw new Error('Failed to fetch configuration data');
        }

        const configData = await configResponse.json();
        setConfig(configData);
        
        // Update document title and favicon when config loads
        if (configData.site?.name) {
          document.title = `${configData.site.name} - ${configData.site.tagline || ''}`;
          
          if (configData.site.favicon) {
            const favicon = document.querySelector('link[rel="icon"]') as HTMLLinkElement;
            if (favicon) {
              favicon.href = configData.site.favicon;
            } else {
              const newFavicon = document.createElement('link');
              newFavicon.rel = 'icon';
              newFavicon.href = configData.site.favicon;
              newFavicon.type = 'image/png';
              document.head.appendChild(newFavicon);
            }
          }
        }
      } catch (err) {
        setError(err instanceof Error ? err.message : 'An error occurred');
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return { config, loading, error };
};
