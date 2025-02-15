export default function ProductTable({ products, onDelete }) {
    return (
      <div>
        <h2>Product List</h2>
        {(
          products.map((product, index) => (
            <div key={index} id = "table" >
              <span>
                <p>{product.name}  - ${product.price}</p>
              </span>
              <button onClick={() => onDelete(index)} id="tablesbtn">
                Delete
              </button>
            </div>
          ))
        )}
      </div>
    );
  }
  