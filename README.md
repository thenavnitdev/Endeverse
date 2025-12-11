# Endeverse Website

A complete 18-page Next.js website for Endeverse company, built with React, Next.js, Tailwind CSS, and Framer Motion.

## Features

- ✅ 18 complete pages with Japanese content
- ✅ Responsive design (mobile, tablet, desktop)
- ✅ Smooth fade-in animations using Framer Motion
- ✅ Contact form with Next.js API route
- ✅ JSON-based content management system
- ✅ Reusable components (Header, Footer, Section)
- ✅ Full navigation between all pages
- ✅ Japanese text support with proper fonts

## Project Structure

```
endeverse/
├── pages/
│   ├── index.js                    # Home page
│   ├── company.js                  # Company/About Us
│   ├── why-join-us.js              # Why Join Us
│   ├── mvv.js                      # Mission, Vision, Value
│   ├── business.js                 # Business overview
│   ├── services/
│   │   ├── ses.js                  # SES Service
│   │   ├── it-school.js            # IT School Service
│   │   ├── recruitment.js          # Recruitment Service
│   │   └── recruitment-consulting.js # Recruitment Consulting
│   ├── culture.js                  # Culture page
│   ├── faq.js                      # FAQ page
│   ├── contact.js                  # Contact page
│   ├── apply.js                    # Apply/Recruit page
│   ├── privacy-policy.js           # Privacy Policy
│   ├── personal-information.js    # Personal Information Handling
│   ├── benefits.js                 # Employee Benefits
│   └── api/
│       └── contact.js              # Contact form API
├── components/
│   ├── Header.js                   # Navigation header
│   ├── Footer.js                    # Footer component
│   ├── Layout.js                   # Main layout wrapper
│   └── Section.js                  # Reusable section with animations
├── styles/
│   └── globals.css                  # Global styles + Tailwind
├── data/
│   └── content.json                # JSON content management
├── public/
│   └── images/                     # Place for images/assets
└── package.json

```

## Installation

1. Install dependencies:
```bash
npm install
```

2. Run development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Pages Overview

1. **Home** (`/`) - Landing page with hero, MVV preview, services
2. **Company** (`/company`) - About us, company information
3. **Why Join Us** (`/why-join-us`) - Employee benefits and reasons to join
4. **MVV** (`/mvv`) - Mission, Vision, and Values
5. **Business** (`/business`) - Business overview and services
6. **SES Service** (`/services/ses`) - System Engineering Service details
7. **IT School Service** (`/services/it-school`) - IT School service details
8. **Recruitment Service** (`/services/recruitment`) - Recruitment service
9. **Recruitment Consulting** (`/services/recruitment-consulting`) - Consulting service
10. **Culture** (`/culture`) - Company culture and work environment
11. **FAQ** (`/faq`) - Frequently asked questions
12. **Contact** (`/contact`) - Contact form
13. **Apply** (`/apply`) - Job application page
14. **Privacy Policy** (`/privacy-policy`) - Privacy policy
15. **Personal Information** (`/personal-information`) - Personal info handling
16. **Benefits** (`/benefits`) - Employee benefits and systems

## Content Management

All text content is managed through `/data/content.json`. Edit this file to update:
- Navigation labels
- Page headings and descriptions
- Form labels
- Company information
- Any other text content

## Customization

### Adding Images

1. Place images in `/public/images/`
2. Reference them in components: `<Image src="/images/your-image.jpg" ... />`

### Updating Styles

- Global styles: `/styles/globals.css`
- Tailwind config: `/tailwind.config.js`
- Component-specific styles: Use Tailwind classes or add CSS modules

### Animations

Animations are handled by Framer Motion. To adjust:
- Edit `/components/Section.js` for section animations
- Modify `motion` props in individual pages for custom animations

## Contact Form

The contact form (`/pages/contact.js`) submits to `/api/contact.js`.

**To enable email sending**, update `/pages/api/contact.js`:
1. Install an email service (e.g., SendGrid, Resend, Nodemailer)
2. Add your API keys to environment variables
3. Implement the email sending logic in the API route

## Deployment to Vercel

### Option 1: Deploy via Vercel Dashboard

1. Push your code to GitHub/GitLab/Bitbucket
2. Go to [vercel.com](https://vercel.com)
3. Click "New Project"
4. Import your repository
5. Vercel will auto-detect Next.js and configure everything
6. Click "Deploy"

### Option 2: Deploy via Vercel CLI

1. Install Vercel CLI:
```bash
npm i -g vercel
```

2. Login to Vercel:
```bash
vercel login
```

3. Deploy:
```bash
vercel
```

4. For production:
```bash
vercel --prod
```

### Environment Variables

If you add email functionality or other services, add environment variables in:
- Vercel Dashboard → Project Settings → Environment Variables
- Or via CLI: `vercel env add VARIABLE_NAME`

### Custom Domain

1. Go to Vercel Dashboard → Project → Settings → Domains
2. Add your custom domain
3. Follow DNS configuration instructions

## Build for Production

```bash
npm run build
npm start
```

## Development Tips

- Use `npm run dev` for hot-reload development
- Check browser console for any errors
- Use React DevTools for component debugging
- Tailwind classes are available throughout the project

## Next Steps

1. **Add Images**: Replace placeholder images with actual screenshots/assets
2. **Update Content**: Edit `/data/content.json` with final text
3. **Configure Email**: Set up contact form email sending
4. **SEO**: Add meta tags, Open Graph, and structured data
5. **Analytics**: Add Google Analytics or similar
6. **Testing**: Add unit/integration tests if needed

## Support

For issues or questions, check:
- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Framer Motion Documentation](https://www.framer.com/motion/)

## License

Private project for Endeverse.
