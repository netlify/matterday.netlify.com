import Link from "next/link";

export default function ShareAnchor() {
  return (
    <div className="share-anchor">
      <Link href="/#share">
        <a>Plan yours</a>
      </Link>
    </div>
  )
}