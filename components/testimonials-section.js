"use client";

/* ------------------------------------------------------------------
 *  TestimonialsSection – zero animations, zero blur; smooth + a11y
 * ----------------------------------------------------------------*/
import { useEffect, useState } from "react";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";

const testimonials = [
  {
    name: "Mohammad Amir",
    role: "CEO, Connextar Technologies",
    content:
      "Working with Afaq was a game-changer. His speed, clean code, and ability to take ownership of complex tasks gave our team a serious edge.",
    rating: 5,
  },
  {
    name: "Hamza Kalim",
    role: "CEO, Animmza",
    content:
      "From frontend polish to backend stability, Afaq handled everything like a pro. His UI sensibility and dev skills made our product shine.",
    rating: 5,
  },
  {
    name: "Umair Shah",
    role: "Senior Developer, Connextar",
    content:
      "As someone who works alongside him, I’ve seen Afaq deliver high-quality results again and again. Reliable, sharp, and forward-thinking.",
    rating: 5,
  },
];

export default function TestimonialsSection() {
  const [i, setI] = useState(0);

  const next = () => setI((p) => (p + 1) % testimonials.length);
  const prev = () => setI((p) => (p - 1 + testimonials.length) % testimonials.length);

  // Optional autoplay (every 8s). Remove this effect to disable autoplay.
  useEffect(() => {
    const id = setInterval(next, 8000);
    return () => clearInterval(id);
  }, []);

  const t = testimonials[i];

  return (
    <section id="testimonials" className="py-24">
      <div className="container mx-auto px-6 md:px-10">
        {/* heading */}
        <h2 className="mb-4 text-center text-3xl font-extrabold md:text-4xl">
          <span className="bg-gradient-to-r from-indigo-700 via-blue-700 to-fuchsia-700 bg-clip-text text-transparent">
            What&nbsp;Clients&nbsp;Say
          </span>
        </h2>

        {/* tagline */}
        <p className="mx-auto mb-14 max-w-xl text-center text-lg text-slate-700">
          Trusted worldwide — consistently <strong className="text-indigo-700">5-star</strong> results.
        </p>

        {/* testimonial card */}
        <div className="relative mx-auto max-w-3xl">
          <article
            aria-roledescription="slide"
            aria-label={`Testimonial ${i + 1} of ${testimonials.length}`}
            className="rounded-3xl border border-slate-200 bg-white px-8 py-10 text-center shadow-sm"
          >
            {/* stars (static) */}
            <div className="mb-4 flex justify-center gap-0.5">
              {Array.from({ length: t.rating }).map((_, s) => (
                <span key={s} aria-hidden>
                  <Star size={22} className="fill-yellow-400 text-yellow-400" />
                </span>
              ))}
              <span className="sr-only">{t.rating} out of 5 stars</span>
            </div>

            {/* quote */}
            <p className="mx-auto mb-8 max-w-xl text-lg italic text-slate-800">“{t.content}”</p>

            {/* author */}
            <div className="flex items-center justify-center gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-indigo-700 text-lg font-black text-white">
                {t.name[0]}
              </div>
              <div className="text-left">
                <h4 className="font-semibold text-indigo-700">{t.name}</h4>
                <p className="text-xs text-slate-500">{t.role}</p>
              </div>
            </div>
          </article>

          {/* nav buttons */}
          <div className="mt-10 flex justify-center gap-6">
            <button
              aria-label="Previous testimonial"
              onClick={prev}
              className="inline-flex items-center justify-center rounded-full p-3 hover:bg-indigo-50 focus:outline-none focus:ring-2 focus:ring-indigo-700"
            >
              <ChevronLeft size={20} className="text-indigo-700" />
            </button>
            <button
              aria-label="Next testimonial"
              onClick={next}
              className="inline-flex items-center justify-center rounded-full p-3 hover:bg-indigo-50 focus:outline-none focus:ring-2 focus:ring-indigo-700"
            >
              <ChevronRight size={20} className="text-indigo-700" />
            </button>
          </div>

          {/* indicators (optional) */}
          <div className="mt-6 flex justify-center gap-2" role="tablist" aria-label="Testimonials">
            {testimonials.map((_, idx) => (
              <button
                key={idx}
                role="tab"
                aria-selected={i === idx}
                aria-label={`Show testimonial ${idx + 1}`}
                onClick={() => setI(idx)}
                className={`h-2.5 w-2.5 rounded-full ${
                  i === idx ? "bg-indigo-700" : "bg-slate-300"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
