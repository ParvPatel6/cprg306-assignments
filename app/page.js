import Link from "next/link"; 
export default function Page() {
  return (
    <div>
      <h1 className="text-white">CPRG 306: Web Development 2 - Assignments</h1>
      <li className="text-white">
        <Link href = "/week-2">Week 2 </Link>
      </li>
      <li className="text-white">
        <Link href = "/week-3">Week 3</Link>
      </li>
      <li className="text-white">
        <Link href ="/week-4">Week 4</Link>
      </li>
      <li className="text-white">
        <Link href ="/week-5">Week 5</Link>
      </li>
    </div>
  );
}