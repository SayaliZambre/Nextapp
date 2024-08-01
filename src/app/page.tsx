// pages/index.js (or pages/index.tsx if using TypeScript)
import Image from 'next/image';
import Navbar from '../app/Navbar/index';
import Sidebar from '../app/Sidebar/index';


export default function Home() {
  return (
    <>
      <Navbar />
       <Sidebar />
      {/* <div>
        Hello
      </div> */}
    </>
  );
}
