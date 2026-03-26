import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { CardBody, CardContainer, CardItem } from "../../components/ui/3d_Card";
import { Spotlight } from "../../components/ui/spotlight-new.jsx";



const imgAcademicExcellence2026_1 = require("../../components/event_Images/academic_excellence_26/IMG_1.jpg");
const imgAcademicExcellence2026_2 = require("../../components/event_Images/academic_excellence_26/IMG_2.jpeg");


const imagesAcademicExcellence2026 = [
  imgAcademicExcellence2026_1,
  imgAcademicExcellence2026_2,
  
];


const imgFarewellToat26_1 = require("../../components/event_Images/farewell_toat_26/IMG_1.jpg");
const imgFarewellToat26_2 = require("../../components/event_Images/farewell_toat_26/IMG_2.jpg");
const imgFarewellToat26_3 = require("../../components/event_Images/farewell_toat_26/IMG_3.jpg");
const imgFarewellToat26_4 = require("../../components/event_Images/farewell_toat_26/IMG_4.jpg");

// 📂 Image Array
const imagesFarewellToat26 = [
  imgFarewellToat26_1,
  imgFarewellToat26_2,
  imgFarewellToat26_3,
  imgFarewellToat26_4
];

const imgMechDTalks2026_1 = require("../../components/event_Images/mech_d_cdc_26/IMG_1.jpeg");
const imgMechDTalks2026_2 = require("../../components/event_Images/mech_d_cdc_26/IMG_2.jpeg");
const imgMechDTalks2026_3 = require("../../components/event_Images/mech_d_cdc_26/IMG_3.jpeg");
const imgMechDTalks2026_4 = require("../../components/event_Images/mech_d_cdc_26/IMG_4.jpeg");

const imagesMechDTalks2026 = [
  imgMechDTalks2026_1,
  imgMechDTalks2026_2,
  imgMechDTalks2026_3,
  imgMechDTalks2026_4
];

const imgBtpMtpTalks2026_1 = require("../../components/event_Images/btp_mtp_26/IMG_1.jpeg");
const imgBtpMtpTalks2026_2 = require("../../components/event_Images/btp_mtp_26/IMG_2.jpg");
const imgBtpMtpTalks2026_3 = require("../../components/event_Images/btp_mtp_26/IMG_3.jpg");
const imgBtpMtpTalks2026_4 = require("../../components/event_Images/btp_mtp_26/IMG_4.jpg");
const imagesBtpMtpTalks2026 = [
  imgBtpMtpTalks2026_1,
  imgBtpMtpTalks2026_2,
  imgBtpMtpTalks2026_3,
  imgBtpMtpTalks2026_4
];

const imgKnowYourDepartment2025_1 = require("../../components/event_Images/kyd_2025_1.jpg");
const imgKnowYourDepartment2025_2 = require("../../components/event_Images/kyd_2025_2.jpg");
const imgKnowYourDepartment2025_3 = require("../../components/event_Images/kyd_2025_3.jpg");
const imagesKnowYourDepartment2025 = [
  imgKnowYourDepartment2025_1,
  imgKnowYourDepartment2025_2,
  imgKnowYourDepartment2025_3,
];

const imgKnowYourMates_1 = require("../../components/event_Images/KYM_1.jpg");
const imgKnowYourMates_2 = require("../../components/event_Images/KYM_2.jpg");
const imgKnowYourMates_3 = require("../../components/event_Images/KYM_3.jpg");
const imgKnowYourMates_4 = require("../../components/event_Images/KYM_4.jpg");
const imagesKnowYourMates = [
  imgKnowYourMates_1,
  imgKnowYourMates_2,
  imgKnowYourMates_3,
  imgKnowYourMates_4,
];

const imgMechDTalks_1 = require("../../components/event_Images/MDT1.jpg");
const imgMechDTalks_2 = require("../../components/event_Images/MDT2.jpg");
const imgMechDTalks_3 = require("../../components/event_Images/MDT3.jpg");
const imgMechDTalks_4 = require("../../components/event_Images/MDT4.jpg");
const imagesMechDTalks = [
  imgMechDTalks_1,
  imgMechDTalks_2,
  imgMechDTalks_3,
  imgMechDTalks_4,
];

const imgAlumMeet_1 = require("../../components/event_Images/AT1.jpg");
const imgAlumMeet_2 = require("../../components/event_Images/AT2.jpg");
const imgAlumMeet_3 = require("../../components/event_Images/AT3.jpg");
const imgAlumMeet_4 = require("../../components/event_Images/AT4.jpg");
const imgAlumMeet_5 = require("../../components/event_Images/AT5.jpg");
const imagesAlumMeet = [
  imgAlumMeet_1,
  imgAlumMeet_2,
  imgAlumMeet_3,
  imgAlumMeet_4,
  imgAlumMeet_5,
];

const imgIntraDepartmentalQuiz_1 = require("../../components/event_Images/Quiz1.jpg");
const imgIntraDepartmentalQuiz_2 = require("../../components/event_Images/Quiz2.jpg");
const imgIntraDepartmentalQuiz_3 = require("../../components/event_Images/Quiz3.jpg");
const imgIntraDepartmentalQuiz_4 = require("../../components/event_Images/Quiz4.jpg");
const imgIntraDepartmentalQuiz_5 = require("../../components/event_Images/Quiz5.jpg");
const imagesIntraDepartmentalQuiz = [
  imgIntraDepartmentalQuiz_1,
  imgIntraDepartmentalQuiz_2,
  imgIntraDepartmentalQuiz_3,
  imgIntraDepartmentalQuiz_4,
  imgIntraDepartmentalQuiz_5,
];

const imgKnowYourDepartment2024_1 = require("../../components/event_Images/kyd1.jpg");
const imgKnowYourDepartment2024_2 = require("../../components/event_Images/kyd2.jpg");
const imgKnowYourDepartment2024_3 = require("../../components/event_Images/kyd3.jpg");
const imagesKnowYourDepartment2024 = [
  imgKnowYourDepartment2024_1,
  imgKnowYourDepartment2024_2,
  imgKnowYourDepartment2024_3,
];

const imgGuestLecture_1 = require("../../components/event_Images/gl1.jpg");
const imgGuestLecture_2 = require("../../components/event_Images/gl2.jpg");
const imgGuestLecture_3 = require("../../components/event_Images/gl3.jpg");
const imgGuestLecture_4 = require("../../components/event_Images/gl4.jpg");
const imagesGuestLecture = [
  imgGuestLecture_1,
  imgGuestLecture_2,
  imgGuestLecture_3,
  imgGuestLecture_4,
];

const imgPhotoshootFarewell_1 = require("../../components/event_Images/ps1.jpg");
const imgPhotoshootFarewell_2 = require("../../components/event_Images/ps2.jpg");
const imgPhotoshootFarewell_3 = require("../../components/event_Images/ps3.jpg");
const imagesPhotoshootFarewell = [
  imgPhotoshootFarewell_1,
  imgPhotoshootFarewell_2,
  imgPhotoshootFarewell_3,
];



export const cardData = [

  {
    id: "farewell-toat-2026",
  year: 2026,
  title: "PHOTOSHOOT & FAREWELL 2026",
  description:
    "The 'Photoshoot & Farewell 2026' marked a memorable send-off for the graduating batch of Mechanical Engineering. The event began with a formal group photograph alongside faculty, followed by celebrations at the Tagore Open Air Theatre (TOAT). The evening featured engaging moments and a special cultural performance, creating a heartfelt and vibrant farewell. The event concluded with warm wishes for the graduating batch as they step into the next chapter of their lives.",
  imageUrls: imagesFarewellToat26,
  carouselImage: imgFarewellToat26_1,
  ctaPrimary: {
   // label: "Explore now →",
    // link: "https://example.com",
  },
  ctaSecondary: {
    label: "Mar 2026",
  },
  },
  {
    id: "mechd-cdc-fundae-session-2026",
    year: 2026,
    title: "MECH-D TALKS: CDC FUNDAE",
    description:
      "The 'Mech-D Talks: CDC Fundae' session was organized to help mechanical engineering students prepare for CDC and explore diverse career pathways. Senior students from core, SDE, data, consulting, product, and finance domains shared practical insights on resume building, internships, and skill development. Through an interactive discussion and Q&A, attendees gained clarity on domain-specific preparation strategies and how to build a strong, focused profile for placements.",
    imageUrls: imagesMechDTalks2026, 
    carouselImage: imagesMechDTalks2026[1],
       ctaPrimary: {
     // label: "Explore now →",
      // link: "https://example.com",
    },
    ctaSecondary: {
      label: "Mar 2026",
    },
  },

  {
    id: "btp-mtp-talks-2026",
    year: 2026,
    title: "BTP–MTP TALKS 2026",
    description:
      "The 'BTP–MTP Talks' session was organized to help students understand how to approach and navigate their BTP and MTP projects. Senior students shared their experiences on selecting research domains, working with professors, and balancing project work with placements and academics. The session also included an interactive Q&A, providing clarity on project selection, timelines, and academic requirements, helping attendees make informed decisions about their research journey.",
    imageUrls: imagesBtpMtpTalks2026,
    carouselImage: imagesBtpMtpTalks2026[2],
    ctaPrimary: {
     // label: "Explore now →",
      // link: "https://example.com",
    },
    ctaSecondary: {
      label: "Mar 2026",
    },
  },
  {
    id: "academic-excellence-2026",
    year: 2026,
    title: "ACADEMIC EXCELLENCE 2026",
    description:
      "The 'Academic Excellence' session was organized to help mechanical engineering students navigate academic challenges and excel in their coursework. Featuring top-performing seniors, the session provided practical insights on mastering core subjects, managing labs, and balancing academics with extracurricular activities and campus life. Panelists shared their personal strategies for maintaining a strong CGPA, choosing electives wisely, and making the most of opportunities at IIT Kharagpur. The interactive discussion and Q&A allowed students to clarify their doubts and gain actionable guidance for their academic journey.",
    imageUrls: imagesAcademicExcellence2026,
    carouselImage: imgAcademicExcellence2026_1,
    ctaPrimary: {
      //label: "Explore now →",
      // link: "https://example.com",
    },
    ctaSecondary: {
      label: "Mar 2026",
    },
  },

  {
  id: "know-your-department-2025",
  year: 2025,
  title: "KNOW YOUR DEPARTMENT 2025",
  description:
    "The 'Know Your Department 2025' event was organized to welcome the incoming batch. Faculty members introduced the department structure, curriculum roadmap, research areas, and opportunities, while interactive discussions helped freshers gain clarity about academics and student life.",
  imageUrls: imagesKnowYourDepartment2025,
  carouselImage: imagesKnowYourDepartment2025[0],
  ctaPrimary: {
    //label: "Explore now →",
    // link: "https://example.com",
  },
  ctaSecondary: {
    label: "Aug 2025",
  },
},

   
    {
      id: "know-your-mates",
      year: 2024,
      title: "KNOW YOUR MATES",
      description:
        "From exciting games and wit to heartwarming introductions and stories that had us all in stitches, this event was all about forging bonds and creating memories that will last a lifetime. A huge shoutout to all the participants for bringing your enthusiasm and energy!",
      imageUrls: imagesKnowYourMates,
      carouselImage: imagesKnowYourMates[0],
      ctaPrimary: {
       // label: "View more →",
        // link: "https://twitter.com/mannupaaji",
      },
      ctaSecondary: {
        label: "4 Oct 2024",
      },
    },
    {
      id: "mech-d-talks",
      year: 2024,
      title: "MECH D TALKS",
      description:
        "Seniors shared their valuable insights with Department students on academics and CDC Internships. The session commenced with warm welcomes and brief introductions, paving the way for a succinct exploration of academic journeys. The panelists emphasized the value of holistic growth, balancing academics with extracurricular pursuits. The spotlight then shifted to internship experiences, with panelists sharing industry insights, project highlights, and invaluable tips on securing internships. A lively Q&A session ensued, providing students with direct interaction opportunities. ",
      imageUrls: imagesMechDTalks,
      carouselImage: imagesMechDTalks[0], 
      ctaPrimary: {
       // label: "Explore now →",
        // link: "https://example.com",
      },
      ctaSecondary: {
        label: "12 Nov 2024",
      },
    },
    {
      id: "alum-meet",
      year: 2025,
      title: "ALUM MEET",
      description:
        "organised a vibrant alum meet, bringing together alumni from 1974, 1984, 1999, and many more. The event acted as a nostalgic reunion, creating friendships among graduates from different generations. Among shared memories and laughter, guests reminisced about their academic adventures, emphasising the long-lasting friendships they formed. The event not only celebrated prior accomplishments but also served as an opportunity for networking and collaboration.",
      imageUrls: imagesAlumMeet,
      carouselImage: imagesAlumMeet[0],
      ctaPrimary: {
        //label: "Explore now →",
        // link: "https://example.com",
      },
      ctaSecondary: {
        label: "4 Jan 2025",
      },
    },
    {
      id: "intra-departmental-quiz",
      year: 2024,
      title: " INTRA-DEPARTMENTAL QUIZ",
      description:
        "organized an Intra-Departmental Quiz, creating a platform for students to showcase their knowledge. Fostered a friendly yet competitive atmosphere and a sense of camaraderie among participants. The atmosphere buzzed with excitement and friendly competition as teams vied for the top spot.The success of the event was a result of meticulous planning and enthusiastic participation, making it a memorable and enriching experience for all involved.",
      imageUrls: imagesIntraDepartmentalQuiz,
      carouselImage: imagesIntraDepartmentalQuiz[0],
      ctaPrimary: {
        //label: "Explore now →",
        // link: "https://example.com",
      },
      ctaSecondary: {
        label: "4 Feb 2024",
      },
     },
     {
      id: "know-your-department-2024",
      year: 2024,
      title: "KNOW YOUR DEPARTMENT",
      description:
        "We organized the 'Know Your Department' event to welcome freshers. Professors provided an overview of the coursework, and key study areas, while students engaged in discussions to gain valuable insights. ",
      imageUrls: imagesKnowYourDepartment2024,
      carouselImage: imagesKnowYourDepartment2024[0], 
      ctaPrimary: {
       // label: "Explore now →",
        // link: "https://example.com",
      },
      ctaSecondary: {
        label: "5 Aug 2024",
      },
    },
    {
      id: "guest-lecture",
      year: 2023,
      title: "GUEST LECTURE",
      description:
        "An insightful session was organized,featuring esteemed alumnus Mr. Ashok Kumar Nandy.Students of Pre-final and final-year explored industry trends, technological advancements, and career opportunities. The session provided valuable perspectives, bridging academia and industry to guide students in their professional journey.",
      imageUrls: imagesGuestLecture,
      carouselImage: imagesGuestLecture[0],
      ctaPrimary: {
        //label: "Explore now →",
        // link: "https://example.com",
      },
      ctaSecondary: {
        label: "9 Aug 2023",
      },
    },
    {
      id: "photoshoot-farewell",
      year: 2024,
      title: "PHOTOSHOOT & FAREWELL",
      description:
        "The graduating batch captured lasting memories during their farewell and batchmates photoshoot. Beginning with a group picture alongwith faculty, the celebration continued at the Tagore Open Air Theatre (TOAT) followed by the culltural preformance of the departmental Professor. Wishing them all success in their future endeavors!",
      imageUrls: imagesPhotoshootFarewell,
      carouselImage: imagesPhotoshootFarewell[0],
      ctaPrimary: {
        //label: "Explore now →",
        // link: "https://example.com",
      },
      ctaSecondary: {
        label: "15 March 2024",
      },
    },
];

const eventYears = [...new Set(cardData.map((c) => c.year))].sort((a, b) => b - a);

// Overview Carousel Component
function OverviewCarousel({ setYearFilter }) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [selectedEventId, setSelectedEventId] = useState(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % cardData.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  const scrollToEvent = (card) => {
    setYearFilter(String(card.year));
    setSelectedEventId(card.id);
    requestAnimationFrame(() => {
      const eventElement = document.getElementById(`event-${card.id}`);
      if (eventElement) {
        eventElement.scrollIntoView({ behavior: "smooth", block: "center" });
        eventElement.classList.add("ring-4", "ring-yellow-400/50");
        setTimeout(() => {
          eventElement.classList.remove("ring-4", "ring-yellow-400/50");
        }, 2000);
      }
    });
  };

  return (
    <div className="w-full max-w-6xl mx-auto mb-12 relative">
      {/* Main Carousel */}
      <div className="relative h-[22rem] sm:h-[26rem] md:h-[32rem] lg:h-[36rem] min-h-[18rem] rounded-2xl overflow-hidden shadow-2xl">
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent z-10"></div>
        
        {/* Carousel Images */}
        <div 
          className="flex transition-transform duration-700 ease-in-out h-full"
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          {cardData.map((event) => (
            <div
              key={event.id}
              className="min-w-full h-full relative cursor-pointer"
              onClick={() => scrollToEvent(event)}
            >
              <img
                src={event.carouselImage}
                alt={event.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 p-6 z-20 bg-gradient-to-t from-black/95 via-black/80 to-transparent">
                <h3 className="text-2xl md:text-3xl font-bold text-yellow-400 mb-2 drop-shadow-lg">
                  {event.title}
                </h3>
                <p className="text-white text-sm md:text-base line-clamp-3 md:line-clamp-4 max-w-2xl drop-shadow-md font-medium">
                  {event.description}
                </p>
                <div className="mt-3 inline-block px-3 py-1 bg-yellow-400/90 rounded-full text-black text-sm font-bold shadow-lg">
                  {event.ctaSecondary.label}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Navigation Arrows */}
        <button
          onClick={() => goToSlide(currentSlide === 0 ? cardData.length - 1 : currentSlide - 1)}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 z-30 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full transition-all duration-200"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        
        <button
          onClick={() => goToSlide((currentSlide + 1) % cardData.length)}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 z-30 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full transition-all duration-200"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>

      {/* Dot Indicators */}
      <div className="flex justify-center mt-6 space-x-2">
        {cardData.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-200 ${
              currentSlide === index ? 'bg-yellow-400 scale-125' : 'bg-white/30 hover:bg-white/50'
            }`}
          />
        ))}
      </div>

      {/* Event Navigation Thumbnails */}
      <div className="mt-8">
        <h4 className="text-lg font-semibold text-yellow-400 mb-4 text-center">
          Quick Navigate to Events
        </h4>
        <div className="flex flex-wrap justify-center gap-4">
          {cardData.map((event) => (
            <button
              key={event.id}
              type="button"
              onClick={() => scrollToEvent(event)}
              className={`group relative overflow-hidden rounded-lg transition-all duration-300 hover:scale-105 ${
                selectedEventId === event.id ? "ring-2 ring-yellow-400" : ""
              }`}
            >
              <img
                src={event.carouselImage}
                alt={event.title}
                className="w-24 h-16 object-cover group-hover:brightness-110 transition-all duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
              <div className="absolute bottom-1 left-1 right-1">
                <p className="text-white text-xs font-bold line-clamp-1 drop-shadow-lg">
                  {event.title}
                </p>
              </div>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

export function Events() {
  const [yearFilter, setYearFilter] = useState("all");
  const filteredCards =
    yearFilter === "all"
      ? cardData
      : cardData.filter((c) => c.year === Number(yearFilter));

  return (
    <div className="flex flex-col items-center justify-center w-full">
      <div className="absolute inset-0 pointer-events-none z-10 overflow-x-hidden">
        <Spotlight />
      </div>

      <h1 className="text-xl md:text-3xl font-bold text-center mt-24 text-yellow-400 mb-8">
        Events Conducted by us
      </h1>

      <h2 className="text-lg md:text-2xl font-semibold text-center mb-8 text-yellow-300">
        Event highlights
      </h2>
      <OverviewCarousel setYearFilter={setYearFilter} />

      <h2 className="text-lg md:text-2xl font-semibold text-center mt-16 mb-4 text-yellow-300">
        Detailed Event Gallery
      </h2>
      <p className="text-center text-neutral-400 text-sm max-w-xl mb-6 px-4">
        Filter events by year, or choose &ldquo;All years&rdquo; to see everything.
      </p>

      <div className="flex flex-wrap items-center justify-center gap-3 mb-10 px-4">
        <label htmlFor="events-year-filter" className="text-neutral-300 text-sm">
          Year
        </label>
        <select
          id="events-year-filter"
          value={yearFilter}
          onChange={(e) => setYearFilter(e.target.value)}
          className="bg-neutral-900 border border-white/20 text-yellow-300 rounded-lg px-4 py-2.5 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-yellow-400/50 min-w-[10rem]"
        >
          <option value="all">All years</option>
          {eventYears.map((y) => (
            <option key={y} value={y}>
              {y}
            </option>
          ))}
        </select>
        <span className="text-neutral-500 text-sm">
          {filteredCards.length}{" "}
          {filteredCards.length === 1 ? "event" : "events"}
        </span>
      </div>

      <div className="flex flex-wrap gap-6 justify-center mb-16 px-4">
        {filteredCards.length === 0 ? (
          <p className="text-neutral-400 text-center py-8">
            No events for this year.
          </p>
        ) : (
          filteredCards.map((card) => (
            <div
              key={card.id}
              id={`event-${card.id}`}
              className="transition-all duration-300"
            >
              <CardContainer className="inter-var">
                <CardContent card={card} />
              </CardContainer>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

function CardContent({ card }) {
  const [currentImage, setCurrentImage] = useState(0);
  const [descExpanded, setDescExpanded] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % card.imageUrls.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [card.imageUrls]);

  return (
    <CardBody className="bg-neutral-900 relative group/card hover:shadow-2xl hover:shadow-emerald-500/[0.1] border border-white/[0.2] w-auto sm:w-[30rem] h-auto rounded-xl p-6">
      {/* Title Container */}
      <div className="relative">
        {/* CTA Secondary Button Positioned Above Title */}
        <CardItem
          translateZ="20"
          as="button"
          className="absolute -top-2 -right-2 px-4 py-2 rounded-xl bg-yellow-400/60 text-black text-xs font-bold"
        >
          {card.ctaSecondary.label}
        </CardItem>

        {/* Title */}
        <CardItem
          translateZ="50"
          className="text-xl font-bold text-yellow-300 mr-24"
        >
          {card.title}
        </CardItem>
      </div>

      {/* Description */}
      <CardItem
        as="p"
        translateZ="60"
        className={`text-neutral-300 text-sm max-w-sm mt-2 leading-relaxed ${
          descExpanded ? "" : "line-clamp-5"
        }`}
      >
        {card.description}
      </CardItem>
      <CardItem translateZ="25" className="mt-2">
        <button
          type="button"
          onClick={() => setDescExpanded((v) => !v)}
          className="text-xs font-semibold text-yellow-400 hover:text-yellow-300 transition-colors underline-offset-2 hover:underline"
          aria-expanded={descExpanded}
        >
          {descExpanded ? "Show less" : "Read full description"}
        </button>
      </CardItem>

      {/* Dynamic Image Transition */}
      <CardItem translateZ="100" className="w-full mt-4">
        <div
          style={{
            backgroundImage: `url(${card.imageUrls[currentImage]})`,
            transition: "background-image 1s ease-in-out",
          }}
          className="h-60 w-full rounded-xl bg-cover bg-center shadow-xl"
        ></div>
      </CardItem>

      {/* CTA Primary Button */}
      <div className="flex justify-start items-center mt-8">
        {card.ctaPrimary?.link ? (
          <CardItem
            translateZ={20}
            as={Link}
            to={card.ctaPrimary.link}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 rounded-xl text-xs font-normal text-yellow-300"
          >
            {card.ctaPrimary.label}
          </CardItem>
        ) : (
          <CardItem
            translateZ={20}
            as="span"
            className="px-4 py-2 rounded-xl text-xs font-normal text-yellow-300/70 cursor-default"
          >
            {card.ctaPrimary.label}
          </CardItem>
        )}
      </div>
    </CardBody>
  );
}

export default Events;