import { useEffect, useState } from "react";

let ApiKey = "https://www.googleapis.com/books/v1/volumes?q=roman";

function App() {
  const [books, setBooks] = useState([]); 
  const [addedBooks, setAddedBooks] = useState([]);

  useEffect(() => {
    const DataFetch = async () => {
      const res = await fetch(ApiKey);
      const datainfo = await res.json();
      const infoneeded = datainfo.items;

      setBooks(infoneeded); 

      console.log(infoneeded);
    };
    DataFetch();
  }, []);

  const handleBookAdding = (e) => {
    setAddedBooks((prev) => [...prev, e]);
  };

  return (
    <>
      <div>
        <ul>
          {books?.map((book, i) => {
            const Needed = book.volumeInfo.imageLinks.thumbnail; 
            return (
              <div key={i} className="main-div">
                    <img src={Needed} alt="Book Thumbnail" id="Books" />
                    <button onClick={() => handleBookAdding(Needed)}>Click To Add</button>
              </div>
            );
          })}
        </ul>
      </div>
      <div>
        <h1>Added Books</h1>
        <div>
          {addedBooks?.map((image, i) => {
            return <img key={i} src={image} alt="Added Book" />
            })}
        </div>
      </div>
    </>
  );
}

export default App;
