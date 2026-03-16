import React from "react";
import { Linkedin } from "lucide-react";

// Executive Team Component with Fixed Size Images and updated design
const ExecutiveTeam = ({ executives, firstRowCount = 2 }) => {
  return (
    <div className="flex flex-col gap-6">
      {/* First row - configurable number of images */}
      <div className="flex flex-wrap justify-center gap-4">
        {executives.slice(0, firstRowCount).map((executive, index) => (
          <div
            key={index}
            className="relative group overflow-hidden rounded-lg"
            style={{ width: "200px", height: "200px" }}
          >
            <img
              src={
                executive.image ||
                "https://media.istockphoto.com/id/1432561113/photo/contact-icon-3d-render-illustration.jpg?s=612x612&w=0&k=20&c=DnbTbyt9K8sxNF_Nb-PsEG1EaCDIgxB4_SyFe9Mblys="
              }
              alt={executive.name}
              className="rounded-lg object-cover w-full h-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            {/* Name at bottom with gradient background */}
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-2 flex flex-col items-center justify-center">
              <span className="text-white text-sm md:text-base font-medium text-center">
                {executive.name}
              </span>
            </div>
            
            {/* Overlay with LinkedIn icon and data on hover */}
            <div className="absolute inset-0 bg-black bg-opacity-80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center p-4">
              <span className="text-white text-sm md:text-base font-medium mb-2">
                {executive.name}
              </span>
              {executive.title && (
                <span className="text-gray-300 text-xs mb-3">{executive.title}</span>
              )}
              {/* {executive.description && (
                <p className="text-gray-300 text-xs text-center mb-4">{executive.description}</p>
              )} */}
              <a 
                href={executive.linkedin || "#"} 
                className="text-white hover:text-blue-400 transition-colors"
                target="_blank" 
                rel="noopener noreferrer"
              >
                <Linkedin size={24} />
              </a>
            </div>
          </div>
        ))}
      </div>

      {/* Second row - remaining images */}
      {executives.length > firstRowCount && (
        <div className="flex flex-wrap justify-center gap-4">
          {executives.slice(firstRowCount).map((executive, index) => (
            <div
              key={index}
              className="relative group overflow-hidden rounded-lg"
              style={{ width: "200px", height: "200px" }}
            >
              <img
                src={
                  executive.image ||
                  "https://media.istockphoto.com/id/1432561113/photo/contact-icon-3d-render-illustration.jpg?s=612x612&w=0&k=20&c=DnbTbyt9K8sxNF_Nb-PsEG1EaCDIgxB4_SyFe9Mblys="
                }
                alt={executive.name}
                className="rounded-lg object-cover w-full h-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-2 flex flex-col items-center justify-center">
                <span className="text-white text-sm md:text-base font-medium text-center">
                  {executive.name}
                </span>
              </div>
              
              <div className="absolute inset-0 bg-black bg-opacity-80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center p-4">
                <span className="text-white text-sm md:text-base font-medium mb-2">
                  {executive.name}
                </span>
                {executive.title && (
                  <span className="text-gray-300 text-xs mb-3">{executive.title}</span>
                )}
                {/* {executive.description && (
                  <p className="text-gray-300 text-xs text-center mb-4">{executive.description}</p>
                )} */}
                <a 
                  href={executive.linkedin || "#"} 
                  className="text-white hover:text-blue-400 transition-colors"
                  // style={{ paddingTop: "5rem" }}
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  <Linkedin size={24} />
                </a>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

const MobileExecutiveTeam = ({ executives }) => {
  return (
    <div className="grid grid-cols-2 gap-x-4 gap-y-6 pr-3">
      {executives.map((executive, index) => (
        <div key={index} className="flex flex-col items-center">
          <div className="relative overflow-hidden rounded-lg w-full group">
            <img
              src={
                executive.image ||
                "https://media.istockphoto.com/id/1432561113/photo/contact-icon-3d-render-illustration.jpg?s=612x612&w=0&k=20&c=DnbTbyt9K8sxNF_Nb-PsEG1EaCDIgxB4_SyFe9Mblys="
              }
              alt={executive.name}
              className="rounded-lg object-cover w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            
            <div className="absolute inset-0 bg-black bg-opacity-70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
              <a 
                href={executive.linkedin || "#"} 
                className="text-white hover:text-blue-400 transition-colors"
                target="_blank" 
                rel="noopener noreferrer"
              >
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          {/* Name Below Card */}
          <div className="mt-2 text-center w-full">
            <span className="text-sm font-medium text-gray-200">
              {executive.name}
            </span>
            {executive.title && (
              <p className="text-xs text-gray-400">{executive.title}</p>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

const ResponsiveExecutiveTeam = ({ executives, firstRowCount = 2 }) => {
  return (
    <>
      <div className="hidden md:block">
        <ExecutiveTeam executives={executives} firstRowCount={firstRowCount} />
      </div>
      <div className="block md:hidden">
        <MobileExecutiveTeam executives={executives} />
      </div>
    </>
  );
};

export const Timeline = ({ data }) => {
  return (
    <div className="w-full bg-gray-950 md:px-10">
      <div className="max-w-7xl mx-auto py-16 px-4 md:px-8 lg:px-10 flex justify-center items-center mt-12">
        <h2 className="text-xl md:text-4xl mb-4 max-w-4xl text-center text-yellow-400">
          FORMER EXECUTIVE TEAMS
        </h2>
      </div>

      <div className="relative max-w-7xl mx-auto pb-16">
        {data.map((item, index) => (
          <div
            key={index}
            className="flex flex-col md:flex-row gap-6 md:gap-10 pt-10 md:pt-16"
          >
            <div className="md:w-1/4 flex items-start">
              <h3 className="text-2xl md:text-4xl font-bold text-yellow-500 opacity-80">
                {item.title}
              </h3>
            </div>
            <div className="md:w-3/4 w-full">{item.content}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export function PastTimeline() {
  const executives2023 = [
    {
      name: "Asish Pani",
      image: "",
      title: "",
      linkedin: "https://www.linkedin.com/in/asish-pani/",
    },
    {
      name: "Harshada Anavkar",
      image: "",
      title: "",
      linkedin: "https://www.linkedin.com/in/harshada-anavkar/",
    },
    {
      name: "Agrim Choudhary",
      image: "",
      title: "",
      linkedin: "https://www.linkedin.com/in/agrim-choudhary/",
    },
    {
      name: "Bhumi Tayal",
      image: "",
      title: "",
      linkedin: "https://in.linkedin.com/in/bhumi-tayal-725913226",
    },
    {
      name: "Tarun",
      image: "",
      title: "",
      linkedin: "https://www.linkedin.com/in/tarun-vemana",
    },
    {
      name: "Prashant",
      image: "",
      title: "",
      linkedin: "https://www.linkedin.com/in/",
    },
  ];

  const executives2022 = [
    {
      name: "Venkata Sai Saran Grandhe",
      image: "",
      title: "",
      linkedin: "https://www.linkedin.com/in/venkatasaisaran",
    },
    {
      name: "Anwesha Patel",
      image: "",
      title: "",
      linkedin: "https://www.linkedin.com/in/anwesha-patel-0a6827221",
    },
    {
      name: "Sambhav Jena",
      image: "",
      title: "",
      linkedin: "https://www.linkedin.com/in/sambhav-jena-7a7ab5200",
    },
    {
      name: "Ritvik Dhawe ",
      image: "",
      title: "",
      linkedin: "https://www.linkedin.com/in/ritvik-dhawe",
    },
    {
      name: "Samarth Singh",
      image: "",
      title: "",
      linkedin: "https://www.linkedin.com/in/samarth-singh-2003",
    },
  ];
  
  const executives2021 = [
    {
      name: "Kanha Jain",
      image: "",
      title: "",
      linkedin: "https://in.linkedin.com/in/kanha-jain-5819461a4",
    },
  ];

  const data = [
    {
      title: "2023-24",
      content: (
        <div>
          <ResponsiveExecutiveTeam executives={executives2023} />
        </div>
      ),
    },
    {
      title: "2022-23",
      content: (
        <div>
          <ResponsiveExecutiveTeam
            executives={executives2022}
            firstRowCount={3}
          />
        </div>
      ),
    },
    {
      title: "2021-22",
      content: (
        <div>
          <ResponsiveExecutiveTeam executives={executives2021} />
        </div>
      ),
    },
  ];

  return <Timeline data={data} />;
}