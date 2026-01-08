# Calendly Integration Setup

This guide will help you set up Calendly integration for the schedule call feature.

## Quick Setup

1. **Get your Calendly URL**
   - Go to [Calendly](https://calendly.com) and sign in
   - Create an event type or use an existing one
   - Copy your Calendly event URL (e.g., `https://calendly.com/your-username/30min`)

2. **Add to Environment Variables**
   - Create a `.env.local` file in the root of your project (if it doesn't exist)
   - Add your Calendly URL:
   ```env
   NEXT_PUBLIC_CALENDLY_URL=https://calendly.com/your-username/your-event-type
   ```

3. **Restart your development server**
   ```bash
   npm run dev
   ```

## Finding Your Calendly URL

1. Log in to [Calendly](https://calendly.com)
2. Go to "Event Types" in the left sidebar
3. Click on the event type you want to use
4. Click "Share" or "Settings"
5. Copy the URL (it will look like: `https://calendly.com/username/event-name`)

## For Production (Vercel/Other Hosting)

Add the environment variable in your hosting platform:
- **Vercel**: Go to Project Settings > Environment Variables
- Add `NEXT_PUBLIC_CALENDLY_URL` with your Calendly URL
- Redeploy your application

## Customization

The Calendly widget will automatically:
- Show your available time slots
- Handle timezone conversion
- Send confirmation emails
- Add events to your calendar

You can customize the appearance and behavior directly in your Calendly account settings.

## Testing

1. Click "Schedule a Call" on your website
2. The Calendly widget should appear in a modal
3. Select a date and time
4. Fill in your details
5. Confirm the booking

That's it! Calendly handles everything else automatically.

