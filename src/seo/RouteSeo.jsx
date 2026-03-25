import React from 'react'
import { Helmet } from 'react-helmet-async'
import { useLocation } from 'react-router-dom'
import { useI18n } from '../i18n/I18nContext.jsx'
import { SITE_URL, SITE_NAME, OG_IMAGE, OG_IMAGE_WIDTH, OG_IMAGE_HEIGHT } from './siteConfig'

const PATH_TO_SEO_KEY = {
  '/': 'home',
  '/terms': 'terms',
  '/privacy': 'privacy',
  '/contact': 'contact',
}

function normalizePath(pathname) {
  if (!pathname || pathname === '/') return '/'
  return pathname.replace(/\/$/, '') || '/'
}

export function RouteSeo() {
  const { pathname } = useLocation()
  const { locale, t } = useI18n()
  const path = normalizePath(pathname)
  const seoKey = PATH_TO_SEO_KEY[path] || 'home'
  const rawSeo = t(`seo.${seoKey}`)
  const seo = rawSeo?.title ? rawSeo : t('seo.home')
  const canonical = `${SITE_URL}${path === '/' ? '' : path}`

  const ogLocale = locale === 'es' ? 'es_ES' : locale === 'pt' ? 'pt_BR' : 'en_US'
  const ogImageAlt = t('ogImageAlt')

  return (
    <Helmet prioritizeSeoTags={true}>
      <html lang={locale === 'pt' ? 'pt-BR' : locale === 'es' ? 'es' : 'en'} />
      <title>{seo.title}</title>
      <meta name="description" content={seo.description} />
      <link rel="canonical" href={canonical} />

      <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
      <meta name="googlebot" content="index, follow" />
      <meta name="author" content="bizMRI" />
      <meta name="theme-color" content="#0a0a0a" />

      <meta property="og:title" content={seo.title} />
      <meta property="og:description" content={seo.description} />
      <meta property="og:url" content={canonical} />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content={SITE_NAME} />
      <meta property="og:locale" content={ogLocale} />
      <meta property="og:image" content={OG_IMAGE} />
      <meta property="og:image:width" content={String(OG_IMAGE_WIDTH)} />
      <meta property="og:image:height" content={String(OG_IMAGE_HEIGHT)} />
      <meta property="og:image:alt" content={ogImageAlt} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={seo.title} />
      <meta name="twitter:description" content={seo.description} />
      <meta name="twitter:image" content={OG_IMAGE} />
    </Helmet>
  )
}
