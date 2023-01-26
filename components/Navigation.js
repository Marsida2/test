import { useEffect, useState } from "react"
import { FiSmartphone } from "react-icons/fi"
import { AiOutlineClose } from "react-icons/ai"
import Fade from "@mui/material/Fade"
import { HiMenu } from "react-icons/hi"

import { ANDROID_URL, IOS_URL } from "constants"

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [showPopup, setShowPopup] = useState(false)

  useEffect(() => {
    document.body.addEventListener("click", () => setIsOpen(false))
  })

  return (
    <>
      {/* Popup and overlay on top of the page */}
      <DownloadPopup showPopup={showPopup} setShowPopup={setShowPopup} />

      <nav className="flex items-center justify-between px-5 bg-white fixed w-full h-[70px] top-0 z-0">
        <div>
          <a className="flex-center" href="/">
            <img className="w-14" src="/images/logo_oz.png" alt="" />
          </a>
        </div>
        <div className="items-center justify-center md:flex">
          {/* Mobile */}
          <button
            className="block md:hidden"
            onClick={(e) => {
              e.stopPropagation()
              setIsOpen(true)
            }}
          >
            <HiMenu className="text-2xl text-black" />
          </button>

          <div
            className={`fixed inset-y-0 top-0 right-0 p-4 pl-6 pt-12 md:p-0 lg:justify-end transform shadow-xl md:shadow-none md:transform-none md:w-auto md:relative md:border-0 transition-transform z-0 flex flex-col items-start bg-white space-y-8 md:space-y-0 md:items-center md:flex-row w-72 ${
              isOpen ? "translate-x-0" : "translate-x-full"
            }`}
            // eslint-disable-next-line
            onClick={(e) => e.stopPropagation()}
          >
            <Link name="Accueil" target="/" setIsOpen={setIsOpen} />
            <Link
              name="Comment ça marche"
              target="#how-it-works"
              setIsOpen={setIsOpen}
            />
            <Link
              name="Nous contacter"
              target="mailto:ozensemble@fabrique.social.gouv.fr"
              setIsOpen={setIsOpen}
            />
            <DownloadPopupTrigger setShowPopup={setShowPopup} />
          </div>
        </div>
      </nav>
    </>
  )
}

const Link = ({ name, target, setIsOpen }) => (
  <a
    className="text-sm font-bold transition-all text-oz-blue hover:text-oz-green mr-6"
    href={target}
    onClick={() => setIsOpen(false)}
  >
    {name}
  </a>
)

const DownloadPopupTrigger = ({ setShowPopup }) => {
  return (
    <>
      <button
        className="flex group rounded-full bg-oz-pink font-bold text-white py-2 px-6 gap-1 items-center cursor-pointer hover:text-oz-pink hover:bg-white border border-oz-pink transition"
        onClick={() => setShowPopup(true)}
      >
        <FiSmartphone className="stroke-white group-hover:stroke-oz-pink transition" />
        <span>Télécharger l'app</span>
      </button>
    </>
  )
}

const DownloadPopup = ({ showPopup, setShowPopup }) => (
  <Fade in={!!showPopup} timeout={200}>
    <div
      className="test fixed z-10 top-0 left-0 w-full h-full bg-black bg-opacity-50 transition-all flex justify-center items-center"
      // eslint-disable-next-line
      onClick={() => setShowPopup(false)}
    >
      <div
        className="rounded-3xl bg-white text-center p-4 sm:p-10 mx-[10%] max-w-[800px] relative"
        // eslint-disable-next-line
        onClick={(e) => e.stopPropagation()}
      >
        <div className="absolute top-0 right-0">
          <button
            className="rounded-full bg-oz-green p-4 absolute top-1/2 right-1/2 transform translate-x-1/3 -translate-y-1/3"
            onClick={() => setShowPopup(false)}
          >
            <AiOutlineClose size={24} />
          </button>
        </div>
        <h6 className="text-oz-blue text-3xl font-bold">
          Télécharger l’application Oz Ensemble
        </h6>
        <div className="w-1/5 h-1 bg-oz-pink m-auto my-8" />
        <p className="text-xl mb-10">Elle est 100% gratuite et anonyme.</p>
        <div className="grid max-w-[250px] sm:max-w-none sm:grid-flow-col gap-6 auto-cols-fr md:w-5/6 m-auto">
          <a href={ANDROID_URL}>
            <img
              className="object-contain w-full"
              src="images/other/google-play-fr.png"
              alt=""
            />
          </a>
          <a href={IOS_URL}>
            <img
              className="object-contain w-full"
              src="images/other/app-store-fr.png"
              alt=""
            />
          </a>
        </div>
      </div>
    </div>
  </Fade>
)
