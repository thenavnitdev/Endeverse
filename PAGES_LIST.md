# Complete List of 18 Pages

## Main Pages
1. **Home** - `/` (index.js)
   - Hero section with company introduction
   - MVV preview
   - Services overview
   - Contact CTA

2. **About** - `/about`
   - Greetings section
   - 3 strengths/attractions
   - MVV preview

3. **Company** - `/company`
   - Company message from representative
   - Company information (name, capital, address, etc.)
   - Business activities
   - Banks

4. **Why Join Us** - `/why-join-us`
   - Introduction
   - Section 01: High return rate salary system
   - Section 02: Long-term career support
   - Section 03: Accompanying support

5. **MVV** - `/mvv`
   - Mission section
   - Vision section
   - Values (6 values with descriptions)

6. **Business** - `/business`
   - Business introduction
   - 4 main services overview
   - Contact section

7. **Culture** - `/culture`
   - Hero image section
   - Welfare benefits overview
   - 3 culture highlights

8. **FAQ** - `/faq`
   - 5 frequently asked questions with expandable answers
   - Selection process, online interviews, remote work, skills, preparation

9. **Contact** - `/contact`
   - Contact form (name, email, subject, message)
   - Form submission to API route
   - Link to recruitment page

10. **Apply** - `/apply`
    - Job positions overview
    - 3 position cards (Training Engineer, Sales, Other)
    - Entry button

## Service Pages
11. **SES Service** - `/services/ses`
    - System Engineering Service details
    - 4 service categories
    - Our strength section
    - Contact section

12. **IT School Service** - `/services/it-school`
    - IT School Service introduction
    - 4 service offerings
    - Training content section
    - Contact section

13. **Recruitment Service** - `/services/recruitment`
    - Recruitment Service introduction
    - 6 service types
    - Our strength section (4 strengths)
    - Contact section

14. **Recruitment Consulting** - `/services/recruitment-consulting`
    - Recruitment Consulting introduction
    - 4 service offerings
    - Our strength section (4 strengths)
    - Contact section

15. **Services Index** - `/services` (services/index.js)
    - Landing page with BUSINESS and RECRUIT options
    - Entry point for services

## Legal/Policy Pages
16. **Privacy Policy** - `/privacy-policy`
    - Privacy policy sections
    - 6 main sections
    - Contact information

17. **Personal Information** - `/personal-information`
    - Personal information handling policy
    - 9 numbered sections
    - Organization name, administrator, usage purposes, etc.

## Additional Pages
18. **Benefits** - `/benefits`
    - Employee benefits and systems
    - Holidays and vacations
    - Passive smoking countermeasures
    - Various benefits and systems list

---

## Navigation Structure

### Header Navigation (All Pages)
- HOME → `/`
- COMPANY → `/company`
- WHY JOIN US → `/why-join-us`
- MVV → `/mvv`
- BUSINESS → `/business`
- CULTURE → `/culture`
- FAQ → `/faq`
- APPLY → `/apply`

### Footer
- Simple footer with company name and copyright

### Internal Links
- Services link to `/services/*` pages
- Contact links throughout
- Apply/Recruit links
- MVV links
- Company links

---

## Component Structure

### Reusable Components
- `Header.js` - Navigation header
- `Footer.js` - Footer component
- `Layout.js` - Main layout wrapper
- `Section.js` - Animated section wrapper

### Page Components
- All 18 pages in `/pages` directory
- API route: `/pages/api/contact.js`

---

## Content Management

All content is managed through `/data/content.json`:
- Site name and branding
- Navigation labels
- Page content
- Form labels
- Company information

---

## Features Implemented

✅ All 18 pages created
✅ Responsive design (mobile, tablet, desktop)
✅ Framer Motion animations
✅ Contact form with API route
✅ JSON content system
✅ Japanese text support
✅ Navigation between all pages
✅ Reusable components
✅ Clean folder structure

---

## Next Steps

1. Add actual images to `/public/images/`
2. Update content in `/data/content.json`
3. Configure email service for contact form
4. Add SEO meta tags
5. Deploy to Vercel

