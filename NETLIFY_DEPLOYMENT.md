# Netlify Deployment Guide

This monorepo contains 3 separate Astro applications that should be deployed as separate Netlify sites.

## Sites to Create

### 1. Landing Site

- **Repository**: https://github.com/beyondbeliefstudio/BeyondBeliefStudio__FullProject
- **Branch**: main
- **Base directory**: apps/landing
- **Build command**: npm install && npm run build
- **Publish directory**: apps/landing/dist
- **Config file**: netlify-landing.toml
- **Domain**: beyondbeliefstudio.com

### 2. Screen Printing Site

- **Repository**: https://github.com/beyondbeliefstudio/BeyondBeliefStudio__FullProject
- **Branch**: main
- **Base directory**: apps/screenprinting
- **Build command**: npm install && npm run build
- **Publish directory**: apps/screenprinting/dist
- **Config file**: netlify-screenprinting.toml
- **Domain**: screenprint.beyondbeliefstudio.com

### 3. Web Design Site

- **Repository**: https://github.com/beyondbeliefstudio/BeyondBeliefStudio__FullProject
- **Branch**: main
- **Base directory**: apps/webdesign
- **Build command**: npm install && npm run build
- **Publish directory**: apps/webdesign/dist
- **Config file**: netlify-webdesign.toml
- **Domain**: webdesign.beyondbeliefstudio.com

## Setup Instructions

### For Each Site:

1. **Go to Netlify Dashboard** → "Add new site" → "Import an existing project"

2. **Connect to GitHub** and select the repository: `beyondbeliefstudio/BeyondBeliefStudio__FullProject`

3. **Configure Build Settings**:
   - Base directory: `apps/[app-name]` (e.g., `apps/landing`)
   - Build command: `npm install && npm run build`
   - Publish directory: `apps/[app-name]/dist` (e.g., `apps/landing/dist`)

4. **Advanced Settings**:
   - In "Advanced build settings" → "New variable"
   - Add: `NODE_VERSION` = `18`

5. **Deploy Settings**:
   - After initial deployment, go to Site Settings → Build & Deploy
   - Under "Build settings" → click "Edit settings"
   - **IMPORTANT**: Set "Config file path" to the appropriate config file:
     - Landing: `netlify-landing.toml` (or use the default `netlify.toml`)
     - Screen Printing: `netlify-screenprinting.toml`
     - Web Design: `netlify-webdesign.toml`
   - This tells Netlify which configuration file to use for build settings

6. **Domain Setup**:
   - Go to Site Settings → Domain Management
   - Add custom domain
   - For main site: `beyondbeliefstudio.com`
   - For subdomains: `screenprint.beyondbeliefstudio.com`, `webdesign.beyondbeliefstudio.com`

## DNS Configuration

For your domain registrar, you'll need to set up:

1. **A Record** (for main domain):
   - Name: `@` or leave blank
   - Value: Netlify's load balancer IP

2. **CNAME Records** (for subdomains):
   - Name: `screenprint`
   - Value: `[your-screenprinting-site].netlify.app`
   - Name: `webdesign`
   - Value: `[your-webdesign-site].netlify.app`

## Automatic Deployments

Each site will automatically redeploy when you push changes to the main branch. The builds are isolated, so changes to one app won't trigger rebuilds of the others unless you modify shared components.

## Testing Local Builds

Before deploying, test each app locally:

```bash
# Landing
cd apps/landing && npm run build && npm run preview

# Screen Printing
cd apps/screenprinting && npm run build && npm run preview

# Web Design
cd apps/webdesign && npm run build && npm run preview
```

## Troubleshooting

### Error: "Missing script: build"

This happens when Netlify doesn't find the correct config file or is running in the wrong directory.

**Solution**:

1. Ensure the config file path is set correctly in Netlify UI
2. For landing site, you can use the default `netlify.toml` file (already created)
3. Make sure the base directory is set to the correct app folder

### Error: "No config file was defined"

This means Netlify is not finding your configuration file.

**Solution**:

1. Go to Site Settings → Build & Deploy → Build settings
2. Click "Edit settings"
3. Set "Config file path" to the appropriate `.toml` file
4. Save and redeploy

### Build Command Issues

If you're still having issues, you can manually set in Netlify UI:

- **Base directory**: `apps/landing` (or appropriate app)
- **Build command**: `npm install && npm run build`
- **Publish directory**: `apps/landing/dist` (or appropriate app/dist)
