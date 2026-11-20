import { useTranslation } from '@/app/providers/I18nProvider'

interface WebGLFallbackProps {
  reason?: 'unsupported' | 'context-lost'
}

export function WebGLFallback({ reason = 'unsupported' }: WebGLFallbackProps) {
  const t = useTranslation()

  return (
    <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
      <div className="ambient-crimson absolute inset-0 opacity-80" />
      <div className="absolute left-1/2 top-1/2 h-[min(70vw,38rem)] w-[min(70vw,38rem)] -translate-x-1/2 -translate-y-1/2 rounded-full border border-crimson/20" />
      <div className="absolute left-1/2 top-1/2 h-[min(54vw,28rem)] w-[min(54vw,28rem)] -translate-x-1/2 -translate-y-1/2 rounded-full border border-line/60" />
      <div className="absolute left-1/2 top-1/2 h-56 w-56 -translate-x-1/2 -translate-y-1/2 rounded-full bg-crimson/10 blur-[90px]" />
      <div className="absolute bottom-4 end-4 max-w-[16rem] text-end">
        <p className="label text-[0.55rem] leading-relaxed text-mist-dim">
          {reason === 'context-lost' ? t('error.contextLost') : t('error.canvasTitle')}
        </p>
      </div>
    </div>
  )
}
