# Netlify Deployment Guide

This monorepo contains 3 separate Astro applications that should be deployed as separate Netlify sites.

## Sites to Create

### 1. Landing Site

- **Repository**: https://github.com/beyondbeliefstudio/BeyondBeliefStudio__FullProject
- **Branch**: main
- **Base directory**: apps/landing
- **Build command**: cd ../.. && npm install && cd apps/landing && npm run build
- **Publish directory**: dist
- **Config file**: netlify-landing.toml
- **Domain**: beyondbeliefstudio.com

### 2. Screen Printing Site

- **Repository**: https://github.com/beyondbeliefstudio/BeyondBeliefStudio__FullProject
- **Branch**: main
- **Base directory**: (leave empty - use repo root)
- **Build command**: npm install && cd apps/screenprinting && npm run build
- **Publish directory**: apps/screenprinting/dist
- **Config file**: Configure via UI only (no config file needed)
- **Domain**: screenprint.beyondbeliefstudio.com

### 3. Web Design Site

- **Repository**: https://github.com/beyondbeliefstudio/BeyondBeliefStudio__FullProject
- **Branch**: main
- **Base directory**: (leave empty - use repo root)
- **Build command**: npm install && cd apps/webdesign && npm run build
- **Publish directory**: apps/webdesign/dist
- **Config file**: Configure via UI only (no config file needed)
- **Domain**: webdesign.beyondbeliefstudio.com

## Setup Instructions

### For Each Site:

1. **Go to Netlify Dashboard** → "Add new site" → "Import an existing project"

2. **Connect to GitHub** and select the repository: `beyondbeliefstudio/BeyondBeliefStudio__FullProject`

3. **Configure Build Settings**:
   - Base directory: Leave empty for repo root
   - Build command: `npm install && cd apps/[app-name] && npm run build`
   - Publish directory: `apps/[app-name]/dist`

4. **Advanced Settings**:
   - In "Advanced build settings" → "New variable"
   - Add: `NODE_VERSION` = `18`

5. **Deploy Settings**:
   - **IMPORTANT**: All configuration is done through the Netlify UI
   - Do NOT set a config file path if you can't modify it
   - The build settings entered in step 3 will be used

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

This happens when Netlify doesn't find the correct build command or is running in the wrong directory.

**Solution**:

1. Ensure the build settings are configured correctly in Netlify UI:
   - Base directory: Leave empty (repo root)
   - Build command: `npm install && cd apps/[app-name] && npm run build`
   - Publish directory: `apps/[app-name]/dist`
2. Make sure NODE_VERSION is set to 18 in environment variables

### Error: "EACCES: permission denied"

This happens when the build command tries to navigate to incorrect directories.

**Solution**:

1. Use the corrected build command: `npm install && cd apps/webdesign && npm run build`
2. Make sure Base directory is empty (not set to a subdirectory)
3. Set Publish directory to: `apps/webdesign/dist`

### Build Command Issues

**For UI-only configuration** (when you can't set config file path):

- **Base directory**: Leave empty
- **Build command**: `npm install && cd apps/webdesign && npm run build`
- **Publish directory**: `apps/webdesign/dist`
- **Environment variables**: `NODE_VERSION` = `18`
