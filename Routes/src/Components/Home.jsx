import { Link, Outlet, useNavigate } from "react-router-dom";



function Home() {

    let navi=useNavigate();

    return(
    <div className='w-screen'>
        <nav className='bg-black text-white text-xl font-bold flex justify-around p-4'>
            <Link  to={"/"}><h1>Logo</h1></Link>
            <div className='flex gap-4'>
                
                <Link to={"/Resume"}><p>Resume</p></Link>
                <Link to={"/Project"}><p>Project</p></Link>
                <Link to={"/About"}><p>About us</p></Link>
                <Link to={"/Contact"}><p>Contact us</p></Link>
                
            </div>
        </nav>
        <Outlet/>

    </div>)
}
export default Home;