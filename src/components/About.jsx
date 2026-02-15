import { useEffect, useRef } from 'react';

const About = () => {
  const sectionRef = useRef(null);
  const headingRef = useRef(null);
  const contentRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting) {
          headingRef.current.classList.remove('opacity-0', 'translate-y-5');
          setTimeout(() => {
            contentRef.current.classList.remove('opacity-0');
          }, 300);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section id="about" ref={sectionRef} className="py-20">
      <div className="max-w-4xl mx-auto">
        <h2 
          ref={headingRef}
          className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-800 dark:text-white transition-all duration-700 transform opacity-0 translate-y-5"
        >
          About <span className="text-indigo-600">Me</span>
        </h2>
        
        <div 
          ref={contentRef} 
          className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 transition-opacity duration-1000 opacity-0"
        >
          <div className="flex flex-col md:flex-row gap-8">
            <div className="md:w-1/3">
              <div className="bg-indigo-100 dark:bg-indigo-900/30 h-60 rounded-lg flex items-center justify-center mb-4">
                {/* Replace with your image */}
                <svg xmlns="http://www.w3.org/2000/svg" className="h-24 w-24 text-indigo-500 dark:text-indigo-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div className="text-center">
                <h3 className="font-bold text-lg text-gray-800 dark:text-white">Kumkum S Heralgi</h3>
                <p className="text-indigo-600 dark:text-indigo-400">FullStack Developer</p>
              </div>
            </div>
            
            <div className="md:w-2/3">
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                I'm a passionate Frontend Developer with a strong foundation in React, TypeScript, and modern CSS frameworks. I love creating intuitive and dynamic user interfaces that provide seamless experiences across all devices.
              </p>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                I specialize in building responsive, accessible, and performant web applications with clean and maintainable code. I'm always exploring new technologies and methodologies to enhance my skillset and deliver better solutions.
              </p>
              
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <h4 className="font-semibold text-gray-800 dark:text-white mb-2">Education</h4>
                  <p className="text-gray-600 dark:text-gray-300">
                    B.E. Computer Science<br />
                    Global Academy of Technology, 2022 - 2026
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 dark:text-white mb-2">Experience</h4>
                  <p className="text-gray-600 dark:text-gray-300">
                    Web Developer Intern at Jabsz Gaming Studio (4 months)
                  </p>
                </div>
              </div>
              
              <div className="mt-6">
                <a 
                  href="/resume.pdf" 
                  className="inline-flex items-center text-indigo-600 dark:text-indigo-400 hover:underline"
                >
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
