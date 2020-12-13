import React from "react";
import Grid from "@material-ui/core/Grid";
// import { Button } from "@material-ui/core";

export default function Search({ q, handleInputChange, handleFormSubmit }) {
  return (
    <div>
      <Grid container>
        <Grid
          item
          xs={12}
          style={{
            margin: 50,
            marginTop: 0,
            padding: 10,
            backgroundColor: "#f1f6f9",
          }}
        >
          {console.log(q)}
          <h3>Book Search</h3>
          <h5>Book</h5>
          <form>
            <label>
              Name:
              <input
                id="Title"
                type="text"
                value={q}
                placeholder="Harry Potter"
                name="q"
                onChange={handleInputChange}
                required
              />
            </label>
            <button
              onClick={handleFormSubmit}
              type="submit"
            >
              Search
            </button>
          </form>
        </Grid>
      </Grid>
    </div>
  );
}
