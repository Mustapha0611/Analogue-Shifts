import { useRef, useState } from "react";
import {GrClose} from 'react-icons/gr';
import {MdMenu} from 'react-icons/md';

function Navbar() {

    const navRef = useRef();
    const [open, setOpen] = useState(false);

    
    return ( 
        <nav ref={navRef} className={"navbar "+(open && 'active')}> 
            <div className="wrapper">
                <a href="/" className="logo">
                    <img src="logo.png" className="w-12 h-12" alt="" />
                    <h3 className="md:text-xl text-lg font-bold uppercase text-zinc-600 leading-5">
                        <span className="tracking-widest text-yellow-400">Analogue</span> 
                        <br />
                        <span className="tracking-[1rem]">Shifts</span>
                    </h3>
                </a>

                <button onClick={() => setOpen(!open)} className="close-btn">
                    {open ? <GrClose /> : <MdMenu />}
                </button>

                <div className="nav-menu">

                    <a href="/">talent as a service</a>
                    <a href="#news">news</a>
                    <a href="#about">about</a>
                    <a href="#blogs">blog</a>
                    <a href="#top">vet your talent</a>

                    <a href="#mailto:hello@analogueshifts.com" target='blank' className="find">
                        hire talent
                    </a>
                </div>

            </div>
        </nav>
     );
}

export default Navbar;