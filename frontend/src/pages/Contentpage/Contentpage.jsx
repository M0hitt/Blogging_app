import React, { useState, useEffect, useRef } from "react";
import Blog from "../../components/Blogcard/Blog";
import "./Contentpage.css";
import { BiSolidEditAlt, BiSolidSave } from "react-icons/bi";
import { MdDelete } from "react-icons/md";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

const Contentpage = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [showForm, setShowForm] = useState(false);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const handleTitle = (e) => setTitle(e.target.value);
  const handleContent = (e) => setContent(e.target.value);

  useEffect(() => {
    fetchData();
  }, []);

  //fetch all the data of the content api
  const fetchData = async () => {
    try {
      const response = await axios.get("http://localhost:3232/");
      processData(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  //for deleting the post api
  const HandleDelete = async (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this item?"
    );
    if (!confirmDelete) {
      return;
    }
    try {
      await axios.delete(`http://localhost:3232/posts/${id}`);
      navigate("/");
    } catch (error) {
      console.error("Error deleting data:", error);
    }
  };

  //for updating the data of the posts api
  const handleSubmit = async (e) => {
    e.preventDefault();
    const dataToSend = { title, content };

    try {
      const response = await axios.put(
        `http://localhost:3232/posts/${id}`,
        dataToSend
      );
    } catch (error) {
      console.error("Error:", error);
    }
  };

  //toggle form close and open
  const toggleForm = () => {
    setShowForm(!showForm);
  };

  //set data or response into title and content
  const processData = (data) => {
    const postToEdit = data.find((item) => item.id == id);
    setTitle(postToEdit.title);
    setContent(postToEdit.content);
  };

  return (
    <div className="content">
      <div className="icon">
        <h3>Your Blogs</h3>
        <div>
          <BiSolidEditAlt title="Edit" onClick={toggleForm} />
          <MdDelete title="Delete" onClick={() => HandleDelete(id)} />
        </div>
      </div>
      <Blog title={title} content={content} />

      <div
        className={`slide-form-container ${
          showForm ? "slide-in" : "slide-out"
        }`}
      >
        <form className="slide-form hidden-form" onSubmit={handleSubmit}>
          <div onClick={toggleForm}>
            <button>Update</button>
          </div>
          <h1>Edit Post</h1>
          <label>Edit Title:</label>
          <input type="text" value={title} onChange={handleTitle} required />

          <label>Edit Content:</label>
          <textarea
            rows={6}
            value={content}
            onChange={handleContent}
            required
          />
        </form>
      </div>
    </div>
  );
};

export default Contentpage;
