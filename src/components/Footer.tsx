import React from "react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-950 text-gray-400 py-12">
      <div className="container px-6 md:px-12">
        <div className="flex flex-col md:flex-row justify-between items-center">
          
          {/* NAME + TAGLINE */}
          <div className="mb-6 md:mb-0">
            <div className="text-lg font-bold text-white font-display">
              MATTHEW <span className="text-gray-500">CHEN</span>
            </div>
            <p className="mt-2 text-sm">
              Architecture as a journey: exploring, evolving, creating.
            </p>
          </div>

          {/* SOCIAL ICONS */}
          <div className="flex space-x-6">

            {/* INSTAGRAM */}
            <a
              href="https://instagram.com/the4caster"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
            >
              <svg
              className="h-6 w-6"
              fill="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
                <path d="M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2zm0 1.5A4.25 4.25 0 0 0 3.5 7.75v8.5A4.25 4.25 0 0 0 7.75 20.5h8.5A4.25 4.25 0 0 0 20.5 16.25v-8.5A4.25 4.25 0 0 0 16.25 3.5h-8.5zm8.75 2a1.25 1.25 0 1 1 0 2.5 1.25 1.25 0 0 1 0-2.5zM12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10zm0 1.5a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7z"/>
              </svg>
            </a>

            {/* DISCORD */}
            <a
              href="https://discord.com/users/the4caster13"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
            >
              <svg
              className="h-6 w-6"
              fill="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
                <path d="M20.317 4.369A19.9 19.9 0 0 0 15.885 3a14.9 14.9 0 0 0-.718 1.5 18.6 18.6 0 0 0-5.334 0A14.9 14.9 0 0 0 9.115 3c-1.54.27-3.027.75-4.432 1.47A17.1 17.1 0 0 0 2 17.477a19.9 19.9 0 0 0 6.09 3.047c.49-.66.927-1.37 1.304-2.116a12.6 12.6 0 0 1-1.953-.938l.414-.33a13 13 0 0 0 8.29 0l.414.33a12.6 12.6 0 0 1-1.953.938c.377.746.814 1.456 1.304 2.116A19.9 19.9 0 0 0 22 17.477a17.1 17.1 0 0 0-1.683-13.108zM8.52 14.134c-1.054 0-1.91-.96-1.91-2.144 0-1.183.84-2.144 1.91-2.144 1.07 0 1.927.96 1.91 2.144 0 1.183-.84 2.144-1.91 2.144zm6.96 0c-1.054 0-1.91-.96-1.91-2.144 0-1.183.84-2.144 1.91-2.144 1.07 0 1.927.96 1.91 2.144 0 1.183-.84 2.144-1.91 2.144z"/>
              </svg>
            </a>

            {/* GITHUB */}
            <a
              href="https://github.com/The4Caster13"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
            >
             <svg
                className="h-6 w-6"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M12 2C6.48 2 2 6.58 2 12.26c0 4.5 2.87 8.31 6.84 9.67.5.1.68-.22.68-.49v-1.71c-2.78.63-3.37-1.37-3.37-1.37-.46-1.19-1.12-1.5-1.12-1.5-.92-.64.07-.63.07-.63 1.02.07 1.55 1.07 1.55 1.07.9 1.55 2.36 1.1 2.94.84.09-.67.35-1.1.63-1.36-2.22-.26-4.56-1.13-4.56-5.03 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.32.1-2.75 0 0 .84-.27 2.75 1.06A9.3 9.3 0 0 1 12 6.84c.85 0 1.72.11 2.52.32 1.9-1.33 2.74-1.06 2.74-1.06.56 1.43.22 2.49.11 2.75.64.72 1.02 1.63 1.02 2.75 0 3.91-2.35 4.76-4.59 5.01.36.32.68.95.68 1.92v2.85c0 .27.18.59.69.49A10.04 10.04 0 0 0 22 12.26C22 6.58 17.52 2 12 2z"
                />
              </svg>
            </a>

          </div>
        </div>

        {/* COPYRIGHT */}
        <div className="mt-8 pt-8 border-t border-gray-800 text-center text-sm">
          © {currentYear} Matthew Chen. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
