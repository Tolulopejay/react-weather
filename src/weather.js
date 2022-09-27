import React from "react";

export default function Search() {

  return (
    <form id="city-search-form" >
      <div class="form-inline">
        <div>
          <input
            id="city-input"
            type="search"
            class="form-control"
            placeholder="Type the city name"
            autoComplete="off"
           
          />
        </div>
        <div>
          <input
            type="submit"
            value="What's the weather?"
            class="form-control btn btn-outline-info shadow-sm"
          ></input>
        </div>
      </div>
    </form>
  );
}
