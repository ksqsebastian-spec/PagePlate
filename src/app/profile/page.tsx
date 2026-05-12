import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';
import LenisProvider from '@/components/LenisProvider';

export const metadata = {
  title: 'Profile — Portfolio',
  description: 'Landscape photographer and visual storyteller based between the Dolomites and the Pacific Northwest.',
};

export default function ProfilePage() {
  return (
    <LenisProvider>
      <NavBar />
      <main style={{ backgroundColor: '#35311f', minHeight: '100svh' }}>
        <style>{`
          .profile-page {
            max-width: 900px;
            margin: 0 auto;
            padding: 12rem 20px 8rem;
          }
          .profile-page__eyebrow {
            font-size: 0.75rem;
            letter-spacing: 0.12em;
            text-transform: uppercase;
            color: rgba(255,255,255,0.4);
            margin: 0 0 2rem;
          }
          .profile-page__name {
            font-size: clamp(3rem, 7vw, 6rem);
            font-weight: 400;
            color: #fff;
            letter-spacing: -0.03em;
            line-height: 0.92;
            margin: 0 0 3rem;
          }
          .profile-page__divider {
            height: 1px;
            background: rgba(255,255,255,0.12);
            margin: 0 0 3rem;
            border: none;
          }
          .profile-page__bio {
            font-size: clamp(1.125rem, 2vw, 1.5rem);
            line-height: 1.6;
            color: rgba(255,255,255,0.65);
            font-weight: 400;
            letter-spacing: -0.01em;
            margin: 0 0 2rem;
          }
          .profile-page__detail {
            font-size: 1rem;
            line-height: 1.7;
            color: rgba(255,255,255,0.5);
            margin: 0 0 4rem;
          }
          .profile-page__stats {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 2rem;
            margin: 4rem 0;
            padding: 3rem 0;
            border-top: 1px solid rgba(255,255,255,0.1);
            border-bottom: 1px solid rgba(255,255,255,0.1);
          }
          .profile-page__stat-num {
            font-size: 2.5rem;
            font-weight: 400;
            color: #fff;
            letter-spacing: -0.03em;
            margin: 0 0 0.25rem;
          }
          .profile-page__stat-label {
            font-size: 0.75rem;
            letter-spacing: 0.08em;
            text-transform: uppercase;
            color: rgba(255,255,255,0.4);
            margin: 0;
          }
          .profile-page__cta {
            display: inline-flex;
            align-items: center;
            gap: 0.5rem;
            font-size: 0.875rem;
            letter-spacing: 0.08em;
            text-transform: uppercase;
            color: rgba(255,255,255,0.9);
            text-decoration: none;
            border-bottom: 1px solid rgba(255,255,255,0.25);
            padding-bottom: 0.25rem;
            transition: border-color 0.2s, color 0.2s;
          }
          .profile-page__cta:hover { border-color: #fff; color: #fff; }
          @media (max-width: 600px) {
            .profile-page { padding-top: 8rem; }
            .profile-page__stats { grid-template-columns: repeat(2, 1fr); }
          }
        `}</style>

        <div className="profile-page">
          <p className="profile-page__eyebrow">About</p>
          <h1 className="profile-page__name">Wild<br />Horizons</h1>
          <hr className="profile-page__divider" />

          <p className="profile-page__bio">
            A photographic practice dedicated to the places where landscape becomes
            language — where scale, light, and silence do the talking.
          </p>

          <p className="profile-page__detail">
            Founded in 2022, Wild Horizons is a landscape photography and visual
            research studio working across Europe, the Americas, and the Pacific.
            Each series begins with a question rather than a destination: what does
            this kind of light ask of the people who live inside it?
          </p>

          <p className="profile-page__detail">
            The work sits at the intersection of fine-art photography and quiet
            architecture — buildings that defer to their surroundings, homes that
            listen before they speak. We photograph both the landscape and the
            structures that choose to exist within it.
          </p>

          <div className="profile-page__stats">
            <div>
              <p className="profile-page__stat-num">10+</p>
              <p className="profile-page__stat-label">Series completed</p>
            </div>
            <div>
              <p className="profile-page__stat-num">3</p>
              <p className="profile-page__stat-label">Continents covered</p>
            </div>
            <div>
              <p className="profile-page__stat-num">2022</p>
              <p className="profile-page__stat-label">Studio founded</p>
            </div>
          </div>

          <a href="/contact/" className="profile-page__cta">
            Get in touch →
          </a>
        </div>

        <Footer />
      </main>
    </LenisProvider>
  );
}
