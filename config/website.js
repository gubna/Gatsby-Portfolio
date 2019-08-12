const tailwind = require('../tailwind')

module.exports = {
  pathPrefix: '/', // Prefix for all links. If you deploy your site to example.com/portfolio your pathPrefix should be "/portfolio"

  siteTitle: ' Steven Agri', // Navigation and Site Title
  siteTitleAlt: 'Steven Agri', // Alternative Site title for SEO
  siteTitleShort: 'Steven Agri', // short_name for manifest
  siteHeadline: 'Portfolio', // Headline for schema.org JSONLD
  siteUrl: 'https://nervous-lumiere-a6403c.netlify.com', // Domain of your site. No trailing slash!
  siteLanguage: 'en', // Language Tag on <html> element
  siteLogo: 'logo.jpg', // Used for SEO and manifest
  siteDescription: 'Portfolio of Steven Agri',
  author: 'Steven Agri', // Author for schema.org JSONLD

  // siteFBAppID: '123456789', // Facebook App ID - Optional
  userTwitter: '@Stevenagri', // Twitter Username
  googleAnalyticsID: 'UA-47519312-5',

  // Manifest and Progress color
  themeColor: tailwind.colors.orange,
  backgroundColor: tailwind.colors.blue,
}
