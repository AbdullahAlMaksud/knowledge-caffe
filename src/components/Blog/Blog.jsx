import PropTypes from 'prop-types';
import { CiBookmark } from "react-icons/ci";

const Blog = ({ blog, handleAddToBookmark }) => {
    // console.log(blog)
    const { title, cover, reading_time, author_img, author, posted_date, hashtags } = blog;
    return (
        <div className='mb-20'>
            <div className='h-96 bg-[url(`${cover}`)]'>
                <img className='object-cover h-96 w-full rounded-lg' src={cover} alt={`Cover picture of the: ${title}`} />
            </div>


            <div className='flex justify-between items-center pt-4'>
                <div className='flex gap-6 items-center justify-center'>
                    <img className='w-14 rounded-full' src={author_img} alt="" />
                    <div>
                        <h3 className='text-2xl'>{author}</h3>
                        <p>{posted_date}</p>
                    </div>

                </div>
                <div className='flex items-center'>
                    <span>{reading_time} min read</span>
                    <button onClick={() => handleAddToBookmark(blog)} className='ml-2 text-xl'><CiBookmark></CiBookmark></button>
                </div>
            </div>
            <h2 className='text-4xl'>{title}</h2>
            <p>
                {
                    hashtags.map((hash, idx) => <span key={idx} className='mr-3'><a href="">{hash}</a></span>)
                }
            </p>
        </div>
    );
};

Blog.propTypes = {
    blog: PropTypes.object.isRequired,
    handleAddToBookmark: PropTypes.func.isRequired
}

export default Blog;