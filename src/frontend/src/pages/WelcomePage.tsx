import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowRight, Calendar, MapPin, Users, Zap } from "lucide-react";
import { motion } from "motion/react";

const PARTICLES = Array.from({ length: 18 }, (_, i) => ({
  id: i,
  left: `${5 + ((i * 5.5) % 90)}%`,
  size: 3 + (i % 4),
  delay: (i * 0.4) % 6,
  duration: 8 + (i % 5) * 1.5,
  color:
    i % 2 === 0 ? "oklch(0.52 0.18 350 / 0.35)" : "oklch(0.72 0.18 55 / 0.4)",
}));

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.15, delayChildren: 0.2 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 32 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: "easeOut" as const },
  },
};

const SPONSORS = [
  {
    name: "Salesforce",
    src: "/assets/generated/salesforce-transparent-transparent.dim_300x120.png",
  },
  {
    name: "MathWorks",
    src: "/assets/generated/mathworks-transparent-transparent.dim_300x120.png",
  },
];

export default function WelcomePage() {
  return (
    <div className="relative min-h-screen flex flex-col overflow-hidden">
      {/* Soft pink-to-yellow gradient background */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(135deg, oklch(0.95 0.04 355) 0%, oklch(0.97 0.03 20) 30%, oklch(0.98 0.04 60) 60%, oklch(0.97 0.05 80) 100%)",
        }}
      />
      {/* Subtle mesh overlay */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 60% 50% at 20% 30%, oklch(0.85 0.08 350 / 0.18) 0%, transparent 60%), radial-gradient(ellipse 50% 45% at 80% 70%, oklch(0.88 0.1 55 / 0.2) 0%, transparent 60%)",
        }}
      />

      {/* Floating particles */}
      {PARTICLES.map((p) => (
        <span
          key={p.id}
          className="absolute bottom-0 rounded-full"
          style={{
            left: p.left,
            width: p.size,
            height: p.size,
            backgroundColor: p.color,
            animation: `float-up ${p.duration}s ${p.delay}s linear infinite`,
          }}
        />
      ))}

      {/* Header */}
      <header className="relative z-10 flex items-center justify-between px-6 md:px-12 py-5">
        <div className="flex items-center gap-2">
          <Zap className="text-primary" size={22} strokeWidth={2.5} />
          <span className="font-display font-semibold text-foreground tracking-tight text-sm md:text-base">
            TechFest
          </span>
        </div>
        <Badge
          variant="outline"
          className="border-primary/40 text-primary bg-primary/10 font-body text-xs px-3 py-1"
        >
          2026 Edition
        </Badge>
      </header>

      {/* Main hero */}
      <main className="relative z-10 flex-1 flex flex-col items-center justify-center px-6 text-center">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-4xl mx-auto flex flex-col items-center gap-6"
        >
          {/* Event label */}
          <motion.div variants={itemVariants}>
            <span className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-primary font-body text-xs md:text-sm font-semibold tracking-widest uppercase">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              Pune · India · 2026
            </span>
          </motion.div>

          {/* Main heading */}
          <motion.h1
            variants={itemVariants}
            className="font-display font-extrabold leading-[1.05] tracking-tight"
            style={{ fontSize: "clamp(2.4rem, 7vw, 5.5rem)" }}
          >
            <span className="shimmer-text">Welcome to</span>
            <br />
            <span style={{ color: "oklch(0.42 0.18 350)" }}>Tech-Fest</span>
            <br />
            <span
              className="font-display font-black"
              style={{ color: "oklch(0.55 0.18 55)", letterSpacing: "-0.02em" }}
            >
              2026!
            </span>
          </motion.h1>

          {/* Katalyst logo + tagline */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col items-center gap-2"
          >
            <img
              src="/assets/generated/katalyst-logo-transparent-final-transparent.png"
              alt="Katalyst logo"
              className="h-16 md:h-20 w-auto object-contain"
            />
            <p
              className="font-body text-sm md:text-base font-semibold max-w-sm"
              style={{ color: "oklch(0.42 0.18 350)" }}
            >
              Empowering women in STEM for equality in opportunity and
              leadership
            </p>
          </motion.div>

          {/* Stats row */}
          <motion.div
            variants={itemVariants}
            className="flex flex-wrap justify-center gap-6 md:gap-10 text-center"
          >
            {[
              { icon: Users, label: "Participants", value: "350+" },
              { icon: Calendar, label: "Days", value: "1 Day" },
              { icon: MapPin, label: "Venue", value: "Cummins College, Pune" },
            ].map(({ icon: Icon, label, value }) => (
              <div key={label} className="flex flex-col items-center gap-0.5">
                <Icon size={16} className="text-primary mb-1" strokeWidth={2} />
                <span className="font-display font-bold text-xl md:text-2xl text-foreground">
                  {value}
                </span>
                <span className="font-body text-xs text-muted-foreground uppercase tracking-wider">
                  {label}
                </span>
              </div>
            ))}
          </motion.div>

          {/* Register button */}
          <motion.div variants={itemVariants} className="mt-2">
            <a
              href="https://forms.gle/oCT5cPRyJjQsTtGH7"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                data-ocid="welcome.primary_button"
                size="lg"
                className="animate-pulse-ring font-display font-bold text-base md:text-lg px-10 py-6 rounded-full glow-rose bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-300 group"
              >
                Register Now
                <ArrowRight
                  className="ml-2 transition-transform duration-300 group-hover:translate-x-1"
                  size={20}
                />
              </Button>
            </a>
          </motion.div>

          {/* Sponsors */}
          <motion.div
            variants={itemVariants}
            className="mt-4 w-full flex flex-col items-center gap-4"
          >
            <p className="font-body text-xs text-muted-foreground uppercase tracking-widest font-semibold">
              Sponsors
            </p>
            <div className="flex flex-wrap justify-center items-center gap-6 md:gap-10">
              {SPONSORS.map((sponsor) => (
                <div
                  key={sponsor.name}
                  className="flex items-center justify-center"
                >
                  <img
                    src={sponsor.src}
                    alt={`${sponsor.name} logo`}
                    className="h-10 md:h-12 w-auto object-contain"
                    style={{ mixBlendMode: "multiply" }}
                  />
                </div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </main>

      {/* Footer */}
      <footer className="relative z-10 py-5 text-center">
        <p className="font-body text-xs text-muted-foreground/60">
          © {new Date().getFullYear()}. Built with ♥ using{" "}
          <a
            href={`https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(window.location.hostname)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary/70 hover:text-primary transition-colors"
          >
            caffeine.ai
          </a>
        </p>
      </footer>
    </div>
  );
}
