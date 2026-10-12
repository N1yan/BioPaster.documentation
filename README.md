# BioPaster website

Public website for [BioPaster](https://github.com/N1yan/BioPaster).
This repository contains only the static website, not the application or user data.

## Publish

1. Create the public GitHub repository `N1yan/BioPaster.documentation` without initializing a README, license, or `.gitignore`.
2. Push this directory to its `main` branch.
3. In repository **Settings → Pages**, select **Deploy from a branch**, branch **main**, folder **/ (root)**, then save.
4. Wait for the Pages deployment to finish.

Expected URLs after publication:

- English: https://n1yan.github.io/BioPaster.documentation/
- Chinese: https://n1yan.github.io/BioPaster.documentation/zh/
- Sitemap: https://n1yan.github.io/BioPaster.documentation/sitemap.xml

No custom build workflow is needed. `.nojekyll` tells Pages to serve the static files directly.

## Local preview

```bash
python -m http.server 8765 --bind 127.0.0.1
```

Open http://127.0.0.1:8765/ or http://127.0.0.1:8765/zh/.

## Search indexing

After publication, add the homepage as a URL-prefix property in Google Search Console.
Add Google's actual verification meta tag to `index.html`, publish it, and verify ownership.
Submit `sitemap.xml` and request indexing of both language pages.
Bing Webmaster Tools supports a similar verification and sitemap submission process.
Submission does not guarantee indexing.

For this project site, crawlers consult `https://n1yan.github.io/robots.txt`,
not a robots file in the project subdirectory. This repository does not control that root file.

## Maintenance

- `index.html` and `zh/index.html`: English and Chinese content.
- `assets/`: styles, clipboard enhancement, and images.
- `sitemap.xml`: public page URLs.
- Keep canonical, hreflang, Open Graph, structured data, and sitemap URLs consistent when changing the site address.
- Application and installation links intentionally point to `N1yan/BioPaster`, not this website repository.
- The benchmark figure is copied from the application repository; update it together with its evaluation description.

## 中文发布说明

本仓库只存放网站，不包含 BioPaster 程序代码或用户数据。

创建公开的 `N1yan/BioPaster.documentation` 空仓库，推送后进入 **Settings → Pages**，
选择 **Deploy from a branch → main → / (root)** 并保存。
部署成功后再验证 Google Search Console、提交 sitemap，并填写主项目的 Website 链接。
