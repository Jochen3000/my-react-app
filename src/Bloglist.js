const Bloglist = ({ blogs }) => {
    return (
        <div className="bloglist">
            {blogs.map((blog) => (
                <div className="blog-preview" key={blog.id}>
                    <h2>{blog.title}</h2>
                    <p>{blog.body}</p>
                </div>
            ))}
        </div>
    );
}


export default Bloglist;