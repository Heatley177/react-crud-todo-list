import { LinkIcon } from '@heroicons/react/24/outline'

function Navbar() {
    return (
      <header>
        <nav className="navbar">
        <a href="https://github.com/Heatley177" className="logo" target="_blank">
            <LinkIcon width={20} height={20} strokeWidth={2}/> By Brett Heatley</a>
        <h2 className='title'>To-Do List</h2>
        </nav>
        </header>
    );
  }
  
  export default Navbar;