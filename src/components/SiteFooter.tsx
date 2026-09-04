import logo from '../assets/logo.png'

export function SiteFooter() {
  return (
    <footer className="bg-[#161513] font-body text-[#9c9384]">
      <div className="flex flex-wrap items-center justify-between gap-10 bg-rust px-6 py-12 text-cream md:px-14">
        <div>
          <div className="font-display text-3xl leading-none font-black uppercase tracking-[-0.02em] md:text-4xl">
            Ready to protect your log home?
          </div>
          <div className="mt-3 text-[15.5px] text-rust-on-dark">
            Free, no-pressure estimates across VA · TN · WV · PA · MD · DE.
          </div>
        </div>
        <a
          href="mailto:dan@logandtimberworx.com"
          className="rounded-sm bg-gold px-8 py-4 font-display text-[13.5px] font-extrabold tracking-[0.1em] whitespace-nowrap text-ink uppercase"
        >
          Request an Estimate
        </a>
      </div>

      <div className="mx-auto grid max-w-[1500px] grid-cols-1 gap-12 px-6 py-16 md:grid-cols-[1.4fr_1fr_1fr_1.1fr] md:px-14">
        <div>
          <img src={logo} alt="Log &amp; Timber Worx" className="mb-4 h-16 w-auto" />
          <p className="mb-4 max-w-[280px] text-sm leading-relaxed">
            Locally owned log &amp; timber home preservation specialists. We restore, seal, and
            protect legacy homes built to last generations.
          </p>
          <div className="font-display text-[11.5px] leading-[2.1] font-bold tracking-[0.12em] text-gold uppercase">
            Certified Zero-Failures Contractor
            <br />
            Perma-Chink · Sashco · Sikkens Applicator
          </div>
        </div>

        <div>
          <div className="mb-4 font-display text-xs font-bold tracking-[0.12em] text-cream uppercase">
            The Journey
          </div>
          <div className="flex flex-col gap-2.5 text-sm">
            <a href="#inspection" className="hover:text-gold">
              Inspection &amp; Assessment
            </a>
            <a href="#media-blasting" className="hover:text-gold">
              Media Blasting &amp; Stripping
            </a>
            <a href="#repair" className="hover:text-gold">
              Wood Repair &amp; Log Replacement
            </a>
            <a href="#chinking" className="hover:text-gold">
              Chinking &amp; Caulking
            </a>
            <a href="#staining" className="hover:text-gold">
              Staining &amp; Sealing
            </a>
            <a href="#maintenance" className="hover:text-gold">
              Ongoing Maintenance
            </a>
          </div>
        </div>

        <div>
          <div className="mb-4 font-display text-xs font-bold tracking-[0.12em] text-cream uppercase">
            Company
          </div>
          <div className="flex flex-col gap-2.5 text-sm">
            <a href="#top" className="hover:text-gold">
              Home
            </a>
            <a href="#journey" className="hover:text-gold">
              The Restoration Journey
            </a>
          </div>
        </div>

        <div>
          <div className="mb-4 font-display text-xs font-bold tracking-[0.12em] text-cream uppercase">
            Contact
          </div>
          <div className="flex flex-col gap-3 text-sm leading-relaxed">
            <div>Dan Link, Owner</div>
            <a href="tel:18447824637" className="font-semibold text-gold">
              (844) STAINER · 782-4637
            </a>
            <a href="mailto:dan@logandtimberworx.com" className="hover:text-gold">
              dan@logandtimberworx.com
            </a>
            <div>
              2867 W. Mosby Road
              <br />
              Harrisonburg, VA 22801
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-wrap items-center justify-between gap-2 border-t border-[#2a2723] px-6 py-6 font-display text-[11.5px] tracking-[0.1em] uppercase md:px-14">
        <span>© 2026 Log &amp; Timber Worx</span>
        <span className="text-[#6b6356]">Serving VA · TN · WV · PA · MD · DE</span>
      </div>
    </footer>
  )
}
