import { useEffect, useState } from "react";
import { deletePost, getPost } from "../api/PostApi";
import { Form } from "./Form";

const Posts = () => {
  const [data, setData] = useState([]);
  const [updateDataApi, setUpdateDataApi] = useState({});
  const getPostData = async () => {
    const res = await getPost();
    console.log(res);
    setData(res.data);
  };
  const handleDeletePost = async (id) => {
    try {
      const res = await deletePost(id);
      if (res.status == 200) {
        const newUpdatedPost = data.filter((currElem) => {
          return currElem.id != id;
        });
        setData(newUpdatedPost);
      }
    } catch (error) {
      console.log(error);
    }
  };
  const handleUpdatePost = async (curElem) => {
    setUpdateDataApi(curElem);
  };
  useEffect(() => {
    getPostData();
  }, []);
  return (
    <>
      <section className="section-post">
        <Form
          data={data}
          setData={setData}
          updateDataApi={updateDataApi}
          setUpdateDataApi={setUpdateDataApi}
        />
      </section>
      <section className="section-post">
        <ul>
          {data.map((currElem) => {
            return (
              <li key={currElem.id}>
                <p> Title:{currElem.title}</p>
                <p> News: {currElem.body}</p>
                <button
                  onClick={() => {
                    handleUpdatePost(currElem);
                  }}
                >
                  Edit
                </button>
                <button
                  onClick={() => {
                    handleDeletePost(currElem.id);
                  }}
                >
                  Delete
                </button>
              </li>
            );
          })}
        </ul>
      </section>
    </>
  );
};

export default Posts;
