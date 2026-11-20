import { X } from 'lucide-react'
import { useEffect, useRef } from 'react'
import { useI18n } from '@/app/providers/I18nProvider'
import { useMotionPreferences } from '@/app/providers/MotionPreferencesProvider'
import { IconButton } from '@/components/ui/IconButton'
import { Kicker } from '@/components/ui/Kicker'
import { PRESENTATION } from '@/config/presentation'
import { SITE } from '@/config/site'
import { useLockBodyScroll } from '@/hooks/useLockBodyScroll'
import { cn } from '@/utils/cn'

interface AboutDialogProps {
  open: boolean
  onClose: () => void
}

function AboutSection({ title, body }: { title: string; body: string }) {
  return (
    <section>
      <h3 className="label text-[0.56rem] text-crimson">{title}</h3>
      <p className="mt-2 text-small leading-relaxed text-mist">{body}</p>
    </section>
  )
}

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <dt className="label text-[0.5rem] text-mist-dim">{label}</dt>
      <dd className="mt-1 font-display text-lg text-bone">{value}</dd>
    </div>
  )
}

export function AboutDialog({ open, onClose }: AboutDialogProps) {
  const { t } = useI18n()
  const { reducedMotion, hasOverride, setReducedMotion, resetToSystem } =
    useMotionPreferences()
  const dialogRef = useRef<HTMLDialogElement>(null)

  useLockBodyScroll(open)

  useEffect(() => {
    const dialog = dialogRef.current
    if (!dialog) return

    if (open && !dialog.open) {
      dialog.showModal()
    } else if (!open && dialog.open) {
      dialog.close()
    }
  }, [open])

  useEffect(() => {
    const dialog = dialogRef.current
    return () => {
      if (dialog?.open) dialog.close()
    }
  }, [])

  const shortcuts = [
    { key: PRESENTATION.shortcuts.home, label: t('about.shortcut.home') },
    { key: PRESENTATION.shortcuts.program, label: t('about.shortcut.program') },
    {
      key: PRESENTATION.shortcuts.presentation,
      label: t('about.shortcut.presentation'),
    },
    { key: PRESENTATION.shortcuts.about, label: t('about.shortcut.about') },
    { key: PRESENTATION.shortcuts.close, label: t('about.shortcut.close') },
  ]

  return (
    <dialog
      ref={dialogRef}
      className="about-dialog"
      aria-labelledby="about-title"
      onClose={onClose}
      onClick={(event) => {
        if (event.target === event.currentTarget) onClose()
      }}
    >
      <div className="flex max-h-[min(88svh,54rem)] flex-col">
        <div className="flex items-start justify-between gap-6 border-b border-line px-6 py-5 sm:px-8">
          <div>
            <Kicker>{t('about.kicker')}</Kicker>
            <p className="label mt-2 text-[0.5rem] text-mist-dim">
              {SITE.name} · v{SITE.version}
            </p>
          </div>
          <IconButton label={t('about.close')} onClick={onClose}>
            <X className="h-4 w-4" aria-hidden="true" />
          </IconButton>
        </div>

        <div className="overflow-y-auto px-6 py-7 sm:px-8">
          <h2
            id="about-title"
            className="max-w-2xl font-display text-title text-bone"
          >
            {t('about.title')}
          </h2>
          <p className="mt-4 max-w-2xl text-small leading-relaxed text-mist">
            {t('about.intro')}
          </p>

          <div className="mt-8 grid gap-8 sm:grid-cols-2">
            <AboutSection title={t('about.buildTitle')} body={t('about.buildBody')} />
            <AboutSection
              title={t('about.scienceTitle')}
              body={t('about.scienceBody')}
            />
            <AboutSection title={t('about.accessTitle')} body={t('about.accessBody')} />
            <AboutSection title={t('about.stackTitle')} body={t('about.stackBody')} />
          </div>

          <section className="mt-8 border-t border-line pt-6">
            <h3 className="label text-[0.56rem] text-bone">
              {t('about.shortcutsTitle')}
            </h3>
            <dl className="mt-3 grid gap-x-8 sm:grid-cols-2">
              {shortcuts.map((shortcut) => (
                <div
                  key={shortcut.key}
                  className="flex items-center justify-between gap-4 border-b border-line/60 py-2"
                >
                  <dt className="text-small text-mist">{shortcut.label}</dt>
                  <dd>
                    <kbd className="label border border-line px-2 py-0.5 text-[0.5rem] text-bone">
                      {shortcut.key}
                    </kbd>
                  </dd>
                </div>
              ))}
            </dl>
          </section>

          <section className="mt-8 border-t border-line pt-6">
            <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <h3 className="label text-[0.56rem] text-bone">
                  {t('about.motionTitle')}
                </h3>
                <p
                  id="motion-description"
                  className="mt-2 text-small leading-relaxed text-mist"
                >
                  {t('about.motionBody')}
                </p>
              </div>

              <div className="flex flex-wrap items-center gap-3">
                <button
                  type="button"
                  role="switch"
                  aria-checked={reducedMotion}
                  aria-label={t('about.motionTitle')}
                  aria-describedby="motion-description"
                  onClick={() => setReducedMotion(!reducedMotion)}
                  className={cn(
                    'flex h-6 w-11 shrink-0 items-center border p-0.5 transition-colors duration-200',
                    reducedMotion
                      ? 'justify-end border-cyan/50 bg-cyan/10'
                      : 'justify-start border-line bg-transparent',
                  )}
                >
                  <span
                    className={cn(
                      'h-4 w-4 transition-colors duration-200',
                      reducedMotion ? 'bg-cyan' : 'bg-mist',
                    )}
                  />
                </button>
                <span className="label text-[0.52rem] text-mist">
                  {reducedMotion ? t('about.motionOn') : t('about.motionOff')}
                </span>
                {hasOverride ? (
                  <button
                    type="button"
                    onClick={resetToSystem}
                    className="label text-[0.5rem] text-mist-dim underline decoration-line underline-offset-4 transition-colors hover:text-bone"
                  >
                    {t('about.motionSystem')}
                  </button>
                ) : null}
              </div>
            </div>
          </section>

          <dl className="mt-8 grid grid-cols-2 gap-5 border-t border-line pt-6 sm:grid-cols-4">
            <Stat label={t('about.versionLabel')} value={SITE.version} />
            <Stat label={t('about.phaseLabel')} value={String(SITE.phase)} />
            <Stat
              label={t('about.chaptersLabel')}
              value={String(SITE.totalChapters)}
            />
            <Stat label={t('about.languagesLabel')} value="EN · FR · AR" />
          </dl>

          <p className="mt-8 text-[0.7rem] leading-relaxed text-mist-dim">
            {t('about.footer')}
          </p>
        </div>
      </div>
    </dialog>
  )
}
