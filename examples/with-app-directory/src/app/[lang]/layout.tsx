import useTranslation from 'next-translate/useTranslation'
import i18n from '../../../i18n'
import { redirect } from 'next/navigation'

export async function generateStaticParams() {
  return [{ lang: 'en' }, { lang: 'es' }, { lang: 'ca' }, { lang: 'cs' }]
}

export default function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode
  params?: any
}) {
  const { t, lang } = useTranslation('common')
  console.log({ lang })

  // Redirect to default locale if lang is not supported. /second-page -> /en/second-page
  if (!i18n.locales.includes(lang)) redirect(`/${i18n.defaultLocale}/${lang}`)

  return (
    <html lang={params.lang}>
      <head />
      <body>
        <h1>{t`layout-title`}</h1>
        {children}
      </body>
    </html>
  )
}
