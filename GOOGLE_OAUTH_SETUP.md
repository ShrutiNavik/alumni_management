# 🔐 Google OAuth Setup Guide

## Step-by-Step Guide to Enable Google Sign-In

### 📋 Prerequisites
- Google Account
- Vercel Account
- Your deployed app URL

---

## 🚀 Part 1: Google Cloud Console Setup

### Step 1: Create Google Cloud Project

1. Go to [Google Cloud Console](https://console.cloud.google.com/)
2. Click **"Select a project"** → **"New Project"**
3. Project name: **AlumniConnect**
4. Click **"Create"**
5. Wait 30 seconds for project creation

### Step 2: Enable Google+ API

1. In your project, go to **"APIs & Services"** → **"Library"**
2. Search for **"Google+ API"**
3. Click on it
4. Click **"Enable"**

### Step 3: Configure OAuth Consent Screen

1. Go to **"APIs & Services"** → **"OAuth consent screen"**
2. Choose **"External"** (for public app)
3. Click **"Create"**

**Fill in the form:**
- App name: `AlumniConnect`
- User support email: Your email
- App logo: (optional)
- Application home page: `https://your-app.vercel.app`
- Authorized domains: `vercel.app`
- Developer contact: Your email

4. Click **"Save and Continue"**
5. **Scopes**: Click **"Add or Remove Scopes"**
   - Select: `email`
   - Select: `profile`
   - Select: `openid`
6. Click **"Update"** → **"Save and Continue"**
7. **Test users**: Add your email for testing
8. Click **"Save and Continue"**
9. Review and click **"Back to Dashboard"**

### Step 4: Create OAuth Credentials

1. Go to **"APIs & Services"** → **"Credentials"**
2. Click **"+ Create Credentials"** → **"OAuth client ID"**
3. Application type: **"Web application"**
4. Name: `AlumniConnect Web Client`

**Authorized JavaScript origins:**
```
http://localhost:3000
https://your-app-name.vercel.app
```

**Authorized redirect URIs:**
```
http://localhost:3000/api/auth/callback/google
https://your-app-name.vercel.app/api/auth/callback/google
```

5. Click **"Create"**
6. **IMPORTANT**: Copy the **Client ID** and **Client Secret**
   - Save these somewhere safe!
   - You'll need them in the next step

---

## 🔧 Part 2: Vercel Environment Variables

### Step 1: Add Environment Variables

1. Go to your Vercel Project
2. Click **"Settings"** → **"Environment Variables"**
3. Add these variables:

| Name | Value |
|------|-------|
| `NEXTAUTH_URL` | `https://your-app.vercel.app` |
| `NEXTAUTH_SECRET` | Generate random string (see below) |
| `GOOGLE_CLIENT_ID` | Paste from Google Console |
| `GOOGLE_CLIENT_SECRET` | Paste from Google Console |

### Step 2: Generate NEXTAUTH_SECRET

Run this command in terminal:
```bash
openssl rand -base64 32
```

Or use this online generator:
https://generate-secret.vercel.app/32

Copy the generated string and use it as `NEXTAUTH_SECRET`

### Step 3: Redeploy

1. Go to **Deployments** tab
2. Click latest deployment
3. Click **"⋮"** (three dots) → **"Redeploy"**
4. Wait 2-3 minutes

---

## ✅ Part 3: Testing

### Test Google Sign-In

1. Go to your app: `https://your-app.vercel.app/login`
2. Click **"Continue with Google"**
3. Select your Google account
4. Approve permissions
5. You should be redirected to `/dashboard`
6. ✅ Success! Google login works!

### What Happens Behind the Scenes:

1. User clicks "Continue with Google"
2. Redirects to Google login
3. User approves permissions
4. Google sends user info back to your app
5. NextAuth creates/finds user in database
6. User is logged in
7. Redirects to dashboard

---

## 🐛 Troubleshooting

### Error: "redirect_uri_mismatch"
**Solution**: Make sure the redirect URI in Google Console exactly matches:
```
https://your-actual-domain.vercel.app/api/auth/callback/google
```

### Error: "Access blocked: This app's request is invalid"
**Solution**: 
1. Make sure you added your email as a test user
2. Check OAuth consent screen is configured
3. Verify authorized domains include `vercel.app`

### Google button does nothing
**Solution**:
1. Check browser console for errors
2. Verify `GOOGLE_CLIENT_ID` is correct in Vercel
3. Make sure you redeployed after adding env variables

### User not saved to database
**Solution**:
1. Check database connection
2. Verify tables exist (run init-db API)
3. Check Vercel logs for errors

---

## 📊 Environment Variables Summary

Your Vercel project needs these:

```env
# Database (already set)
DATABASE_URL=...
POSTGRES_URL=...
PRISMA_DATABASE_URL=...

# NextAuth (NEW)
NEXTAUTH_URL=https://your-app.vercel.app
NEXTAUTH_SECRET=your-generated-secret

# Google OAuth (NEW)
GOOGLE_CLIENT_ID=your-client-id.apps.googleusercontent.com
GOOGLE_CLIENT_SECRET=your-client-secret

# JWT (already set)
JWT_SECRET=...
```

---

## 🎯 Quick Checklist

- [ ] Created Google Cloud project
- [ ] Enabled Google+ API
- [ ] Configured OAuth consent screen
- [ ] Created OAuth credentials
- [ ] Copied Client ID and Secret
- [ ] Added redirect URIs (localhost + Vercel URL)
- [ ] Added environment variables to Vercel
- [ ] Generated NEXTAUTH_SECRET
- [ ] Redeployed app
- [ ] Tested Google sign-in
- [ ] ✅ Google login works!

---

## 💡 Production Tips

### Before Going Live:

1. **Publish OAuth Consent Screen**:
   - Go back to OAuth consent screen
   - Click "Publish App"
   - Submit for verification (takes a few days)
   - Until verified, you'll see a warning screen (but it still works)

2. **Remove Test Mode**:
   - After verification, anyone can use Google sign-in
   - No more "This app hasn't been verified" warning

3. **Add More Redirect URIs**:
   - If you have multiple domains
   - If you have staging environment
   - Add all redirect URIs to Google Console

4. **Monitor Usage**:
   - Google Cloud Console → Dashboard
   - Check API quotas and usage
   - Free tier is generous (plenty for most apps)

---

## 🔒 Security Best Practices

1. ✅ Never commit `.env` files to Git
2. ✅ Keep Client Secret private
3. ✅ Use different credentials for development/production
4. ✅ Rotate secrets periodically
5. ✅ Monitor OAuth consent screen for suspicious activity

---

## 📚 Additional Resources

- [NextAuth.js Docs](https://next-auth.js.org/providers/google)
- [Google OAuth Setup](https://console.cloud.google.com/apis/credentials)
- [Vercel Environment Variables](https://vercel.com/docs/projects/environment-variables)

---

## ✨ Success!

After following this guide, your users can:
- ✅ Sign in with Google (one click!)
- ✅ No password needed
- ✅ Auto-creates account
- ✅ Profile picture from Google
- ✅ Same experience as major apps

**Congratulations!** You now have professional Google authentication! 🎉
