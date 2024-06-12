import { React, useEffect, useState } from 'react';
import { Trash2, Pencil } from 'lucide-react';

export const Data = () => {

  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:3001/api/auth');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const result = await response.json();
        setData(result);
      } catch (error) {
        alert(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const handleClickDelete = async (_id) => {

    const data = {
        "_id": _id
    }

    try {
      const response = await fetch(`http://localhost:3001/api/auth/delete`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      else{
        alert("Deleted");
        window.location.reload();
      }
    } catch (err) {
      console.log(err);
    }
  }

  const handleClickUpdate = async (_id) => {

    const data =
    {
      "_id": _id,
      "data": "update hogya"
    }

    const response = await fetch("http://localhost:3001/api/auth/update", {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      throw new Error('Network response was not ok' + response.statusText);
    }
    else{
      alert("done");
      window.location.reload();
    }

  }

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;


  return (
    <>
      {Array.isArray(data) && data.map(item => (
        <div className="datacontainer" key={item._id}>
          <span>{item.data}</span>
          <button type='button' style={{ backgroundColor: "rgb(167 167 219)", border: 0 }} onClick={() => handleClickDelete(item._id)} >
            <Trash2 id='lucide1' />
          </button>
          <button type='button' style={{ border: 0 }} onClick={() => { handleClickUpdate(item._id) }}>
            <Pencil id='lucide2' />
          </button>
        </div>
      ))}
    </>
  )
}
