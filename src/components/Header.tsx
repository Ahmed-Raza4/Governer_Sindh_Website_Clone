import Link from "next/link";

export default function Header() {
    return (
        <div className="navbar">
            <div className="logo">
                <img src="https://www.governorsindh.com/_next/static/media/logo.9ff76f62.png" alt=" logo" width="100px" />
            </div>
            <div className="para">
                <p>Tuition Free Education Program on Latest Technologies</p>
            </div>
            <div className="menu">
                <ul>
                    <Link href={"/"}>
                        <li>Home</li>
                    </Link>
                    <Link href={"/apply"}>
                        <li>Apply</li>
                    </Link>
                    <Link href={"/jobs"}>
                        <li>Jobs</li>
                    </Link>
                    <Link href={"/results"}>
                        <li>Result</li>
                    </Link>
                    <Link href={"/courses"}>
                        <li> <span>Courses  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="22" height="22" color="#000000" fill="none">
                            <path d="M18 9.00005C18 9.00005 13.5811 15 12 15C10.4188 15 6 9 6 9" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                        </svg></span></li>
                    </Link>
                </ul>
            </div>
        </div>
    )
}