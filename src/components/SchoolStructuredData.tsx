import React from 'react';
import { Helmet } from 'react-helmet-async';

interface SchoolStructuredDataProps {
  url?: string;
  name?: string;
  description?: string;
  telephone?: string;
  email?: string;
  address?: {
    streetAddress?: string;
    addressLocality?: string;
    addressRegion?: string;
    postalCode?: string;
    addressCountry?: string;
  };
  geo?: {
    latitude?: number;
    longitude?: number;
  };
  image?: string;
  priceRange?: string;
}

const SchoolStructuredData: React.FC<SchoolStructuredDataProps> = ({
  url = 'https://alphahighschool.edu.in',
  name = 'Alpha High School',
  description = 'Alpha High School offers premier IIT & Medical Foundation programs with a proven track record of success.',
  telephone = '+91 12345 67890',
  email = 'info@alphahighschool.edu.in',
  address = {
    streetAddress: '123 Education Street',
    addressLocality: 'Knowledge City',
    addressRegion: 'State',
    postalCode: '123456',
    addressCountry: 'IN',
  },
  geo = {
    latitude: 20.5937,
    longitude: 78.9629,
  },
  image = 'https://alphahighschool.edu.in/images/school-building.jpg',
  priceRange = '₹₹₹',
}) => {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'School',
    name,
    description,
    url,
    telephone,
    email,
    address: {
      '@type': 'PostalAddress',
      streetAddress: address.streetAddress,
      addressLocality: address.addressLocality,
      addressRegion: address.addressRegion,
      postalCode: address.postalCode,
      addressCountry: address.addressCountry,
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: geo.latitude,
      longitude: geo.longitude,
    },
    image,
    priceRange,
    // Add educational programs
    'hasOfferCatalog': {
      '@type': 'OfferCatalog',
      'name': 'Academic Programs',
      'itemListElement': [
        {
          '@type': 'EducationalOccupationalProgram',
          'name': 'IIT Foundation Program',
          'description': 'Comprehensive preparation for IIT JEE examinations',
          'programType': 'HighSchoolProgram',
          'timeToComplete': 'P2Y',
        },
        {
          '@type': 'EducationalOccupationalProgram',
          'name': 'Medical Foundation Program',
          'description': 'Specialized preparation for NEET and medical entrance examinations',
          'programType': 'HighSchoolProgram',
          'timeToComplete': 'P2Y',
        },
      ],
    },
  };

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(structuredData)}
      </script>
    </Helmet>
  );
};

export default SchoolStructuredData;