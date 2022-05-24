import Link from 'next/link'

export default function Header() {
  return (
    <header className="header-main">
      <div>
       <Link href="/"><a className="masthead">Matterday</a></Link>
      </div>
      <a href="https://www.netlify.com/?utm_campaign=website_launch_2022_05_rework_your_workweek&utm_content=matterday" className="logo">
        <img 
          src="/images/logomark-netlify.svg"
          width="26"
          height="26"
          alt="Netlify logomark"
        />
      </a>
      <a href="https://supabase.com/" className="logo">
        <img
          src="/images/logomark-supabase.svg"
          width="26"
          height="26"
          alt="Supabase logomark"
        />
      </a>
    </header>
  )
}