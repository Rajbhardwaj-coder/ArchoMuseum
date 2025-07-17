import { useState, useEffect } from "react"
import logo from "../assets/logo1.png"
import { LINKS } from "../constants"
import { FaBars, FaLess } from "react-icons/fa6"
import { FaTimes } from "react-icons/fa"

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isAboutActive, setIsAboutActive] = useState(false)

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  useEffect(() => {
    const handleScrollEvent = () => {
      const aboutSection = document.getElementById("about")
      if (aboutSection) {
        const rect = aboutSection.getBoundingClientRect()
        // Check if about section is in viewport (top within 0 to window height)
        if (rect.top <= window.innerHeight && rect.bottom >= 0) {
          setIsAboutActive(true)
        } else {
          setIsAboutActive(false)
        }
      }
    }

    window.addEventListener("scroll", handleScrollEvent)
    return () => {
      window.removeEventListener("scroll", handleScrollEvent)
    }
  }, [])

  const handleScroll = (event, targetId) => {
    event.preventDefault()
    const targetElement = document.getElementById(targetId)
    if (targetElement) {
      const offsetTop = targetElement.offsetTop - 80
      window.scrollTo({
        top: offsetTop,
        behavior: "smooth",
      })
    }
    setIsMobileMenuOpen(false)
  }

  return (
    <nav className={`fixed top-4 z-50 flex w-full flex-col items-center justify-center ${isAboutActive ? "text-white" : "text-black"}`}>
      <div
        className={`flex w-full items-center justify-between 
    overflow-hidden p-4 backdrop-blur-lg lg:m-2 lg:w-[15cm]
    lg:rounded-full lg:shadow-lg`}
      >
        <img src={logo} alt="Logo" width={90} height={32} />
        <div className="hidden lg:flex space-x-4">
          {LINKS.map((link, index) => (
            <button
              key={index}
              type="button"
              className={`text-sm bg-transparent border-none cursor-pointer ${
                index !== 0 ? "border-l-2 border-neutral-300/20 pl-2" : ""
              } hover:opacity-50`}
              onClick={() => {
                if (link.text !== "Review") {
                  const targetElement = document.getElementById(link.targetId);
                  if (targetElement) {
                    const offsetTop = targetElement.offsetTop - 80;
                    window.scrollTo({
                      top: offsetTop,
                      behavior: "smooth",
                    });
                  }
                }
              }}
            >
              {link.text}
            </button>
          ))}
        </div>
        <div className="lg:hidden">
            <button onClick={toggleMobileMenu}>
                {isMobileMenuOpen ? <FaTimes /> :<FaBars />}
            </button>
        </div>
      </div>
      {isMobileMenuOpen &&(
        <div className="w-full backdrop-blur-lg lg:hidden">
           {LINKS.map((link, index) => (
            <a
              key={index}
              href={`#${link.targetId}`}
              className="block p-4 uppercase tracking-tighter"
              onClick={(e) => {
                if (link.text !== "Review" && link.text !== "Contact") {
                  handleScroll(e, link.targetId);
                } else {
                  e.preventDefault();
                }
              }}
            >
              {link.text}
            </a>
          ))}
        </div>
      )}
    </nav>
  )
}

export default Navbar
