import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  try {
    const { productName, productUrl, niche, contentType } = await request.json()

    // Simulate AI generation (in production, you would use OpenAI API)
    const contentTemplates: any = {
      'instagram-reel': {
        hook: `Wait! You NEED to see this ${productName}! 😱`,
        mainContent: `I've been searching for the perfect ${niche.toLowerCase()} product and THIS is it! ✨

Here's why you need ${productName}:

✅ Game-changing features that actually work
✅ Worth every penny (and I'm picky!)
✅ Already changed my ${niche.toLowerCase()} routine
✅ Limited stock - grab it before it's gone!

Trust me, you won't regret this. I've linked it in my bio! 🔗`,
        cta: `Link in bio! 👆 Don't miss out - this is selling out FAST! Comment "LINK" and I'll send it to you! 💬`,
        caption: `The ${productName} you've been waiting for! 🚀 I'm obsessed and you will be too. This is hands down the best ${niche.toLowerCase()} product I've found this year. Link in bio to grab yours before they sell out! #affiliate`,
        hashtags: `#${niche.toLowerCase()}tok #${productName.replace(/\s+/g, '')} #affiliatemarketing #musthave #viral #trending #productreview #amazonfinds #tiktokmademebuyit #worthit`
      },
      'youtube-short': {
        hook: `This ${productName} is INSANE! Here's why... 🔥`,
        mainContent: `Listen up because I'm about to save you hours of research!

I tested ${productName} for the past week and WOW.

3 Reasons you need this:

1️⃣ It actually delivers on its promises (rare!)
2️⃣ Best value for money in the ${niche.toLowerCase()} space
3️⃣ My ${niche.toLowerCase()} game has never been better

I was skeptical at first, but now I'm a believer.`,
        cta: `Link in description! 👇 Click it NOW before the price goes up! Drop a 🔥 if you want more honest reviews like this!`,
        caption: `Honest review of ${productName} - Is it worth the hype? YES! 💯 I rarely recommend products, but this one is special. Check the link in description before it sells out. What should I review next? #${niche.toLowerCase()}`,
        hashtags: `#${niche.toLowerCase()} #${productName.replace(/\s+/g, '')} #productreview #youtube #shorts #honest #review #affiliate #musthaves #recommendation #viral`
      },
      'tiktok': {
        hook: `POV: You just found the best ${productName} on the internet 😍`,
        mainContent: `No bc why did no one tell me about this sooner??

${productName} is literally a game changer for anyone into ${niche.toLowerCase()}!

What I love:
💜 Actually works (shocking, I know)
💜 Affordable without compromising quality
💜 Makes me look like I have my life together
💜 Already recommended to all my friends

This is your sign to get it! ✨`,
        cta: `🔗 Link in bio! Get it before everyone else does! Comment "NEED" for the link! 💬 Save this so you don't forget!`,
        caption: `Running to get ${productName} before they sell out! 🏃‍♀️ This is THE ${niche.toLowerCase()} product of 2024. Link in bio, you're welcome! 😘 #fyp`,
        hashtags: `#fyp #foryou #foryoupage #viral #${niche.toLowerCase()}tok #${productName.replace(/\s+/g, '').toLowerCase()} #musthave #amazonfinds #tiktokmademebuyit #productreview #affiliate #trending #viralproducts`
      }
    }

    const template = contentTemplates[contentType] || contentTemplates['instagram-reel']

    // Customize template with product details
    const generatedContent = {
      hook: template.hook,
      mainContent: template.mainContent,
      cta: template.cta,
      caption: template.caption,
      hashtags: template.hashtags
    }

    return NextResponse.json(generatedContent)
  } catch (error) {
    console.error('Generation error:', error)
    return NextResponse.json(
      { error: 'Failed to generate content' },
      { status: 500 }
    )
  }
}
