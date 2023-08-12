import NavBar from './NavBar';
import HeaderContent from './HeaderContent';
export default function Header (){
    // the video is temporary and should be removed before production
    return (
		<header className="relative h-[60vh] bg-black">
			<video autoPlay loop className="video-home absolute inset-0 h-full w-full object-cover opacity-30 bg-black bg-opacity-25" muted>
                <source src="https://resources.videvo.net/wp-content/themes/ViDEVO/home-videos/11.mp4" type="video/mp4" />
            </video>
			<NavBar />
            <HeaderContent />
		</header>
	);
}