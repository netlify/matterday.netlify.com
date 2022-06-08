import Link from "next/link";

export default function Header() {
  return (
    <header className="header-main">
      <div>
       <Link href="/"><a className="masthead">Matterday</a></Link>
      </div>
      <a href="https://www.netlify.com/?utm_campaign=website_launch_2022_05_rework_your_workweek&utm_content=matterday" className="logo netlify" id="cta-logo-netlify">
        <img 
          src="/images/logo-netlify.svg"
          width="170"
          height="45"
          alt="Netlify"
        />
      </a>
      <a href="https://supabase.com/?utm_source=matterday&utm_medium=referral" className="logo supabase" id="cta-logo-supabase">
        <img
          src="/images/logo-supabase.svg"
          width="234"
          height="45"
          alt="Supabase"
        />
      </a>
    </header>
  )
}