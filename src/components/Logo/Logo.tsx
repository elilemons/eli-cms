import clsx from 'clsx'

interface Props {
  className?: string
  loading?: 'lazy' | 'eager'
  priority?: 'auto' | 'high' | 'low'
  dark?: boolean
}

export const Logo = ({
  loading: loadingFromProps,
  priority: priorityFromProps,
  className,
  dark = true,
}: Props) => {
  const loading = loadingFromProps || 'lazy'
  const priority = priorityFromProps || 'low'
  const src = dark ? '/logo-white.svg' : '/logo.svg'

  return (
    /* eslint-disable @next/next/no-img-element */
    <img
      alt="Eli Lemons Logo"
      width={193}
      height={34}
      loading={loading}
      fetchPriority={priority}
      decoding="async"
      className={clsx('max-w-[9.375rem] w-full h-[34px]', className)}
      src={src}
    />
  )
}
