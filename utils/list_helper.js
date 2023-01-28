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

module.exports = {
  dummy,
  totalLikes,
  favoriteBlog
}