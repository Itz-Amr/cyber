import { CiSearch } from "react-icons/ci";
import styles from "./index.module.css";
import { useState } from "react";

export default function ProductsFilter({ className }) {
  const [products, setProducts] = useState([
    { name: "smartphones", isDone: true },
    { name: "laptops", isDone: false },
    { name: "skincare", isDone: false },
    { name: "sunglasses", isDone: false },
    { name: "motorcycle", isDone: false },
    { name: "lighting", isDone: false },
    { name: "furniture", isDone: false },
    { name: "men shirts", isDone: false },
    { name: "women bags", isDone: false },
  ]);

  return (
    <div className={className} id={styles.productsFilter}>
      <div className={`accordion ${styles.acc}`} id="accordionExample">
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              id={styles.accordionButton}
              className="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
            >
              Categories
            </button>
          </h2>
          <div
            id="collapseOne"
            className="accordion-collapse collapse show"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              <div className="col-12 d-flex flex-column gap-3">
                <div className={styles.searchInput}>
                  <CiSearch className={styles.searchicon} />
                  <input type="search" placeholder="Search" />
                </div>

                <div>
                  {products.map((el, index) => {
                    return (
                      <div
                        key={index}
                        className="d-flex gap-2"
                        id={styles.filter}
                      >
                        <input type="checkbox" id={"ch" + index} />
                        <label htmlFor={"ch" + index}>{el.name}</label>
                      </div>
                    );
                  })}
                </div>

                <div className="col-12">
                  <button className={styles.button}>Apply</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
