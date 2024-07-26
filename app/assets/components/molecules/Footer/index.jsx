import Link from "next/link";
import { FaAngleUp } from "react-icons/fa6";

import { ArticleTitle } from "../../headers";
import Logo from "../../../images/down-logo.png";
import { LatestSlider } from "../..";
import { socials } from "../../../data";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container py-5">
        <div className="row mt-5">
          <div className="col-md-6 p-3 pe-md-5">
            <ArticleTitle
              title="pacesetter frontier magazine"
              light
              class_={"fs-6 mx-0 mb-3"}
              width={75}
            />

            <p className="text-center mt-5">
              <Link href="/">
                  <Image src={Logo} alt="Pacesetter Bottom Logo" width={300} />
              </Link>
            </p>

            <p className="text-justify text-white poppins my-4 lh-2">
              <b>Pacesetter Frontier Magazine</b> is a privately owned,
              quarterly published, multimedia, multi-connect, cosmopolitan,
              print and online magazine established in 2020 and headquartered in
              Enugu with a market audience and base cutting across 11 states of
              Nigeria’s 36 states and the nation’s capital, Abuja.
            </p>
          </div>
          <div className="col-md-6 p-3 pe-md-5">
            <ArticleTitle
              title="recent news"
              light
              class_={"fs-6 mx-0 mb-3 text-md-center"}
              width={50}
            />
            <div className="mt-5 text-white">
              <LatestSlider light />
            </div>
          </div>
          {/*<div className="col-md-4">*/}
          {/*  <ArticleTitle*/}
          {/*    title="Important links"*/}
          {/*    light*/}
          {/*    class_={"fs-6 mx-0 mb-3 text-md-end"}*/}
          {/*    width={67}*/}
          {/*  />*/}
          {/*  <div className="text-center mt-5">*/}
          {/*    <Link href="/" className="text-white fw-bold text-decoration-none d-block my-2">Home</Link>*/}
          {/*    <Link href="/about-us" className="text-white fw-bold text-decoration-none d-block my-2">About</Link>*/}
          {/*    <Link href="/category/fashion" className="text-white fw-bold text-decoration-none d-block my-2">Fashion</Link>*/}
          {/*    <Link href="/category/lifestyle" className="text-white fw-bold text-decoration-none d-block my-2">Lifestyle</Link>*/}
          {/*    <Link href="/category/entertainment" className="text-white fw-bold text-decoration-none d-block my-2">Entertainment</Link>*/}
          {/*    <Link href="/category/business-economy" className="text-white fw-bold text-decoration-none d-block my-2">Business Economy</Link>*/}
          {/*  </div>*/}
          {/*</div>*/}
        </div>
      </div>
      <div className="credit text-white text-center fs-12">
        <p className="mt-5 w-75 m-auto">
          All Rights Reserved | Pacesetter Frontier Magazine | Design by{" "}
          <a
            href="https://mark-eke.netlify.app"
            className="text-warning fw-bold text-decoration-none"
            rel="noreferrer"
            target="_blank"
          >
            Karm
          </a>{" "}
        </p>
        <p className="my-4">
          Follow us on all Social Platforms{" "}
          {socials.map((item) => (
            <a
              href={item.link}
              rel="noreferrer"
              className="text-white p-1 px-2"
              target="_blank"
              key={item.name}
              title={item.name}
            >
              {item.icon}
            </a>
          ))}
        </p>
      </div>
      <button
        id="scroll-top"
        className="rounded-circle shadow btn btn-dark p-3"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      >
        <FaAngleUp className="fs-3" />
      </button>
    </footer>
  );
};

export default Footer;
