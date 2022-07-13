import logo from './logo.svg';
import './App.css';

function Sidebar() {
  return (
    <div className="bg-red-200 h-screen w-[14%] text-center items-center bg-gradient-to-b from-indigo-500 via-purple-500 to-pink-500">
 <div>This is the spotify clone  </div>
 <div>Playlist</div>
 <div className='flex flex-row space-evenly w-[100%] justify-around'>
 <div><svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
  <path stroke-linecap="round" stroke-linejoin="round" d="M8 16l2.879-2.879m0 0a3 3 0 104.243-4.242 3 3 0 00-4.243 4.242zM21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
</svg></div>
<div>
    Serach
</div>
 </div>

 

    </div>
  );
}

export default Sidebar;
