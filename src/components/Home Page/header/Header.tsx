import NavBar from "./NavBar";
import HeaderContent from "./HeaderContent";
export default function Header() {
  return (
    <header className="relative h-[100vh] md:h-[65vh] bg-black">

      <video
        autoPlay
        loop
        className="video-home absolute inset-0 h-full w-full object-cover opacity-30 bg-black bg-opacity-25"
        muted
      >
        <source src="https://resources.videvo.net/wp-content/themes/ViDEVO/home-videos/11.mp4" />
      </video>
      <NavBar ShowSearchBar={false} />
      <HeaderContent />
    </header>
  );
}
