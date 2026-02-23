const skillCategories = [
  {
    id: 'frontend',
    label: 'Frontend',
    skills: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS'],
  },
  {
    id: 'backend',
    label: 'Backend / Infra',
    skills: ['Supabase', 'Vercel', 'REST API'],
  },
  {
    id: 'ai',
    label: 'AI / Data',
    skills: ['Gemini API', 'Google Cloud Vision API', 'Mixpanel', 'Kakao Map API'],
  },
];

export function SkillsSection() {
  return (
    <section id="skills" className="section-divider">
      <div className="mx-auto max-w-[1200px] px-4 py-16 md:px-10">
        <div className="sticky top-14 z-40 -mx-4 mb-8 border-b border-[var(--neutral-300)] bg-[var(--neutral-200)]/95 px-4 py-4 backdrop-blur-sm md:-mx-10 md:px-10">
          <div className="flex items-center justify-between">
            <h2 className="font-[family-name:var(--font-space-grotesk)] text-display-h2 text-[var(--color-primary)]">
              Skills
            </h2>
            <span className="font-[family-name:var(--font-ibm-plex-mono)] text-caption text-[var(--neutral-500)]">
              {skillCategories.reduce((acc, cat) => acc + cat.skills.length, 0)}{' '}
              Technologies
            </span>
          </div>
        </div>

        <div className="grid gap-px border border-[var(--neutral-300)] bg-[var(--neutral-300)] md:grid-cols-3">
          {skillCategories.map((category) => (
            <div key={category.id} className="bg-[var(--neutral-200)] p-6">
              <p className="font-[family-name:var(--font-ibm-plex-mono)] text-caption mb-4 text-[var(--color-accent)]">
                {category.label}
              </p>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="border border-[var(--neutral-400)] bg-[var(--neutral-300)] px-3 py-1.5 font-[family-name:var(--font-ibm-plex-mono)] text-sm text-[var(--color-primary)] transition-colors hover:border-[var(--color-accent)] hover:text-[var(--color-accent)]"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
