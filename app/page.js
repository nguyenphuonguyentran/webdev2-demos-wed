import Link from "next/link";

export default function Page() {
  return (
    <div>
      <h1>Web Dev 2 Demos</h1>
      <p>Demos for Web Dev 2</p>
      <ul>
        <li>
          <Link href="/week-2">Week 2 Demo</Link>
        </li>
      </ul>
    </div>
  );
}
