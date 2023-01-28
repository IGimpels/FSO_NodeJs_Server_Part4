const _ = require('lodash')

const dummy = () => {
  return 1
}

const totalLikes = (blogs) => {
  return blogs.reduce((sum, blog) => {
    return sum + blog.likes
  }, 0)
}

const favoriteBlog = (blogs) => {
  return blogs.length === 0 ? null : blogs.find(b => b.likes === Math.max(...blogs.map(b => b.likes)))
}

const mostBlogs = (blogs) => {
  return blogs.length === 0 ? null : _(blogs).groupBy('author').map((v,k) => {
    return {
      author: k,
      blogs: v.length
    }
  }).maxBy('blogs')
}

const mostLikes = (blogs) => {
  return blogs.length === 0 ? null : _(blogs).groupBy('author').map((v,k) => {
    return {
      author: k,
      likes: _.sumBy(v,'likes')
    }
  }).maxBy('likes')
}

module.exports = {
  dummy,
  totalLikes,
  favoriteBlog,
  mostBlogs,
  mostLikes
}