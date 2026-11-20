import { ArrowUpRight } from 'lucide-react'
import { useI18n } from '@/app/providers/I18nProvider'
import { ChapterRow } from '@/components/presentation/ChapterRow'
import { Kicker } from '@/components/ui/Kicker'
import { CHAPTERS, sceneHref } from '@/config/scenes'
import { useScrollReveal } from '@/hooks/useScrollReveal'

interface ProgramViewProps {
  onOpenAbout: () => void
}

export function ProgramView({ onOpenAbout }: ProgramViewProps) {
  const { t } = useI18n()
  const revealRef = useScrollReveal<HTMLDivElement>()

  return (
    <section
      ref={revealRef}
      aria-labelledby="program-title"
      className="page-x page-y flex-1"
    >
      <div className="mx-auto grid w-full max-w-7xl gap-12 lg:grid-cols-[minmax(0,1.55fr)_minmax(18rem,0.8fr)] lg:gap-16">
        <div>
          <div data-reveal>
            <Kicker>{t('program.kicker')}</Kicker>
            <h1
              id="program-title"
              className="mt-5 max-w-3xl font-display text-hero text-bone"
            >
              {t('program.title')}
            </h1>
            <p className="mt-5 max-w-2xl text-small leading-relaxed text-mist">
              {t('program.description')}
            </p>
          </div>

          <div
            data-reveal
            className="mt-9 flex items-center justify-between gap-4 border-b border-line pb-3"
          >
            <span className="label text-[0.56rem] text-mist">
              {t('program.chapterListLabel')}
            </span>
            <span className="label text-[0.56rem] text-mist-dim">
              {t('program.chapterCount', { count: CHAPTERS.length })}
            </span>
          </div>

          <ol aria-label={t('a11y.chapterList')}>
            {CHAPTERS.map((scene) => (
              <ChapterRow key={scene.id} scene={scene} />
            ))}
          </ol>

          <div className="mt-7 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <p className="label max-w-sm text-[0.52rem] leading-relaxed text-mist-dim">
              {t('program.footerNote')}
            </p>
            <a
              href={sceneHref('credits')}
              className="label group inline-flex items-center gap-2 text-[0.56rem] text-mist transition-colors hover:text-bone"
            >
              {t('program.credits')}
              <ArrowUpRight
                className="h-3.5 w-3.5 transition-colors group-hover:text-crimson rtl:-scale-x-100"
                aria-hidden="true"
              />
            </a>
          </div>
        </div>

        <aside className="lg:sticky lg:top-28 lg:self-start">
          <div data-reveal className="border-t border-crimson/60 pt-5">
            <Kicker>{t('program.note.kicker')}</Kicker>
            <h2 className="mt-4 font-display text-title text-bone">
              {t('program.note.title')}
            </h2>
            <p className="mt-4 text-small leading-relaxed text-mist">
              {t('program.note.body')}
            </p>
          </div>

          <div data-reveal className="mt-8 space-y-6">
            <div>
              <h3 className="label text-[0.58rem] text-bone">
                {t('program.note.scienceTitle')}
              </h3>
              <p className="mt-2 text-small leading-relaxed text-mist">
                {t('program.note.scienceBody')}
              </p>
            </div>

            <div>
              <h3 className="label text-[0.58rem] text-bone">
                {t('program.note.visualTitle')}
              </h3>
              <p className="mt-2 text-small leading-relaxed text-mist">
                {t('program.note.visualBody')}
              </p>
            </div>
          </div>

          <button
            type="button"
            onClick={onOpenAbout}
            className="label group mt-8 inline-flex items-center gap-2 border-b border-line pb-1 text-[0.56rem] text-mist transition-colors hover:border-bone hover:text-bone"
          >
            {t('program.note.button')}
            <ArrowUpRight
              className="h-3.5 w-3.5 transition-colors group-hover:text-crimson rtl:-scale-x-100"
              aria-hidden="true"
            />
          </button>
        </aside>
      </div>
    </section>
  )
}
