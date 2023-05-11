import urlBuilder from './url.builder.js'

class MobileURLDirector {
  buildMobileRestApiURL(domain: string, path?: string) {
    return urlBuilder
      .setDomain(domain)
      .setPath(path ?? 'api/rest_v1/page/mobile-sections')
      .build(true, '/')
  }

  buildMobileArticleURL(domain: string, articleId: string) {
    return urlBuilder.setDomain(domain).setPath(encodeURIComponent(articleId)).build()
  }
}

const mobileURLDirector = new MobileURLDirector()

export default mobileURLDirector
