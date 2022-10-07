import dynamic from 'next/dynamic'

const FeaturedArticle = dynamic(() => import('./FeaturedArticle'))
const NewsSlider = dynamic(() => import('./NewsSlider'))
const NewsTitle = dynamic(() => import('./NewsTitle'))
const PostContent = dynamic(() => import('./PostContent'))

export { FeaturedArticle, NewsSlider, NewsTitle, PostContent }
