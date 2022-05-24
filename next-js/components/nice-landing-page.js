import Head from "next/head";
import dynamic from "next/dynamic";

// Form component requires a user that is stored in localStorage
const Form = dynamic(() => import("components/form"), { ssr: false });

const NiceLandingPage = () => {
  return (
    <>
      <Head>
        <meta name="description" content="What could you do with an extra day a week to spend on what matters?" />
        <meta content="What could you do with an extra day a week to spend on what matters?" name="twitter:description" property="og:description" />
        <meta content="https://matterday.netlify.com" property="og:url" />
        <meta content="https://matterday.netlify.com" property="twitter:url" />
        <meta content="https://matterday.netlify.com/images/matterday-og-default.png" property="og:image" />
        <meta content="https://matterday.netlify.com/images/matterday-og-default.png" name="twitter:image" />
      </Head>
      <div className="share-anchor"><a href="#share">Plan yours</a></div>
      <div className="parallax">
        <header className="header-main">
          <div>
            <a href="/" className="masthead">Matterday</a>
          </div>
          <a href="https://netlify.com" className="logo">
            <img src="/images/logomark-netlify.svg" width="26" height="26" alt="Netlify logomark" />
          </a>
          <a href="https://supabase.com/" className="logo">
            <img src="/images/logomark-supabase.svg" width="26" height="26" alt="Supabase logomark" />
          </a>
        </header>
        <div className="overlay">
          <div></div>
        </div>
        <div className="underlay">
          <div className="calendar-container">
            <ol className="calendar">
              <li className="calendar-day">
                <small className="calendar-event short"></small>
                <small className="calendar-event short"></small>
                <small className="calendar-event"></small>
                <small className="calendar-event tall"></small>
                <small className="calendar-event"></small>
                <small className="calendar-event short"></small>
                <small className="calendar-event short"></small>
                <small className="calendar-event"></small>
              </li>
              <li className="calendar-day">
                <span>Thursday</span>
                <small className="calendar-event"></small>
                <small className="calendar-event"></small>
                <small className="calendar-event short"></small>
                <small className="calendar-event short"></small>
                <small className="calendar-event tall"></small>
                <small className="calendar-event short"></small>
                <small className="calendar-event short"></small>
                <small className="calendar-event"></small>
              </li>
              <li className="calendar-day">
                <span>Friday</span>
                <small className="calendar-event short"></small>
                <small className="calendar-event short"></small>
                <small className="calendar-event"></small>
                <small className="calendar-event tall"></small>
                <small className="calendar-event short"></small>
                <small className="calendar-event short"></small>
                <small className="calendar-event"></small>
                <small className="calendar-event"></small>
              </li>
              <li className="calendar-day matterday">
                <span>Matterday</span>
                <small className="calendar-event"></small>
                <small className="calendar-event"></small>
                <small className="calendar-event"></small>
                <small className="calendar-event"></small>
                <small className="calendar-event"></small>
                <small className="calendar-event"></small>
                <small className="calendar-event"></small>
              </li>
              <li className="calendar-day">
                <small className="calendar-event short"></small>
                <small className="calendar-event short"></small>
                <small className="calendar-event tall"></small>
                <small className="calendar-event"></small>
                <small className="calendar-event"></small>
                <small className="calendar-event short"></small>
                <small className="calendar-event short"></small>
                <small className="calendar-event"></small>
              </li>
            </ol>
          </div>
        </div>
        <section className="parallax-group intro">
          <div className="parallax-layer background">
            <div className="content">
              <h1>What if you had an extra day a week?</h1>
              {/*  TODO: add ROI link */}
              <p>A recent <a href="">ROI study</a> found that Netlify saves development teams a work day per week so they can spend that time on what matters.</p>
              <p>What could you do with it?</p>
            </div>
          </div>
        </section>
        <section className="parallax-group pieces intro-pieces">
          <div className="parallax-layer foreground layer-1">
            <small className="event-detailed tall blue event-1">
              <strong>That ambitious project</strong>
              <span>10:00am</span>
            </small>
          </div>
          <div className="parallax-layer foreground layer-2">
            <small className="event-detailed purple event-2">
              <strong>Take a nap</strong>
              <span>2:30pm</span>
            </small>
          </div>
          <div className="parallax-layer foreground layer-3">
            <small className="event-detailed short purple event-3">
              <strong>Tacos</strong>
              <span>1pm</span>
            </small>
          </div>
          <div className="parallax-layer foreground layer-1">
            <small className="event-detailed tall blue gold event-4">
              <strong>Family fun</strong>
              <span>All day</span>
            </small>
          </div>
          <div className="parallax-layer foreground layer-2">
            <small className="event-detailed teal event-5">
              <strong>Forge a new path</strong>
              <span>9:00am</span>
            </small>
          </div>
          <div className="parallax-layer foreground layer-3">
            <small className="event-detailed short purple event-6">
              <strong>Dance party</strong>
              <span>3pm</span>
            </small>
          </div>
        </section>
        <section className="parallax-group slow-down">
          <div className="parallax-layer background">
            <div className="background-container">
              <div className="background-artwork"></div>
            </div>
            <div className="content">
              <h2>Maybe you could slow down.</h2>
              <p>You first need time before you can “take your time.”</p>
              <p>When you’re not in a rush, you can sweat the details, put in that extra bit of care and attention that takes things from good to great.</p>
              <p>Smelling the roses can lead to inspired serendipity.</p>
            </div>
          </div>
        </section>
        <section className="parallax-group pieces slow-down-pieces">
          <div className="parallax-layer foreground layer-1">
            <img src="/images/stopwatch.svg" alt="stopwatch" className="watch" />
          </div>
          <div className="parallax-layer foreground layer-2">
            <img src="/images/rose-purple.svg" alt="purple rose" className="rose rose1" />
          </div>
          <div className="parallax-layer foreground layer-3">
            <img src="/images/rose-purple.svg" alt="purple rose" className="rose rose2"  />
          </div>
          <div className="parallax-layer foreground layer-3">
            <img src="/images/rose-purple.svg" alt="purple rose" className="rose rose3"  />
          </div>
          <div className="parallax-layer foreground layer-1">
            <img src="/images/rose-blue.svg" alt="blue rose" className="rose rose4"  />
          </div>
        </section>
        <section className="parallax-group focus">
          <div className="parallax-layer background">
            <div className="background-container">
              <div className="background-artwork">
                <div className="focus-shapes"></div>
              </div>
            </div>
            <div className="content">
              <h2>You could sharpen your focus.</h2>
              <p>With more time, less needs to happen at once.</p>
              <p>So much benefits from devoted attention (and not just our work). We can spend more time on our health, our passions, and our relationships.</p>
            </div>
          </div>
        </section>
        <section className="parallax-group pieces focus-pieces">
          <div className="parallax-layer foreground layer-1">
            <div className="shapes-container">
              <img src="/images/shapes.svg" className="shapes" alt="geometric shapes" />
            </div>
          </div>
        </section>
        <section className="parallax-group pieces focus-pieces2">
          <div className="parallax-layer foreground layer-1">
            <div className="lens"></div>
          </div>
        </section>
        <section className="parallax-group adds-up">
          <div className="parallax-layer background">
            <div className="background-container">
              <div className="background-artwork"></div>
            </div>
            <div className="content">
              <h2>The time really adds up.</h2>
              <p>How much total time are we really talking here?</p>
              <p>One work day saved per week means 52 days (416 hours or 24,960 minutes) per year.</p>
              <p>In that time, you could...</p>
            </div>
          </div>
        </section>
        <section className="parallax-group pieces adds-up-pieces1">
          <div className="parallax-layer foreground layer-1 addition-back">
            <img src="/images/addition-back.svg" alt="" />
          </div>
        </section>
        <section className="parallax-group pieces adds-up-pieces">
          <div className="parallax-layer foreground layer-2 addition-total">
            <div className="addition-receipt">
              <span>60 min</span>
              <span>+ 60 min</span>
              <span className="total">120 min</span>
              <span>+ 60 min</span>
              <span className="total">180 min</span>
              <span>+ 60 min</span>
              <span className="total">240 min</span>
              <span>+ 60 min</span>
              <span className="total">300 min</span>
              <span>+ 60 min</span>
              <span className="total">360 min</span>
              <span>+ 60 min</span>
              <span className="total">420 min</span>
              <span>+ 60 min</span>
              <span className="total">480 min</span>
              <span>+ 60 min</span>
              <span className="total">540 min</span>
              <span>+ 60 min</span>
              <span className="total">600 min</span>
              <span>+ 60 min</span>
              <span className="total">660 min</span>
              <span>+ 60 min</span>
              <span className="total">720 min</span>
            </div>
          </div>
        </section>
        <section className="parallax-group pieces adds-up-pieces2">
          <div className="parallax-layer foreground layer-1 addition-front">
            <img src="/images/addition-front.svg" alt="addition machine" />
          </div>
        </section>
        <section className="parallax-group the-office">
          <div className="parallax-layer background">
            <div className="background-container">
              <div className="background-artwork"></div>
            </div>
            <div className="content">
              <h3>Watch all 9 seasons of <em>The Office</em> 4 times through.</h3>
            </div>
          </div>
        </section>
        <section className="parallax-group pieces the-office-pieces">
          <div className="parallax-layer foreground layer-1">
            <img src="/images/the-office-mug.svg" alt="World’s Best Boss mug" className="mug" />
          </div>
          <div className="parallax-layer foreground layer-2">
            <img src="/images/paper-airplane.svg" alt="paper airplane" className="airplane1" />
          </div>
          <div className="parallax-layer foreground layer-3">
            <img src="/images/paper-airplane.svg" alt="paper airplane" className="airplane2" />
          </div>
          <div className="parallax-layer foreground layer-2">
            <img src="/images/paper-airplane.svg" alt="paper airplane" className="airplane3" />
          </div>
        </section>
        <section className="parallax-group space-mountain">
          <div className="parallax-layer background">
            <div className="background-container">
              <div className="background-artwork"></div>
            </div>
            <div className="content">
              <h3>Ride Space Mountain at Tokyo Disneyland 9,076 consecutive times.</h3>
            </div>
          </div>
        </section>
        <section className="parallax-group pieces space-mountain-pieces">
          <div className="parallax-layer foreground layer-1 stars">
          </div>
          <div className="parallax-layer foreground layer-2">
            <img src="/images/rocket.svg" alt="rocket ship" className="rocket" />
          </div>
        </section>
        <section className="parallax-group walking">
          <div className="parallax-layer background">
            <div className="background-container">
              <div className="background-artwork"></div>
            </div>
            <div className="content">
              <h3>Walk from Las Vegas, Nevada to Austin, Texas.</h3>
              <p></p>
            </div>
          </div>
        </section>
        <section className="parallax-group pieces walking-pieces">
          <div className="parallax-layer foreground layer-1">
            <img src="/images/route.svg" alt="dashed, winding path from one marker to another" className="route" />
          </div>
        </section>
        <section className="parallax-group get-more-rest">
          <div className="parallax-layer background">
            <div className="background-container">
              <div className="background-artwork"></div>
            </div>
            <div className="content">
              <h2>You could get more rest.</h2>
              <p>Afternoon naps 4 lyfe.</p>
              <p>Just one more hour of sleep per day can significantly improve mood, productivity, and memory.</p>
            </div>
          </div>
        </section>
        <section className="parallax-group pieces get-more-rest-pieces">
          <div className="parallax-layer foreground layer-1">
            <img src="/images/cloud1.svg" alt="cloud" className="cloud cloud1" />
          </div>
          <div className="parallax-layer foreground layer-2">
            <img src="/images/cloud2.svg" alt="cloud" className="cloud cloud2" />
          </div>
          <div className="parallax-layer foreground layer-1">
            <img src="/images/pillow.svg" alt="pillow" className="pillow pillow1" />
          </div>
          <div className="parallax-layer foreground layer-3">
            <img src="/images/cloud3.svg" alt="cloud" className="cloud cloud3" />
          </div>
          <div className="parallax-layer foreground layer-2">
            <img src="/images/cloud1.svg" alt="cloud" className="cloud cloud4" />
          </div>
          <div className="parallax-layer foreground layer-1">
            <img src="/images/cloud1.svg" alt="cloud" className="cloud cloud5" />
          </div>
        </section>
        <section className="parallax-group play">
          <div className="parallax-layer background">
            <div className="background-container">
              <div className="background-artwork"></div>
            </div>
            <div className="content">
              <h2>You could play.</h2>
              <p>Doing things just for fun can help us feel more motivated and creative in other aspects of our lives, too.</p>
              <p>Like adding a <a href="https://netlify.com">Konami code Phil mode to your website</a>, just as a random example.</p>
            </div>
          </div>
        </section>
        <section className="parallax-group pieces play-pieces">
          <div className="parallax-layer foreground layer-2">
            <img src="/images/lego-up.svg" alt="LEGO brick" className="lego lego1" />
          </div>
          <div className="parallax-layer foreground layer-3">
            <img src="/images/lego-up.svg" alt="LEGO brick" className="lego lego2" />
          </div>
          <div className="parallax-layer foreground layer-2">
            <img src="/images/lego-up.svg" alt="LEGO brick" className="lego lego3" />
          </div>
          <div className="parallax-layer foreground layer-1">
            <img src="/images/lego-up.svg" alt="LEGO brick" className="lego lego4" />
          </div>
          <div className="parallax-layer foreground layer-1">
            <img src="/images/cross-stitch.svg" alt="cross stitch hoop embroidered with “Hello World” next to a spool of thread" className="cross-stitch" />
          </div>
        </section>
        <section className="parallax-group backburner">
          <div className="parallax-layer background">
            <div className="background-container">
              <div className="background-artwork"></div>
            </div>
            <div className="content">
              <h2>You could take items off the backburner.</h2>
              <p>Matterday is the new “someday.”</p>
              <p>Close those backlog issues, read that book, take that trip, learn that new skill.</p>
            </div>
          </div>
        </section>
        <section className="parallax-group pieces backburner-pieces">
          <div className="parallax-layer foreground layer-1 todo-list-container">
            <img src="/images/todo-list.svg" alt="a Trello todo list with “Someday” crossed out and “Now” as the new header, items on the list include Read new book, Crush tech debt, and Dream vacation" className="todo-list" />
          </div>
        </section>
        <section className="parallax-group big-swings">
          <div className="parallax-layer background">
            <div className="background-container">
              <div className="background-artwork"></div>
            </div>
            <div className="content">
              <h2>You could take big swings.</h2>
              <p>What kind of world do you want to make?</p>
              <p>Maybe it’s a risky project, turning the ship at work, or finding a brand new path.</p>
              <p>What could more time make possible?</p>
            </div>
          </div>
        </section>
        <section className="parallax-group pieces big-swings-pieces">
          <div className="parallax-layer foreground layer-2">
            <div className="pinata-string"></div>
          </div>
          <div className="parallax-layer foreground layer-2">
            <img src="/images/pinata.svg" alt="a colorful donkey piñata" className="pinata" />
          </div>
          <div className="parallax-layer foreground layer-1">
            <img src="/images/pinata-pizza.svg" alt="lots of pizza slices falling through the air" className="pinata-pizza" />
          </div>
        </section>
        <section id="share" className="parallax-group section-cta">
        <header className="header-main">
          <div>
            <a href="/" className="masthead">Matterday</a>
          </div>
          <a href="https://netlify.com" className="logo">
            <img src="/images/logomark-netlify.svg" width="26" height="26" alt="Netlify logomark" />
          </a>
          <a href="https://supabase.com/" className="logo">
            <img src="/images/logomark-supabase.svg" width="26" height="26" alt="Supabase logomark" />
          </a>
        </header>
          <div className="content">
            <Form />
          </div>
        </section>
      </div>
    </>
  );
};

export default NiceLandingPage;
