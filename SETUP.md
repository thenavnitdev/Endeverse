# Quick Setup Guide

## 🚀 Getting Started

### 1. Install Dependencies
```bash
npm install
```

### 2. Run Development Server
```bash
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000)

### 3. Build for Production
```bash
npm run build
npm start
```

## 📁 Project Structure

```
endeverse/
├── pages/              # All 18 pages
│   ├── index.js        # Home
│   ├── company.js
│   ├── about.js
│   ├── why-join-us.js
│   ├── mvv.js
│   ├── business.js
│   ├── culture.js
│   ├── faq.js
│   ├── contact.js
│   ├── apply.js
│   ├── privacy-policy.js
│   ├── personal-information.js
│   ├── benefits.js
│   ├── services/
│   │   ├── index.js
│   │   ├── ses.js
│   │   ├── it-school.js
│   │   ├── recruitment.js
│   │   └── recruitment-consulting.js
│   └── api/
│       └── contact.js  # Contact form API
├── components/         # Reusable components
│   ├── Header.js
│   ├── Footer.js
│   ├── Layout.js
│   └── Section.js
├── styles/
│   └── globals.css     # Global styles + Tailwind
├── data/
│   └── content.json    # Content management
└── public/
    └── images/         # Add your images here
```

## 🎨 Customization

### Update Content
Edit `/data/content.json` to change:
- Navigation labels
- Page headings
- Company information
- Form labels
- Any text content

### Add Images
1. Place images in `/public/images/`
2. Use in components: `<img src="/images/your-image.jpg" />`

### Modify Styles
- Global: `/styles/globals.css`
- Tailwind: `/tailwind.config.js`
- Component: Use Tailwind classes

## 📧 Contact Form Setup

The contact form is ready but needs email configuration:

1. **Option 1: Use Resend (Recommended)**
```bash
npm install resend
```

Update `/pages/api/contact.js`:
```javascript
import { Resend } from 'resend';
const resend = new Resend(process.env.RESEND_API_KEY);

await resend.emails.send({
  from: 'contact@yourdomain.com',
  to: 'your-email@example.com',
  subject: `Contact: ${subject}`,
  html: `<p>Name: ${name}</p><p>Email: ${email}</p><p>${message}</p>`
});
```

2. **Option 2: Use SendGrid**
```bash
npm install @sendgrid/mail
```

3. **Option 3: Use Nodemailer**
```bash
npm install nodemailer
```

Add API key to `.env.local`:
```
RESEND_API_KEY=your_key_here
```

## 🌐 Deploy to Vercel

### Method 1: GitHub Integration
1. Push code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Click "New Project"
4. Import repository
5. Click "Deploy"

### Method 2: Vercel CLI
```bash
npm i -g vercel
vercel login
vercel
```

For production:
```bash
vercel --prod
```

## ✅ Checklist

- [x] All 18 pages created
- [x] Navigation working
- [x] Responsive design
- [x] Animations added
- [x] Contact form created
- [x] JSON content system
- [ ] Add actual images
- [ ] Update content.json with final text
- [ ] Configure email service
- [ ] Add SEO meta tags
- [ ] Deploy to Vercel

## 🐛 Troubleshooting

### Port Already in Use
```bash
# Kill process on port 3000
lsof -ti:3000 | xargs kill -9
```

### Module Not Found
```bash
# Clear cache and reinstall
rm -rf node_modules .next
npm install
```

### Build Errors
```bash
# Clear Next.js cache
rm -rf .next
npm run build
```

## 📚 Resources

- [Next.js Docs](https://nextjs.org/docs)
- [Tailwind CSS](https://tailwindcss.com/docs)
- [Framer Motion](https://www.framer.com/motion/)
- [Vercel Deployment](https://vercel.com/docs)

