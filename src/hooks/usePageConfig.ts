
import { useState, useEffect } from 'react';

interface PageConfig {
  meta: {
    title: string;
    description: string;
  };
  hero: any;
  sections: Record<string, any>;
  products?: {
    allProductsTitle: string;
    allProductsSubtitle: string;
    categoriesTitle: string;
    categoriesSubtitle: string;
    categories: any[];
  };
  footer?: {
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

export const usePageConfig = (pageName: string) => {
  const [config, setConfig] = useState<PageConfig | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPageConfig = async () => {
      try {
        const response = await fetch(`/pages/${pageName}.json`);
        
        if (!response.ok) {
          throw new Error(`Failed to fetch ${pageName} page configuration`);
        }

        const data = await response.json();
        
        // Validate basic structure
        if (!data.meta || !data.sections) {
          console.warn(`Invalid page structure for ${pageName}:`, data);
        }

        setConfig(data);
      } catch (err) {
        const errorMessage = err instanceof Error ? err.message : 'An error occurred';
        setError(errorMessage);
        console.error(`Error loading ${pageName} page config:`, err);
      } finally {
        setLoading(false);
      }
    };

    fetchPageConfig();
  }, [pageName]);

  return { config, loading, error };
};
