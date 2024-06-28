import React from 'react';

const MyComponent = () => {
  return (
    <svg version="1.2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="auto" height="auto">
      {/* Style is defined directly within the SVG element, 
           no need for a separate <style> tag */}
      <path 
        fillRule="evenodd" 
        className="a"
        d="m55.2 16c1.3 0 19.2 7.4 77.3 33.2l49.7 41.3 12.3 24.5c10.3 20.4 13.2 25.3 17.4 29.5 2.8 2.7 5.2 4.8 5.5 4.5 0.2-0.3 4.1-9.7 8.6-21 5-12.7 8.9-21.2 10.3-22.3 1.2-1 3.4-1.8 4.9-1.7 1.6 0 3.8 1 5.1 2.2 1.7 1.8 3.1 6.3 6.2 20.1 2.2 9.7 4.2 17.7 4.5 17.7 0.3 0 2.3-8 4.5-17.7 3-13.6 4.5-18.3 6.2-20.1 1.2-1.2 3.5-2.2 5-2.2 1.5-0.1 3.8 0.7 5 1.7 1.3 1.1 5 8.9 9.4 19.8 3.9 9.9 7.5 19.1 9 23l4.5-4.5c3.6-3.5 7.2-9.7 29.3-53.5l49.6-41.1 37.5-16.7c20.6-9.2 38.5-16.7 39.7-16.7 1.3 0 3.4 1.1 4.8 2.5 1.6 1.6 2.5 3.6 2.5 5.7 0 3-4.5 7.8-97.8 101.3l-24 48-11.6 8.5c-6.3 4.7-11.5 8.8-11.6 9.3 0 0.4 1.7 3.4 3.7 6.7 2.1 3.3 4.2 6 4.8 6 0.5 0 7.2-2.5 14.7-5.5 13.7-5.5 14-5.6 52-36l20.4-28.8c16.4-23 20.9-28.8 23.1-29.3 1.6-0.4 3.9-0.3 5.3 0.2 1.3 0.5 3.1 2.1 4 3.6 1.4 2.6 1 4.9-15.4 79.3l-51.1 51.5-44 14.7-0.3 7.6c-0.1 4.2 0.1 7.7 0.5 7.7 0.5 0 7.1-1.1 14.8-2.4 13.5-2.3 14.6-2.7 29.2-10 11.7-5.8 18.9-10.3 30.5-19 15.1-11.3 15.5-11.7 30.3-30.3 8.2-10.3 16-19.8 17.2-21 1.3-1.4 3.4-2.3 5.3-2.3 1.9 0 3.9 0.9 5.5 2.5 1.4 1.4 2.5 3.5 2.5 4.8 0 1.2-3.8 15.3-16.7 60.2l-25.8 34.7-51 25.5-16.3 2.4c-8.9 1.3-16.2 2.7-16.2 3.1 0 0.5 1.1 3 2.5 5.8 1.4 2.7 3.8 8.9 5.5 13.7 1.9 5.8 3.6 9 4.7 9.4 1 0.3 9.7 1.9 36.8 6.4l42.5 34 26 43.5v61l-2.5 2.5c-1.3 1.4-3.6 2.5-5 2.5-1.4 0-3.4-0.4-4.5-1-1.2-0.6-6.8-10.7-14.5-26-10.9-21.9-13.9-26.8-34.6-54.5l-15.2-7.6c-11.2-5.6-17-7.9-22.2-8.8-3.9-0.7-7.1-1.1-7.2-0.9-0.1 0.2-1.1 4.8-2.3 10.3-1.1 5.5-3.4 13.9-5 18.7-1.7 4.9-4.6 12.1-6.6 16-2 4-5.5 10-7.8 13.3-2.2 3.3-6.8 8.9-10.1 12.4-3.3 3.5-9.8 8.9-14.5 12-4.7 3.2-12.1 7.1-16.5 8.8-4.4 1.7-12.6 4.1-18.3 5.2-6.7 1.4-14 2.1-21.5 2.1-6.1 0-15.3-0.7-20.2-1.6-4.9-0.9-11.9-2.5-15.5-3.6-3.6-1.1-9.7-3.6-13.5-5.5-3.9-1.9-9.7-5.4-13-7.8-3.3-2.3-8.5-6.9-11.6-10.1-3.1-3.3-7.6-9-10.2-12.9-2.5-3.9-6.1-10.6-8-15-1.9-4.4-4.4-11.4-5.5-15.5-1.2-4.1-2.9-11.8-3.8-17-0.9-5.2-1.7-9.6-1.7-9.8-0.1-0.1-3.1 0.3-6.7 0.9-4.4 0.8-11.3 3.6-36.9 16.4l-11 14.7c-9.7 13-12.7 17.9-23.6 39.8-7.7 15.3-13.3 25.4-14.5 26-1.1 0.6-3.1 1-4.5 1-1.4 0-3.6-1.1-7.5-5v-61l26-43.5 42.6-34 39.9-6.7 1.8-6.2c1-3.3 3.5-9.8 5.5-14.4 2-4.5 3.5-8.4 3.2-8.6-0.3-0.1-7.9-1.3-33.5-4.9l-51-25.5-25.8-34.7-8.3-29c-4.6-15.9-8.4-30-8.4-31.2 0-1.3 1.1-3.4 2.5-4.8 1.5-1.6 3.5-2.5 5.5-2.5 1.8 0 3.9 0.9 5.3 2.3 1.2 1.2 9 10.7 17.2 21 14.8 18.6 15.2 19 30.2 30.3 11.7 8.7 18.9 13.2 30.5 19 14.7 7.3 15.8 7.7 29.3 10 7.7 1.3 14.3 2.4 14.7 2.4 0.5 0 0.7-3.5 0.3-15.3l-44-14.7-51.1-51.5-8.5-38.3c-7.9-36.1-8.3-38.4-6.9-41 0.9-1.5 2.7-3.1 4-3.6 1.4-0.5 3.7-0.6 5.2-0.2 2.3 0.5 6.8 6.3 43.6 58.1l19.1 15.3c18.9 15.1 19.2 15.2 32.8 20.7 7.6 3 14.2 5.5 14.8 5.5 0.6 0 2.7-2.7 4.7-6 2.1-3.3 3.8-6.3 3.8-6.8-0.1-0.4-5.3-4.5-23.2-17.7l-24-48-48.9-49c-45-45.1-48.9-49.3-48.8-52.3 0-2.1 0.9-4.2 2.4-5.7 1.3-1.4 3.4-2.5 4.7-2.5zm103.6 99.5l24.1 48 21.1 15.5c8.1-5.7 10.7-7.5 11-7.7 0.3-0.2-4.5-5.4-10.7-11.6l-11.1-11.2-24-48-45.7-37.9c-22.1-9.8-28.8-12.6-29.3-12.6-0.4 0 14 14.7 32 32.7zm206.8-33.8l-22.8 18.8-24 48c-17.3 17.4-22.1 22.6-21.9 22.8 0.3 0.2 2.9 2 5.8 4.1l5.2 3.6 21.1-15.5 24.1-48c50.6-50.7 64.9-65.4 64.3-65.4-0.5 0.1-7.3 2.9-15 6.4-13.8 6.3-14.2 6.5-36.8 25.2zm-132.7 76.6c0 2.6 0.3 4.7 0.5 4.7 0.3 0 2.7-0.4 5.3-1l4.7-1.1c-3.5-15.8-4.6-20.5-4.8-20.6-0.1-0.1-1.5 2.8-2.9 6.5-1.7 4-2.8 8.7-2.8 11.5zm39-5.5c-1.5 6.3-1.7 8.3-0.7 8.7 0.7 0.2 3.1 0.9 5.5 1.5l4.2 1c0.1-8.6-0.9-12.8-2.6-17-1.4-3.5-2.6-6.6-2.7-6.8-0.1-0.2-0.5 0.7-0.9 2-0.4 1.3-1.7 6.1-2.8 10.6zm-179.9 12.7l3.1 14 45.3 45.6c26.4 8.7 34.5 11.4 35 11.6 0.6 0.2 1.6-2.9 2.2-6.9 0.6-4 1.3-7.9 1.5-8.7 0.2-0.9-4.5-3.3-15.4-7.7l-15.8-6.4c-36.2-28.9-42.6-34.7-45.9-39.3-2.5-3.4-6.4-8.9-8.8-12.2-2.4-3.3-4.3-5.5-4.3-5 0 0.6 1.4 7.3 3.1 15zm317.9 2.2c-3.4 4.7-9.6 10.3-25.2 22.8l-20.8 16.5c-26.6 10.8-31.4 13.2-31.1 14.1 0.1 0.8 0.8 4.7 1.5 8.7 0.6 4 1.6 7.1 2.1 6.9 0.6-0.2 8.7-2.9 18-6l17-5.6 45.3-45.6c4.7-21.5 5.9-28 5.8-28.2-0.1-0.3-2 1.9-4.1 4.8-2.2 3-6 8.1-8.5 11.6zm-163.2 15.3c-1.5 2.2-3.6 6.4-4.5 9.3-1.2 3.7-1.8 8.4-1.8 15.7 0 7.4 0.6 12.1 1.8 15.8 0.9 2.9 2.9 7 4.2 9.2 1.4 2.2 4.1 4.8 6 5.8 3.4 1.7 3.7 1.7 7 0 2-1 4.6-3.4 5.9-5.5 1.3-2.1 3.2-6.2 4.2-9.3 1.4-4 1.9-8.2 1.9-16 0-7.7-0.5-11.9-1.9-16-1-3-3.1-7.2-4.5-9.3-1.4-2.2-3.8-4.5-5.3-5.3-1.5-0.7-3.3-1.3-4-1.3-0.7 0-2.4 0.7-3.8 1.4-1.3 0.8-3.7 3.3-5.2 5.5zm-34.5 10.9c-3.2 3.2-7.3 8.5-9.3 11.8-1.9 3.2-4.5 8.8-5.8 12.3-1.3 3.6-3 9.9-3.7 14-0.8 4.2-1.4 14.1-1.4 22 0 8 0.4 17.4 0.9 20.8 0.6 3.4 2.4 9.3 4.1 13 1.6 3.7 3 7.8 3 9-0.1 1.2-2 4.4-4.3 7-2.4 2.6-5.7 6.8-7.4 9.2-1.7 2.5-4.8 7.9-6.9 12-2 4.2-5.2 12-7 17.5-1.8 5.5-4 14.5-5 20-1.4 7.9-1.6 12.8-1.1 22.5 0.3 6.9 1.3 16.4 2.2 21 0.9 4.7 2.7 12.1 4.1 16.5 1.4 4.4 3.9 10.7 5.6 14 1.6 3.3 4.4 8.1 6 10.5 1.7 2.5 5.3 7 8.1 9.9 2.8 2.9 7.8 7.2 11.1 9.4 3.3 2.3 9 5.3 12.5 6.8 3.6 1.5 9.9 3.4 14 4.4 4.2 0.9 12.7 1.9 19 2.2 8.3 0.4 14.1 0.1 20.8-1 5.1-0.9 12.7-3 17-4.6 4.2-1.6 10.9-5.2 14.7-7.8 3.9-2.7 9.7-7.9 13-11.5 3.3-3.6 7.9-9.7 10.3-13.6 2.3-4 5.5-10.4 7.1-14.4 1.6-4 3.8-10.9 4.9-15.3 1.2-4.4 2.6-11.3 3.3-15.5 0.7-4.1 1.3-14.7 1.3-23.5 0-14.6-0.2-16.7-2.7-25-1.6-4.9-4.5-12.6-6.5-17-2.1-4.4-5.6-10.7-7.9-14-2.2-3.3-6.4-8.7-9.3-12-4.4-5-5.1-6.4-4.7-9 0.3-1.6 1.6-5.7 3.1-9 1.4-3.3 3-8.9 3.6-12.5 0.5-3.5 1-12.2 1-19.2 0-7-0.5-16.2-1.1-20.5-0.6-4.3-2.3-11.1-3.7-15.3-1.5-4.1-4.2-10.1-6.2-13.4-1.9-3.2-6.2-8.6-9.5-12-3.4-3.3-8.3-7.2-11-8.7l-5-2.6c3.4 10.7 3.9 15.4 3.9 25.2 0.1 10-0.3 14.5-1.7 19-1.1 3.3-3 8.2-4.3 10.8-1.3 2.6-4.3 6.8-6.6 9.4-2.4 2.5-6.1 5.5-8.3 6.7-2.8 1.5-5.8 2.1-10.5 2.1-4.6 0-7.6-0.6-10.5-2.1-2.2-1.2-6-4.3-8.4-7-2.5-2.7-5.7-7.6-7.3-10.9-1.5-3.3-3.5-9.3-4.4-13.5-1.1-5.3-1.4-10.3-1-17.5 0.3-5.5 1.4-12.8 2.4-16.2 1-3.4 1.8-6.2 1.8-6.2 0 0-2.4 1.3-5.3 3-2.9 1.6-7.9 5.6-11 8.8zm209 56.2c-14.3 10.7-20.1 14.4-34 21.3l-16.8 8.4c-26.3 4.3-34.9 5.9-36 6.3-1.1 0.4-2.6 2.5-3.5 4.8-1.5 4.1-1.5 4.1 1.8 7.4l3.2 3.2 37.5-5.2 46-23.2c16.3-22 21.6-30.2 22.3-32.4 0.7-2.3 1.7-5.8 2.1-7.9 0.4-2.1 0.7-3.8 0.6-3.8-0.1 0-1.4 1.9-3 4.1-1.7 2.2-10.7 9.8-20.2 17zm-351.5-10.9c1.2 3.9 4.8 9.7 12.2 19.7l10.5 14.2 46 23.2 38 5.5c4.2-4.8 5.5-6.7 5.5-7.3 0.1-0.5-0.6-2.6-1.4-4.7-1.2-2.8-2.3-3.9-4.3-4.2-1.5-0.3-10-1.7-18.8-3.2l-16-2.6c-30.4-15.2-36.6-19.1-50.2-29.3-9.2-6.9-18.2-14.5-20.1-16.8-2.5-3.2-3.2-3.7-3.2-2.2 0 1.1 0.8 4.6 1.8 7.7zm53.7 128.3l-37.5 30-22 36.5 0.1 19.5c7.3-14.1 15.1-25.7 21.9-34.9l12.5-16.7c31.8-15.9 36.8-17.9 44.3-19.5l9.3-1.9c0-7.7 0.1-11.6 0.2-13.7 0.3-3.2 0-3.7-1.7-3.7-1.2 0.1-7.7 1.1-14.6 2.3zm236.5 13c16.8 3.4 21.8 5.4 36.1 12.5l17.5 8.8c19.3 25.9 27.1 37.5 29.7 42.6l4.7 9.1 0.1-19.5-22-36.5-37.5-30c-20.2-3.5-26.6-4.5-27.3-4.5-0.9 0-1.2 2.4-1.3 8.7z"
        fill="#8b0000"
      />
    </svg>
  );
};

export default MyComponent;