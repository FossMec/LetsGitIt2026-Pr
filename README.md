# Let's Git It

A Git and GitHub workshop by FOSS MEC. Add your review card by submitting a PR.

## How to Participate

### 1. Fork the Repository

Click the **Fork** button on [https://github.com/FossMec/LetsGitIt2026-Pr](https://github.com/fossmec/lets-git-it)

### 2. Clone Your Fork

```bash
git clone https://github.com/YOUR-USERNAME/LetsGitIt2026-Pr
cd LetsGitIt2026-Pr
```

### 3. Create Your Review File

Create a new file at `src/content/reviews/your-name.json`:

```json
{
  "name": "Your Name",
  "bio": "Your tagline",
  "review": "Your message here",
  "socialLink": "https://github.com/yourusername",
  "image": "your-name.png",
  "color": "#your-lucky-color",
  "insta": "your_instagram"
}
```

**Fields:**

- `name` - Your display name (required)
- `bio` - Short tagline (optional)
- `review` - Your message (required)
- `socialLink` - Link to your profile (optional)
- `image` - Your image filename (optional)
- `color` - Pick your lucky color in hex format like `#ff69b4` (optional)
- `insta` - Instagram username without @ (optional)

### 4. Add Your Image (Optional)

Put your image in `public/your-name.png`

### 5. Commit Your Changes

```bash
git add .
git commit -m "Add review: Your Name"
git push origin main
```

### 6. Open a Pull Request

Go to your fork on GitHub and click **New Pull Request**

### 7. Wait for Approval

We will review and merge your PR

### 8. See Your Card

[Visit](https://lets-git-it-2026.onrender.com) the website to see your review card live
