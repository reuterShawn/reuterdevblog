import rss from '@astrojs/rss';

export async function get(context) {
  const postImportResult = import.meta.glob('./blog/**/*.md', { eager: true });
  const posts = Object.values(postImportResult);

  return rss({
    title: 'Shawn ',
    description: 'Your blog description',
    site: context.site,
    items: posts.map((post) => ({
      title: post.frontmatter.title,
      pubDate: post.frontmatter.pubDate,
      description: post.frontmatter.description,
      link: `/blog/${popst.frontmatter.slug}/`,
    })),
  });
}
