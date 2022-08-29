import classes from './FilterCategories.module.css';

const FilterCategories = () => {
   
  return (
    <div className={classes.filterContainer}>
      <div className={classes.category}>
        <h2 style={{paddingTop:"10px"}}>Color</h2>
        <div className={classes.subCategory}>
          <input type="checkbox"/>
          <label>Red</label>
          <br></br>
          <input type="checkbox" />
          <label>Blue</label>
          <br></br>
          <input type="checkbox" />
          <label>Blue</label>
          <br></br>
        </div>
      </div>
      <div className={classes.category}>
        <h2>Gender</h2>
        <div className={classes.subCategory}>
          <input type="checkbox" />
          <label>Men</label>
          <br></br>
          <input type="checkbox" />
          <label>Women</label>
          <br></br>
        </div>
      </div>

      <div className={classes.category}>
        <h2>Price</h2>
        <div className={classes.subCategory}>
          <input type="checkbox" />
          <label>0 - Rs.250</label>
          <br></br>
          <input type="checkbox" />
          <label>Rs.251 - Rs.450</label>
          <br></br>
          <input type="checkbox" />
          <label>Rs.450</label>
          <br></br>
        </div>
      </div>

      <div className={classes.category}>
        <h2>Type</h2>
        <div style={{paddingBottom:"10px"}} className={classes.subCategory}>
          <input type="checkbox" />
          <label>Polo</label>
          <br></br>
          <input type="checkbox" />
          <label>Hoodie</label>
          <br></br>
          <input type="checkbox" />
          <label >Basic</label>
          <br></br>
        </div>
      </div>
    </div>
  );
};

export default FilterCategories;
