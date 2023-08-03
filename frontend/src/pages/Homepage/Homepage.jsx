import "./Homepage.css";
import Blog from "../../components/Blogcard/Blog";
import { useState,useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const Homepage = () => {
  const [showForm, setShowForm] = useState(false);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [add, SetAdd] = useState("");
  const [data,setData] = useState("");


  const handleTitle = (e) => {
    setTitle(e.target.value);
    SetAdd("");
  };
  const handleContent = (e) => setContent(e.target.value);

  useEffect(() => {
    fetchData();
  }, [data]);

  const fetchData = async () => {
    try {
      const response = await axios.get("http://localhost:3232/");
      setData(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const timestamp = new Date();
    const dataToSend = { title, content, timestamp };

    try {
      console.log(dataToSend);
      const response = await axios.post(
        "http://localhost:3232/posts",
        dataToSend
      );
      console.log("Response:", response.data);
      setTitle("");
      setContent("");
      SetAdd("Submitted");
    } catch (error) {
      console.error("Error:", error.toJSON());
    }
  };

  const toggleForm = () => {
    setShowForm(!showForm);
  };
  return (
    <div>
      <div className="header">
        <h1 className="h-heading">Your Blogs</h1>
        <div className="h-button" onClick={toggleForm}>
          <button>Add Blog</button>
        </div>
      </div>

      <div className="blogs-data">
        {data && data.map((item) => (
          <Link to={`/Content/${item.id}`} className="link" key={item.id}>
          <Blog title = {item.title} content = {item.content}/>
        </Link>
        ))}
      </div>
      <div
        className={`slide-form-container ${
          showForm ? "slide-in" : "slide-out"
        }`}
      >
        <form className="slide-form hidden-form" onSubmit={handleSubmit}>
          <div onClick={toggleForm}>
            <button>Close</button>
          </div>
          <h1>Create New Post</h1>
          <p className="confo-submit">{add}</p>
          <label>Enter Title:</label>
          <input type="text" value={title} onChange={handleTitle} required />

          <label>Enter Content:</label>
          <textarea
            rows={6}
            value={content}
            onChange={handleContent}
            required
          />

          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default Homepage;
